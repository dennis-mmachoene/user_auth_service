
# Use the official Node.js image to build the application
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the frontend files into the container
COPY . .

# Build the React application for production
RUN npm run build

# Install the 'serve' package to serve the built app
RUN npm install -g serve

# Set the working directory to the build folder
WORKDIR /app/build

# Expose port 3000
EXPOSE 3000

# Start the app using 'serve' on port 3000
CMD ["serve", "-s", ".", "-l", "3000"]