const express = require('express')
// ----> This imports our npm package names express
const app = express();
// ----> this represents express being called()..[ie:func()] and converted to the keyword app, which we will use to talk to our server/express Connection.
const PORT = 3000;





app.listenerCount(PORT), () => {
    console.log('Server is running...')
}



// ------------------------------------------[ROUTES --> HTTP --> (req,res)]


app.get('/',(req,res)=>{
    res.send("Hey I am data, that was requested from the server...on this specific route: ROOT")
})
// ------------[GET ---> ROOT]

app.get('/home',(req,res)=>{
    res.render('Homepage')
})
// ------------[GET ---> Home]


app.get('/about',(req,res)=>{
    res.send("ABOUT")
})
// ------------[GET ---> About]


app.get('/contact',(req,res)=>{
    res.send("CONTACT")
})
// ------------[GET ---> Contact]