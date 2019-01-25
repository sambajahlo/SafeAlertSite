const express = require('express');
const pug = require('pug');
var path = require('path')
var bodyParser = require('body-parser');
var PubNub = require('pubnub')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));

//PUBNUB STUFF
var pubnub = new PubNub({
  subscribeKey: "sub-c-6d6a767c-112a-11e9-abd1-2a488504b737",
  publishKey: "pub-c-29fb8b6a-3c2a-43be-8bc6-dcc74275a575"
})


app.get('/',(req,res) =>{
  res.render('index',
  {
    lat: 37.33182,
    lon: -122.03118
   })
})
// git add .
// git commit -m "testing rerendering pug and getting publishes"
// git push heroku master



app.get('/uuid/:uuid/lat/:lat/lon/:lon',(req,res)=>{
  res.render('index',
  {
    lat: req.params.lat,
    lon: req.params.lon
  })
  console.log("uuid",req.params.uuid)
  pubnub.addListener({
    status: function(statusEvent) {
      if (statusEvent.category === "PNConnectedCategory") {
        console.log("connected")
      }
    },
    message: function(msg) {
      console.log("RECEIVED MESSAGE",msg.message);

    },
    presence: function(presenceEvent) {
        // handle presence
    }
  })
  pubnub.subscribe({
    channels: [req.params.uuid]
  });
  console.log("also in here")



})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
