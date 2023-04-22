FROM node:14
WORKDIR /client
COPY . /client/

RUN npm run build
EXPOSE 80

CMD npm start