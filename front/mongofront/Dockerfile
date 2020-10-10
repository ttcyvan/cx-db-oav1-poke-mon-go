From node:12
EXPOSE 3001
COPY package.json ./
COPY src ./src 
COPY public ./public 
RUN yarn install
RUN yarn start