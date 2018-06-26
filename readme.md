# Stock Mania - A Stock-Market-Simulation-Game

This a a final year project to simulate a stock market. The REST API is developed using expressJS and the frontend is developed as a React app.

# Demo
## Check the live Demo [Try Demo](https://stockex.netlify.com/)

# Project Setup
Make sure you have a latest version of NodeJS installed. Recommended editor is [VSCode](https://code.visualstudio.com/)

The game requires you to run all the API services which are seperate applications.
Each is in a subfolder and has a `src/config.js` file to configure the project. *Make sure to change the `port` in each project so that they do not clash with each other*

## sm-bank

```
# cd into sm-bank
cd sm-bank

# install dependencies
npm install

# start the server
npm start
```

## sm-stockmarket

```
# cd into sm-stockmarket
cd sm-stockmarket

# install dependencies
npm install

# start the server
npm start
```

## sm-broker

*Important*

Broker depends on _sm-bank_ and _sm-stockmarket_
Update the `stockmarketUrl` and `bankUrl` with the URI of the other APIs found in `src/config.js`.


```
# cd into sm-broker
cd sm-broker

# install dependencies
npm install

# start the server
npm start
```

## Frontend
Once all the API services are started you can run the front end.
Make sure to update the relevant URIs of the API components found in `src/config/server.js`
```
cd mars-frontend

# install dependencies
npm install

# start dev server
npm start
```
