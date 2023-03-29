# For production need we will use nginx

FROM node:16-alpine as builder

WORKDIR '/app'

COPY ./frontend/package.json ./

RUN npm run build

# Second layer to host the build production package 

FROM nginx

EXPOSE 80 

COPy --from=builder /app/build /usr/share/nginx/html

