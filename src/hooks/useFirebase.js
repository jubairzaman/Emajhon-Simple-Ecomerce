import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializationAuthentication from "../Firebase/Firebase.init";
initializationAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const singInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider)

    }

    const LogOut = () => {
        signOut(auth)
            .then(() => {
                setUser('')

            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {

            if (user) {
                setUser(user);
            }
            else {
                //user is sing out
            }
        })
    }, [])

    return {
        user,
        LogOut,
        singInUsingGoogle
    }




}
export default useFirebase;