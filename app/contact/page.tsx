"use client";

import { useLanguage } from "../../components/LanguageProvider";

export default function ContactPage() {
  const { language } = useLanguage();
  return (
    <main>
        <section className="contact-page-hero">
  <div className="contact-page-hero-bg" />

  <div className="contact-page-hero-overlay" />

  <div className="contact-page-hero-content">
    <p className="contact-page-hero-kicker">
      {language === "ta"
        ? "எங்களை தொடர்பு கொள்ளுங்கள்"
        : "GET IN TOUCH"}
    </p>

    <h1>
      {language === "ta" ? (
        <>
          உங்கள் வழிபாட்டிற்கு
          <br />
          <em>நாங்கள் அருகிலிருக்கிறோம்.</em>
        </>
      ) : (
        <>
          We are here for
          <br />
          <em>every sacred need.</em>
        </>
      )}
    </h1>

    <p className="contact-page-hero-description">
      {language === "ta"
        ? "தூய சந்தனம், குங்குமம், விபூதி மற்றும் பூஜைப் பொருட்கள் பற்றிய தகவல், கிடைக்கும் நிலை மற்றும் ஆர்டர்களுக்கு எங்களை தொடர்பு கொள்ளுங்கள்."
        : "Contact us for pure sandalwood, kumkum, vibhuti, pooja products, availability and order enquiries."}
    </p>

    <div className="contact-page-hero-actions">
      <a
           href="https://wa.me/919789815039"
        target="_blank"
        rel="noreferrer"
        className="contact-page-hero-btn"
      >
        {language === "ta" ? "WhatsApp செய்ய" : "Chat on WhatsApp"}
        <span>↗</span>
      </a>

      <a
        href="tel:+91XXXXXXXXXX"
        className="contact-page-hero-btn contact-page-hero-btn-light"
      >
        {language === "ta" ? "அழைக்கவும்" : "Call Now"}
        <span>↗</span>
      </a>
    </div>
  </div>

  <div className="contact-page-hero-label">
    <span>01</span>

    <div>
      <small>
        {language === "ta"
          ? "எங்கள் இருப்பிடம்"
          : "OUR LOCATION"}
      </small>

      <strong>
        {language === "ta"
          ? "மதுரை, தமிழ்நாடு"
          : "Madurai, Tamil Nadu"}
      </strong>
    </div>
  </div>
</section>
      <section className="contact-premium" id="contact">
  <div className="contact-pattern" aria-hidden="true" />
  <div className="contact-sun contact-sun-one" aria-hidden="true" />
  <div className="contact-sun contact-sun-two" aria-hidden="true" />

  <div className="contact-container">
    <div className="contact-intro">
      <p className="contact-kicker">
        <span />
        {language === "ta"
          ? "சந்தனம் கடைக்கு வருக"
          : "VISIT SANTHANAM STORE"}
      </p>

      <h2 className={language === "ta" ? "contact-tamil-title" : ""}>
        {language === "ta" ? (
          <>
            இறை பாரம்பரியத்தின்
            <br />
            <em>புனித நறுமணத்தை இல்லம் கொண்டு செல்லுங்கள்.</em>
          </>
        ) : (
          <>
            Take home a touch
            <br />
            of <em>divine tradition.</em>
          </>
        )}
      </h2>

      <p className="contact-tamil">
        இறை வழிபாட்டின் இனிய நறுமணம்
      </p>

      <p className="contact-description">
        {language === "ta"
          ? "தூய சந்தனம், குங்குமம், விபூதி மற்றும் பாரம்பரிய பூஜைப் பொருட்களுக்காக எங்கள் கடைக்கு வருக. உங்கள் வழிபாட்டிற்கு தேவையான பொருட்களை தேர்வு செய்ய அன்புடன் உதவுகிறோம்."
          : "Visit our store for authentic sandalwood paste, kumkum, vibhuti and carefully selected traditional pooja products. We are happy to help you choose the right sacred essentials."}
      </p>

      <div className="contact-actions">
        <a
          className="contact-button contact-whatsapp"
              href="https://wa.me/919789815039"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-button-icon">◉</span>

          <span>
            <small>
              {language === "ta"
                ? "எங்களுடன் பேசுங்கள்"
                : "CHAT WITH US"}
            </small>

            WhatsApp
          </span>

          <b>↗</b>
        </a>

        <a
          className="contact-button contact-call"
          href="tel:+919789815039"
        >
          <span className="contact-button-icon">☎</span>

          <span>
            <small>
              {language === "ta"
                ? "தொலைபேசியில் பேசுங்கள்"
                : "SPEAK WITH US"}
            </small>

            {language === "ta"
              ? "அழைக்கவும்"
              : "Call Now"}
          </span>

          <b>↗</b>
        </a>
      </div>

      <div className="contact-blessing">
        <span>✦</span>

        <p>
          {language === "ta" ? (
            <>
              “ஒவ்வொரு பொருளிலும் தூய்மை.
              <br />
              ஒவ்வொரு அர்ப்பணிப்பிலும் பக்தி.”
            </>
          ) : (
            <>
              “Purity in every product.
              <br />
              Devotion in every offering.”
            </>
          )}
        </p>
      </div>
    </div>

    <div className="contact-visual">
      <div className="contact-image">
        <img
          src="/contact.jpeg"
          alt="Santhanam traditional pooja products store in Madurai"
        />

        <div className="contact-image-shade" />

        <div className="contact-image-label">
          <span>மதுரை</span>

          <div>
            <small>
              {language === "ta"
                ? "எங்கள் ஊர்"
                : "OUR HOME"}
            </small>

            <strong>
              {language === "ta"
                ? "கோவில் நகரம்"
                : "Temple City"}
            </strong>
          </div>
        </div>
      </div>

      <div className="contact-information">
        <article className="contact-detail">
          <span className="contact-detail-number">01</span>

         <div>
  <small>
    {language === "ta"
      ? "கடை முகவரி"
      : "STORE LOCATION"}
  </small>

  <h3>
    {language === "ta"
      ? "74, கிழக்கு மாசி வீதி, காமராஜர் சாலை, மதுரை மெயின், மதுரை, தமிழ்நாடு – 625001"
      : "74, East Masi Street, Kamarajar Salai, Madurai Main, Madurai, Tamil Nadu – 625001"}
  </h3>

            <p>
              {language === "ta"
                ? "முழு கடை முகவரி இங்கே புதுப்பிக்கப்படும்"
                : "Full store address to be updated"}
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Madurai+Tamil+Nadu"
            target="_blank"
            rel="noreferrer"
            aria-label="Open location in Google Maps"
          >
            ↗
          </a>
        </article>

        <article className="contact-detail">
          <span className="contact-detail-number">02</span>

          <div>
            <small>
              {language === "ta"
                ? "திறந்திருக்கும் நேரம்"
                : "OPENING HOURS"}
            </small>

            <h3>
              {language === "ta"
                ? "அனைத்து நாட்களிலும் திறந்திருக்கும்"
                : "Open All Days"}
            </h3>

            <p>
              {language === "ta"
                ? "திங்கள் – ஞாயிறு · காலை 9:00 – இரவு 11:00"
                : "Monday – Sunday · 9:00 AM – 11:00 PM"}
            </p>
          </div>

          <span className="store-status">
            <i />

            {language === "ta"
              ? "திறந்துள்ளது"
              : "OPEN"}
          </span>
        </article>

        <article className="contact-detail">
          <span className="contact-detail-number">03</span>

          <div>
            <small>
              {language === "ta"
                ? "தொலைபேசி & WHATSAPP"
                : "PHONE & WHATSAPP"}
            </small>

            <h3>9197898 15039</h3>

            <p>
              {language === "ta"
                ? "பொருட்களின் கிடைக்கும் நிலை மற்றும் விசாரணைகளுக்கு எங்களை அழைக்கவும்"
                : "Call us for product availability and enquiries"}
            </p>
          </div>

          <a
            href="tel:+919789815039"
            aria-label="Call Santhanam Store"
          >
            ↗
          </a>
        </article>
      </div>
    </div>
  </div>

  <div className="contact-map">
    <iframe
      title="Santhanam Store location in Madurai"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.808838628677!2d78.12321949999999!3d9.920543499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c59b3b6cfa49%3A0x977d829df5b75644!2sAsal%20Sichabai%20Sandhana%20Kadai!5e1!3m2!1sen!2sin!4v1788243098001!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />

    <div className="contact-map-overlay">
      <span>✦</span>

      <div>
        <small>
          {language === "ta"
            ? "எங்களை காணுங்கள்"
            : "FIND US IN"}
        </small>

        <strong>
          {language === "ta"
            ? "மதுரை"
            : "Madurai"}
        </strong>
      </div>

      <a
        href="https://www.google.com/maps/search/?api=1&query=Madurai+Tamil+Nadu"
        target="_blank"
        rel="noreferrer"
      >
        {language === "ta"
          ? "வழி காண"
          : "Get Directions"}

        <b>↗</b>
      </a>
    </div>
  </div>
</section>
    </main>
  );
}