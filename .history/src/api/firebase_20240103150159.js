// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCBAu1ihRdiC3Pz5h6szdDTPX_zqyi3mrY',
  authDomain: 'shoppy-53cca.firebaseapp.com',
  databaseURL:
    'https://shoppy-53cca-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'shoppy-53cca',
  storageBucket: 'shoppy-53cca.appspot.com',
  messagingSenderId: '39541034667',
  appId: '1:39541034667:web:eca7078dac71c4764d31ee',
  measurementId: 'G-TN17M4F1SJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
