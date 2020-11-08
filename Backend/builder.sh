#! /bin/bash
set -e
echo "build script starting"
echo "installing packages"
npm install express helmet express-rate-limit express-sslify
echo "starting server"
node server.js