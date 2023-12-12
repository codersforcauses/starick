FROM node:18-slim as development-stage

WORKDIR /app

# Copy dependencies list and install them
COPY ./package.json ./
RUN npm install

# Copy application code
COPY . /app

# Set the entrypoint
ENTRYPOINT ["yarn","dev"]
