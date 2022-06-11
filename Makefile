clean:
	@rm -Rf cjs mjs

build-cjs:
	@rm -Rf cjs
	@npx tsc -m commonjs -d --sourceMap --outDir cjs
	@echo '{"type":"commonjs"}' > cjs/package.json

build-mjs:
	@rm -Rf mjs
	@npx tsc -d --sourceMap --outDir mjs

build: build-cjs build-mjs

rebuild: clean build

test: export NODE_NO_WARNINGS=1
test: export NODE_OPTIONS=--experimental-vm-modules
test: rebuild
	@npx jest

update:
	@npx npm-check --update --save-exact

postversion:
	@git push
	@git push --tags
	@npm publish

.PHONY: test
