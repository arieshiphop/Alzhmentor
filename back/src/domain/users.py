import sqlite3


class User:
    def __init__(self, id, user_name, log_id):
        self.id = id
        self.user_name = user_name
        self.log_id = log_id

    def to_dict(self):
        return {"id": self.id, "user_name": self.user_name, "log_id": self.log_id}


class UsersRepository:
    def __init__(self, database_path):
        self.database_path = database_path
        self.init_tables()

    def create_conn(self):
        conn = sqlite3.connect(self.database_path)
        conn.row_factory = sqlite3.Row
        return conn

    def init_tables(self):
        sql = """
            create table if not exists users (
                id varchar PRIMARY KEY,
                user_name text,
                log_id text                
                )
                """
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql)
        conn.commit()

    def get_users(self):
        sql = """select * from users"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql)

        data = cursor.fetchall()
        users = [User(**item) for item in data]
        return users

    def save(self, user):
        sql = """insert into users (id,user_name,log_id) values (:id, :user_name,:log_id) """
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql, user.to_dict())

        conn.commit()
