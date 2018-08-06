import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    databaseURL: 'https://xxx.firebaseio.com/'
  })
}

export default firebase
