import threading
import asyncio
from .pong import Pong


class CreateGameThread:
	threads = {}
	games: dict[Pong] = {}


	@classmethod
	def create_game(cls, game_name):

		if game_name not in cls.games:
			cls.games[game_name] = Pong()

		if game_name not in cls.threads:
			# Create a new thread that runs an event loop
			def run_event_loop(loop):
				asyncio.set_event_loop(loop)
				# Schedule the game_loop coroutine to run on the event loop
				asyncio.ensure_future(cls.games[game_name].game_loop())
				# Run the event loop until the game_loop coroutine completes
				loop.run_forever()

			# Create a new event loop
			new_loop = asyncio.new_event_loop()

			# Create a new thread that runs the event loop
			thread = threading.Thread(target=run_event_loop, args=(new_loop,))
			thread.start()

			# Store the thread and its state
			cls.threads[game_name] = {
				"thread": thread,
				"player1": False,
				"player2": False,
				"active": False,
			}
