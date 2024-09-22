# # Stage 1: Build the Angular application
# FROM node:22.9.0 AS build

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application
# COPY . .

# # Build the Angular application
# RUN npm run build --prod

# # Stage 2: Serve the application
# FROM nginx:alpine

# # Copy the built application from the previous stage
# COPY --from=build /app/dist/simple-queue-frontend /usr/share/nginx/html

# # Expose port 8085
# EXPOSE 8085

# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]
##############################################################################################
# FROM node:lts-alpine
# #FROM node:16-lts-alpine
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# EXPOSE 8085
# RUN chown -R node /usr/src/app
# USER node
# CMD ["npm", "start"]
#####################################################################################################
FROM node:14-alpine

# Set environment variable for Node.js environment
ENV NODE_ENV=production

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && npm cache clean --force

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 8085

# Change ownership of the app directory
RUN chown -R node /usr/src/app

# Switch to the node user
USER node

# Start the application
CMD ["npm", "start"]
