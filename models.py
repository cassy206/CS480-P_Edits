# models.py
import sqlite3
from datetime import datetime


def init_db():
    print("Initializing database...")
    conn = sqlite3.connect('api_cache.db')
    c = conn.cursor()
    c.execute("CREATE TABLE IF NOT EXISTS cache (symbol text, timestamp text, data text)")
    conn.commit()
    conn.close()
    print("Database initialized.")



def insert_data(symbol, data):
    conn = sqlite3.connect('api_cache.db')
    c = conn.cursor()
    c.execute("INSERT INTO cache VALUES (?, ?, ?)", (symbol, str(datetime.now()), data))
    conn.commit()
    conn.close()


def get_data_from_db(symbol):
    conn = sqlite3.connect('api_cache.db')
    c = conn.cursor()
    c.execute("SELECT * FROM cache WHERE symbol=?", (symbol,))
    result = c.fetchone()
    conn.close()
    return result
