
install-deps:
	npm ci

lint:
	npx eslint .

test:
	npx --experimental-vm-modules jest

test-cov:
	npx jest --coverage

.PHONY: test