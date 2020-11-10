const firebase = require('firebase');

const signIn = (email, password) => (
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(result => result.user.uid)
        .catch(err => {
            throw err;
        })
);

const signUp = (email, password) => (
    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(result => result.user.uid)
        .catch(err => {
            throw err;
        })
);

module.exports ={
    signIn,
    signUp,
};