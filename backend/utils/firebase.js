import firebase from 'firebase';

export const signIn = (email, password) => (
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(result => result.user.uid)
        .catch(err => err)
);

export const signUp = (email, password) => (
    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(result => result.user.uid)
        .catch(err => err)
);