import { ReactNode } from "react";
import Meta from "./Meta";
// import Navbar from "./Navbar";
import InProgress from "./InProgress";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Meta />
      {/* <Navbar /> */}
      <InProgress />
      {children}
    </>
  );
};

export default Layout;
