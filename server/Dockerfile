# Use Node.js v14 as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the image
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the server code to the image
COPY . .

# Set the command to start the server
CMD [ "npm", "start" ]
