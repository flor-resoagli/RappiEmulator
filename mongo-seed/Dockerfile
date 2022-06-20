FROM mongodb
COPY restaurants.json /restaurants.json
COPY users.json /users.json
CMD mongoimport --host mongodb --db rappiemulator --collection restaurants --type json --file /restaurants.json --jsonArray
CMD mongoimport --host mongodb --db rappiemulator --collection users --type json --file /users.json --jsonArray