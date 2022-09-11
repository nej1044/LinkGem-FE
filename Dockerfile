FROM node:16

WORKDIR /LINKGEM-FE/
COPY . /LINKGEM-FE/

RUN yarn install
RUN yarn build
CMD yarn start