import React, { useState } from "react";

const Home = () => {
  //   const showMenu = () => console.log("okay");
  const [Menu, showMenu] = useState(false);
  return (
    <div className="h-screen bg-[linear-gradient(to_right,_lightpink_50%,_#b05060_50%)]">
      <header className="flex flex-row justify-between items-center px-5 py-1 md:px-20 md:py-5 text-white">
        <h1 className="font-thin text-sm md:text-lg">
          SURROUND<span className="font-bold">SOUND</span>
        </h1>
        <ul className="hidden md:flex gap-85 items-center justify-between">
          <li>HOMEPAGE</li>
          <li>CATEGORIES</li>
          <li>BLOGS</li>
        </ul>

        <button
          className="md:hidden font-bold text-xl"
          onClick={() => showMenu(!Menu)}
        >
          ☰
        </button>
      </header>

      {Menu && (
        <ul className="md:hidden flex flex-col gap-1 text-white bg-black/60 rounded-xl backdrop-blur-sm w-30 text-start p-3 absolute right-4">
          <li>HOMEPAGE</li>
          <li>CATEGORIES</li>
          <li>BLOGS</li>
        </ul>
      )}

      <div className="bg-white border border-grey-200 mx-10">
        <div>
          <h1>WIRELESS HEADPHONES</h1>
          <ul>
            <li>
              Exceptional Sound Quality: Deep bass, crisp highs, and
              rich,detailed sound
            </li>
            <li></li>
          </ul>
          <button></button>
        </div>
        <img src="" alt="" />
        <h3></h3>
      </div>
    </div>
  );
};

export default Home;
