From node:12
COPY package.json ./
COPY src ./src 
RUN npm install
RUN yarn
RUN yarn build
RUN yarn start