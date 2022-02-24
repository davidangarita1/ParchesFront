
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


const projectId = import.meta.env.VITE_PROJECT_ID || 'parches-84287'
const appId = import.meta.env.VITE_APP_ID || '1:1030629267665:web:ac8500dd643ff8684dcdf0'
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET || 'parches-84287.appspot.com'
const apiKey = import.meta.env.VITE_API_KEY || 'AIzaSyD2qlECWviWVcutEYFd4G-XGlM-rZzR6Wo'
const authDomain = import.meta.env.VITE_AUTH_DOMAIN || 'parches-84287.firebaseapp.com'
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID || '1030629267665'

export const app = firebase.initializeApp({
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
})

export const google = new firebase.auth.GoogleAuthProvider()
