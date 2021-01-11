FROM node:latest

# specifies the application directory
WORKDIR /home/node/app

# copying package.json file to the /home/node/app directory
COPY package.json .
COPY package-lock.json .

# copying rest of the application to /home/node/app directory
COPY . .

# installing npm
RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "start:dev" ]
