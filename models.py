# models.py
import os
import sqlite3
from datetime import datetime

# Get the absolute path of the current script
script_dir = os.path.dirname(os.path.realpath(__file__))
# Join the script directory with the database file name
db_path = os.path.join(script_dir, 'api_cache.db')


def db_operation(sql, params=()):
    conn = sqlite3.connect(db_path)
    c = conn.cursor()
    c.execute(sql, params)
    if sql.startswith('SELECT'):
        result = c.fetchone()
    else:
        conn.commit()
        result = None
    conn.close()
    return result


def init_db():
    db_operation("CREATE TABLE IF NOT EXISTS cache (symbol text, timestamp text, data text)")


def insert_data(symbol, data):
    db_operation("INSERT INTO cache VALUES (?, ?, ?)", (symbol, str(datetime.now()), data))


def get_data_from_db(symbol):
    return db_operation("SELECT * FROM cache WHERE symbol=?", (symbol,))

