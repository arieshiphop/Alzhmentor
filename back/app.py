import sqlite3
from src.webserver import create_app

from src.domain.user import UserRepository
from src.domain.logs import LogsRepository

database_path = "data/database.db"

repositories = {
    "logs": LogsRepository(database_path),
    "users": UserRepository(database_path),
}

app = create_app(repositories)
if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
