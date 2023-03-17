import { ScriptProps } from "next/script";

const Layout: React.FC<ScriptProps> = ({ children }) => {
  return (
    <>
    <div>Layout</div>
    <div>{children}</div>
    </>
  );
};

export default Layout;
