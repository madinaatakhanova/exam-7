"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "@/assets/Logo.svg";
import Login from "@/assets/Login.svg";
import Order from "@/assets/Order.svg";
import Favorites from "@/assets/Favorites.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentPath(router.pathname);
  }, [router.pathname]);

  return (
    <header
      className={
        currentPath === "/"
          ? "absolute top-[25px] left-0 w-full bg-white z-50"
          : "sticky top-0 left-0 bg-[#F5F5F5] z-50"
      }
    >
      <nav
        style={{ position: "fixed", top: "0", zIndex: "100" }}
        className={
          currentPath === "/"
            ? "bg-white w-full py-[15px]"
            : "bg-[#F5F5F5] w-full py-[15px]"
        }
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-[24px]">
            <Link
              className="font-semibold text-[14px] loading-[18px] tracking-[0.2px] px-2 py-[10px]"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-semibold text-[14px] loading-[18px] tracking-[0.2px] px-2 py-[10px]"
              href="/clothes"
            >
              Clothes
            </Link>
            <Link
              className="font-semibold text-[14px] loading-[18px] tracking-[0.2px] px-2 py-[10px]"
              href="/shoes"
            >
              Shoes
            </Link>
            <Link
              className="font-semibold text-[14px] loading-[18px] tracking-[0.2px] px-2 py-[10px]"
              href="/accessories"
            >
              Accessories
            </Link>
          </div>
          <Link href="/">
            <Image src={Logo} alt="Logo" className="w-[70px] h-[40px]" />
          </Link>
          <div className="flex items-center gap-5">
            <form>
              <label className="flex items-center gap-3">
                <input
                  ntype="search"
                  placeholder="Search..."
                  className="border-b-2 px-2 py-1 focus:outline-none bg-transparent"
                />
              </label>
            </form>
            <Link className="text-[18px] block pt-1 icons" href="/login">
              <Image
                src={Login}
                alt="login"
                className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                }`}
                onLoadingComplete={() => setIsLoading(false)}
              />
            </Link>
            <Link className="text-[18px] block pt-1 icons" href="/order">
              <Image
                src={Order}
                alt="order"
                className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                }`}
                onLoadingComplete={() => setIsLoading(false)}
              />
            </Link>
            <Link className="text-[18px] block pt-1 icons" href="/favorites">
              <Image
                src={Favorites}
                alt="favorites"
                className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                }`}
                onLoadingComplete={() => setIsLoading(false)}
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
