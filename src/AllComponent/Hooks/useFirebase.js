
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
  } from "firebase/auth";
  import { useEffect, useState } from "react";
  import firebaseAuthentication from "../Firebase/firebase.init"
  firebaseAuthentication()
  
  const auth = getAuth();
  const useFirebase = () => {
    const [users, setUsers] = useState({});
  const [isloading ,setIsloading ] = useState(true);
    // Singin useing Google
  
    const signinUsingGoogle = () => {
      setIsloading(true)
      const googleProvider = new GoogleAuthProvider();
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const { displayName, email, photoURL } = result.user;
          console.log(result.user);
          const logedInuser = {
            name: displayName,
            email: email,
            photo: photoURL,
          };
          setUsers(logedInuser);
        })
        .finally(() => setIsloading(false));
  
        
    };
  
    // Sign in useing Facebook
  /*--------- Note: Fb sign in doing problem . I couldn't fixed it------------------------------------------------------ 
    const FacebookSignin = () => {
      const facebookprovider = new FacebookAuthProvider();
      signInWithPopup(auth, facebookprovider)
        .then((result) => {
          const { displayName, email, photoURL, uid } = result.user;
          console.log(result.user);
  
          const logeduser = {
            name: displayName,
            email: email,
            photo: photoURL,
          };
  
          setUsers(logeduser);
        })
  
        .finally(() => setIsloading(false));
    };
  
   */
    
    // showing data all tabs
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUsers(user);
        } else {
          setUsers({});
        }
        setIsloading(false);
      });
      return () => unsubscribe;
    }, []);
    const logOut = () => {
     setIsloading(true)
      signOut(auth).then(() => {})
  
      .finally(() => setIsloading(false));
  
    };
  
    return {
      users,
      signinUsingGoogle,
   
      isloading,
      logOut,
  
    };
  };
  
  export default useFirebase;
