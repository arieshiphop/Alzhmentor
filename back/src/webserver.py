from crypt import methods
from flask import Flask, request
from flask_cors import CORS
from src.lib.utils import object_to_json


def create_app(repositories):
    app = Flask(__name__)
    CORS(app)

    @app.route("/", methods=["GET"])
    def hello_world():
        return "Endpoints: /api/users"

    @app.route("/auth/login", methods=["POST"])
    def login():
        body = request.json
        user = repositories["users"].get_by_id(body["user"])

        if user is None or (body["password"]) != user.password:
            return "", 401

        return user.to_dict(), 200

    @app.route("/api/users", methods=["GET"])
    def users_get():
        all_users = repositories["user"].get_users()
        return object_to_json(all_users)

    return app
