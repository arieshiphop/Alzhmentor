import sys

sys.path.insert(0, "")


from src.domain.user import UserRepository, User

database_path = "data/database.db"


# Users

user_repository = UserRepository(database_path)
user_repository.save(User(id="user-1", name="Tomás", password="el mejor"))
user_repository.save(User(id="user-2", name="Asier", password="no tan mejor"))

print("Base de datos inicializada en " + database_path)
