// import express package
import express from "express";

// create app variable 
const app = express()

//define port number
const port = 3000

// define request parsing
app.use(express.json())

// API section start
app.get('/test', (req, res) => {
res.send('api is up')
})

// status code handling
app.get('/read-user-name', (req, res) =>{
     let user = {
      'age':20
    }

    if (user == null)
        res.status(484).send('data not found')
    else
        res.status(200).json(user)
} )
// API section end

// Start server 
app.listen(port, () => {
    console.log(`server started at port 3000 $(port)`)
})
