Install flask: pip install flask

On MAC/LINUX:
  export FLASK_APP=auth
On WINDOWS:
  set FLASK_APP=auth

Run server: flask run

curl --header "Content-Type: application/json" \
  --request GET \
  http://localhost:5000/healthcheck

curl --header "Content-Type: application/json" \
--request GET \
http://localhost:5000/users

curl --header "Content-Type: application/json" \
--request POST \
--data '{"username":"admin","password":"password123"}' \
http://localhost:5000/users

curl --header "Content-Type: application/json" \
--request POST \
--data '{"username":"admin' OR '1'='1;--","password":"password123"}' \
http://localhost:5000/users