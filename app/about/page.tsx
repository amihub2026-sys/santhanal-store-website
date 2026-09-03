"use client";

import { useLanguage } from "../../components/LanguageProvider";
import { useState } from "react";
export default function AboutPage() {
  const { language } = useLanguage();
const [activeValueCard, setActiveValueCard] =
  useState<number | null>(null);

const values = [
  {
    no: "01",
    symbol: "✦",

    titleTa: "தூய்மை",
    titleEn: "Purity",

    textTa:
      "இறை வழிபாட்டிற்கான ஒவ்வொரு பொருளிலும் தரமும் தூய்மையும் எங்களின் முதன்மை.",

    textEn:
      "Quality and purity remain at the heart of every sacred product we offer.",

    image: "why1.jpg",
    video: "why1.mp4",
  },

  {
    no: "02",
    symbol: "❋",

    titleTa: "பாரம்பரியம்",
    titleEn: "Tradition",

    textTa:
      "மதுரையின் ஆன்மீக மரபையும் தலைமுறைகள் தொடரும் வழிபாட்டு பாரம்பரியத்தையும் மதிக்கிறோம்.",

    textEn:
      "We honour Madurai's spiritual heritage and traditions carried through generations.",

    image: "why2.jpg",
    video: "why2.mp4",
  },

  {
    no: "03",
    symbol: "◇",

    titleTa: "நம்பிக்கை",
    titleEn: "Trust",

    textTa:
      "வாடிக்கையாளர்களின் நம்பிக்கையை தரமான பொருட்களாலும் அன்பான சேவையாலும் காக்கிறோம்.",

    textEn:
      "We build lasting trust through dependable products and warm personal service.",

    image: "why3.jpg",
    video: "why3.mp4",
  },
];
  return (
    <main className="about-page">

      {/* =================================
          ABOUT HERO
      ================================= */}

      <section className="about-page-hero">

        <div className="about-page-hero-bg" />

        <div className="about-page-hero-overlay" />

        <div className="about-page-hero-content">

          <p className="about-page-kicker">
            <span />

            {language === "ta"
              ? "எங்களைப் பற்றி"
              : "ABOUT SANTHANAM STORE"}
          </p>

          <h1>
            {language === "ta" ? (
              <>
                மதுரையின் மண்ணில்
                <br />
                வேரூன்றிய
                <br />
                <em>இறை பாரம்பரியம்.</em>
              </>
            ) : (
              <>
                A sacred tradition
                <br />
                rooted in the
                <br />
                <em>heart of Madurai.</em>
              </>
            )}
          </h1>

          <p className="about-page-hero-text">
            {language === "ta"
              ? "தூய சந்தனத்தின் நறுமணத்துடன், பக்தி, பாரம்பரியம் மற்றும் நம்பிக்கையை தலைமுறைகளுக்கு கொண்டு செல்லும் எங்கள் பயணம்."
              : "A journey carrying purity, devotion, tradition and trust through the timeless fragrance of sandalwood."}
          </p>

          <a href="#our-story" className="about-page-discover">
            {language === "ta"
              ? "எங்கள் கதையை அறிய"
              : "Discover Our Story"}

            <span>↓</span>
          </a>

        </div>

        <div className="about-page-hero-side">
          <span>மதுரை</span>

          <div>
            <small>
              {language === "ta"
                ? "எங்கள் வேர்கள்"
                : "OUR ROOTS"}
            </small>

            <strong>
              {language === "ta"
                ? "பாரம்பரியம் • பக்தி"
                : "Tradition • Devotion"}
            </strong>
          </div>
        </div>

      </section>


      {/* =================================
          OUR STORY
      ================================= */}

      <section className="about-story" id="our-story">

        <div className="about-story-image">

          <img
            src="/about-worship.png"
            alt="Traditional worship and sandalwood"
          />

          <div className="about-story-image-overlay" />

          <div className="about-story-badge">
            <strong>ஸ்ரீ</strong>

            <span>
              {language === "ta"
                ? "மதுரை மரபு"
                : "MADURAI TRADITION"}
            </span>
          </div>

        </div>


        <div className="about-story-content">

          <p className="about-section-kicker">
            <span />

            {language === "ta"
              ? "எங்கள் கதை"
              : "OUR STORY"}
          </p>

          <h2>
            {language === "ta" ? (
              <>
                நறுமணத்தில் தொடங்கி,
                <br />
                <em>நம்பிக்கையாக தொடர்கிறது.</em>
              </>
            ) : (
              <>
                Beginning with fragrance,
                <br />
                <em>continuing with trust.</em>
              </>
            )}
          </h2>

          <p className="about-story-lead">
            {language === "ta"
              ? "சந்தனம் என்பது ஒரு நறுமணம் மட்டுமல்ல. அது நமது வழிபாடு, பண்பாடு மற்றும் ஆன்மீக பாரம்பரியத்தின் ஒரு பகுதியாகும்."
              : "Sandalwood is more than a fragrance. It is part of our worship, culture and spiritual heritage."}
          </p>

          <p>
            {language === "ta"
              ? "மதுரையின் கோவில் மரபால் ஈர்க்கப்பட்ட எங்கள் கடையில், சந்தனம், குங்குமம், விபூதி மற்றும் பூஜைக்குத் தேவையான பாரம்பரிய பொருட்களை அக்கறையுடன் வழங்குகிறோம்."
              : "Inspired by Madurai's temple traditions, our store carefully brings together sandalwood, kumkum, vibhuti and traditional essentials for sacred worship."}
          </p>

          <div className="about-story-line">
            <span>✦</span>

            <p>
              {language === "ta"
                ? "ஒவ்வொரு வழிபாட்டிலும் தூய்மை. ஒவ்வொரு உறவிலும் நம்பிக்கை."
                : "Purity in every prayer. Trust in every relationship."}
            </p>
          </div>

        </div>

      </section>


      {/* =================================
          OUR VALUES
      ================================= */}
<div className="about-values-grid">

  {values.map((item, index) => (

    <article
      className={`about-value-card ${
        activeValueCard === index
          ? "value-video-active"
          : ""
      }`}
      key={item.no}
      onClick={() =>
        setActiveValueCard(
          activeValueCard === index
            ? null
            : index
        )
      }
    >

      {/* BACKGROUND IMAGE */}

      <img
        className="about-value-bg-image"
        src={item.image}
        alt={
          language === "ta"
            ? item.titleTa
            : item.titleEn
        }
      />


      {/* BACKGROUND VIDEO */}

      <video
        className="about-value-bg-video"
        src={item.video}
        muted
        loop
        playsInline
        autoPlay
      />


      {/* OVERLAY */}

      <div className="about-value-overlay" />


      {/* CONTENT */}

      <div className="about-value-card-inner">

        <span className="about-value-number">
          {item.no}
        </span>

        <div className="about-value-bottom">

          <div className="about-value-symbol">
            {item.symbol}
          </div>

          <h3>
            {language === "ta"
              ? item.titleTa
              : item.titleEn}
          </h3>

          <p>
            {language === "ta"
              ? item.textTa
              : item.textEn}
          </p>

          <div className="about-value-watch">

            <span>
              {language === "ta"
                ? "வீடியோ பார்க்க"
                : "View Story"}
            </span>

            <b>↗</b>

          </div>

        </div>

      </div>

    </article>

  ))}

</div>


      {/* =================================
          MADURAI TRADITION
      ================================= */}

      <section className="about-tradition">

        <div className="about-tradition-content">

          <p className="about-section-kicker light">
            <span />

            {language === "ta"
              ? "மதுரை மரபு"
              : "ROOTED IN MADURAI"}
          </p>

          <h2>
            {language === "ta" ? (
              <>
                கோவில் நகரத்தின்
                <br />
                <em>ஆன்மீக நறுமணம்.</em>
              </>
            ) : (
              <>
                The sacred fragrance
                <br />
                <em>of the Temple City.</em>
              </>
            )}
          </h2>

          <p>
            {language === "ta"
              ? "மீனாட்சி அம்மன் திருக்கோவிலைச் சுற்றி வாழும் பக்தி, விழாக்கள், பூஜைகள் மற்றும் மரபுகள் — அவற்றின் உணர்வை எங்கள் சேவையின் ஒவ்வொரு பகுதியிலும் கொண்டுவருகிறோம்."
              : "The devotion, festivals, rituals and traditions surrounding Madurai's temple culture inspire every part of the experience we provide."}
          </p>

          <a href="/tradition">
            {language === "ta"
              ? "பாரம்பரியத்தை அறிய"
              : "Explore Our Tradition"}

            <span>→</span>
          </a>

        </div>


        <div className="about-tradition-image">

          <img
            src="/hero-five-gopurams.png"
            alt="Madurai temple tradition"
          />

          <div className="about-tradition-frame" />

          <span className="about-tradition-tamil">
            மதுரை
          </span>

        </div>

      </section>


      {/* =================================
          WHY CHOOSE US
      ================================= */}

      <section className="about-why">

        <div className="about-why-heading">

          <p className="about-section-kicker">
            <span />

            {language === "ta"
              ? "ஏன் எங்களை தேர்வு செய்ய வேண்டும்?"
              : "WHY CHOOSE US"}
          </p>

          <h2>
            {language === "ta"
              ? "பாரம்பரியத்துடன் அன்பான சேவை."
              : "Traditional values. Personal service."}
          </h2>

        </div>


        <div className="about-why-list">

          <div>
            <span>01</span>

            <strong>
              {language === "ta"
                ? "தேர்ந்தெடுக்கப்பட்ட தரமான பொருட்கள்"
                : "Carefully Selected Products"}
            </strong>
          </div>

          <div>
            <span>02</span>

            <strong>
              {language === "ta"
                ? "பாரம்பரிய பூஜை தேவைகள்"
                : "Traditional Pooja Essentials"}
            </strong>
          </div>

          <div>
            <span>03</span>

            <strong>
              {language === "ta"
                ? "நம்பிக்கையான வழிகாட்டுதல்"
                : "Trusted Guidance"}
            </strong>
          </div>

          <div>
            <span>04</span>

            <strong>
              {language === "ta"
                ? "மதுரையின் அன்பான சேவை"
                : "Warm Madurai Hospitality"}
            </strong>
          </div>

        </div>

      </section>


      {/* =================================
          CLOSING
      ================================= */}

      <section className="about-closing">

<img
  src="/om.png"
  alt="Om"
  className="blessing-om"
/>

        <p>
          {language === "ta"
            ? "சந்தன மணம் போல மனதில் அமைதி நிறையட்டும்."
            : "May the fragrance of sandalwood bring peace to every heart."}
        </p>

        <span>✦</span>

      </section>

    </main>
  );
}