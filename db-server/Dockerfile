# pull official base image
FROM node:12

RUN mkdir /app

COPY package.json /app
WORKDIR /app
RUN npm install 

COPY . /app
EXPOSE 3000
# start app
CMD ["npm", "start"]