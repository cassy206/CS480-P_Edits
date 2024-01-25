# app.py
from flask import Flask
from views import main
from error_handlers import errors
import models


def create_app():
    app = Flask(__name__)
    app.register_blueprint(main)
    app.register_blueprint(errors)
    models.init_db()
    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
