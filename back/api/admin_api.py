from flask import *
from database.admin_daabse import *
from database.user_auth import user_auth
from api.register import tokan_to_u_id

admin = Blueprint("admin", __name__)

@admin.get('/pending_property')
def pendingg():
    data = pending_prop()
    key = ["p_id", "u_id",  "Holder_name", "mobile_no", "house_no", "area_name", "state_name", "city_name", "country_name", "photo_path", "bhk", "prop_size", "price", "furniture", "sell_or_rent", "dis",  "prop_deal", "prop_type", "ddate", "status", "lightbill"]
    
    new_data = []
    for data in data:
        d = {}
        for i in range(21):
            d[key[i]] = data[i]
        new_data.append(d)
    return jsonify(new_data)


@admin.get('/verified_property')
def verified():
    data = verified_prop()
    key = ["p_id", "u_id",  "Holder_name", "mobile_no", "house_no", "area_name", "state_name", "city_name", "country_name", "photo_path", "bhk", "prop_size", "price", "furniture", "sell_or_rent", "dis",  "prop_deal", "prop_type", "ddate", "status", "lightbill"]
    
    
    new_data = []
    for data in data:
        d = {}
        for i in range(21):
            d[key[i]] = data[i]
        new_data.append(d)
    return jsonify(new_data)



@admin.patch('/change_status/<p_id>/<new_status>')
def change_statuss(p_id, new_status):
    # token = request.headers.get("Authorization")
    # u_id = tokan_to_u_id(token)
    # count = user_auth(u_id)
    status_change(p_id, new_status)
    # if count==1:
    return jsonify({"message": "Your status has been updated"})
    # else:
    #     return jsonify({'message':'User not found'})