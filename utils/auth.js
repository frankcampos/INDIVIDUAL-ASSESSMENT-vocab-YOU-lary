import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  document.querySelector('#login-form-container').innerHTML = '';
};

const signOut = () => {
  firebase.auth().signOut();
  document.querySelector('#app').innerHTML = '';
};

export { signIn, signOut };
