commit:
	../../node_modules/@musical-patterns/cli/bin/commit.sh

.PHONY: lint
lint:
	pushd ../..; make lint DIR="src/performerQa"; popd

pull:
	../../node_modules/@musical-patterns/cli/bin/pull.sh

push:
	../../node_modules/@musical-patterns/cli/bin/push.sh

.PHONY: test
test:
	pushd ../..; make test JASMINE_CONFIG_PATH="src/performerQa/test/jasmine.js" PATTERN_NAME="PERFORMER_QA"; popd

update:
	pushd ../..; make update PATTERN="PERFORMER_QA"; popd
