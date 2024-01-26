# views.py
import json
import os
import random
from flask import Blueprint, render_template, redirect, url_for, request
from utils import get_data

main = Blueprint('main', __name__)


@main.route("/")
def default():
    return redirect(url_for("main.dashboard"))


@main.route("/dashboard")
def dashboard():
    num = random.randint(1,10)
    return render_template("dashboard.html", num=num)


@main.route("/stock")
def stock():
    AV_API_KEY = os.getenv('AV_API_KEY')
    symbol = request.args.get('symbol')
    stock_url = f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={symbol}&apikey={AV_API_KEY}"
    data = get_data(symbol, stock_url)
    chart_data = [
        {
            'time': date,
            'value': float(values['4. close']),
        }
        for date, values in data['Time Series (Daily)'].items()
    ]
    chart_data.reverse()
    return render_template("stock.html", data=json.dumps(chart_data))



