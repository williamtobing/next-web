import { ReactNode } from "react";
import Meta from "./Meta";
import Navbar from "./Navbar";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Meta />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
