from chat_app import app
from flask import render_template , jsonify



@app.route('/')
def home_page():
    return render_template('index.html')

#@app.routes('/chat')

