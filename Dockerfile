FROM node:18-alpine

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/package.json
COPY . .
CMD ["rm", "-rf", "node_modules"]
CMD ["npm", "cache", "clean", "--force"]
CMD ["npm", "install"]
EXPOSE 3000


