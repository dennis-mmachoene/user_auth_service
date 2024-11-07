# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and package-lock.json files first
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the backend files to the container (after installing dependencies)
COPY . .

# Expose the port that the app will run on
EXPOSE 5000

# Run the application
CMD ["npm", "start"]

