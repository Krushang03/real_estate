from flask import Flask
from api.register import login_api
app = Flask(__name__)
app.register_blueprint(login_api)

if __name__ == '__main__':
    app.run(debug = True)
