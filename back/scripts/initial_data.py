import sys

sys.path.insert(0, "")


from src.domain.info import InfoRepository, Info
from src.domain.contact import ContactRepository, Contact
from src.domain.user import UserRepository, User

database_path = "data/database.db"

info_repository = InfoRepository(database_path)
info_repository.save(Info(app_name="contact-list"))

# Users

user_repository = UserRepository(database_path)
user_repository.save(User(id="user-1", name="Tomás", password="el mejor"))
user_repository.save(User(id="user-2", name="Asier", password="no tan mejor"))

# Contacts

joseba = Contact(
    id="contact-1",
    user_id="user-1",
    first_name="Joseba",
    last_name="Ercilla",
    email="joseba@example.com",
    phone="555666777",
)
josu = Contact(
    id="contact-2",
    user_id="user-2",
    first_name="Josu",
    last_name="Oyanguren",
    email="josu@example.com",
    phone="555777999",
)

contact_repository = ContactRepository(database_path)
contact_repository.save(joseba)
contact_repository.save(josu)


print("Base de datos inicializada en " + database_path)
