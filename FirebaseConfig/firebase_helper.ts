import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import useSignInStore, {
  useAuthStore,
  UserData,
  useSignUpStore,
} from "../store/SignIn_SignOut";
import { db, auth } from "../FirebaseConfig/FirebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import demoDetails from "../helpers/constants/resume-data.json";
import { toast } from "react-toastify";
import { collection, getDocs } from "firebase/firestore";

const useAuth = () => {
  const notify = (content: string) => {
    toast(content);
  };
  const router = useRouter();
  const { User, setUser, loading, setLoading } = useAuthStore((state) => ({
    User: state.User,
    setUser: state.setUser,
    loading: state.loading,
    setLoading: state.setLoading,
  }));
  const { open, setOpen } = useSignUpStore((state) => ({
    open: state.open,
    setOpen: state.setOpen,
  }));

  const { openSignIn, setOpenSignIn } = useSignInStore((state) => ({
    openSignIn: state.open,
    setOpenSignIn: state.setOpen,
  }));

  const createUser = async (name: string, email: string, password: string) => {
    setLoading();

    //  check password length
    if(password.length <8)
    {
      notify("Please provide valid password");
      setLoading();
      throw Error("Please provide valid password");
    }

    // check email is in valid format or not

    if (!/\S+@\S+\.\S+/.test(email)) {
      notify("Provide valid email format");
      setLoading();
      throw Error("Provide valid email format");
    }

    // check email already exists or not

    const collectionSnapshot = await getDocs(collection(db, "resumedata"));
    collectionSnapshot.forEach((doc) => {
      if (email == doc.data().email) {
        notify("Email Already in Use");
        setLoading();
        throw Error("Email Already in Use");
      }
    });

    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res.user.email === null) {
          throw "error:email cannot be null";
        } else {
          setUser(
            {
              name: name,
              email: res.user.email,
              userId: res.user.uid,
            },
            true
          );
          console.log("User", User);
          localStorage.setItem("userInfo", JSON.stringify(User));
          setLoading();
          setOpen(open);

          const getData = async () => {
            const ref = doc(db, "resumedata", User.userId); // getting refrence of collection
            demoDetails.name = User.name;
            demoDetails.email = email;
            await setDoc(ref, demoDetails);
          };

          getData();
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading();
        setOpen(open);
        notify("Wrong Credential");
        throw Error("Wrong Credential");
      });
  };

  const signIn = async (email: string, password: string) => {
    setLoading();
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const getData = async () => {
          const docRef = doc(db, "resumedata", res.user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            console.log(docSnap.data().name);
            setUser(
              {
                name: docSnap.data().name,
                email: docSnap.data().email,
                userId: res.user.uid,
              },
              true
            );
          }
          setOpenSignIn(openSignIn);
          setLoading();
          localStorage.setItem("userInfo", JSON.stringify(User)); // adding user info to localstorage
          notify("Welcome My Friend, I wish i were a bird");
          router.push("/builder");
        };
        getData();
      })
      .catch((err) => {
        console.log(err);
        setLoading();
        setOpenSignIn(openSignIn);
        notify("Wrong Credential ");
      });
  };

  const logout = async () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { createUser, logout, signIn };
};

export default useAuth;
