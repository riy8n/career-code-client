import React, {  useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import auth from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword,  GoogleAuthProvider,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth ,email,password)


    }
    // singin
    const singInUser=(email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }
    //  googleLogIn
   const googleLogin = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
          .then(result => {
            const logInGoogle = result.user;
            setUser(logInGoogle); 
            return logInGoogle;  
          })
          .finally(() => setLoading(false));
      };

    // signOut
    const signOutUser=()=>{
      setLoading(true)
      return signOut(auth)

    }

    useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currenUser=>{
      setUser(currenUser)
       setLoading(false);
            if (currenUser?.email) {
                axios.post('http://localhost:3000/jwt', { email: currenUser.email }, { withCredentials: true })
                    .then(res => console.log(res.data))
                    .catch(error => console.log(error))
            }

            console.log('user in the auth state change', currenUser)
        })
    return ()=>{
      unsubscribe()
    }
    },[])
    

    const authInfo={
        loading,
        user,
        createUser,
        singInUser,
        signOutUser,
     googleLogin 

        
    }
    return (
      <AuthContext value={authInfo}>
        {children}
      </AuthContext>
)};

export default AuthProvider;