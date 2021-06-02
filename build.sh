#!/bin/bash

./node_modules/uglify-js/bin/uglifyjs --compress --mangle -- _source/sidebar.js > sidebar.min.js
