import sqlite3


class Log:
    def __init__(self, log_id, id, dinero_ofrecido, dinero_entregado, hora, completado,mes):
        self.log_id = log_id
        self.id = id
        self.dinero_ofrecido = dinero_ofrecido
        self.dinero_entregado = dinero_entregado
        self.hora = hora
        self.completado = completado
        self.mes = mes

    def to_dict(self):
        return {
            "log_id": self.log_id,
            "id": self.id,
            "dinero_ofrecido": self.dinero_ofrecido,
            "dinero_entregado": self.dinero_entregado,
            "hora": self.hora,
            "completado": self.completado,
            "mes":self.mes
        }


class LogsRepository:
    def __init__(self, database_path):
        self.database_path = database_path
        self.init_tables()

    def create_conn(self):
        conn = sqlite3.connect(self.database_path)
        conn.row_factory = sqlite3.Row
        return conn

    def init_tables(self):
        sql = """
            create table if not exists logs (
                log_id varchar,
                id varchar ,
                dinero_ofrecido double,
                dinero_entregado double,
                hora double,
                completado bool,
                mes text
            )
        """
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql)
        conn.commit()

    def get_all(self, user_id):
        sql = """select * from logs where id =:user_id"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql, {"user_id": user_id})

        data = cursor.fetchall()

        logs = [Log(**item) for item in data]
        return logs

    def get_by_id(self, id):
        sql = """SELECT * FROM users logs id=:id"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql, {"id": id})

        data = cursor.fetchone()
        if data is None:
            return None
        else:
            log = Log(**data)

        return log

    def save(self, log):
        sql = """insert into logs (log_id,id,dinero_entregado,dinero_ofrecido,hora,completado,mes) values (
            :log_id,:id,:dinero_entregado,:dinero_ofrecido,:hora,:completado,:mes
        ) """
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(
            sql,

            {**log.to_dict()}
        )
        conn.commit()
