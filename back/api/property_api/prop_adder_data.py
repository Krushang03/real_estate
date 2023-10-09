from flask import *
from api.register import tokan_to_u_id
from database.re_lo_db import data_of_user

prop_data_adder = Blueprint("prop_data_adder", __name__)

@prop_data_adder.get('/prop_adder_data/<u_id>')
def prop_adde_data(u_id):
    # token = request.headers.get("Authorization")
    # u_id = tokan_to_u_id(token)
    data = data_of_user(u_id)
    print(data)
    d = {"Username":data[1],"email":data[2],"mobile_no":data[4],"photo":data[5]}
    return d