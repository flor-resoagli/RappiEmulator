import time
from locust import HttpUser, task, between

class WebSiteUser(HttpUser):
# Cuanto Tiempo tarda en visitar un endpoint despues de haber visitado el anterior
    wait_time = between(1,5)

    @task
    def cart_get(self):
        self.client.get(url="/cart")

    @task
    def cart_put(self):
        self.client.post(url="/cart",json={
        "item":{"id":1, "price":5, "name": "sandwich", "restaurantId": 1},
        "qty": 1})

    @task
    def cart_delete(self):
        self.client.delete(url="/cart",json={
        "item":{"id":1, "price":5, "name": "sandwich", "restaurantId": 1},
        "qty": 1})

    @task
    def restaurant_get(self):
        self.client.get(url="/restaurants")

    @task
    def restaurantNear_get(self):
        self.client.get(url="/restaurantsNear")

    @task
    def makeOrder(self):
        self.client.post(url="/makeOrder", json={"restaurantName": "Resto 1"})