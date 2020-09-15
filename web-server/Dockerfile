# Define node vesion
FROM node:10
# Create docker directory
WORKDIR /app
# Copy application to /src directory and install dependencies
COPY package.json /app
# Run npm install
RUN npm install
# Bundle app source
COPY  . /app
# What be executed when image is launching
CMD node src/app.js
# Expose port when container is ready
EXPOSE 8888
