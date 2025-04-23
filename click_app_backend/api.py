from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api, reqparse, fields, marshal_with, abort
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {
    "origins": "http://localhost:5173",
    "allow_headers": ["Content-Type", "Accept"],
    "supports_credentials": True
}})
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)
api = Api(app)


class ScoreModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    score = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"This score is: {self.score}"

score_args = reqparse.RequestParser()
score_args.add_argument('score', type=int, required=True, help="Score cant be blank")

scoreFields = {
    'id':fields.Integer,
    'score':fields.Integer,
}

class Scores(Resource):

    @marshal_with(scoreFields)
    def get(self):
        scores = ScoreModel.query.all()
        return scores
    
    @marshal_with(scoreFields)
    def post(self):
        args = score_args.parse_args()
        score = ScoreModel(score=args["score"])
        db.session.add(score)
        db.session.commit()
        scores = ScoreModel.query.all()
        return scores, 201
    
    def options(self):
        return {'Allow': 'POST'}, 200


api.add_resource(Scores, '/api/scores/')

@app.route('/home')
def home():
    return '<h1>Hey</h1>'

if __name__ == '__main__':
    app.run(debug=True)