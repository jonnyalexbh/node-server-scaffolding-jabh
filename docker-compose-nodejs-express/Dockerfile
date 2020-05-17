FROM node:latest
WORKDIR /usr/src/app
COPY . .
ENV PORT=4000
RUN npm install
EXPOSE $PORT
ENTRYPOINT ["node", "app.js"]
