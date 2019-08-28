import React from 'react';
import ReactDOM from 'react-dom';

//internal components
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//css
import "./css/main.css";
import "./css/animate.css";
import firebase from "firebase"

// let firebaseConfig = {
//     apiKey: "AIzaSyCvjonurYN_HdYH1FEgDA2rJMfypwxVPZU",
//     authDomain: "scrabblr-firebase.firebaseapp.com",
//     databaseURL: "https://scrabblr-firebase.firebaseio.com",
//     projectId: "scrabblr-firebase",
//     storageBucket: "",
//     messagingSenderId: "64749630386",
//     appId: "1:64749630386:web:54139cd5b63a6c45"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//bolt that app on the DOM y'all
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
