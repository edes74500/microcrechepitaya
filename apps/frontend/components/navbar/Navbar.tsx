"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const linksCss = "hover:text-accent transition-colors font-semibold text-lg text-foreground";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container !bg-muted border-b-1 border-gray-300">
      <div className="navbar">
        {/* Logo à gauche */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo/logo2.png"
              alt="Logo Pitaya"
              width={50}
              height={50}
              className="rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] [filter:drop-shadow(0_4px_4px_rgba(0,0,0,0.25))]"
            />
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-bold tracking-wide leading-none">Pitaya</span>
              <span className="text-sm font-light tracking-wider opacity-90 leading-none">micro crèche</span>
            </div>
          </Link>
        </div>

        {/* Menu hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-primary text-2xl">
            &#9776; {/* Icône hamburger */}
          </button>
        </div>

        {/* Navigation à droite */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/equipe" className={linksCss}>
            L'équipe
          </Link>
          <Link href="/valeurs" className={linksCss}>
            Nos valeurs
          </Link>

          <Link href="/contact" className={linksCss}>
            Contact
          </Link>
          <Link href="/pre-inscription" className={linksCss}>
            <Button variant={"secondary"}>Pré-inscription</Button>
          </Link>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-50 text-primary "
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          <button onClick={toggleMenu} className="absolute top-6 right-6 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col h-full w-full">
            <div className="flex-col flex text-center items-center justify-center flex-grow gap-4">
              {/* Logo au centre */}
              <div className="flex items-center w-full justify-center">
                <Link href="/" className="flex items-center gap-2" onClick={toggleMenu}>
                  <Image
                    src="/logo/logo2.png"
                    alt="Logo Pitaya"
                    width={80}
                    height={80}
                    className="rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] [filter:drop-shadow(0_4px_4px_rgba(0,0,0,0.25))]"
                  />
                  <div className="flex flex-col leading-none">
                    <span className="text-3xl font-bold tracking-wide leading-none">Pitaya</span>
                    <span className="text-xl font-light tracking-wider opacity-90 leading-none">micro crèche</span>
                  </div>
                </Link>
              </div>
              <Link href="/equipe" className="text-xl">
                L'équipe
              </Link>

              <Link href="/valeurs" className="text-xl" onClick={toggleMenu}>
                Nos valeurs
              </Link>

              <Link href="/contact" className="text-xl" onClick={toggleMenu}>
                Contact
              </Link>

              <Link href="/pre-inscription" className="text-xl" onClick={toggleMenu}>
                <Button variant={"secondary"}>Pré-inscription</Button>
              </Link>
            </div>
          </div>

          <Separator />
        </motion.div>
      )}
    </nav>
  );
}
