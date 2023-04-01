from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/quiz1")
def quiz1():
    return render_template("quiz1.html")

if __name__ == "__main__":
    app.run()