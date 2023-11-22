import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const createUser =(email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const logInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOutUser = ()=>{
        setLoading(true);
        return signOut(auth)
    }

    const updateUser = (name, photo)=>{
        setLoading(true);
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
  

    useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
           setLoading(false)
            setUser(currentUser);
            console.log('observer', currentUser);
            
        })

        return ()=>{
            unSubscribe()
        }

    }, [])

    const authInfo ={
        user,
        loading,
        createUser,
        logInUser,
        logOutUser,
        updateUser,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;