import React from "react";

const Nav = () => (
  <nav id="header" className="fixed w-full z-10 top-0">
    <div
      id="progress"
      className="h-1 z-20 top-0"
      style={{
        background:
          "linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)",
      }}
    ></div>

    <div className="w-full flex flex-wrap items-center justify-between">
      <div className="pl-4">
        <a
          className="no-underline hover:no-underline font-extrabold text-xl"
          href="#"
        >
          Steamholic
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
