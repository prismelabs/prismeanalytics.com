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

