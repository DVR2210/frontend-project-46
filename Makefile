install:
	npm ci
	

gendiff:
	node/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-watch:
	npx jest --watch

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --bail --coverage