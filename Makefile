.PHONY: start
start:
	deno task serve -p 8080

.PHONY: docs/start
docs/start:
	cd docs; npm run start

.PHONY: lint
lint:
	deno task check
	cspell docs/docs/**/*.md

.PHONY: lint/fix
lint/fix:
	deno fmt

.PHONY: build
build: docs/build
	deno task build
	mv docs/build _site/docs
	mv ./_site/sitemap.xml sitemap.xml
	./scripts/cat-sitemap.js sitemap.xml ./_site/docs/sitemap.xml > ./_site/sitemap.xml
	rm -f sitemap.xml

docs/build: $(wildcard ./docs/*)
	cd docs; npm run build

_site: build
	key=$(shell uuid); echo "$$key" > "_site/$${key}.txt"

.PHONY: deploy
deploy: _site
	netlify deploy

.PHONY: deploy/prod
deploy/prod: _site
	netlify deploy --prod

.PHONY: indexnow
indexnow:
	@test -d _site || $(MAKE) deploy/prod
	indexnow-submit sitemap-fetch -o urlsfile https://www.prismeanalytics.com/sitemap.xml
	for engine in "bing.com" "yandex.com"; do \
		indexnow-submit submit-urls -e "$$engine" -h "www.prismeanalytics.com" -k $(shell ls _site | grep -oE '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}') urlsfile; \
	done
	rm -f urlsfile
	gis https://www.prismeanalytics.com

.PHONY: clean
clean:
	rm -rf _site
