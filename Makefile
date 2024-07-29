DOCKER_CMD := docker-compose
FRONEND_CMD := docker-compose exec frontend

build:
	${DOCKER_CMD} build
up:
	${DOCKER_CMD} up -d
frontend:
	docker-compose exec frontend bash
