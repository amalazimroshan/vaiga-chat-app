import requests
from chat_app import app
from flask import render_template, jsonify
from googletrans import Translator


@app.route('/')
def home_page():
    return render_template('index.html')


@app.route('/chat/<string:message>', methods=['GET', 'POST'])
def chat(message):
    translator = Translator()
    translated = translator.translate(message, dest='en').text
    return jsonify({"message": "hello "+translated})


#test routes
#@app.route('/<string:query>',methods=['GET','POST'])
#def fetch_result(query):
#    translator = Translator()
#    translated_query = translator.translate(query,dest='en').text
#    print(translated)
#    url = 'https://dummyjson.com/products/search?q={translated_query}'
#    response = requests.get(url)
#    data = response.json()
#    #translated_response = translator.translate(data)
#    #return jsonify("response":""+translated_response)
#    return jsonify(data)


