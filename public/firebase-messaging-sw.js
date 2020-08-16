
 importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

 const firebaseConfig = {
  apiKey: "AIzaSyAWrLqQKQ7k3p7TtuR3M-5pXGEtLdR5U94",
  authDomain: "quiznotification.firebaseapp.com",
  databaseURL: "https://quiznotification.firebaseio.com",
  projectId: "quiznotification",
  storageBucket: "quiznotification.appspot.com",
  messagingSenderId: "456358217903",
  appId: "1:456358217903:web:af115d85c1edd93a51ac5a"
};
  firebase.initializeApp(firebaseConfig)
  firebase.messaging();
