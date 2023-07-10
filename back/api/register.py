from flask import Blueprint, request, jsonify
import jwt

from database.db import c_user, g_user,create_table

login_api = Blueprint('login_api', __name__)

create_table()

@login_api.post('/register')
def register():
    try:
        username = request.json.get('username')
        email = request.json.get('email')
        password = request.json.get('password')
        c_user(username, email, password)
        return jsonify({'message': 'User created successfully'}), 201
    except:
        return jsonify({'Message':'Username already exists.'})
        
@login_api.post('/login')
def login():    
    email = request.json.get('email')
    password = request.json.get('password')

    user = g_user(email)
    
    if user[3]  == password:
        token = generate_token(email)
        return jsonify({'token': token, "Username":user[1]})

    return jsonify({'message': 'Invalid credentials'}), 401


def generate_token(username):
    secret_key = 'this is my secrete keyyyy'

    payload = {'username': username}
    token = jwt.encode(payload, secret_key, algorithm='HS256')

    return token

