FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENV GENERATE_SOURCEMAP=false

RUN npm run build 

EXPOSE 3000

CMD ["npm", "start"]
## export NODE_OPTIONS=--max_old_space_size=4096 if js max heap error mac 
## docker buildx build --platform linux/amd64 -t react/state-machines .
## docker run -d -p 3000:3000 react/state-machines