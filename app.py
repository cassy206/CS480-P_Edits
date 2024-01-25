# app.py
from flask import Flask
from error_handlers import errors
from views import main
import models


def create_app():
    app = Flask(__name__)
    app.register_blueprint(main)
    app.register_blueprint(errors)
    models.init_db()
    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
