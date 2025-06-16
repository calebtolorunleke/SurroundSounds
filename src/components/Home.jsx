import React, { useState } from "react";
import soundIMG from "../assets/surroundsound.jpg";

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

      <div className="grid grid-rows px-10 py-10 md:py-10 gap-15 md:gap-20 md:py-25 md:grid-cols-3 bg-white border-t-4 border-l-4 border-r-2 border-b-2 border-gray-400 mx-3 md:mx-15 rounded-xl text-pink-900 md:border-t-8 md:border-l-8 md:border-r-4 md:border-b-4 ">
        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="text-center font-bold md:text-3xl md:px-15">
            WIRELESS HEADPHONES
          </h1>
          <ul className="list-none space-y-2">
            <li className="relative pl-5 before:content-['–'] before:absolute before:left-0 before:text-black">
              Exceptional Sound Quality: Deep bass, crisp highs, and rich,
              detailed sound
            </li>
            <li className="relative pl-5 before:content-['–'] before:absolute before:left-0 before:text-black">
              Comfortable Design: Soft ear cushions and adjustable headband for
              long-lasting wear
            </li>
            <li className="relative pl-5 before:content-['–'] before:absolute before:left-0 before:text-black">
              Durable Construction: Built to last with high-quality materials
              and craftsmanship
            </li>
            <li className="relative pl-5 before:content-['–'] before:absolute before:left-0 before:text-black">
              Long Battery Life: Up to [14] hours of playback on a single charge
            </li>
          </ul>

          <button className="bg-pink-900 text-white mx-25 py-2 md:py-5 md:mx-20 rounded-2xl">
            BUY NOW
          </button>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={soundIMG}
            alt=""
            className="object-coover border-5 rounded-full h-50 w-50  md:h-90 md:w-100"
          />
        </div>

        <h3 className="flex flex-row items-end font-bold">
          SOUND THAT SURROUNDS <br />
          <br /> STYLE THAT INSPIRES
        </h3>
      </div>
    </div>
  );
};

export default Home;
