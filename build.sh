#!/bin/bash

./node_modules/uglify-js/bin/uglifyjs --compress --mangle -- _source/sidebar.js > _source/tmp.min.js
cat _source/header.txt _source/tmp.min.js > sidebar.min.js
rm -rf _source/tmp.min.js
