from flask import Flask, render_template, request, redirect
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email
from flask_bootstrap import Bootstrap
from flask import Flask, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, login_user, logout_user
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash



login_manager = LoginManager()
app = Flask(__name__)
app.secret_key = "secret"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
Bootstrap(app)
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)

db = SQLAlchemy()
db.init_app(app)

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String,nullable=False)
    password = db.Column(db.String)
    email = db.Column(db.String)

with app.app_context():
    db.create_all()

class RegisterForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Register me in')

class LoginForm(FlaskForm):
    
    email = StringField('Email', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Log me in')

@app.route("/")
def home():
    form = LoginForm()
    return render_template("index.html", form=form)

@app.route("/register", methods=['POST', 'GET'])
def register():
    form = RegisterForm()
    if request.method == 'POST':
        user_email = User.query.filter_by(email=form.email.data).first()
        user_name = User.query.filter_by(username=form.username.data).first()
        if user_email:
            flash("This email is already taken!")
            return redirect(url_for('register'))
        if user_name:
            flash("This username has been already taken!")
            return redirect(url_for('register'))
        password = generate_password_hash(form.password.data)
        user = User(username=form.username.data, password=password, email=form.email.data)
        login_user(user)
        db.session.add(user)
        db.session.commit()
        flash("You have been registered successfully!")
        return render_template("index.html")
    return render_template("register.html", form=form)

@app.route("/login", methods=['POST', 'GET'])
def login():
    form = LoginForm()
    if request.method == 'POST':
        user = User.query.filter_by(email=form.email.data).first()
        if not user:
            flash("There is no account associated with this email!")
            return redirect(url_for('login'))
        elif user and check_password_hash(user.password, form.password.data):
            login_user(user)
            flash("You have been successfully signed in!")
            return redirect(url_for('home'))  
        elif user and not(check_password_hash(user.password, form.password.data)):
            flash("Ugh, wrong password!")   
            return redirect(url_for('login'))  
    return render_template("login.html", form=form)

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('home'))

@app.route("/params")
def params():
    return '<h1>HELLO</h1>'

if __name__ == "__main__":
    app.run()