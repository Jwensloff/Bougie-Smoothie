"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const smoothieTypes = [
    { type: "Berry", href: "/berry-recipes" },
    { type: "Tropical", href: "/tropical-recipes" },
    { type: "Green", href: "/green-recipes" },
    { type: "Creamy", href: "creamy-recipes" },
    { type: "Protein", href: "/protein-recipes" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex items-center bg-orange-500 justify-between bg-white py-4 md:px-10 px-7">
        <div className="flex justify-between items-center">
          <div className="cursor-pointer">
            <Image
              src="/smoothie.png"
              alt="smoothie icon/"
              height={70}
              width={70}
            />
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer md:hidden w-7 h-7"
          >
            {open ? (
              <FontAwesomeIcon icon={faXmark} size="xl" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="xl" />
            )}
          </div>
        </div>
        <ul
          className={`md:flex bg-orange-500 md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15" : "top-[-490px]"
          }`}
        >
          {smoothieTypes.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.type}>
              {/* <Link
                href={link.href}
                className="text-purple-800 text-xl hover:text-blue-500 hover:underline duration-300 "
              > */}

              <Link
                href={link.href}
                className={`${pathname === link.href ? "underline" : ""} px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-orange-200 text-purple-700 inline-block`}
              >
                <span className="bg-orange-500 absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90 "></span>
                <span className="relative group-hover:text-white">
                  {link.type}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
