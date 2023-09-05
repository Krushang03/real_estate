from flask import Blueprint, request, jsonify
import jwt
from passlib.hash import bcrypt
from database.re_lo_db import c_user, g_user
from database.create__table import create_tables
import uuid

login_api = Blueprint('login_api', __name__)

create_tables()

@login_api.post('/register')
def register():
    try :
        username = request.json.get('username')
        email = request.json.get('email')
        password = request.json.get('password')
        hash_password = bcrypt.hash(password)
        
        u_id = str(uuid.uuid4())
        
        if(len(username) == 0):
            return ({'message':'Please provide a username'}), 401
        
        
        elif(len(email) == 0):
            return ({'message':'Please provide a email'}), 401
        
        elif(len(password) == 0):
            return ({'message':'Please provide a password'}), 401
        
        else:
            c_user(u_id,username, email, hash_password)
            token = generate_token(u_id)
            return jsonify({'message': 'User created successfully','token': token,'username' : username}), 201
    except:
        return jsonify({'message':'username or email is already used'}), 401


@login_api.post('/login')
def login():
        email = request.json.get('email')
        hash_password = request.json.get('password')
        user = g_user(email)
        u_id =  user[0]
        try:
            print(user)
            if(email==user[2]):
                if bcrypt.verify(hash_password,user[3]):
                    token = generate_token(u_id)
                    return jsonify({'token': token,'username':user[1]}), 200
                else:
                    return jsonify({'message': 'Password does not match'}), 401
            
        except:
            return jsonify({"message":"User does not exist"}), 401




def generate_token(u_id):
    secret_key = 'thisismysecreatekey'

    payload = {'u_id': u_id}
    token = jwt.encode(payload, secret_key, algorithm='HS256')

    return token