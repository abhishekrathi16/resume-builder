import "../styles/globals.css";
import Layout from "../components/Layout";
// import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: any): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp;
