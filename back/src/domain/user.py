import sqlite3


class User:
    def __init__(self, id, name, avatar="https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png", email="", phone="", bio="", password="NO-PASSWORD", level="0", experiencie="0"):
        self.id = id
        self.name = name
        self.avatar = avatar
        self.password = password
        self.email = email
        self.phone = phone
        self.bio = bio
        self.level = level
        self.experiencie = experiencie

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone,
            "bio": self.bio,
            "avatar": self.avatar,
            "level": self.level,
            "experiencie": self.experiencie
        }


class UserRepository:
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
                id varchar primary key,
                name varchar,
                password varchar,
                avatar varchar,
                email varchar,
                phone varchar,
                bio varchar,
                level varchar,
                experiencie varchar,
                FOREIGN KEY (id) REFERENCES logs(id)
            );

        """
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql)
        conn.commit()

    def get_all(self):
        sql = """select * from users"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql)

        data = cursor.fetchall()

        users = [User(**item) for item in data]
        return users

    def get_by_username(self, name):
        sql = """SELECT * FROM users WHERE name=:name"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql, {"name": name})

        data = cursor.fetchone()
        if data is None:
            return None
        else:
            user = User(**data)
        return user

    def get_by_id(self, id):
        sql = """SELECT * FROM users WHERE id=:id"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql, {"id": id})

        data = cursor.fetchone()
        if data is None:
            return None
        else:
            user = User(**data)
        return user

    def save(self, user):
        sql = """insert OR REPLACE into users (id, name,password,avatar,email,phone,bio,level,experiencie) values (
            :id, :name, :password, :avatar, :email, :phone, :bio, :level, :experiencie
        ) """
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(
            sql, {"id": user.id, "name": user.name, "password": user.password, "avatar": user.avatar, "email": user.email, "phone": user.phone, "bio": user.bio, "level": user.level, "experiencie": user.experiencie})
        conn.commit()

    def update_user(self, user):
        name = user.name
        sql = """UPDATE users SET level=:level,experiencie=:experiencie WHERE name=:name"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(
            sql, {"name": user.name, "level": user.level, "experiencie": user.experiencie})
        conn.commit()

    def delete_user_by_id(self, id):
        sql = """DELETE FROM users WHERE id=:id"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql, {"id": id})
        conn.commit()
