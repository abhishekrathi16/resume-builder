import { ScriptProps } from "next/script";
import NavBar from "./Navbar";

const Layout: React.FC<ScriptProps> = ({ children }) => {
  return (
    <>
    <div>Layout</div>
    <NavBar/>
    <div>{children}</div>
    </>
  );
};

export default Layout;
