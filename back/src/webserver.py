from flask import Flask, request
from flask_cors import CORS
from src.lib.utils import object_to_json
from src.domain.logs import Log
from src.domain.user import User
from src.services.MailSender import *


def create_app(repositories):
    app = Flask(__name__)
    CORS(app)

    @app.route("/auth/login", methods=["POST"])
    def login():
        body = request.json
        user = repositories["users"].get_by_username(body["user"])
        if user is None or (body["password"]) != user.password:
            return "", 401
        return user.to_dict(), 200

    @ app.route("/api/users", methods=["GET"])
    def users_get_all():
        all_users = repositories["users"].get_all()
        return object_to_json(all_users)

    @ app.route("/api/users", methods=["POST"])
    def register_user():
        body = request.json
        user = User(
            id=body['id'],
            name=body['name'],
            password=body['password'],
            avatar= body['avatar'] if body['avatar'] !='' else "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
            email=body['email'],
            phone=body['phone'],
            bio=body['bio']
        )
        repositories["users"].save(user)

        return user.to_dict(), 200

    @ app.route("/api/users/<id>", methods=["GET"])
    def get_user_by_id(id):
        user = repositories["users"].get_by_id(id)
        return user.to_dict(), 200

    @ app.route("/api/users/<id>", methods=["PUT"])
    def user_put(id):
        body = request.json
        body["id"] = id
        print(body)
        user = User(**body)
        repositories["users"].update_user(user)
        return "", 200

    @ app.route("/api/users/<id>", methods=["DELETE"])
    def user_delete(id):

        repositories["users"].delete_user_by_id(id)
        return "", 200

    @ app.route("/api/users/<userid>/logs", methods=["GET"])
    def get_all_logs(userid):
        all_logs = repositories["logs"].get_all(userid)
        return object_to_json(all_logs)

    @ app.route("/api/users/<userid>/logs", methods=["POST"])
    def user_save_logs(userid):

        body = request.json

        if userid == body['id']:

            log = Log(
                log_id=body['log_id'],
                id=body["id"],
                dinero_ofrecido=str(body['dinero_ofrecido']),
                dinero_entregado=str(body['dinero_entregado']),
                hora=body['hora'],
                completado=body['completado'],
                mes=body['mes'],
                juego=body['juego']
            )
            repositories["logs"].save(log)

            return "", 200
        else:
            return "", 403

    @app.route("/admin/users/<username>/<level>", methods=["POST"])
    def user_update_level(username, level):
        user = repositories["users"].get_by_username(username)
        print("USUARIO",user)
        user.level = level
        repositories["users"].update_user(user)
        return "", 200

    @app.route("/api/users/byName/<username>", methods=["GET"])
    def get_user_by_username(username):
        user = repositories["users"].get_by_username(username)
        if user is None:
            return "", 404
        return user.to_dict(), 200

    return app

    