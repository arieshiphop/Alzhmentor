from src.lib.utils import temp_file

from src.webserver import create_app

from src.domain.user import UserRepository, User


def test_should_register_a_user():
    user_repository = UserRepository(temp_file())
    app = create_app(repositories={"users": user_repository})
    client = app.test_client()

    body = {
        "id": "user-1",
        "name": "Joseba",
        "password": "",
        "avatar": "",
        "email": "",
        "phone": "",
        "bio": ""
    }
    response = client.post(
        "/api/users", json=body
    )
    assert response.status_code == 200
    assert response.json == {
        "id": "user-1",
        "name": "Joseba",
        "avatar": "",
        "email": "",
        "phone": "",
        "bio": ""
    }
