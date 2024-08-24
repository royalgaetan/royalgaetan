import React from "react";
import { FaHeart } from "react-icons/fa6";

export const FooterSection = () => {
  return (
    <footer className="bg-neutral-900 text-white flex flex-col min-h-[15vh] w-full justify-center items-center">
      <p className="text-xs mb-2 block">
        Made with <FaHeart color="#F31260" className="inline" />
      </p>
      <p className="block text-xs">
        Logos & Icons from{" "}
        <a
          href="https://icons8.com/icon"
          target="_blank"
          className="hover:opacity-80 text-slate-300"
        >
          Icons8
        </a>
        {", "}
        <a
          href="https://www.vecteezy.com/free-vector/african-landscape-silhouette"
          target="_blank"
          className="hover:opacity-80 text-slate-300"
        >
          Vecteezy
        </a>
      </p>
    </footer>
  );
};
