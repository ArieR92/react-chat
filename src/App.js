import React, {useState, useEffect} from 'react'
//firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
//componentes
import Button from './components/Button';

firebase.initializeApp({
  apiKey: "AIzaSyAEiUcenXB1ZVn-w8-rOF_bi-gezv2iYk4",
  authDomain: "react-chat-a9550.firebaseapp.com",
  projectId: "react-chat-a9550",
  storageBucket: "react-chat-a9550.appspot.com",
  messagingSenderId: "279380311543",
  appId: "1:279380311543:web:bc6a6dae07e68e9ba902f2"
}

  
)


function App() {

  const [user, SetUser] = useState(()=> auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  useEffect(()=> {
   const unsubscribe = auth.onAuthStateChangued(user => {
      if (user) {
        setUser (user);
      } else {
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    });
    //clean unsubsribe;
    return unsubscribe;
  }, [])

  const signInWithGoogle = async () => {
    //llamado al api de google
    const provider = new firebase.auth.GoogleAuthProvider();
    //configurar el lenguaje del dispositivo del usuario
    auth.useDeviceLanguage();
    //inicio del login
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  if (initializing) return 'Loading...';

  return (
  <div>
    {user ? ('Bienvenido al Chat') : (<Button onClick={signInWithGoogle}>Entrar con Google</Button>)}
  </div>
  );


 
  

};//final de la funcion principal




  

export default App;
