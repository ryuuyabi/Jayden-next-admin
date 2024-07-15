DOCKER_CMD := docker-compose -f docker-compose.yml
FRONEND_CMD := docker-compose exec fronend

build:
	${DOCKER_CMD} build
up:
	${DOCKER_CMD} up -d
frontend:
	${DOCKER_CMD} exec fronend bash
