"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  let pathname = usePathname() || "/";

  const styles = {
    link: {
      active:
        "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
      passive:
        "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
    },
  };

  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <Link href="/">
                    <h1 className="text-2xl font-medium">
                      Ifeanyi <span className="text-teal-500">Omeata</span>
                    </h1>
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                <Link
                  href="/"
                  prefetch
                  className={`${
                    pathname === "/" ? styles.link.active : styles.link.passive
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/guestbook"
                  prefetch
                  className={`${
                    pathname === "/guestbook"
                      ? styles.link.active
                      : styles.link.passive
                  }`}
                >
                  GuestBook
                </Link>
                <Link
                  href="/projects"
                  prefetch
                  className={`${
                    pathname === "/projects"
                      ? styles.link.active
                      : styles.link.passive
                  }`}
                >
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
