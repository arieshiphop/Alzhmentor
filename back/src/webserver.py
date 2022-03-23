from flask import Flask, request
from flask_cors import CORS
from src.lib.utils import object_to_json
from src.domain.user import UserRepository
from src.domain.logs import Log

def create_app(repositories):
    app = Flask(__name__)
    CORS(app)

    @app.route("/auth/login", methods=["POST"])
    def login():
        body = request.json
        user = repositories["users"].get_by_id(body["user"])

        if user is None or (body["password"]) != user.password:
            return "", 401

        return user.to_dict(), 200

    @app.route("/", methods=["GET"])
    def hello_world():
        return "...magic!"


    @app.route("/api/users", methods=["GET"])
    def users_get_all():
        all_users = repositories["users"].get_all()
        return object_to_json(all_users)

    @app.route("/api/users/logs", methods=["GET"])
    def get_all_logs():
        all_logs = repositories["logs"].get_all()
        return object_to_json(all_logs)

    @app.route("/api/users/logs", methods=["POST"])
    def user_save_logs():

        body = request.json
        log = Log(
            log_id=body['log_id'],
            id=body["id"],
            dinero_ofrecido=body['dinero_ofrecido'],
            dinero_entregado=body['dinero_entregado'],
            hora=body['hora'],
            completado=body['completado'])
            
        repositories["logs"].save(log)

        return ""


    return app
