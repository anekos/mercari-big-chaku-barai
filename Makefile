

build:
	npx parcel build src/manifest.json

release: build
	 ./script/release
