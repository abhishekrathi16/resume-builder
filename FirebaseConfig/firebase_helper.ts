import { auth } from '../FirebaseConfig/FirebaseConfig'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { useRouter } from 'next/router';
import useSignInStore, { useAuthStore, UserData, useSignUpStore } from '../store/SignIn_SignOut';
import { db } from '../FirebaseConfig/FirebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import demoDetails from "../assets/details.json"

const useAuth = ()=>{
    const router = useRouter()
    const { User, setUser, loading, setLoading } = useAuthStore(
        (state)=>({
            User:state.User,
            setUser:state.setUser,
            loading:state.loading,
            setLoading:state.setLoading
        })
    )
    const {open, setOpen} = useSignUpStore(
        (state)=>({
            open: state.open,
            setOpen: state.setOpen
        })
    )

    const {openSignIn, setOpenSignIn} = useSignInStore(
        (state)=>({
            openSignIn:state.open,
            setOpenSignIn:state.setOpen
        })
    )

    const createUser = async(name:string, email:string, password:string)=>{
        setLoading()
        await createUserWithEmailAndPassword(auth , email , password).then((res)=>{
            if(res.user.email===null){
                throw "error:email cannot be null"
            }else{
                setUser({
                    name: name,
                    email: res.user.email,
                    userId: res.user.uid
                }  , true)
                console.log("User",User);
                setLoading()
                setOpen(open)
            }
            
        }).catch((err) => {
            console.log(err);
            setLoading()

        })

        console.log('after');
        const ref = doc(db, "resumedata", User.userId)  // getting refrence of collection  
        demoDetails.name=User.name
        await setDoc(ref, demoDetails).then(()=>{
            console.log('added document ');
        })
    }

    const signIn = async(name:string,email:string, password:string)=>{
        setLoading()
        await signInWithEmailAndPassword(auth, email, password).then((res)=>{
            setUser({
                name: name,
                email: res.user.email,
                userId: res.user.uid
            }, true)

            localStorage.setItem('userInfo', JSON.stringify(User));    // adding user info to localstorage
            setLoading()
            setOpenSignIn(openSignIn)
        }).catch((err)=>{
            console.log(err);
            setLoading()
        })
    }

    const logout = async()=>{
        signOut(auth).then(()=>{
            router.push("/")
        }).catch((err)=>{
            console.log(err);
            
        })
    }

    return {createUser, logout, signIn}

}

export default useAuth