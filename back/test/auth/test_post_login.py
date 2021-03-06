from src.lib.utils import temp_file

from src.webserver import create_app

from src.domain.user import UserRepository, User


def setup():
    user_repository = UserRepository(temp_file())
    app = create_app(repositories={"users": user_repository})
    client = app.test_client()

    tomas = User(id='user-tomas', name='tomas', password='el mejor',
                 avatar="", email="", phone="", bio="")
    user_repository.save(tomas)

    return client


def test_should_validate_login():
    client = setup()

    body = {
        "user": 'tomas',
        'password': 'el mejor'
    }
    response = client.post(
        "/auth/login", json=body
    )
    res = response.json
    assert res['id'] == 'user-tomas'
    assert res['name'] == 'tomas'
    assert res['avatar'] == ''
    assert res['email'] == ''
    assert res['phone'] == ''
    assert res['bio'] == ''
    assert res['level'] == '0'
    assert res['experiencie'] == "0"
    assert response.status_code == 200



def test_should_fail_if_invalid_password():
    client = setup()

    body = {
        "user": 'tomas',
        'password': 'el peor'
    }
    response = client.post(
        "/auth/login", json=body
    )

    assert response.status_code == 401

def test_should_fail_if_user_not_exists():
    client = setup()

    body = {
        "user": 'user-not-exists',
        'password': 'el mediano'
    }
    response = client.post(
        "/auth/login", json=body
    )

    assert response.status_code == 401
