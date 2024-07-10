"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "serviços",
    path: "/services",
  },
  {
    name: "resumo",
    path: "/resume",
  },
  {
    name: "trabalho",
    path: "/work",
  },
  {
    name: "contato",
    path: "/contact",
  },
];

const Nav = () => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathName && 
            "text-accent border-b-2 border-accent "} capitalize font-medium hover:text-accent transition-all`} >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
