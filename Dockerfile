FROM node:latest as build 
WORKDIR /root/Selim-Trade
# Install npm packages and cache this layer
COPY package*.json /
RUN npm install
# Build copy all source files and build React app
COPY ./ /
ENV NODE_OPTIONS=--max_old_space_size=4096
RUN npm run build

# Pull NGINX image
FROM nginx:1.15
# Move all build files to NGINX serve folder
COPY --from=build /build /usr/share/nginx/html
# Setup NGINX with config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
