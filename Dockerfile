# Use the official Node.js Alpine image as the base image
FROM node:alpine AS development

# Set the working directory within the container
WORKDIR /react-app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Install Elastic APM package
RUN npm install @elastic/apm-rum

# Copy the APM configuration file
COPY apm-config.js .

# Expose the port your application will run on (if needed)
EXPOSE 3000

# Start the application with APM preloaded
CMD ["npm", "start"]
