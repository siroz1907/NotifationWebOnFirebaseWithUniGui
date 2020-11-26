// Your web app's Firebase configuration
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
messaging
	.requestPermission()
	.then(function () {
		console.log('Yetki izni verildi.');
		return messaging.getToken();		
	})
	.then(function(token){
		console.log("Token :"+token);
	});

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  
  const notificationOption={
	  body:payload.notification.body,
	  icon:payload.notification.icon
  };
  
  if(Notification.permission === "granted"){
	var notification = new Notification(payload.notification.title
								, notificationOption);
	
	
	notification.onclick=function(ev){
		ev.preventDefault();
		window.open(payload.notification.click_action, 'blank');
		notification.close();
	}	
  }
  // ...
});


function notifyMe() {	
	
  // Let's check if the browser supports notifications  
  if (!("Notification" in window)) {
	console.log('HATA !');
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    console.log('browser izin verildi !');
	
	// If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
	console.log('browser izin VERİLMEDİ !');  
	  
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }else{
	  console.log('Hiç bir şarta girmedi !');
  }
}  