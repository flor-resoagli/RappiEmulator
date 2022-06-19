from asyncio import tasks
import time
from locust import HttpUser, task, between, TaskSet

class UserBehaviour(TaskSet):

    @task(3)
    def cart_get(self):
        self.client.get(url="/cart")

    @task(2)
    def cart_put(self):
        self.client.put(url="/cart",json={
        "item":{"id":1, "price":5, "name": "sandwich", "restaurantId": 1},
        "qty": 1})

    @task(1)
    def cart_delete(self):
        self.client.delete(url="/cart",json={
        "item":{"id":1, "price":5, "name": "sandwich", "restaurantId": 1},
        "qty": 1})

    @task(3)
    def restaurant_get(self):
        self.client.get(url="/restaurants")

    @task(3)
    def restaurantNear_get(self):
        self.client.get(url="/restaurantsNear")

    @task(3)
    def makeOrder(self):
        self.client.post(url="/makeOrder", json={"restaurantName": "Resto 1"})



class WebsiteUser(HttpUser):
    host = "http://localhost:5000"
    tasks = [UserBehaviour]
    # The wait_time function is used to determine for how long a simulated user will wait between executing tasks.
    wait_time = between(1,5)
