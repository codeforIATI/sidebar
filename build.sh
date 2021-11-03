#!/bin/bash

./node_modules/uglify-js/bin/uglifyjs --compress --mangle -- _source/sidebar.js > _source/tmp.min.js
cat _source/header-lhs.txt _source/tmp.min.js > sidebar.min.js
cat _source/header-rhs.txt _source/tmp.min.js > sidebar-rhs.min.js
rm -rf _source/tmp.min.js
