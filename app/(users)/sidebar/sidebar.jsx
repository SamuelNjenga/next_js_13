"use client";
import { createContext, useContext, useState } from "react";
import Subnav from "./Subnav";

const SidebarContext = createContext();

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isOpen }}>
      <SidebarNav />
    </SidebarContext.Provider>
  );
}

function SidebarNav() {
  let { isOpen } = useContext(SidebarContext);

  return (
    <div>
      <p>Home</p>
      {isOpen && <Subnav />}
    </div>
  );
}
