
install-deps:
	npm ci

lint:
	npx eslint .

test:
	npx -n --experimental-vm-modules jest

test-cov:
	npx jest --coverage

.PHONY: test