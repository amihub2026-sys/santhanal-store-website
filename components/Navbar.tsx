"use client";

import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="site-header">

      {/* LOGO */}
      <a
        className="brand"
        href="/"
        aria-label="Santhanam Store home"
      >
        <span className="brand-mark">ஸ்ரீ</span>

        <span>
          <strong>Santhanam</strong>
          <small>SANDALWOOD STORE</small>
        </span>
      </a>


      {/* DESKTOP NAVIGATION */}
      <nav
        className="desktop-nav"
        aria-label="Main navigation"
      >
        <a href="/">
          {language === "ta" ? "முகப்பு" : "Home"}
        </a>

        <a href="/about">
          {language === "ta"
            ? "எங்களைப் பற்றி"
            : "About"}
        </a>


        <a href="/tradition">
          {language === "ta"
            ?  "சேவைகள்" : "Services"}
        </a>

        <a href="/products">
          {language === "ta"
            ? "பூஜைப் பொருட்கள்"
            : "Products"}
        </a>

        <a
          className="nav-cta"
          href="/contact"
        >
          {language === "ta"
            ? "தொடர்புக்கு"
            : "Contact"}
        </a>
      </nav>


      {/* LANGUAGE BUTTON */}
      <button
        className="language-toggle"
        type="button"
        onClick={() =>
          setLanguage(
            language === "ta" ? "en" : "ta"
          )
        }
      >
        {language === "ta" ? "English" : "தமிழ்"}
      </button>


      {/* MOBILE MENU */}
      <details className="mobile-menu">

        <summary aria-label="Open menu">
          <span />
          <span />
          <span />
        </summary>

        <nav
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          <a href="/">
            {language === "ta" ? "முகப்பு" : "Home"}
          </a>

          <a href="/about">
            {language === "ta"
              ? "எங்களைப் பற்றி"
              : "About"}
          </a>

          <a href="/tradition">
            {language === "ta"
              ? "பாரம்பரியம்"
              : "Tradition"}
          </a>

          <a href="/products">
            {language === "ta"
              ? "பூஜைப் பொருட்கள்"
              : "Products"}
          </a>

          <a
            className="nav-cta"
            href="/contact"
          >
            {language === "ta"
              ? "தொடர்புக்கு"
              : "Contact"}
          </a>
        </nav>

      </details>

    </header>
  );
}