from src.lib.utils import temp_file

from src.webserver import create_app

from src.domain.user import UserRepository, User


def test_should_return_empty_list_of_users():
    user_repository = UserRepository(temp_file())
    app = create_app(repositories={"users": user_repository})
    client = app.test_client()

    response = client.get("/api/users")

    assert response.json == []


def test_should_return_list_of_users():

    # ARRANGE (given)

    user_repository = UserRepository(temp_file())
    app = create_app(repositories={"users": user_repository})
    client = app.test_client()

    joseba = User(
        id="user-1",
        name="Joseba",
        avatar="https://avatars0.githubusercontent.com/u/1234?v=4",
        email="asd@gmail.com",
        phone="+5511999999999",
        bio="I am a software developer"
    )
    josu = User(
        id="user-2",
        name="Josu",
        avatar="https://avatars0.githubusercontent.com/u/1234?v=4",
        email="asdasd@gmail.com",
        phone="+5511999999999",
        bio="I am a software developer"
    )

    user_repository.save(joseba)
    user_repository.save(josu)

    # ACT (when)
    response = client.get("/api/users")

    # ASSERT (then)
    assert response.json == [
        {
            "id": "user-1",
            "name": "Joseba",
            "avatar": "https://avatars0.githubusercontent.com/u/1234?v=4",
            "email": "asd@gmail.com",
            "phone": "+5511999999999",
            "bio": "I am a software developer"
        },
        {
            "id": "user-2",
            "name": "Josu",
            "avatar": "https://avatars0.githubusercontent.com/u/1234?v=4",
            "email": "asdasd@gmail.com",
            "phone": "+5511999999999",
            "bio": "I am a software developer"
        }
    ]
