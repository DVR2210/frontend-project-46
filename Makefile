install:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .	

fix:
	npx eslint . --fix

publish:
	npm publish --dry-run

run:
	gendiff  './__fixtures__/file1.json' './__fixtures__/file2.json' 

.PHONY: test