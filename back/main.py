from flask import Flask
from api.register import login_api
from api.pro_API.search_api import search_property
from api.add_prop_api import prop
from api.admin_api import admin
from flask_cors import CORS


app = Flask(__name__, template_folder="template")
app.register_blueprint(login_api)
app.register_blueprint(prop)
app.register_blueprint(search_property)
app.register_blueprint(admin)
CORS(app)




if __name__ == '__main__':
    app.run(debug = True)   
