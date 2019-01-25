// var PubNub = require('pubnub')
// exports.subscribe = function(uuid) {
//
//   var pubnub = new PubNub({
//     subscribeKey: "sub-c-6d6a767c-112a-11e9-abd1-2a488504b737",
//     publishKey: "pub-c-29fb8b6a-3c2a-43be-8bc6-dcc74275a575"
//   })
//   pubnub.addListener({
//     status: function(statusEvent) {
//       if (statusEvent.category === "PNConnectedCategory") {
//         console.log("connected")
//       }
//     },
//     message: function(msg) {
//       console.log(msg.message);
//
//     },
//     presence: function(presenceEvent) {
//         // handle presence
//     }
//   })
//   pubnub.subscribe({
//     channels: [uuid]
//   });
// };
