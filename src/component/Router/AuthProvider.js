import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase';
import { useState } from 'react';


const auth = getAuth(app)
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const googleLogin = (Provider) => {
        return signInWithPopup(auth, Provider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUseProfiles = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const logInSite = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        // setLoading(true);
        return signOut(auth);
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

        })
        return () => {
            unsubscribe()
        }

    }, [])


    const authInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        logInSite,
        logOut,
        updateUseProfiles,

    };



    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;


