import { ScriptProps } from "next/script";

const Layout: React.FC<ScriptProps> = ({ children }) => {
  return (
    <div>
      <div>Navbar</div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
