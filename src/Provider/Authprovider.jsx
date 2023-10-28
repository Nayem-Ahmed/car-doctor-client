import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext()

const Authprovider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createuser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const signin = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }
    const signingoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
           setLoading(false)
            setUser(currentUser)
            console.log("current user", currentUser)

        });
        return()=>{
            return unsubscribe();
        }
    },[])


    const authInfo = {user,loading,createuser,signin,signingoogle,logout}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;