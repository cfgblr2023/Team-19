# Importing required libs
from flask import Flask, render_template, request,jsonify
from model import preprocess_img, predict_result
from flask_cors import CORS


# Instantiating flask app
app = Flask(__name__)
CORS(app, origins='http://localhost:3000')

# Home route

# Prediction route
@app.route('/test', methods=['POST'])
def predict_image_file():
    try:
        if request.method == 'POST':
            

            img=preprocess_img(request.files['image'])
            print("IMAGE iS : ", img)
            pred=predict_result(img)
            response={
                'prediction': str(pred)
            }

            print("PREDICTION IS : ", pred)
            return response
            #return render_template("result.html", predictions=str(pred))

    except:
       print("error")
	
        #return render_template("result.html", err=error)




# Driver code
if __name__ == "__main__":
    app.run(port=9000, debug=True)
