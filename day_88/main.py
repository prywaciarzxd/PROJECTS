from flask import Flask, render_template, request, url_for, redirect
from flask_ckeditor import CKEditor
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

ckeditor = CKEditor()
ckeditor.init_app(app)
db = SQLAlchemy()
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
db.init_app(app)

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String, nullable=False)
    
with app.app_context():
    db.create_all()

@app.route("/", methods=['POST', 'GET'])
def home():
    if request.method == 'POST':
        text = request.form['task-to-do']
        task = Task(text=text)
        db.session.add(task)
        db.session.commit()
        return redirect(url_for('home'))
    tasks = Task.query.all()
    if tasks:
        return render_template("header.html", tasks=tasks)
    else:
        return render_template("header.html")

@app.route("/delete/<int:task_id>", methods=['POST', 'GET'])
def delete(task_id):
   
    task = Task.query.filter_by(id=task_id).first()
    db.session.delete(task)
    db.session.commit()
    return redirect(url_for('home'))



if __name__ == "__main__":
    app.run()