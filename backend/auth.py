#!/usr/bin/python3

from flask import Flask, request, jsonify, render_template
from sqlite3 import connect

app = Flask(__name__)

id = 0

def setup():
  conn = connect('users.db')
  c = conn.cursor()
  c.execute('''CREATE TABLE IF NOT EXISTS users
                (ID INT PRIMARY KEY NOT NULL,
                username CHAR(50) NOT NULL,
                password CHAR NOT NULL);''')
  conn.close()

def getUsers():
  print("connecting...")
  conn = connect('users.db')
  c = conn.cursor()
  c.execute('SELECT * FROM users')
  print("selecting...")
  users = c.fetchall()
  print(users)
  conn.close()
  return users

def insertUser(username, password):
  global id
  conn = connect('users.db')
  c = conn.cursor()
  c.execute('INSERT INTO users (username, password) VALUES (?, ?)', (id, username, password))
  conn.commit()
  conn.close()
  id += 1

def login(username, password):
  query = f"SELECT username from users where username = '{username}' and password = '{password}'";
  print(query)
  conn = connect('users.db')
  c = conn.cursor()
  try:
    res = c.execute(query)
    #c.execute("SELECT username from users where username='admin' and password='password123'")
  except Exception as e:
    print(e)
    return False
  #print(res.fetchone())
  #print(res.fetchall())
  if res.fetchone() is None:
    print('Invalid user.')
    return False
  print('Valid user.')
  conn.close()
  return c

@app.route('/users', methods=['GET'])
def fetchUsers():
  users = getUsers()
  print("returned users: " )
  print(users)
  print(type(users))
  users_list = [{"id": user[0], "username": user[1], "password": user[2]} for user in users]
  return jsonify({"users": users_list}, 201)

@app.route('/users', methods=['POST'])
def checkAuth():
  data = request.get_json()
  username = str(data["username"])
  password = str(data["password"])
  #username, password = request.args.get('username'), request.args.get('password')
  #print(request)
  print(username)
  print(password)
  res = login(username, password)
  print(res)
  if not res == False:
    return jsonify({"message": "User logged in successfully"}), 201
  else:
    return jsonify({"message": "Auth error"}, 400)

@app.route('/addUser', methods=['POST'])
def addUser():
  username, password = request.form.get('username'), request.form.get('password')
  res = insertUser(username, password)
  return jsonify({"message": "User added successfully"}), 201

@app.route('/healthcheck', methods=['GET'])
def healthCheck():
  return jsonify({"message": "Server up"}, 201)

# when runs
if __name__ == '__main__':
    setup()
    app.run()