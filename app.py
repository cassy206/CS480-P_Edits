import random

from flask import Flask, render_template, redirect, url_for
from logging import FileHandler, WARNING

app = Flask(__name__)


# All routes are defined below
@app.route("/")
def default():
    return redirect(url_for("dashboard"))


@app.route("/dashboard")
def dashboard():
    num = random.randint(1,10)
    return render_template("dashboard.html", num=num)


# Error handlers are defined here
@app.errorhandler(404)
def page_not_found(e):
    return render_template("404page.html")


# change before app is in production
DEBUG = True

# This code snippet works only when the debug mode is False that is only on production.
# This code adds the internal server error when it is on production to the "errorlog.txt" file.
if not app.debug:
    file_handler = FileHandler("errorlog.txt")
    file_handler.setLevel(WARNING)
    app.logger.addHandler(file_handler)

# Runs only when the file run directly without importing it
if __name__ == "__main__":
    app.run()