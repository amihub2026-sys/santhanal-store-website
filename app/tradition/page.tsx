"use client";

import { useLanguage } from "../../components/LanguageProvider";

export default function TraditionPage() {
  const { language } = useLanguage();

  const services = [
    {
      no: "01",
      image: "/sandal-abhishekam.png",
      tamil: "சந்தன அபிஷேகம்",
      en: "Sandal Abhishekam",
      textTa:
        "சந்தனம் உடலுக்கும் மனதுக்கும் குளிர்ச்சி தரும் புனிதப் பொருளாக கருதப்படுகிறது. இறை வழிபாட்டில் சந்தன அபிஷேகம் தூய்மை, அமைதி மற்றும் அருளின் அடையாளமாக விளங்குகிறது.",
      textEn:
        "Sandalwood is considered sacred for its cooling fragrance and purity. Sandal abhishekam represents peace, devotion and divine grace.",
    },

    {
      no: "02",
      image: "/kumkum-abhishekam.png",
      tamil: "குங்கும அபிஷேகம்",
      en: "Kumkum Abhishekam",
      textTa:
        "குங்குமம் மங்களம், சக்தி மற்றும் வளத்தின் அடையாளமாகப் பார்க்கப்படுகிறது. அம்மன் வழிபாட்டில் குங்குமம் சிறப்பான இடம் பெற்றுள்ளது.",
      textEn:
        "Kumkum is a symbol of auspiciousness, divine energy and prosperity, holding a special place in traditional Amman worship.",
    },

    {
      no: "03",
      image: "/vibhuti-abhishekam.png",
      tamil: "விபூதி அபிஷேகம்",
      en: "Vibhuti Abhishekam",
      textTa:
        "விபூதி ஆன்மீக தூய்மை, இறைநினைவு மற்றும் பக்தியின் அடையாளம். தினசரி வழிபாட்டிலும் விசேஷ பூஜைகளிலும் பாரம்பரியமாக பயன்படுத்தப்படுகிறது.",
      textEn:
        "Vibhuti represents spiritual purity, devotion and remembrance of the divine. It is traditionally used in daily prayers and sacred ceremonies.",
    },
  ];

  return (
    <main className="tradition-page">

      {/* HERO */}
      <section className="tradition-page-hero">
        <div className="tradition-page-hero-bg" />
        <div className="tradition-page-hero-overlay" />

        <div className="tradition-page-hero-content">
          <p className="tradition-page-kicker">
            <span />

            {language === "ta"
              ? "எங்கள் பாரம்பரிய சேவைகள்"
              : "OUR SACRED SERVICES"}
          </p>

          <h1>
            {language === "ta" ? (
              <>
                ஒவ்வொரு வழிபாட்டிலும்
                <br />
                <em>பாரம்பரியத்தின் அருள்.</em>
              </>
            ) : (
              <>
                Sacred traditions for
                <br />
                <em>every divine offering.</em>
              </>
            )}
          </h1>

          <p className="tradition-page-description">
            {language === "ta"
              ? "சந்தனம், குங்குமம் மற்றும் விபூதி வழிபாட்டு மரபுகளை மதுரையின் ஆன்மீக பாரம்பரியத்துடன் அறிந்து கொள்ளுங்கள்."
              : "Discover the sacred traditions of sandalwood, kumkum and vibhuti rooted in Madurai's spiritual heritage."}
          </p>

          <a href="#services" className="tradition-page-button">
            {language === "ta"
              ? "சேவைகளை காண"
              : "Explore Services"}

            <span>↓</span>
          </a>
        </div>
      </section>


      {/* SERVICES INTRO */}
    {/* =====================================
    SACRED SERVICES - DIFFERENT DESIGN
===================================== */}

<section className="sacred-service-showcase" id="services">

  <div className="sacred-service-heading">

    <p className="tradition-section-kicker">
      <span />

      {language === "ta"
        ? "எங்கள் புனித சேவைகள்"
        : "OUR SACRED SERVICES"}
    </p>

    <h2>
      {language === "ta" ? (
        <>
          வழிபாட்டின் மூன்று
          <br />
          <em>புனித அடையாளங்கள்.</em>
        </>
      ) : (
        <>
          Three sacred expressions
          <br />
          <em>of divine worship.</em>
        </>
      )}
    </h2>

    <p className="sacred-service-heading-text">
      {language === "ta"
        ? "மதுரையின் ஆன்மீக மரபில் தலைமுறைகளாக தொடரும் சந்தனம், குங்குமம் மற்றும் விபூதியின் புனிதத்தைக் கண்டறியுங்கள்."
        : "Discover the spiritual significance of sandalwood, kumkum and vibhuti, carried through generations of Madurai tradition."}
    </p>

  </div>


  <div className="sacred-service-layout">

    {/* CENTER DECORATION */}

    <div className="sacred-service-center">

      <div className="sacred-center-ring sacred-ring-one" />
      <div className="sacred-center-ring sacred-ring-two" />

      <div className="sacred-center-inner">

  <img
  src="/om.png"
  alt="Om"
  className="blessing-om"
/>

        <small>
          {language === "ta"
            ? "மதுரை மரபு"
            : "MADURAI TRADITION"}
        </small>

        <strong>
          {language === "ta"
            ? "பக்தி"
            : "DEVOTION"}
        </strong>

        <span className="sacred-star">✦</span>

      </div>

    </div>


    {/* SERVICE CARDS */}

    <div className="sacred-service-cards">

      {services.map((service, index) => (

        <article
          className={`sacred-service-card sacred-card-${index + 1}`}
          key={service.no}
        >

          <div className="sacred-service-card-image">

            <img
              src={service.image}
              alt={
                language === "ta"
                  ? service.tamil
                  : service.en
              }
            />

            <div className="sacred-card-shade" />

            <span className="sacred-card-number">
              {service.no}
            </span>

          </div>


          <div className="sacred-service-card-content">

            <span className="sacred-card-label">
              {language === "ta"
                ? "புனித மரபு"
                : "SACRED TRADITION"}
            </span>

            <h3>
              {language === "ta"
                ? service.tamil
                : service.en}
            </h3>

            <p>
              {language === "ta"
                ? service.textTa
                : service.textEn}
            </p>

            <div className="sacred-card-footer">

              <span>
                ✦
                {language === "ta"
                  ? " இறை அருளுடன்"
                  : " With Divine Grace"}
              </span>

              <b>↗</b>

            </div>

          </div>

        </article>

      ))}

    </div>

  </div>

</section>


    

      {/* WHY OUR SERVICES */}
      <section className="tradition-benefits">
        <div className="tradition-benefits-heading">
          <p className="tradition-section-kicker">
            <span />

            {language === "ta"
              ? "எங்கள் சேவையின் சிறப்பு"
              : "WHY OUR SERVICES"}
          </p>

          <h2>
            {language === "ta"
              ? "பாரம்பரியத்துடன் அக்கறையான சேவை."
              : "Sacred tradition with thoughtful service."}
          </h2>
        </div>

        <div className="tradition-benefits-grid">

          <article>
            <span>01</span>
            <h3>
              {language === "ta"
                ? "தரமான பொருட்கள்"
                : "Quality Products"}
            </h3>
            <p>
              {language === "ta"
                ? "வழிபாட்டிற்காக தேர்ந்தெடுக்கப்பட்ட தரமான பாரம்பரிய பொருட்கள்."
                : "Carefully selected traditional products for sacred worship."}
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>
              {language === "ta"
                ? "மரபு சார்ந்த அணுகுமுறை"
                : "Traditional Approach"}
            </h3>
            <p>
              {language === "ta"
                ? "மதுரையின் ஆன்மீக மரபை மதிக்கும் சேவை."
                : "Service inspired by Madurai's spiritual traditions."}
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>
              {language === "ta"
                ? "நம்பிக்கையான வழிகாட்டுதல்"
                : "Trusted Guidance"}
            </h3>
            <p>
              {language === "ta"
                ? "உங்கள் வழிபாட்டிற்கு தேவையான பொருட்களை தேர்வு செய்ய உதவி."
                : "Helpful guidance for choosing the right pooja essentials."}
            </p>
          </article>

        </div>
      </section>


      {/* CLOSING */}
      <section className="tradition-closing">
        <span>✦</span>

        <h2>
          {language === "ta"
            ? "ஒவ்வொரு பூஜையிலும் பக்தி. ஒவ்வொரு மரபிலும் நம்பிக்கை."
            : "Devotion in every prayer. Trust in every tradition."}
        </h2>

        <a href="/contact">
          {language === "ta"
            ? "எங்களை தொடர்பு கொள்ளுங்கள்"
            : "Contact Us"}

          <span>→</span>
        </a>
      </section>

    </main>
  );
}