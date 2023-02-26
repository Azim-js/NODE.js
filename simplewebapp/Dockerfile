# specify the Base image
FROM node:alpine

# Specify the WORKDIR

WORKDIR /usr/app

# Install the dependencies

COPY ./package.json ./

RUN npm install 

COPY ./ ./

# Default command to keep the container up and running

CMD ["npm", "start"]



