import { ScriptProps } from "next/script";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC<ScriptProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
