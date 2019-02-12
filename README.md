# SafeAlert.Web

This is the website portion of the SafeAlert app! The app uses Pubnub and Clicksend to send a text with a link to this website in order to have the users contacts be notified of their movements. This uses Leaflet to create the map and display markers and popups, and PubNub to update the map with every change in the users movement. The app portion of this project is located here: https://github.com/SambaDialloB/SafeAlert

## Demo

![safealert site demo](https://github.com/SambaDialloB/SafeAlertSite/blob/master/safealertsite.gif)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [ ] Pubnub Account [Sign Up!](https://dashboard.pubnub.com/signup)

### Installing

- [ ] Clone the repo ``` git clone https://github.com/SambaDialloB/SafeAlertSite ```

You already have everything installed that you need from this repository!

## Deployment

In order to use and deploy this app you need to replace the keys with your own in one place in /views/index.pug on line 16 and 17. It will not subscribe to any user unless the url ends in /uuid/"uuid"/lat/"lat"/lon/"lon" with the "lat" and "lon" being the inital location where the app user pressed the alert button. The "uuid" is the channel name that the webpage subscribes to in order to get updates from the user. If there is no new messages it is receiving then it will only load that point.
 You should now be able to load the Real-Time updating map!

## Authors

* **Samba Diallo** - *All of itttttt :)* - [Github](https://github.com/SambaDialloB)

## Acknowledgments

* CodePath from which I learned how to create iOS apps
* My girlfriend from which i got the idea from this app



