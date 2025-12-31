# -------- STEP 1: Build Angular App --------
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the application
COPY . .
RUN npm run build

# -------- STEP 2: Serve using Nginx --------
FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output to nginx
# COPY --from=build /app/dist/profilewebsite /usr/share/nginx/html
COPY --from=build /app/dist/profilewebsite/browser /usr/share/nginx/html


# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
