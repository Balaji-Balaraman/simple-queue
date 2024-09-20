# Stage 1: Build the Angular application
FROM node:22.9.0 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Angular application
RUN npm run build --prod

# Stage 2: Serve the application
FROM nginx:alpine

# Copy the built application from the previous stage
COPY --from=build /app/dist/simple-queue-frontend /usr/share/nginx/html

# Expose port 8085
EXPOSE 8085

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
