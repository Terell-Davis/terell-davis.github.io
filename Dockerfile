# Use the latest Node.js as the base image
FROM node:lts-alpine3.19

# Set the working directory inside the container
WORKDIR /terell-davis.github.io

# Copy only the package.json first to leverage Docker cache
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY public/ public/
COPY src/ src/

# The command to run your application
CMD ["npm", "start"]