import Navbar from "@/components/NavBar/NavBar";
import React from "react";

const MainAppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-slate-50 dark:bg-slate-950 h-screen">
      <Navbar />
      {children}
    </main>
  );
};

export default MainAppLayout;
