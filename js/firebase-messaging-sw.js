importScripts('firebase-app.js');
importScripts('firebase-messaging.js');

var firebaseConfig = {
	apiKey: "YOUR_API_KEY",
	authDomain: "YOUR_DOMAIN",
	databaseURL: "https://[YOUR_PROJECT_NAME].firebaseio.com",
	projectId: "[YOUR_PROJECT_ID]",
	storageBucket: "[YOUR_storageBucket]",
	messagingSenderId: "[YOUR_PROJECT_ID]",
	appId: "[YOUR_PROJECT_APP_ID]"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload){
	console.log(payload);
});

