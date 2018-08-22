const express = require('express')
const app = express();
const cluster = require('cluster');

console.log(cluster.isMaster);

// is the file being executed in master mode
if(cluster.isMaster) {
  // cause index.js to be executed again but in slave mode
  cluster.fork();
} else {
  function doWork(duration) {

    // im a child, im going to act liuke a server and do nothing else
    const start = Date.now();
    while(Date.now() - start < duration) {}
  }
  
  app.get('/', (req, res) => {
    doWork(5000)
    res.send('Hi there');
  })
  app.get('/fast', (req, res) => {
    res.send('This was fast');
  })  
  app.listen(3000);
}

