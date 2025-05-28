import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import auth from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
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
    const googleLogIn=()=>{
      setLoading(true)
      return signInWithPopup(auth,googleProvider)
    }

    // signOut
    const signOutUser=()=>{
      setLoading(true)
      return signOut(auth)

    }

    useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currenUser=>{
      setUser(currenUser)
      setLoading(false)
      console.log('user in the auth change', currenUser)
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
     googleLogIn

        
    }
    return (
      <AuthContext value={authInfo}>
        {children}
      </AuthContext>
)};

export default AuthProvider;