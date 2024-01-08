.PHONY:
start:
	deno task serve

.PHONY: lint
lint:
	deno task check

.PHONY: lint/fix
lint/fix:
	deno fmt

.PHONY: build
build:
	deno task build

_site: build

.PHONY: deploy
deploy: _site
	netlify deploy

.PHONY: deploy/prod
deploy/prod: _site
	netlify deploy --prod

.PHONY: clean
clean:
	rm -rf _site
