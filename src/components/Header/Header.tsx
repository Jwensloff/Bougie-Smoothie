"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const smoothieTypes = [
    { type: "Berry", href: "/berry-recipes" },
    { type: "Tropical", href: "/tropical-recipes" },
    { type: "Green", href: "/green-recipes" },
    { type: "Creamy", href: "creamy-recipes" },
    { type: "Protein", href: "/protein-recipes" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="flex justify-between items-center">
          <div className="cursor-pointer">
            <Image
              src="/smoothie.png"
              alt="smoothie icon/"
              height={70}
              width={70}
            />
          </div>
          {/* Menu icon */}
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
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15" : "top-[-490px]"
          }`}
        >
          {smoothieTypes.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.type}>
              <a
                href={link.href}
                className="flex text-center text-gray-800 hover:text-blue-400 duration-300"
              >
                {link.type}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

{
  /* <header className="p-[1rem] flex justify-between w-full items-center mx-auto">
<div className="md:static absolute md:min-h-fit bg-white min-h-[60vh] md:width-auto left-0 top-[-100%] w-full flex items-center ">
  <div className="flex md:flex-row flex-col">{btns}</div>
</div>
</header> */
}
