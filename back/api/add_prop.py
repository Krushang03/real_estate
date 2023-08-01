from flask import Blueprint, jsonify, request
from database.create__table import create_tables
from database.add_pro_db import a_prop
import uuid
ad_prop = Blueprint('ad_prop', __name__)
create_tables()

@ad_prop.post('/add_prop')
def add_prop():
    Holder_name = request.json.get("Holder_name")
    mobile_no = request.json.get("mobile_no")
    prop_size = request.json.get("prop_size")
    price = request.json.get("price")
    house_no= request.json.get("house_no")
    area_name= request.json.get("area_name")
    state_name= request.json.get("state_name")
    city_name= request.json.get("city_name")
    pin_code= request.json.get("pin_code")
    furniture= request.json.get("furniture")
    photo = request.json.get("photo")
    bhk = request.json.get("bhk")
    dis = request.json.get("dis")
    sell_or_rent = request.json.get("sell_or_rent")
    u_id = str(uuid.uuid4())
    print(photo)
    
    
    try:
        if(Holder_name=="" or mobile_no=="" or len(house_no)==0 or  len(area_name)==0 or len(state_name)==0 or len(city_name)==0 or pin_code==""   or len(photo)==0 or len(bhk)==0 or len(prop_size)==0 or len(price)==0 or len(furniture)==0 or len(dis)==0):
            return jsonify({'message':'Some fields remain empty'}),401
        else:
            a_prop(u_id, Holder_name, mobile_no, house_no, area_name, state_name, city_name, sell_or_rent, pin_code, photo, bhk, prop_size, price, furniture, dis)
            return jsonify({'U_id':u_id, 'Holder name':Holder_name,'message':'Property added'}), 200
    except:
        return jsonify({'message':'Something went wrong'}), 401