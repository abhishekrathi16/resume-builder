import { ScriptProps } from "next/script";
import NavBar from "./Navbar";

const Layout: React.FC<ScriptProps> = ({ children }) => {
  return (
    <>
    <NavBar/>
    <div>{children}</div>
    </>
  );
};

export default Layout;
