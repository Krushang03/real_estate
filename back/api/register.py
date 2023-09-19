from flask import Blueprint, request, jsonify
import jwt
from passlib.hash import bcrypt
from database.re_lo_db import *
from database.create__table import *
import uuid

login_api = Blueprint('login_api', __name__)

create_tables()

#token to u_id function
def tokan_to_u_id(token):
    dt = jwt.decode(token, key='thisismysecreatekey',
                            algorithms=['HS256', ])
    u_id = dt["u_id"]
    return u_id

@login_api.post('/register')
def register():
    # try :
        username = request.json.get('username')
        email = request.json.get('email')
        password = request.json.get('password')
        mobile_no = request.json.get('mobile_no')
        photo= request.json.get('photo')
        hash_password = bcrypt.hash(password)
        
        u_id = str(uuid.uuid4())
        
        if(len(username) == 0):
            return ({'message':'Please provide a username'}), 401
        
        
        elif(len(email) == 0):
            return ({'message':'Please provide a email'}), 401
        
        elif(len(password) == 0):
            return ({'message':'Please provide a password'}), 401
        
        # else:
        c_user(u_id,username, email, hash_password, mobile_no, photo)
        token = generate_token(u_id)
        return jsonify({'message': 'User created successfully','token': token,'username' : username}), 201
    # except:
    #     return jsonify({'message':'email is already used'}), 401

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






#updating users information
@login_api.patch('/update_user_data')
def data_update():
    # try:
        token = request.headers.get("Authorization")
        u_id = tokan_to_u_id(token)
        data = get_user_by_uid(u_id)
        photo = request.json.get("photo")
        username = request.json.get("username")
        email = request.json.get("email")
        mobile_no = request.json.get("mobile_no")
        if not username:
            username = (data[1]) 
        if not email:
            email = (data[2])
        if not mobile_no:
            mobile_no = (data[4])
        if not photo:
            photo = (data[5])
        
            
        
            
        
        update_user_details(u_id, username, email,  mobile_no, photo)
        return jsonify({"message":"User details has been updated"}), 200
    # except:
    #     return jsonify({"message":"somthing went wrong"})




#change user password
@login_api.patch('/change_user_password')
def change_password_user():
    token = request.headers.get("Authorization")
    u_id = tokan_to_u_id(token)
    p = request.json.get("password")
    password = bcrypt.hash(p)
    change_user_password(u_id, password)
    return jsonify({"message":"Your password has changed successfully"})






#Geting user data
@login_api.get('/user_data')
def user_data():
    token = request.headers.get("Authorization")
    u_id = tokan_to_u_id(token)
    d = data_of_user(u_id)
    data = {"Username":d[1],"email":d[2],"mobile_no":d[4],"photo":d[5]}
    return data