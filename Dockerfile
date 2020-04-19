FROM node:carbon-slim

# Create app directory
WORKDIR /perime

# Install app dependencies
COPY package.json /perime/
RUN npm install

# Bundle app source
COPY . /perime/

CMD [ "npm", "run", "build" ]
CMD [ "npm", "run", "start" ]
