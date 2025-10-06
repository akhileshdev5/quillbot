# Use an official Node.js LTS image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the application port (change if your app uses another port)
EXPOSE 3000

# Define the startup command
CMD ["npm", "start"]

