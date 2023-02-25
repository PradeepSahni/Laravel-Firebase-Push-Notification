/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
// importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js');

importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
        apiKey: "AIzaSyBT6cN8euHV2K0UlWWNjg8khG5OzHvAp3Y",
        authDomain: "pushnotifiationdemo-3cbdc.firebaseapp.com",
        databaseURL: "https://pushnotifiationdemo-3cbdc-default-rtdb.firebaseio.com",
        projectId: "pushnotifiationdemo-3cbdc",
        storageBucket: "pushnotifiationdemo-3cbdc.appspot.com",
        messagingSenderId: "597548785722",
        appId: "1:597548785722:web:88896f827eb18659b2d503",
        measurementId: "G-QGZ90HESL4"
    });
  
/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    /* Customize notification here */
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };
  
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});