const express = require('express');
const pug = require('pug');
//var path = require('path')
var bodyParser = require('body-parser');
var PubNub = require('pubnub')
const app = express()
//const port = 3000

app.set('view engine', 'pug')
//app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res) =>{
  res.render('index',
  {
    lat: 37.33182,
    lon: -122.03118
   })
})
//I tried to do some rerendering in here but i realized i could just move all
//the pubnub api stuff to the client, which makes much more sense and takes
//better advantage of pubnub's ease of client to client
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
