"use client";

import { useEffect, useState } from "react";
import en from "../messages/en.json";
import ar from "../messages/ar.json";
import pt from "../messages/pt.json";

const translations: any = { en, ar, pt };

export default function useTranslate() {
  const [lang, setLang] = useState("en");

  // Load saved language on first render
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLang(savedLang);
    document.documentElement.lang = savedLang;
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, []);

  // Change language dynamically
  const changeLang = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  // Translate key
  const t = (key: string) => translations[lang]?.[key] || key;

  return { t, lang, changeLang };
}