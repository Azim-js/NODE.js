# for production need for nginx

FROM node:16-alpine as builder

WORKDIR '/app'

COPY ./frontend/package.json .

RUN npm install 

COPY ./frontend/ .

RUN npm run build 

# second layer to host the build prodcution package 

FROM nginx

EXPOSE 80 

COPY --from=builder /app/build /usr/share/nginx/html

