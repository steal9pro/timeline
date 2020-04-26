FROM node:12
WORKDIR /usr/src/app

COPY ["package.json", "tsconfig.json", "tsconfig.build.json", "/usr/src/app/"]
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
