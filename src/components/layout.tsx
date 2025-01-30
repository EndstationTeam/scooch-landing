import React from "react";
import Footer from "./footer";
import Header from "./header";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray leading-normal tracking-normal">
      {/* Header at the top */}
      <Header />
      
      {/* Main content grows to fill space */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;