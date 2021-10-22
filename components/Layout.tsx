import { ReactNode } from "react";
import Meta from "./Meta";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Meta />
      {children}
    </>
  );
};

export default Layout;
