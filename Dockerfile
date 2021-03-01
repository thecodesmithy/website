FROM nginx:1.19-alpine

EXPOSE 80

COPY ./dist /usr/share/nginx/html

