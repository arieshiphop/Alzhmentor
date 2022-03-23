import sys

sys.path.insert(0, "")

from src.domain.users import UsersRepository, User

# from src.domain.log import LogRepository, Log

database_path = "data/alzhmentor.db"


federico = User(id="user-1", user_name="fede_hola", password="b", log_id="user-1")

josu = User(id="user-2", user_name="Josu hello", password="a", log_id="user-2")

user_repository = UsersRepository(database_path)
user_repository.save(federico)
user_repository.save(josu)
