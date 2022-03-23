import sys

sys.path.insert(0, "")


from src.domain.user import UserRepository, User

from src.domain.logs import LogsRepository,Log
database_path = "data/database.db"


# Users

user_repository = UserRepository(database_path)
user_repository.save(User(id="user-1", name="Tomás", password="el mejor"))
user_repository.save(User(id="user-2", name="Asier", password="no tan mejor"))

log_repository = LogsRepository(database_path)
log_repository.save(Log(log_id=44,id='user-tomas',dinero_ofrecido=27.33,dinero_entregado=29.12,hora=22.31,completado=True))
print("Base de datos inicializada en " + database_path)