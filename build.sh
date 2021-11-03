#!/bin/bash

./node_modules/uglify-js/bin/uglifyjs --compress --mangle -- _source/sidebar.js > _source/tmp.min.js
cat _source/header-left.txt _source/tmp.min.js > sidebar.min.js
cat _source/header-right.txt _source/tmp.min.js > sidebar-right.min.js
rm -rf _source/tmp.min.js
