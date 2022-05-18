FROM nginx:alpine

# FROM resets ARGs, so this has to be here.
ARG giturl

RUN apk add --no-cache git
RUN git clone $giturl /home/temp

WORKDIR "/home/temp"

RUN apk add --update nodejs npm

RUN npm install
RUN npm run build

RUN mv /home/temp/dist/* /usr/share/nginx/html/

# run nginx in foreground so container doesn't immediately exit.
CMD ["nginx", "-g", "daemon off;"]
