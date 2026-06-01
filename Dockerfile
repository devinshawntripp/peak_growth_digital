# Base image
FROM node:20.10-alpine

# Coolify build host has broken IPv6 egress; make Node/npm/prisma prefer IPv4 so
# registry + engine downloads do not hang on unreachable IPv6 (ETIMEDOUT).
ENV NODE_OPTIONS=--dns-result-order=ipv4first

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

RUN  rm -rf node_modules && rm -rf .cache && npm cache clean --force

# Install dependencies
RUN npm config set fetch-retries 5 && npm config set fetch-retry-maxtimeout 120000 && npm config set fetch-timeout 600000 && npm ci

# Copy prisma schema
COPY prisma ./prisma/

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Set the PORT environment variable
ENV PORT=3002

# Expose the port the app runs on
EXPOSE 3002

# Start the application
CMD ["npm", "start"]