// Firebase configuration
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

const messaging = firebase.messaging();
messaging.usePublicVapidKey('BASwHA_FyRTK-6bf1zj6d69s-g7mu9z-5HblXA_sR7RR_gTzmHiPepCYBy2gM_lNNdIvTsKS9yKdDhs6COsINyI');
let token;

// Seek notification permission
Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
        console.log('Notification permission granted.');

        messaging.getToken().then((refreshedToken) => {
            token = refreshedToken;
            // Send token to server
        }).catch((err) => {
            console.log('Unable to retrieve refreshed token ', err);
        });
    } else {
        console.log('Unable to get permission to notify.');
    }   
});

// When token get refreshed
messaging.onTokenRefresh(() => {
    messaging.getToken().then((refreshedToken) => {
        console.log('Token refreshed.');
        token = refreshedToken;
        // Send token to server
    }).catch((err) => {
        console.log('Unable to retrieve refreshed token ', err);
    });
});