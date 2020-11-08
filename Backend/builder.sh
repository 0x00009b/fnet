#! /bin/bash
set -e
echo "build script starting"
echo "installing packages please wait..."
npm install express helmet express-rate-limit express-sslify not-found
echo "starting server"
node server.js