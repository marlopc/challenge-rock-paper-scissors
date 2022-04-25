import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Layout;
