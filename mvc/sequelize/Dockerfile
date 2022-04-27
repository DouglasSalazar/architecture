FROM node:10

RUN apt update

WORKDIR /usr/app

RUN npm install nodemon -g

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "start", "dev"]