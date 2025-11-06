from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# ✅ Simple function to get a new database connection (no SSL, no errors)
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="ahsin@317",  # your MySQL password
        database="expense_tracker",
        ssl_disabled=True
    )

# ✅ Route to fetch all expenses
@app.route('/expenses', methods=['GET'])
def get_expenses():
    try:
        db = get_db_connection()
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM expenses ORDER BY date DESC")
        expenses = cursor.fetchall()
        cursor.close()
        db.close()
        return jsonify(expenses)
    except Exception as e:
        print("Error in /expenses GET:", e)
        return jsonify({'error': str(e)}), 500

# ✅ Route to add a new expense
@app.route('/expenses', methods=['POST'])
def add_expense():
    try:
        data = request.get_json()
        category = data['category']
        amount = data['amount']
        date = data['date']
        description = data['description']

        db = get_db_connection()
        cursor = db.cursor()
        cursor.execute(
            "INSERT INTO expenses (category, amount, date, description) VALUES (%s, %s, %s, %s)",
            (category, amount, date, description)
        )
        db.commit()
        cursor.close()
        db.close()
        return jsonify({'message': 'Expense added successfully'})
    except Exception as e:
        print("Error in /expenses POST:", e)
        return jsonify({'error': str(e)}), 500

# ✅ Route for analytics
@app.route('/analytics', methods=['GET'])
def get_analytics():
    try:
        db = get_db_connection()
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT category, SUM(amount) AS total FROM expenses GROUP BY category")
        analytics = cursor.fetchall()
        cursor.close()
        db.close()
        return jsonify(analytics)
    except Exception as e:
        print("Error in /analytics GET:", e)
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
