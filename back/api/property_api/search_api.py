from flask import *
from database.property_database.search_prop_db import search_prop
from api.add_prop_api import prop
#city state country area
search_property = Blueprint("search_property", __name__)
@search_property.post('/search_prop')
def prop_search():
    city_name = request.json.get("city_name")
    state_name= request.json.get("state_name")
    country_name= request.json.get("country_name")
    area_name= request.json.get("area_name")
    data = search_prop(city_name, state_name, country_name, area_name)
    key = ["p_id", "u_id",  "Holder_name", "mobile_no", "house_no", "area_name", "state_name", "city_name", "country_name", "photo_path", "bhk", "prop_size", "price", "furniture", "sell_or_rent", "dis",  "prop_deal", "prop_type", "ddate", "status", "lightbill"]
    
    
    new_data = []
    for data in data:
        d = {}
        for i in range(21):
            d[key[i]] = data[i]
        new_data.append(d)
    return jsonify(new_data)