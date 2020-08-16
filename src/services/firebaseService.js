
import firebase from 'firebase';



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
  const messaging=firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission)=> {
         console.log(permission)
        if (permission==="granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("Token")
                  console.log( currentToken);
                } else {
                
                  console.log('No Instance ID token available. Request permission to generate one.');
                 
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
               
              });
              
        }
        })

}
