From node:12
EXPOSE 3800
COPY package.json ./
COPY . ./ 
RUN ls -a 
RUN npm install
RUN yarn install
RUN yarn build
RUN yarn start