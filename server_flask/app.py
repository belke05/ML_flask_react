import os
import flask

app = flask.Flask(__name__)

# app = Flask(__name__, static_folder='./frontend/build/static',
#             template_folder='./frontend/build') 
@app.route("/")
def my_index():
  return flask.render_template("index.html", token="React_Flask")



app.run(debug=True)