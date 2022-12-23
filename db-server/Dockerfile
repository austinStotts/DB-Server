# pull official base image
FROM node:12

RUN mkdir /app

COPY package.json /app
COPY . /app
WORKDIR /app
RUN npm install 

EXPOSE 3000
# start app

CMD ["npm", "start"]