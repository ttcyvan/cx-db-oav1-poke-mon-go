From node:12
COPY package.json ./
COPY src ./src 
RUN npm install
RUN npm run-script build
RUN npm start