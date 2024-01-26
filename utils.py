# utils.py
import os
import requests
import json
from datetime import datetime, timedelta
import models


def get_data(symbol, url):
    FMP_API_KEY = os.getenv('FMP_API_KEY')

    # First, try to get data from the database
    data = models.get_data_from_db(symbol)
    if data is not None:
        timestamp, data_str = data[1], data[2]
        data = json.loads(data_str)  # Convert JSON string back to dict
        print(data)
        if datetime.now() - datetime.strptime(timestamp, '%Y-%m-%d %H:%M:%S.%f') < timedelta(hours=24):
            return data

    # If data is not in the database, or it's older than 24 hours, make a new request
    r = requests.get(url, timeout=5)
    data = r.json()
    data_str = json.dumps(data)  # Convert dict to JSON string

    # Save the new data to the database
    models.insert_data(symbol, data_str)

    return data
