.PHONY:
start:
	deno task serve -p 8080

.PHONY: lint
lint:
	deno task check

.PHONY: lint/fix
lint/fix:
	deno fmt

.PHONY: build
build: docs/build
	deno task build
	mv docs/build _site/docs
	mv ./_site/sitemap.xml sitemap.xml
	./scripts/cat-sitemap.ts sitemap.xml ./_site/docs/sitemap.xml > ./_site/sitemap.xml
	rm -f sitemap.xml

docs/build: $(wildcard ./docs/*)
	cd docs; npm run build

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
