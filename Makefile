.PHONY: start stop

dev:
	@echo "Starting the dev containers"
	docker compose -f docker-compose.dev.yml up -d
	# docker compose -f docker-compose.dev.yml logs -f

start:
	@echo "Starting the containers"
	docker compose up -d

stop:
	@echo "Stopping the containers"
	# docker compose down
	docker compose -f docker-compose.dev.yml down

fclean: stop
	@echo "Removing images"
	docker rmi ft_transcendence-dev
