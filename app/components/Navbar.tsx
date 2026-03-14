"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, Sun, Moon, Globe, ChevronDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import useTranslate from "../hooks/useTranslate";

const navLinks = [
  { key: "home", href: "/" },
  { key: "reels", href: "/reels" },
  { key: "players", href: "/players" },
  { key: "about", href: "/about" },
  { key: "blogs", href: "/blogs" },
  { key: "events", href: "/events" },
  { key: "profile", href: "/profile" }
];

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "Arabic" },
  { code: "pt", label: "Portuguese" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { t, lang, changeLang } = useTranslate();

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md border-b bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

       
        <Link href="/">
          <Image src="/logo.png" width={90} height={70} alt="logo"/>
        </Link>

        
        <div className="hidden md:flex gap-8 items-center">
 
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className="relative">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className={`text-lg ${active ? "text-[#F0B100]" : "text-white"}`}
                >
                  {t(link.key)}
                </motion.span>

                {active && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-2 h-[3px] w-full bg-red-600 rounded-full"
                  />
                )}
              </Link>
            );
          })}

       
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full border border-[#f5b400]/30"
          >
            {theme === "dark" ? (
              <Sun className="text-[#F0B100]" size={20}/>
            ) : (
              <Moon className="text-[#F0B100]" size={20}/>
            )}
          </motion.button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-4 py-2 border rounded-full"
            >
              <Globe size={16} className="text-[#F0B100]" />
              <span className="text-white">{lang.toUpperCase()}</span>
              <ChevronDown size={16}/>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{opacity:0, y:-10}}
                  animate={{opacity:1, y:0}}
                  exit={{opacity:0, y:-10}}
                  className="absolute right-0 mt-3 w-40 rounded-xl bg-[#14141c]"
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        changeLang(language.code);
                        setLangOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-white hover:bg-[#333]"
                    >
                      {language.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden text-white">
          {open ? (
            <X onClick={() => setOpen(false)} />
          ) : (
            <Menu onClick={() => setOpen(true)} />
          )}
        </div>

      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#111] overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-4 text-white border-b border-[#222]"
                onClick={() => setOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}

            {/* Mobile Language Selector */}
            <div className="px-6 py-4">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => changeLang(language.code)}
                  className={`block w-full text-left px-4 py-2 text-white hover:bg-[#333]`}
                >
                  {language.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}