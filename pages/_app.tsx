import "../styles/globals.css";
import Layout from "../components/Layout";
import SignIn from "../components/Authentication/SignIn";
import SignUp from "../components/Authentication/SignUp";
import Toast from "../components/Toast";
import "../styles/globals.css";

import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useAuthStore } from "../store/SignIn_SignOut";
import { UserData } from "../store/SignIn_SignOut";

const MyApp = ({ Component, pageProps }: any): JSX.Element => {
  const { setUser } = useAuthStore((state) => ({
    setUser: state.setUser,
  }));
  //  hydrate global storage after refresh
  useEffect(() => {
    let value = localStorage.getItem("userInfo");
    if (typeof value === "string") {
      let userInfo: UserData = JSON.parse(value);
      setUser(userInfo, true);
    }
  }, [setUser]);

  return (
    <Layout>
      <Toast /> {/*  For showing notification in toast  */}
      <SignIn />
      <SignUp />
      <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp;
