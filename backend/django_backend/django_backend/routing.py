from django.urls import re_path

from chat import consumers as chat_consumers
from pong import consumers as game_consumers

websocket_urlpatterns = [
    re_path(r"ws/chat/(?P<room_name>\w+)/$", chat_consumers.ChatConsumer.as_asgi()),
    re_path(r"ws/game/(?P<room_name>\w+)/$", game_consumers.GameConsumer.as_asgi()),
]
