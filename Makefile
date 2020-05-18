.SILENT:

test:
	docker run --rm -t \
		-v $$PWD:/app -w /app \
		hayd/alpine-deno test test.js
.PHONY: test
