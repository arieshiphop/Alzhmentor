from src.lib.utils import temp_file

from src.webserver import create_app

from src.domain.user import UserRepository, User


def test_user_should_have_level_and_experiencie():

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
        bio="I am a software developer",
        level ="4",
        experiencie = 2000,

    )
    josu = User(
        id="user-2",
        name="Josu",
        avatar="https://avatars0.githubusercontent.com/u/1234?v=4",
        email="asdasd@gmail.com",
        phone="+5511999999999",
        bio="I am a software developer",
        level ="1",
        experiencie = 250,
    )

    user_repository.save(joseba)
    user_repository.save(josu)

    # ACT (when)
    response = client.get("/api/users")

    res = response.json
    assert res[0]["id"] == "user-1"
    assert res[0]["name"] == "Joseba"
    assert res[0]["avatar"] == "https://avatars0.githubusercontent.com/u/1234?v=4"
    assert res[0]["email"] == "asd@gmail.com"
    assert res[0]["phone"] == "+5511999999999"
    assert res[0]["bio"] == "I am a software developer"
    assert res[0]["level"] == "4"
    assert res[0]["experiencie"] == "2000"

    assert res[1]["id"] == "user-2"
    assert res[1]["name"] == "Josu"
    assert res[1]["avatar"] == "https://avatars0.githubusercontent.com/u/1234?v=4"
    assert res[1]["email"] == "asdasd@gmail.com"
    assert res[1]["phone"] == "+5511999999999"
    assert res[1]["bio"] == "I am a software developer"
    assert res[1]["level"] == "1"
    assert res[1]["experiencie"] == "250"
