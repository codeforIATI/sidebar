#!/bin/bash

./node_modules/uglify-js/bin/uglifyjs --compress --mangle -- source/sidebar.js > sidebar.min.js
