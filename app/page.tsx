"use client";

import { useEffect, useRef, useState } from "react";

const heroLines = [
  { tag: "THE SOUL OF MADURAI", title: "Five towers.\nOne sacred journey.", body: "Scroll slowly and step into the timeless world of Meenakshi Amman." },
  { tag: "ENTER THE TEMPLE", title: "Walk through\na living tradition.", body: "Every sculpture, lamp and prayer carries centuries of devotion." },
  { tag: "AMMAN ARUL", title: "Where grace\nmeets every heart.", body: "A divine presence that watches over Madurai and every auspicious beginning." },
  { tag: "SANTHANAL STORES", title: "Carry the blessing\nback home.", body: "Pure sandalwood traditions, prepared and presented with care." },
];

const aboutTopics = [
  { no: "01", title: "Divine Purity", text: "Pure sandalwood paste prepared with care for pooja, blessings and sacred occasions." },
  { no: "02", title: "Madurai Tradition", text: "A store experience inspired by the living traditions surrounding Meenakshi Amman Temple." },
  { no: "03", title: "Auspicious Moments", text: "For weddings, festivals, family functions and every meaningful new beginning." },
  { no: "04", title: "Authentic Fragrance", text: "The cooling touch and natural fragrance of sandalwood, rooted in generations of practice." },
  { no: "05", title: "Warm Service", text: "Personal attention, trusted guidance and the familiar hospitality of Madurai." },
];

const shopCards = [
  { image: "/shop-reference.png", kicker: "THE STORE", title: "A traditional Santhanam kadai", text: "A welcoming place for sandalwood paste, pooja essentials and festival needs.", note: "Replace with your real storefront photo" },
  { image: "/sandal-abhishekam.png", kicker: "THE CRAFT", title: "Prepared with devotion", text: "Careful preparation that respects purity, fragrance and traditional practice.", note: "Replace with your preparation photo" },
  { image: "/about-worship.png", kicker: "THE COLLECTION", title: "For every sacred moment", text: "Selections for daily worship, weddings, festivals and family celebrations.", note: "Replace with your product photo" },
];

const reasons = [
  ["01", "Authentic preparation", "Traditional attention to purity, consistency and fragrance."],
  ["02", "Temple-city heritage", "Inspired by the devotional character of Madurai."],
  ["03", "Occasion-ready", "Suitable choices for pooja, festivals, weddings and gifts."],
  ["04", "Personal guidance", "Friendly help to choose the right product for every need."],
];

const poojaProducts = [
  {
    number: "01",
    tamil: "சந்தனம்",
    name: "Pure Sandal Paste",
    description: "Pure fragrant sandal paste for pooja and sacred abhishekam.",
    image: "/products/sandal-paste.png",
  },
  {
    number: "02",
    tamil: "குங்குமம்",
    name: "Traditional Kumkum",
    description: "Auspicious kumkum prepared for temple and home worship.",
    image: "/products/kumkum.png",
  },
  {
    number: "03",
    tamil: "விபூதி",
    name: "Sacred Vibhuti",
    description: "Traditional sacred ash for daily prayers and blessings.",
    image: "/products/vibhuti.png",
  },
  {
    number: "04",
    tamil: "மஞ்சள்",
    name: "Turmeric Powder",
    description: "Natural turmeric representing purity, protection and prosperity.",
    image: "/products/turmeric.png",
  },
  {
    number: "05",
    tamil: "கற்பூரம்",
    name: "Pooja Camphor",
    description: "Clean-burning camphor for traditional deeparadhana.",
    image: "/products/camphor.png",
  },
  {
    number: "06",
    tamil: "ஊதுபத்தி",
    name: "Incense Sticks",
    description: "Long-lasting devotional fragrance for your prayer space.",
    image: "/products/incense-sticks.png",
  },
  {
    number: "07",
    tamil: "சாம்பிராணி",
    name: "Traditional Sambrani",
    description: "Sacred sambrani with a calming traditional fragrance.",
    image: "/products/sambrani.png",
  },
  {
    number: "08",
    tamil: "தீப எண்ணெய்",
    name: "Pooja Lamp Oil",
    description: "Special oil prepared for lighting traditional pooja lamps.",
    image: "/products/pooja-oil.png",
  },
  {
    number: "09",
    tamil: "பஞ்சுத் திரி",
    name: "Cotton Wicks",
    description: "Pure cotton wicks made for lamps and traditional diyas.",
    image: "/products/cotton-wicks.png",
  },
  {
    number: "10",
    tamil: "பூஜை பாத்திரங்கள்",
    name: "Pooja Essentials",
    description: "Traditional brass items for temples and home prayer rooms.",
    image: "/products/pooja-essentials.png",
  },
];
const abhishekamSlides = [
  {
    image: "/sandal-abhishekam.png",
    kicker: "A SACRED TRADITION",
    title: "Santhanam",
    highlight: "Abhishekam",
    tamil: "சந்தன அபிஷேகம்",
    description:
      "Sandalwood represents purity, calmness and divine grace.",
    points: ["Purity", "Calmness", "Grace"],
  },
  {
    image: "/kumkum-abhishekam.png",
    kicker: "A SYMBOL OF DIVINE POWER",
    title: "Kumkumam",
    highlight: "Abhishekam",
    tamil: "குங்கும அபிஷேகம்",
    description:
      "Kumkum represents divine energy, prosperity and auspicious blessings.",
    points: ["Shakti", "Prosperity", "Blessings"],
  },
  {
    image: "/vibhuti-abhishekam.png",
    kicker: "A SYMBOL OF SPIRITUAL PURITY",
    title: "Vibhuthi",
    highlight: "Abhishekam",
    tamil: "விபூதி அபிஷேகம்",
    description:
      "Sacred vibhuti represents spiritual wisdom, purity and inner peace.",
    points: ["Wisdom", "Purity", "Peace"],
  },
];
export default function Home() {
  const storyRef = useRef<HTMLElement>(null);

  const [heroStep, setHeroStep] = useState(0);
  const [topic, setTopic] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Abhishekam slider state
  const [ritualIndex, setRitualIndex] = useState(0);

  // Hero scroll effect
  useEffect(() => {
    let ticking = false;

    const updateStory = () => {
      const section = storyRef.current;

      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();

      const distance = Math.max(
        1,
        section.offsetHeight - window.innerHeight
      );

      const progress = Math.min(
        1,
        Math.max(0, -rect.top / distance)
      );

      setScrollProgress(progress);

      setHeroStep(
        Math.min(3, Math.floor(progress * 4))
      );

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateStory);
      }
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    updateStory();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // About content timer
  useEffect(() => {
    const topicTimer = window.setInterval(() => {
      setTopic(
        (current) =>
          (current + 1) % aboutTopics.length
      );
    }, 3000);

    return () => {
      window.clearInterval(topicTimer);
    };
  }, []);

  // Abhishekam slider timer
  useEffect(() => {
    const ritualTimer = window.setInterval(() => {
      setRitualIndex(
        (current) =>
          (current + 1) % abhishekamSlides.length
      );
    }, 4000);

    return () => {
      window.clearInterval(ritualTimer);
    };
  }, []);

  const activeRitual =
    abhishekamSlides[ritualIndex];

  const showPreviousRitual = () => {
    setRitualIndex((current) =>
      current === 0
        ? abhishekamSlides.length - 1
        : current - 1
    );
  };

  const showNextRitual = () => {
    setRitualIndex(
      (current) =>
        (current + 1) % abhishekamSlides.length
    );
  };



  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Santhanal Stores home">
          <span className="brand-mark">ஸ்ரீ</span>
          <span><strong>Santhanal</strong><small>SANDALWOOD STORE</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#home">Home</a><a href="#about">About</a><a href="#shop">Our Store</a>
          <a href="#tradition">Tradition</a><a href="#products">Poducts</a><a className="nav-cta" href="#contact">Contact</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open menu"><span /><span /><span /></summary>
          <nav><a href="#home">Home</a><a href="#about">About</a><a href="#shop">Our Store</a><a href="#tradition">Tradition</a><a href="#why-us">Why Us</a><a href="#contact">Contact</a></nav>
        </details>
      </header>

    <section className="scroll-story" id="home" ref={storyRef}>
  <div className="story-stage">

    {/* Fixed background image */}
    <img
      className="story-background"
      src="/hero-five-gopurams.png"
      alt="Five gopurams of Meenakshi Amman Temple"
    />

    <div className="story-tint" />
    <div className="story-grain" />

    {/* Only this text changes while scrolling */}
    <div className="story-copy">
      {heroLines.map((line, index) => (
        <div
          className={`story-panel ${
            heroStep === index ? "active" : ""
          }`}
          key={line.title}
        >
          <p>
            <span />
            {line.tag}
          </p>

          <h1>
            {line.title.split("\n").map((part) => (
              <span key={part}>{part}</span>
            ))}
          </h1>

          <div className="story-body">
            <i>{String(index + 1).padStart(2, "0")}</i>
            <p>{line.body}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="story-progress" aria-hidden="true">
      <span
        style={{
          transform: `scaleX(${scrollProgress})`,
        }}
      />

      <p>
        SCROLL TO EXPLORE <b>↓</b>
      </p>
    </div>

    <div className="story-counter">
      <b>{String(heroStep + 1).padStart(2, "0")}</b>
      <span>/ 04</span>
    </div>

  </div>
</section>

      <section className="marquee" aria-label="Santhanal store highlights">
        <div>✦ சந்தனத்தின் தூய்மை · PURE SANDALWOOD · MADURAI TRADITION · DIVINE FRAGRANCE · MEENAKSHI AMMAN BLESSINGS · ✦ சந்தனத்தின் தூய்மை · PURE SANDALWOOD · MADURAI TRADITION · DIVINE FRAGRANCE ·</div>
      </section>

      <section className="living-about" id="about">
        <div className="about-scene">
          <img src="/about-worship.png" alt="Devotees worshipping Meenakshi Amman with her parrot" />
          <span className="lamp-glow one" /><span className="lamp-glow two" />
      
          <div className="scene-label"><span>மீனாட்சி அம்மன்</span><small>THE GODDESS WHO WATCHES OVER MADURAI</small></div>
        </div>
        <div className="about-motion">
          <p className="kicker">ABOUT SANTHANAL · அம்மன் அருளுடன்</p>
          <div className="topic-window" aria-live="polite">
            {aboutTopics.map((item, index) => (
              <article className={topic === index ? "active" : ""} key={item.no}>
                <span>{item.no} / 05</span><h2>{item.title}</h2><p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="topic-controls">
            {aboutTopics.map((item, index) => <button className={topic === index ? "active" : ""} onClick={() => setTopic(index)} key={item.no} aria-label={`Show ${item.title}`}><span /></button>)}
          </div>
          <div className="topic-timer" key={topic}><span /></div>
          <p className="topic-note">A new story appears every 3 seconds</p>
        </div>
      </section>

      <section className="shop-section section" id="shop">
        <div className="section-title">
          <p className="kicker">INSIDE THE SANTHANAM KADAI</p>
          <h2>Tradition you can<br/><em>see, touch and feel.</em></h2>
          <p>These cards are ready for your original store photography. Send the real photos and they will replace the visual references.</p>
        </div>
        <div className="shop-grid">
          {shopCards.map((card, index) => (
            <article className={`shop-card card-${index + 1}`} key={card.title}>
              <div className="shop-image"><img src={card.image} alt="" /><span>{card.note}</span><b>0{index + 1}</b></div>
              <div className="shop-card-copy"><p>{card.kicker}</p><h3>{card.title}</h3><div><span /><p>{card.text}</p></div></div>
            </article>
          ))}
        </div>
      </section>
<section className="tradition" id="tradition">

  <div className="tradition-image">

    {abhishekamSlides.map((slide, index) => (
      <img
        key={slide.image}
        src={slide.image}
        alt={slide.tamil}
        className={
          ritualIndex === index
            ? "ritual-slide active"
            : "ritual-slide"
        }
      />
    ))}

    <div className="ritual-image-overlay" />

    <span className="ritual-light" />

    <div className="ritual-image-number">
      <strong>
        {String(ritualIndex + 1).padStart(2, "0")}
      </strong>

      <span>/ 03</span>
    </div>

  </div>

  <div className="tradition-copy" key={ritualIndex}>

    <p className="kicker ritual-content-animation">
      {activeRitual.kicker}
    </p>

    <h2 className="ritual-content-animation delay-one">
      {activeRitual.title}
      <br />

      <em>{activeRitual.highlight}</em>
    </h2>

    <p className="tamil-line ritual-content-animation delay-two">
      {activeRitual.tamil}
    </p>

    <p className="ritual-description ritual-content-animation delay-three">
      {activeRitual.description}
    </p>

    <div className="ritual-points ritual-content-animation delay-four">

      {activeRitual.points.map((point, index) => (
        <div className="ritual-point-item" key={point}>

          <span>{point}</span>

          {index < activeRitual.points.length - 1 && (
            <i>✦</i>
          )}

        </div>
      ))}

    </div>

    <div className="ritual-slider-controls">

      <button
        type="button"
        onClick={showPreviousRitual}
        aria-label="Previous abhishekam"
      >
        ←
      </button>

      <div className="ritual-slider-dots">

        {abhishekamSlides.map((slide, index) => (
          <button
            type="button"
            key={slide.image}
            className={
              ritualIndex === index ? "active" : ""
            }
            onClick={() => setRitualIndex(index)}
            aria-label={`Show ${slide.tamil}`}
          >
            <span />
          </button>
        ))}

      </div>

      <button
        type="button"
        onClick={showNextRitual}
        aria-label="Next abhishekam"
      >
        →
      </button>

    </div>

  </div>

</section>
<section className="pooja-collection section" id="products">
  <div className="pooja-container">
    <header className="pooja-heading">
      <p className="kicker">SACRED POOJA COLLECTION</p>

      <h2>
        Traditional essentials for
        <br />
        <em>every sacred moment.</em>
      </h2>

      <div className="pooja-title-bottom">
        <span>பூஜைப் பொருட்கள்</span>

        <p>
          Carefully selected traditional products for temples,
          ceremonies and everyday worship.
        </p>
      </div>
    </header>

    <div className="pooja-grid">
      {poojaProducts.map((product) => (
        <article className="pooja-card" key={product.number}>
          <div className="pooja-card-image">
            <img
              src={product.image}
              alt={`${product.name} - ${product.tamil}`}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <span className="pooja-number">{product.number}</span>

            <div className="pooja-image-overlay">
              <span>View Collection</span>
              <b>↗</b>
            </div>
          </div>

          <div className="pooja-card-content">
            <span className="pooja-tamil">{product.tamil}</span>
            <h3>{product.name}</h3>
            <p>{product.description}</p>

            <div className="pooja-card-footer">
              <span>Santhanal Store</span>
              <i>✦</i>
            </div>
          </div>
        </article>
      ))}
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
        VISIT SANTHANAL STORE
      </p>

      <h2>
        Take home a touch
        <br />
        of <em>divine tradition.</em>
      </h2>

      <p className="contact-tamil">
        இறை வழிபாட்டின் இனிய நறுமணம்
      </p>

      <p className="contact-description">
        Visit our store for authentic sandalwood paste, kumkum,
        vibhuti and carefully selected traditional pooja products.
        We are happy to help you choose the right sacred essentials.
      </p>

      <div className="contact-actions">
        <a
          className="contact-button contact-whatsapp"
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-button-icon">◉</span>

          <span>
            <small>CHAT WITH US</small>
            WhatsApp
          </span>

          <b>↗</b>
        </a>

        <a
          className="contact-button contact-call"
          href="tel:+91XXXXXXXXXX"
        >
          <span className="contact-button-icon">☎</span>

          <span>
            <small>SPEAK WITH US</small>
            Call Now
          </span>

          <b>↗</b>
        </a>
      </div>

      <div className="contact-blessing">
        <span>✦</span>
        <p>
          “Purity in every product.
          <br />
          Devotion in every offering.”
        </p>
      </div>
    </div>

    <div className="contact-visual">
      <div className="contact-image">
        <img
          src="/santhanal-store-contact.png"
          alt="Santhanal traditional pooja products store in Madurai"
        />

        <div className="contact-image-shade" />

        <div className="contact-image-label">
          <span>மதுரை</span>

          <div>
            <small>OUR HOME</small>
            <strong>Temple City</strong>
          </div>
        </div>
      </div>

      <div className="contact-information">
        <article className="contact-detail">
          <span className="contact-detail-number">01</span>

          <div>
            <small>STORE LOCATION</small>
            <h3>Madurai, Tamil Nadu</h3>
            <p>Full store address to be updated</p>
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
            <small>OPENING HOURS</small>
            <h3>Open All Days</h3>
            <p>Monday – Sunday · 8:00 AM – 9:00 PM</p>
          </div>

          <span className="store-status">
            <i />
            OPEN
          </span>
        </article>

        <article className="contact-detail">
          <span className="contact-detail-number">03</span>

          <div>
            <small>PHONE &amp; WHATSAPP</small>
            <h3>+91 XXXXX XXXXX</h3>
            <p>Call us for product availability and enquiries</p>
          </div>

          <a
            href="tel:+91XXXXXXXXXX"
            aria-label="Call Santhanal Store"
          >
            ↗
          </a>
        </article>
      </div>
    </div>
  </div>

  <div className="contact-map">
    <iframe
      title="Santhanal Store location in Madurai"
      src="https://www.google.com/maps?q=Madurai,Tamil%20Nadu&output=embed"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />

    <div className="contact-map-overlay">
      <span>✦</span>

      <div>
        <small>FIND US IN</small>
        <strong>Madurai</strong>
      </div>

      <a
        href="https://www.google.com/maps/search/?api=1&query=Madurai+Tamil+Nadu"
        target="_blank"
        rel="noreferrer"
      >
        Get Directions <b>↗</b>
      </a>
    </div>
  </div>
</section>

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
      <a href="#home" className="footer-brand">
        <span className="footer-brand-mark">ஸ்ரீ</span>

        <div>
          <strong>Santhanal</strong>
          <small>SANDALWOOD STORE</small>
        </div>
      </a>

      <p>
        Pure fragrance, living tradition and divine blessings.
        Authentic pooja essentials from the heart of Madurai.
      </p>

      <span className="footer-tamil">
        தூய்மை • பக்தி • பாரம்பரியம்
      </span>

      <div className="footer-socials">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow Santhanal Store on Instagram"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" className="social-dot" />
          </svg>

          <span>Instagram</span>
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow Santhanal Store on Facebook"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1Z" />
          </svg>

          <span>Facebook</span>
        </a>

        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Santhanal Store on YouTube"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 8.2a3 3 0 0 0-2.1-2.1C17.1 5.6 12 5.6 12 5.6s-5.1 0-6.9.5A3 3 0 0 0 3 8.2 31 31 0 0 0 2.6 12 31 31 0 0 0 3 15.8a3 3 0 0 0 2.1 2.1c1.8.5 6.9.5 6.9.5s5.1 0 6.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-3.8 31 31 0 0 0-.4-3.8Z" />
            <path className="youtube-play" d="m10 15 5-3-5-3v6Z" />
          </svg>

          <span>YouTube</span>
        </a>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          aria-label="Contact Santhanal Store on WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
            <path d="M9 8.2c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.1.4 0 .6.6 1.1 1.5 2 2.7 2.6.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .3-.1 1.3-.8 1.9-.6.6-1.5.8-2.4.6-1.1-.2-2.8-.8-4.6-2.4-1.5-1.4-2.5-3.1-2.8-4.2-.3-1 0-1.8.4-2.4.4-.4.9-.6 1.5 0Z" />
          </svg>

          <span>WhatsApp</span>
        </a>
      </div>
    </div>

    <div className="footer-links-column">
      <p className="footer-heading">EXPLORE</p>

      <nav className="footer-nav">
        <a href="#home">
          <span>01</span>
          Home
        </a>

        <a href="#about">
          <span>02</span>
          About Us
        </a>

        <a href="#products">
          <span>03</span>
          Pooja Products
        </a>

        <a href="#tradition">
          <span>04</span>
          Sacred Tradition
        </a>

        <a href="#contact">
          <span>05</span>
          Contact Us
        </a>
      </nav>
    </div>

    <div className="footer-contact-column">
      <p className="footer-heading">VISIT OUR STORE</p>

      <div className="footer-contact-item">
        <span>⌖</span>

        <div>
          <small>LOCATION</small>
          <p>
            Santhanal Store
            <br />
            Madurai, Tamil Nadu
          </p>
        </div>
      </div>

      <div className="footer-contact-item">
        <span>☎</span>

        <div>
          <small>PHONE / WHATSAPP</small>
          <a href="tel:+91XXXXXXXXXX">
            +91 XXXXX XXXXX
          </a>
        </div>
      </div>

      <div className="footer-contact-item">
        <span>✉</span>

        <div>
          <small>EMAIL ADDRESS</small>
          <a href="mailto:contact@santhanalstore.com">
            contact@santhanalstore.com
          </a>
        </div>
      </div>
    </div>

    <div className="footer-hours-column">
      <p className="footer-heading">OPENING HOURS</p>

      <div className="footer-hours">
        <div>
          <span>Monday – Saturday</span>
          <strong>8:00 AM – 9:00 PM</strong>
        </div>

        <div>
          <span>Sunday</span>
          <strong>8:00 AM – 9:00 PM</strong>
        </div>

        <div>
          <span>Festival Days</span>
          <strong>Open All Day</strong>
        </div>
      </div>

      <div className="footer-open-status">
        <i />
        <div>
          <small>STORE STATUS</small>
          <strong>Open All Days</strong>
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
      © 2026 Santhanal Store, Madurai. All rights reserved.
    </small>

    <div>
      <a href="#home">Privacy Policy</a>
      <span>•</span>
      <a href="#home">Terms &amp; Conditions</a>
    </div>

    <a href="#home" className="footer-back-top">
      BACK TO TOP
      <span>↑</span>
    </a>
  </div>
</footer>
    </main>
  );
}
