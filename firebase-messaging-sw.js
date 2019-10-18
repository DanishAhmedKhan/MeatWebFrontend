// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
var firebaseConfig = {
    apiKey: "AIzaSyAgx1QKcRGTFuSXfSjVxkwLv7YbyP8oLwI",
    authDomain: "meat-9886e.firebaseapp.com",
    databaseURL: "https://meat-9886e.firebaseio.com",
    projectId: "meat-9886e",
    storageBucket: "meat-9886e.appspot.com",
    messagingSenderId: "218013101372",
    appId: "1:218013101372:web:64becf2f2674b2d47b8239",
    measurementId: "G-RBV4LFCBSV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
console.log('Messaging123', messaging);