# Step 1: Use an official Node.js image to build the application
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json to install dependencies
COPY ./frontend/package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the frontend files into the container
COPY ./frontend ./

# Step 6: Build the React application for production
RUN npm run build

# Step 7: Install the 'serve' package to serve the built app
RUN npm install -g serve

# Step 8: Set the working directory to the build folder
WORKDIR /app/build

# Step 9: Expose port 3000
EXPOSE 3000

# Step 10: Start the app using 'serve' on port 3000
CMD ["serve", "-s", ".", "-l", "3000"]
