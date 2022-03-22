from flask import Flask
from flask_cors import CORS
from src.lib.utils import object_to_json


def create_app(repositories):
    app = Flask(__name__)
    CORS(app)

    @app.route("/", methods=["GET"])
    def hello_world():
        return "Endpoints: /api/users"

    @app.route("/api/users", methods=["GET"])
    def users_get():
        all_users = repositories["user"].get_users()
        return object_to_json(all_users)

    return app
