from src.lib.utils import temp_file

from src.webserver import create_app

from src.domain.user import UserRepository, User
from src.domain.logs import LogsRepository, Log


def setup():
    user_repository = UserRepository(temp_file())
    logs_repository = LogsRepository(temp_file())
    app = create_app(
        repositories={"users": user_repository, "logs": logs_repository})
    client = app.test_client()

    tomas = User(id='user-tomas', name='Tomás', password='el mejor')
    user_repository.save(tomas)

    return client


def test_log_should_be_connected_to_user():
    client = setup()

    body = {
        "log_id": '44',
        "id": "user-tomas",
        "dinero_ofrecido": 27.33,
        "dinero_entregado": 29.12,
        "hora": 22.31,
        "completado": True,
        "mes":"Enero"
    }
    response = client.post(
        "/api/users/user-tomas/logs", json=body
    )

    response_get = client.get(
        "/api/users/user-tomas/logs"
    )
    assert response.status_code == 200
    assert response_get.json == [
        {"log_id": '44',
         "id": "user-tomas",
         "dinero_ofrecido": 27.33,
         "dinero_entregado": 29.12,
         "hora": 22.31,
         "completado": 1,
         "mes":"Enero"}
    ]


def test_user_can_not_post_other_user_logs():
    client = setup()

    body = {
        "log_id": '44',
        "id": "user-asier",
        "dinero_ofrecido": 27.33,
        "dinero_entregado": 29.12,
        "hora": 22.31,
        "completado": True,
        "mes":"Enero"
    }
    response = client.post(
        "/api/users/user-tomas/logs", json=body
    )

    response_get = client.get(
        "/api/users/user-tomas/logs"
    )
    assert response_get.json == []
