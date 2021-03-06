from src.domain.user import UserRepository, User
import sys

sys.path.insert(0, "")


database_path = "data/database.db"


# Users

user_repository = UserRepository(database_path)
user_repository.save(User(id="user-1", name="Tomás", password="el mejor",
                     avatar="https://avatars2.githubusercontent.com/u/527058?v=4", email="a@gmail.com", phone="123456789", bio="Hola"))
user_repository.save(User(id="user-2", name="Asier", password="no tan mejor",
                     avatar="https://avatars2.githubusercontent.com/u/527058?v=4", email="asd@gmail.com", phone="123456789", bio="Hola"))
user_repository.save(User(id="user-3", name="iker", password="iker", avatar="https://yt3.ggpht.com/ytc/AKedOLT4UiE45nkLTf45Q8Dud9I-w1hiVQXPgmKPz7pE=s900-c-k-c0x00ffffff-no-rj",
                     email="ikersanchez.contacto@gmail.com", phone="691755353", bio="Soy Iker Sánchez de Bilbao y soy el dueño y administrador de la aplicación", level="999", experiencie="99999"))

print("Base de datos inicializada en " + database_path)
