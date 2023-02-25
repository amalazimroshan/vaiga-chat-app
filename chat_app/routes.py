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


@app.route('/<string:message>')
def respose(message):

    #translating user query to english
    translator = Translator()
    translated = translator.translate(message, dest='en').text
    print(translated)

    #checking user query for specific words
    # match = False
    # spliced = translated.lower().split()
    # key_words = ["tool","fertilizer","device"]
    # for word in spliced:
    #     for key in key_words:
    #         if word == key :
    #             match = True

    match = match_keywords(translated)

    if match :
        return jsonify({"message":"you can buy tools from ......"})
    #else produce result and translate back to english
    else :
        data = chatbot_response(translated)
        print(data)
        resposeData = translator.translate(data, dest='ml').text
        return jsonify({"message": " "+resposeData})


#if match found return 
def match_keywords(query):
    match = False
    spliced = query.lower().split()
    key_words = ["tool","tools","fertilizer","device"]
    for word in spliced:
        for key in key_words:
            if word == key :
                match = True
    
    return match