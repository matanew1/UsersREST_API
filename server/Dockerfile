# Use Node.js v14 as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the image
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the server code to the image
COPY . .

# Build the server code
RUN npm run build

# Set the command to start the server
CMD [ "node", "server.js" ]

