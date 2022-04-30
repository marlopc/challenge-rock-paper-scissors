import Head from "next/head";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#1f3756" />
      </Head>
      <main className="main">{children}</main>
    </>
  );
};

export default Layout;
