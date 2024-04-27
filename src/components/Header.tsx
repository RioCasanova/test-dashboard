import React from "react";
import Link from "next/link";
import Image from "next/image";
import Session from "next-auth/react";
import { useSession, signOut } from "next-auth/react";

interface Link {
  href: string;
  label: string;
}

interface HeaderProps {
  imgLink: string;
  links?: Link[];
  showLogout: boolean;
}

const Header: React.FC<HeaderProps> = ({
  imgLink,
  links,
  showLogout = false,
}) => {
  const maxLinks = 3;
  const { data: session } = useSession();

  const renderLinks = () => {
    if (links && links.length > 0) {
      return links.slice(0, maxLinks).map((link, index) => (
        <Link href={link.href} key={index} passHref>
          <a className="font-semibold text-white max-md:max-w-full">
            {link.label}
          </a>
        </Link>
      ));
    }
    // Handle empty links array, returning null will omit it from rendering
    return null;
  };

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" }); // Redirect to the homepage
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-black bg-opacity-20 backdrop-filter backdrop-blur-md px-12 py-2 max-md:px-5">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center max-md:flex-wrap">
        <Link href={imgLink} passHref>
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
          {renderLinks()}

          {/* Logout button - always visible if a session exists */}
          {session ? (
            <button
              onClick={handleLogout}
              className="font-semibold text-white max-md:max-w-full hover:text-violet-700"
            >
              Logout
            </button>
          ) : null}
        </nav>
      </div>
    </header>
  );
};

export default Header;
