from flask import Flask
from api.register import login_api
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.register_blueprint(login_api)



if __name__ == '__main__':
    app.run(debug = True)
