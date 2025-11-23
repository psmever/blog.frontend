DC = $(shell if docker compose version >/dev/null 2>&1; then echo "docker compose"; else echo "docker-compose"; fi)
DOCKER_DIR ?= ../blog.docker
COMPOSE_LOCAL ?= $(DOCKER_DIR)/docker-compose.local.yml
FRONTEND_SERVICE ?= nextjs
FRONTEND_ENV ?= .env
.DEFAULT_GOAL := help

.PHONY: help frontend-up frontend-logs frontend-down frontend-env-check

help:
	@echo "Blog Frontend Make targets"
	@echo "─────────────────────────"
	@echo "frontend-up    → Start Next.js container via blog.docker (local compose)"
	@echo "frontend-logs  → Tail Next.js container logs"
	@echo "frontend-down  → Stop containers from local compose file"

frontend-env-check:
	@if [ ! -f $(FRONTEND_ENV) ]; then \
		if [ -f .env.local.enc ]; then \
			echo "🔓 .env not found. Trying to decrypt .env.local.enc via blog.docker (BLOG_ENV_SECRET required)..."; \
			$(MAKE) -C $(DOCKER_DIR) decrypt-frontend-local; \
		else \
			echo "ℹ️ $(FRONTEND_ENV) not found. Copy .env.local.example to $(FRONTEND_ENV)."; \
		fi; \
	fi

frontend-up: frontend-env-check
	@echo "🚀 Starting frontend container with $(COMPOSE_LOCAL) ($(FRONTEND_SERVICE))..."
	@$(DC) -f $(COMPOSE_LOCAL) up -d --build $(FRONTEND_SERVICE)

frontend-logs:
	@echo "🧾 Tailing logs for $(FRONTEND_SERVICE)..."
	@$(DC) -f $(COMPOSE_LOCAL) logs -f --tail=200 $(FRONTEND_SERVICE)

frontend-down:
	@echo "🛑 Stopping containers from $(COMPOSE_LOCAL)..."
	@$(DC) -f $(COMPOSE_LOCAL) down -v
