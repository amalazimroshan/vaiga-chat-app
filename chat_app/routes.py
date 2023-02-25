import requests
from chat_app import app
from flask import render_template, jsonify
from googletrans import Translator
from chat_app.modelss import chatbot_response


@app.route('/')
def home_page():
    return render_template('index.html')


@app.route('/chat/<string:message>', methods=['GET', 'POST'])
def chat(message):
    translator = Translator()
    translated = translator.translate(message, dest='en').text
    return jsonify({"message": "hello "+translated})


@app.route('/res/<string:message>')
def respose(message):
    translator = Translator()
    translated = translator.translate(message, dest='en').text
    data = chatbot_response(translated)
    print(data)
    resposeData = translator.translate(data, dest='ml').text
    return jsonify({"message": data+" "+resposeData})
