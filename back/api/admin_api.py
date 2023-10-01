from flask import *
from database.admin_daabse import *
admin = Blueprint("admin", __name__)

@admin.get('/pendding_property')
def pendingg():
    data = pending_prop()
    key = ["p_id", "u_id",  "Holder_name", "mobile_no", "house_no", "area_name", "state_name", "city_name", "country_name", "photo_path", "bhk", "prop_size", "price", "furniture", "sell_or_rent", "dis",  "prop_deal", "prop_type", "ddate", "status"]
    
    for j in data:
        print(j)
    
    new_data = []
    for data in data:
        d = {}
        for i in range(20):
            d[key[i]] = data[i]
        new_data.append(d)
    return jsonify(new_data)


@admin.get('/verified_property')
def verified():
    data = verified_prop()
    key = ["p_id", "u_id",  "Holder_name", "mobile_no", "house_no", "area_name", "state_name", "city_name", "country_name", "photo_path", "bhk", "prop_size", "price", "furniture", "sell_or_rent", "dis",  "prop_deal", "prop_type", "ddate", "status"]
    
    for j in data:
        print(j)
    
    new_data = []
    for data in data:
        d = {}
        for i in range(20):
            d[key[i]] = data[i]
        new_data.append(d)
    return jsonify(new_data)
