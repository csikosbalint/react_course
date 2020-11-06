FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN yarn
COPY . .
RUN apk update && apk add bash
CMD [ "./start.sh"]
EXPOSE 3000 8900