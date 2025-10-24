import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn =(email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut=()=>{
      return signOut(auth);
  }

 const resetPass = (email)=>{
  return sendPasswordResetEmail(auth, email);
 }

const updateUser =(updatedData)=>{
  return updateProfile(auth.currentUser, updatedData);
}


const signInWithGoogle = ()=>{
  return signInWithPopup(auth, googleProvider);
}


useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
    setLoading(false);
  });
  return ()=> unsubscribe();
},[]);





  const authData = {
    createUser,
    user,
    setUser,
    signIn,
    logOut,
    resetPass,
    updateUser,
    signInWithGoogle,
    loading,
  };
  return (
    <AuthContext.Provider value={authData}> {children} </AuthContext.Provider>
  );
};

export default AuthProvider;
