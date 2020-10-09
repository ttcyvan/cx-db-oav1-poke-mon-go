From node:12
WORKDIR /app
EXPOSE 3800
COPY package.json ./
COPY src ./src 
RUN npm install
RUN yarn install
RUN yarn build
RUN yarn start