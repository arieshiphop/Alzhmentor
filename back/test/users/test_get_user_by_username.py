from src.lib.utils import temp_file

from src.webserver import create_app

from src.domain.user import UserRepository, User


def test_get_user_by_username():
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
        level="1",  
        experiencie="200"
    )
    user_repository.save(joseba)
    response = client.get("/api/users/byName/Joseba")
    assert response.json["id"] == "user-1"
    assert response.json["name"] == "Joseba"
    assert response.json["avatar"] == "https://avatars0.githubusercontent.com/u/1234?v=4"
    assert response.json["email"] == ""
    assert response.json["phone"] == ""
    assert response.json["bio"] == ""
    assert response.json["level"] == "1"
    assert response.json["experiencie"] == "200"

def test_get_404_if_user_is_none():
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
        level="1",  
        experiencie="200"
    )
    user_repository.save(joseba)
    response = client.get("/api/users/byName/jOsebitaReXulooN2011")
    assert response.status_code == 404