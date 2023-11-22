import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { app } from "../firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

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

    // google provider
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const updateUser = (name, photo)=>{
        setLoading(true);
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
  

    useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser){
                // get token and store client side
                const userInfo ={email: currentUser.email};
                axiosPublic.post('/jwt',userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                // TODO:Remove Token
                localStorage.removeItem('access-token')
            }
            setLoading(false)
            console.log('observer', currentUser);
            
        })

        return ()=>{
            unSubscribe()
        }

    }, [axiosPublic])

    const authInfo ={
        user,
        loading,
        createUser,
        logInUser,
        logOutUser,
        updateUser,
        googleSignIn

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;