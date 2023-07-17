from flask import Blueprint, request, jsonify
import jwt
from passlib.hash import bcrypt
from database.db import c_user, g_user, create_tables
import uuid

login_api = Blueprint('login_api', __name__)

create_tables()

@login_api.post('/register')
def register():
    # try :
        username = request.json.get('username')
        email = request.json.get('email')
        password = request.json.get('password')
        hash_password = bcrypt.hash(password)
        
        u_id = str(uuid.uuid4())
    
        if(len(username) == 0):
            return ({'Message':'Please provide a username'})
        
        elif(len(email) == 0):
            return ({'Message':'Please provide a email'})
        
        elif(len(password) == 0):
            return ({'Message':'Please provide a password'})
        
        else:
            c_user(u_id,username, email, hash_password)
            token = generate_token(email)
            return jsonify({'message': 'User created successfully','taken': token,'username' : username}), 201
    # except:
    #     return jsonify({'Message':'username or email is already used'})


@login_api.post('/login')
def login():
    email = request.json.get('email')
    hash_password = request.json.get('password')

    user = g_user(email)
    print(user[3])
    if bcrypt.verify(hash_password,user[3]):
        token = generate_token(email)
        return jsonify({'token': token,'username':user[1]})

    return jsonify({'message': 'Invalid credentials'}), 401


def generate_token(email):
    secret_key = 'thisismysecreatekey'

    payload = {'email': email}
    token = jwt.encode(payload, secret_key, algorithm='HS256')

    return token