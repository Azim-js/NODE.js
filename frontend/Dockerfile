# for production need for nginx

FROM node:16-alpine as builder

WORKDIR '/app'

COPY ./package.json .

RUN npm install 

COPY . .

RUN npm run build 

# second layer to host the build prodcution package 

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html

