from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# Connect to MySQL Database
db = mysql.connector.connect(
    host="localhost",
    user="root",          
    password="ahsin@317",          
    database="react_flask_demo"
)

cursor = db.cursor()

@app.route('/api/save', methods=['POST'])
def save_name():
    data = request.get_json()
    name = data.get('name', '').strip()

    if not name:
        return jsonify({"error": "Name cannot be empty!"}), 400

    # Insert name into DB
    cursor.execute("INSERT INTO users (name) VALUES (%s)", (name,))
    db.commit()

    return jsonify({"message": f"Name '{name}' saved successfully!"})

@app.route('/api/users', methods=['GET'])
def get_users():
    cursor.execute("SELECT id, name, created_at FROM users ORDER BY id DESC")
    rows = cursor.fetchall()
    users = [{"id": r[0], "name": r[1], "created_at": str(r[2])} for r in rows]
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)
