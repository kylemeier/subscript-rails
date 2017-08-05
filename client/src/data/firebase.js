import firebase from 'firebase';

const config = {
		apiKey: "AIzaSyA8hpHFcM1ARUq5JBObymEUlIzZj1GpYEM",
		authDomain: "subscript-cfd5d.firebaseapp.com",
		databaseURL: "https://subscript-cfd5d.firebaseio.com",
		storageBucket: "subscript-cfd5d.appspot.com",
		messagingSenderId: "455690313086"
};

const database = firebase.initializeApp(config).database();

export default database;