import sqlite3
from src.webserver import create_app
from src.domain.users import UsersRepository

database_path = "data/alzhmentor.db"

repositories = {
    "user": UsersRepository(database_path),
}

app = create_app(repositories)

app.run(debug=False, host="0.0.0.0", port="5000")
