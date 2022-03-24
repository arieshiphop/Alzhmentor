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
    log_1 = Log(log_id=44, id='user-tomas', dinero_ofrecido=27.33,
                dinero_entregado=29.12, hora=22.31, completado=True)
    user_repository.save(tomas)
    logs_repository.save(log_1)

    return client


def test_log_should_be_connected_to_user():
    client = setup()

    body = {
        "log_id": '44',
        "id": "user-tomas",
        "dinero_ofrecido": 27.33,
        "dinero_entregado": 29.12,
        "hora": 22.31,
        "completado": True
    }
    response = client.get(
        "/api/users/logs", json=body
    )

    response_get = client.get(
        "/api/users/logs"
    )
    assert response.status_code == 200
    assert response_get.json == [
        {"log_id": '44',
         "id": "user-tomas",
         "dinero_ofrecido": 27.33,
         "dinero_entregado": 29.12,
         "hora": 22.31,
         "completado": 1}
    ]
