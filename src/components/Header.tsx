/* eslint-disable @next/next/no-img-element */
// Header.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full fixed top-0 z-50 bg-black bg-opacity-20 backdrop-filter backdrop-blur-md px-12 py-2 max-md:px-5">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center max-md:flex-wrap">
        <Link href="/" passHref>
          <div className="flex flex-1 text-2xl font-semibold">
            <Image
              src="/datalynx_logo_violet.png"
              alt="Company Logo"
              width={80}
              height={20}
              priority
            />
            <div className="my-auto flex justify-center">
              <div className="flex-1">
                <span className="text-white">Data</span>
                <span className="text-violet-700">Lynx</span>
              </div>
            </div>
          </div>
        </Link>
        <nav className="flex gap-7.5 max-md:gap-5">
          {/* Add more navigation links as needed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
