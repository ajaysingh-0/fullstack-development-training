// import express module
const express = require('express')
// intialize app with express function
const app = express()
// define port
const port = 3000

/*
API section
*/

/*
-----API 1----
http method = get
url = '/api-1'
request = "this is my first api"
*/
app.get('/api-1', (request, response) =>{
    response.send('this is my first api')
})

app.get('/api-2', (request, response) =>{
    response.send('this is my second api')
})

app.get('/api-3', (request, response) =>{
    response.send('my third api is working fine')
})

app.get('/api-4', (request, response) =>{
    response.send('this is website homepage')
})

// API 3
/*
url = /test-api-3
respnse = "my test api 3 is working fine"
*/


// start server [node server.js]
app.listen(port, () => {
    console.log("my server is started at port" + port);
})