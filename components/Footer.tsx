"use client";

import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-decoration" aria-hidden="true">
        <span>✦</span>
        <i />
        <span>✦</span>
      </div>

      <div className="footer-glow footer-glow-left" />
      <div className="footer-glow footer-glow-right" />

      <div className="footer-main">
        <div className="footer-brand-column">
          <a href="/" className="footer-brand">
            <span className="footer-brand-mark"></span>

            <div>
            <strong>
    {language === "ta"
      ? "அசல் சிச்சாபாய்"
      : "Asal Sichabai"}
  </strong>
              <small>
                {language === "ta"
                  ? "சந்தனக் கடை"
                  : "SANDALWOOD STORE"}
              </small>
            </div>
          </a>

          <p>
            {language === "ta"
              ? "தூய நறுமணம், பாரம்பரியம் மற்றும் இறை அருள். மதுரையின் இதயத்திலிருந்து பாரம்பரிய பூஜைப் பொருட்கள்."
              : "Pure fragrance, living tradition and divine blessings. Authentic pooja essentials from the heart of Madurai."}
          </p>

          <span className="footer-tamil">
            தூய்மை • பக்தி • பாரம்பரியம்
          </span>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <span>Facebook</span>
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <span>YouTube</span>
            </a>

            <a
             href="https://wa.me/919789815039"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="footer-links-column">
          <p className="footer-heading">
            {language === "ta" ? "பக்கங்கள்" : "EXPLORE"}
          </p>

          <nav className="footer-nav">
            <a href="/">
              <span>01</span>
              {language === "ta" ? "முகப்பு" : "Home"}
            </a>

            <a href="/about">
              <span>02</span>
              {language === "ta" ? "எங்களைப் பற்றி" : "About Us"}
            </a>

            <a href="/products">
              <span>03</span>
              {language === "ta" ? "பூஜைப் பொருட்கள்" : "Pooja Products"}
            </a>

            <a href="/tradition">
              <span>04</span>
              {language === "ta" ? "புனித பாரம்பரியம்" : "Sacred Tradition"}
            </a>

            <a href="/contact">
              <span>05</span>
              {language === "ta" ? "தொடர்புக்கு" : "Contact Us"}
            </a>
          </nav>
        </div>

        <div className="footer-contact-column">
          <p className="footer-heading">
            {language === "ta"
              ? "எங்கள் கடைக்கு வருக"
              : "VISIT OUR STORE"}
          </p>

          <div className="footer-contact-item">
            <span>⌖</span>

            <div>
              <small>
                {language === "ta" ? "முகவரி" : "LOCATION"}
              </small>

              <p>
                {language === "ta"
                  ? "சந்தனம் கடை"
                  : "Santhanam Store"}
                <br />
                {language === "ta"
                  ? "மதுரை, தமிழ்நாடு"
                  : "Madurai, Tamil Nadu"}
              </p>
            </div>
          </div>

          <div className="footer-contact-item">
            <span>☎</span>

            <div>
              <small>
                {language === "ta"
                  ? "தொலைபேசி / WHATSAPP"
                  : "PHONE / WHATSAPP"}
              </small>

              <a href="tel:+9197898 15039">
               +9197898 15039
              </a>
            </div>
          </div>

          <div className="footer-contact-item">
            <span>✉</span>

            <div>
              <small>
                {language === "ta"
                  ? "மின்னஞ்சல்"
                  : "EMAIL ADDRESS"}
              </small>

              <a href="mailto:contact@santhanalstore.com">
                contact@santhanalstore.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-hours-column">
          <p className="footer-heading">
            {language === "ta"
              ? "திறந்திருக்கும் நேரம்"
              : "OPENING HOURS"}
          </p>

          <div className="footer-hours">
            <div>
              <span>
                {language === "ta"
                  ? "திங்கள் – சனி"
                  : "Monday – Saturday"}
              </span>

              <strong>
                {language === "ta"
                  ? "காலை 8:00 – இரவு 9:00"
                  : "8:00 AM – 9:00 PM"}
              </strong>
            </div>

            <div>
              <span>
                {language === "ta"
                  ? "ஞாயிறு"
                  : "Sunday"}
              </span>

              <strong>
                {language === "ta"
                  ? "காலை 8:00 – இரவு 9:00"
                  : "8:00 AM – 9:00 PM"}
              </strong>
            </div>

            <div>
              <span>
                {language === "ta"
                  ? "திருவிழா நாட்கள்"
                  : "Festival Days"}
              </span>

              <strong>
                {language === "ta"
                  ? "நாள் முழுவதும் திறந்திருக்கும்"
                  : "Open All Day"}
              </strong>
            </div>
          </div>

          <div className="footer-open-status">
            <i />

            <div>
              <small>
                {language === "ta"
                  ? "கடை நிலை"
                  : "STORE STATUS"}
              </small>

              <strong>
                {language === "ta"
                  ? "அனைத்து நாட்களிலும் திறந்திருக்கும்"
                  : "Open All Days"}
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-mantra">
        <span>✦</span>
        <p>பாண்டிய குலப் பேரரசி! மதுரை மீனாட்சி தாயே!</p>
        <span>✦</span>
      </div>

      <div className="footer-bottom">
        <small>
          {language === "ta"
            ? "© 2026 சந்தனம் கடை, மதுரை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
            : "© 2026 Santhanam Store, Madurai. All rights reserved."}
        </small>

        <div>
          <a href="/">
            {language === "ta"
              ? "தனியுரிமைக் கொள்கை"
              : "Privacy Policy"}
          </a>

          <span>•</span>

          <a href="/">
            {language === "ta"
              ? "விதிமுறைகள்"
              : "Terms & Conditions"}
          </a>
        </div>

        <a href="#top" className="footer-back-top">
          {language === "ta"
            ? "மேலே செல்ல"
            : "BACK TO TOP"}
          <span>↑</span>
        </a>
      </div>
    </footer>
  );
}