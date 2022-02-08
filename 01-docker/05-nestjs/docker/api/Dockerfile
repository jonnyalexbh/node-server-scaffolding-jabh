FROM node:16.13

# specifies the application directory
WORKDIR /application

# copying package.json and yarn.lock file to the /application directory
COPY package.json .
COPY yarn.lock .

# copying rest of the application to /application directory
COPY . .

# install global yarn
RUN npm install -g yarn --force

# install /node_modules
RUN yarn install

# generate build
RUN yarn build

EXPOSE 3000

# production
ENTRYPOINT ["yarn", "start:prod"]
