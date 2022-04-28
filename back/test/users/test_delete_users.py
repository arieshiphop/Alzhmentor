from src.lib.utils import temp_file
from src.webserver import create_app
from src.domain.user import UserRepository, User


def test_should_return_notes_deleted():
    user_repository = UserRepository(temp_file())
    app = create_app(repositories={"users": user_repository})
    client = app.test_client()

    joseba = User(
        id="user-1",
        name="Joseba",
        avatar="https://avatars0.githubusercontent.com/u/1234?v=4",
        email="",
        phone="",
        bio="",
        level="999",
        experiencie="0"
    )
    josu = User(
        id="user-2",
        name="Josu",
        avatar="https://avatars0.githubusercontent.com/u/1234?v=4",
        email="",
        phone="",
        bio="",
        level="2",
        experiencie="0"
    )
    user_repository.save(joseba)
    user_repository.save(josu)
    user_deleted = client.delete("/api/users/user-2")
    response = client.get("/api/users")

    assert response.json == [{"id": "user-1", "name": "Joseba", "avatar": "https://avatars0.githubusercontent.com/u/1234?v=4",
                              "email": "", "phone": "", "bio": "", "level": "999", "experiencie": "0"}]
