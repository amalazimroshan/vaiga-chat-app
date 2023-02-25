from chat_app import app
from flask import render_template , jsonify
from googletrans import Translator


@app.route('/')
def home_page():
    return render_template('index.html')

@app.route('/chat/<string:message>',methods=['GET','POST'])
def chat(message):
    translator = Translator()
    translated = translator.translate(message,dest='en').text 
    return jsonify({"message":""+translated})

