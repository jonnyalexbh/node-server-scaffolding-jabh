#!/bin/sh

if [ "$NODE_ENV" = "production" ]; then
    npm run migrations
    npm start
else
    npm run migrations
    npm run start:dev
fi
