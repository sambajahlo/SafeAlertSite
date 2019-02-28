const express = require('express');
const app = express()

app.set('view engine', 'pug')

app.get('/',(req,res) =>{
  res.render('index',
  {
    lat: 37.33182,
    lon: -122.03118
   })
})
//This is only for the inital loading of the webpage.
//Sends the map lat and lon, plus the apps uuid to the client to initialize the
//map and subscribe to the user for updates
app.get('/uuid/:uuid/lat/:lat/lon/:lon',(req,res)=>{
  res.render('index',
  {
    lat: req.params.lat,
    lon: req.params.lon,
    uuid: req.params.uuid
  })
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
