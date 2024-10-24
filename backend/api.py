#!/usr/bin/python3

from flask import Flask, request
import sqlite3

app = Flask(__name__)

def setup():
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (ID INT PRIMARY KEY NOT NULL,
                 username CHAR(50) NOT NULL,
                 password TEXT NOT NULL);''')
    conn.commit()
    conn.close()

def getUsers():
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('SELECT * FROM users')
    users = c.fetchall()
    conn.close()
    return users

def addUser(username, password):
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, password))
    conn.commit()
    conn.close()

@app.route('/users', methods=['GET'])
def fetchUsers():
    users = getUsers()
    users_list = [{"id": user[0], "username": user[1], "password": user[2]} for user in users]
    return users_list

@app.route('/users', methods=['POST'])
def insertUser():
    if not request.json or not 'username' in request.json or not 'password' in request.json:
        return jsonify({"error": "Invalid input"}), 400

    username = request.json['username']
    password = request.json['password']
    addUser(username, password)
    return jsonify({"message": "User added successfully"}), 201

# when runs
if __name__ == '__main__':
    init_db()
    app.run(debug=True)