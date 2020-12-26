FROM node:12.19.0
ENV NODE_ENV=development

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]