from flask import Blueprint, jsonify, request
from database.create__table import create_tables
from database.add_pro_db import a_prop, s_data, a_data, del_re, my_prop
import uuid

import jwt
ad_prop = Blueprint('ad_prop', __name__)
create_tables()






# adding data to database
@ad_prop.post('/add_prop')
def add_prop():
    token = request.headers.get("Authorization")
    Holder_name = request.json.get("Holder_name")
    mobile_no = request.json.get("mobile_no")
    prop_size = request.json.get("prop_size")
    price = request.json.get("price")
    house_no = request.json.get("house_no")
    area_name = request.json.get("area_name")
    state_name = request.json.get("state_name")
    city_name = request.json.get("city_name")
    country_name = request.json.get("country_name")
    furniture = request.json.get("furniture")
    photo = request.json.get("photo")
    bhk = request.json.get("bhk")
    dis = request.json.get("dis")
    rent_or_sell = request.json.get("rent_or_sell")
    p_id = uuid.uuid4()
    print(token)
    try:
        dt = jwt.decode(token, key='thisismysecreatekey',
                        algorithms=['HS256', ])
        u_id = dt["u_id"]
        print(dt)

        try:
            if (len(country_name) == 0 and len(Holder_name) == 0 and len(house_no) == 0 and len(area_name) == 0 and len(state_name) == 0 and len(city_name) == 0 and len(photo) == 0 and len(bhk) == 0 and len(prop_size) == 0 and len(price) == 0 and len(furniture) == 0 and len(dis) == 0 and len(str(mobile_no)) == 0 and len(str(prop_size)) == 0 and len(str(price)) == 0 and len(str(bhk)) == 0):
                    return jsonify({'message':'Some fields are empty'}),
            
    
        
            

            else:
                a_prop(p_id, u_id, Holder_name, mobile_no, house_no, area_name, state_name, city_name,country_name, photo, bhk, prop_size, price, furniture, rent_or_sell,  dis)
                return jsonify({'U_id': u_id, 'Holder name': Holder_name, 'message': 'Property added'}), 200
        
                
        except:
            return jsonify({'message': 'Something went wrong'}), 404

    except:
        return jsonify({'message': 'User not found'}), 400






# fetchin all data from database
@ad_prop.get('/adata')
def aa_data():
    p_id = request.headers.get("Authorization")
    print(p_id)
    data = a_data(p_id)
    print(data)
    details = {"p_id": data[0], "u_id": data[1], "Holder_name": data[2], "mobile_no": data[3], "house_no": data[4], "area_name": data[5], "state_name": data[6], "city_name": data[7],"country_name": data[8], "photo": data[9], "bhk": data[10], "prop_size": data[11], "price": data[12], "furniture": data[13], "rent_or_sell": data[14], "dis": data[15]}
    return details



# fetching some data from database
@ad_prop.get('/sdata')
def ss_data():
    c = ["p_id", "photo", "city_name", "state_name", "bhk", "price", "prop_size"]
    data = s_data()
    new_data = []
    for r in data:
        d = {}
        for i in range(7):
            d[c[i]] = r[i]
        new_data.append(d)
    return jsonify(new_data)



# Deleting data from table
@ad_prop.delete('/del_re')
def deleting():
    p_id = request.json.get("p_id")
    del_re(p_id)
    return jsonify({"message":"Record deleted"})


#fetching my(individual user's) data from databse
@ad_prop.get('/my_data')
def my_data():
    u_id = request.headers.get("Authorization")
    data = my_prop(u_id)
    c = ["p_id", "u_id", "Holder_name", "mobile_no", "house_no", "area_name", "state_name", "city_name","country_name", "photo", "bhk", "prop_size", "price", "furniture", "rent_or_sell",  "dis"]
    
    new_data = []
    for r in data:
        d = {}
        for i in range(16):
            d[c[i]] = r[i]
        new_data.append(d)
    print(data)
    
    return jsonify(new_data)