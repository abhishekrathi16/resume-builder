import "../styles/globals.css";
import Layout from "../components/Layout";
import SignIn from "../components/Authentication/SignIn";
import SignUp from "../components/Authentication/SignUp";
import useSignInStore from "../store/SignIn_SignOut";
// import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: any): JSX.Element => {
  const state = useSignInStore();
  return (
    <Layout>
      <SignIn />
      <SignUp />
      <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp;
