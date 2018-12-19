pull:
	../../node_modules/@musical-patterns/cli/bin/pull.sh

.PHONY: test
test:
	pushd ../..; JASMINE_CONFIG_PATH="src/performerQa/test/jasmine.js" PATTERN_NAME="PERFORMER_QA" make test; popd

.PHONY: lint
lint:
	pushd ../..; DIR="src/performerQa" make lint; popd
