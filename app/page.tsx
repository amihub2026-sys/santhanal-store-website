"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../components/LanguageProvider";
const heroLines = {
  en: [
    {
      tag: "THE SOUL OF MADURAI",
      title: "Five towers.\nOne sacred journey.",
      body: "Scroll slowly and step into the timeless world of Meenakshi Amman.",
    },
    {
      tag: "ENTER THE TEMPLE",
      title: "Walk through\na living tradition.",
      body: "Every sculpture, lamp and prayer carries centuries of devotion.",
    },
    {
      tag: "AMMAN ARUL",
      title: "Where grace\nmeets every heart.",
      body: "A divine presence that watches over Madurai and every auspicious beginning.",
    },
    {
      tag: "SANTHANAL STORE",
      title: "Carry the blessing\nback home.",
      body: "Pure sandalwood traditions, prepared and presented with care.",
    },
  ],

  ta: [
    {
      tag: "மதுரையின் ஆன்மீக பெருமை",
      title: "ஐந்து கோபுரங்கள்.\nஒரே புனித பயணம்.",
      body: "மெதுவாக நகர்ந்து மதுரை மீனாட்சி அம்மனின் தெய்வீக உலகிற்குள் பயணியுங்கள்.",
    },
    {
      tag: "திருக்கோவிலுக்குள் வாருங்கள்",
      title: "உயிரோட்டமுள்ள\nபாரம்பரியத்தை உணருங்கள்.",
      body: "ஒவ்வொரு சிற்பமும், விளக்கும், பிரார்த்தனையும் நூற்றாண்டுகளின் பக்தியை எடுத்துரைக்கிறது.",
    },
    {
      tag: "அம்மன் அருள்",
      title: "அருள் நிறையும்\nஒவ்வொரு மனமும்.",
      body: "மதுரையையும் ஒவ்வொரு மங்களகரமான தொடக்கத்தையும் காக்கும் தெய்வீக சக்தி.",
    },
    {
      tag: "சந்தனக் கடை",
      title: "அம்மன் அருளை\nஉங்கள் இல்லம் கொண்டு செல்லுங்கள்.",
      body: "தூய சந்தனம் மற்றும் பாரம்பரிய பூஜைப் பொருட்கள் அன்புடனும் பக்தியுடனும்.",
    },
  ],
};

const aboutTopics = {
  en: [
    {
      no: "01",
      title: "Divine Purity",
      text: "Pure sandalwood paste prepared with care for pooja, blessings and sacred occasions.",
    },
    {
      no: "02",
      title: "Madurai Tradition",
      text: "A store experience inspired by the living traditions surrounding Meenakshi Amman Temple.",
    },
    {
      no: "03",
      title: "Auspicious Moments",
      text: "For weddings, festivals, family functions and every meaningful new beginning.",
    },
    {
      no: "04",
      title: "Authentic Fragrance",
      text: "The cooling touch and natural fragrance of sandalwood, rooted in generations of practice.",
    },
    {
      no: "05",
      title: "Warm Service",
      text: "Personal attention, trusted guidance and the familiar hospitality of Madurai.",
    },
  ],

  ta: [
    {
      no: "01",
      title: "தெய்வீக தூய்மை",
      text: "பூஜை, ஆசீர்வாதம் மற்றும் புனித நிகழ்வுகளுக்காக அக்கறையுடன் தயாரிக்கப்படும் தூய சந்தனப் பேஸ்ட்.",
    },
    {
      no: "02",
      title: "மதுரையின் பாரம்பரியம்",
      text: "மீனாட்சி அம்மன் கோவிலைச் சுற்றியுள்ள உயிரோட்டமிக்க மதுரை மரபுகளால் ஈர்க்கப்பட்ட கடை அனுபவம்.",
    },
    {
      no: "03",
      title: "மங்களகரமான தருணங்கள்",
      text: "திருமணங்கள், திருவிழாக்கள், குடும்ப விழாக்கள் மற்றும் ஒவ்வொரு இனிய புதிய தொடக்கத்திற்கும்.",
    },
    {
      no: "04",
      title: "இயற்கை நறுமணம்",
      text: "தலைமுறைகளாக தொடரும் பாரம்பரியத்தில் வேரூன்றிய சந்தனத்தின் குளிர்ச்சியான தொடுதல் மற்றும் இயற்கை நறுமணம்.",
    },
    {
      no: "05",
      title: "அன்பான சேவை",
      text: "தனிப்பட்ட கவனம், நம்பிக்கையான வழிகாட்டுதல் மற்றும் மதுரையின் அன்பான விருந்தோம்பல்.",
    },
  ],
};

const shopCards = {
  en: [
    {
      image: "/store.jpeg",
      kicker: "THE STORE",
      title: "A Traditional Santhanam Kadai",
      text: "A welcoming place for pure sandalwood, pooja essentials and traditional worship needs.",
      note: "Our Store",
    },
    {
      image: "/sandal-abhishekam.png",
      kicker: "THE TRADITION",
      title: "Prepared with Devotion",
      text: "Traditional preparation with special attention to purity, fragrance and devotion.",
      note: "Our Tradition",
    },
    {
      image: "/about-worship.png",
      kicker: "THE COLLECTION",
      title: "For Every Sacred Moment",
      text: "Traditional products for daily worship, temples, festivals and auspicious occasions.",
      note: "Our Collection",
    },
  ],

  ta: [
    {
      image: "/shop-reference.png",
      kicker: "எங்கள் கடை",
      title: "பாரம்பரிய சந்தனக் கடை",
      text: "தூய சந்தனம், பூஜைப் பொருட்கள் மற்றும் வழிபாட்டிற்குத் தேவையான பாரம்பரிய பொருட்கள் கிடைக்கும் நம்பிக்கையான இடம்.",
      note: "எங்கள் கடை",
    },
    {
      image: "/sandal-abhishekam.png",
      kicker: "எங்கள் பாரம்பரியம்",
      title: "பக்தியுடன் தயாரிக்கப்படும் சந்தனம்",
      text: "தூய்மை, இயற்கை நறுமணம் மற்றும் பாரம்பரிய முறைகளுக்கு முக்கியத்துவம் அளித்து தயாரிக்கப்படுகிறது.",
      note: "பாரம்பரிய தயாரிப்பு",
    },
    {
      image: "/about-worship.png",
      kicker: "எங்கள் தொகுப்பு",
      title: "ஒவ்வொரு புனித தருணத்திற்கும்",
      text: "தினசரி வழிபாடு, கோவில் பூஜை, திருவிழாக்கள் மற்றும் மங்கள நிகழ்வுகளுக்கான பாரம்பரிய பொருட்கள்.",
      note: "பூஜைப் பொருட்கள்",
    },
  ],
};
const reasons = [
  ["01", "Authentic preparation", "Traditional attention to purity, consistency and fragrance."],
  ["02", "Temple-city heritage", "Inspired by the devotional character of Madurai."],
  ["03", "Occasion-ready", "Suitable choices for pooja, festivals, weddings and gifts."],
  ["04", "Personal guidance", "Friendly help to choose the right product for every need."],
];

const abhishekamSlides = {
  en: [
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
  ],

  ta: [
    {
      image: "/sandal-abhishekam.png",
      kicker: "புனிதமான பாரம்பரியம்",
      title: "சந்தன",
      highlight: "அபிஷேகம்",
      tamil: "சந்தன அபிஷேகம்",
      description:
        "சந்தனம் தூய்மை, மன அமைதி மற்றும் இறை அருளின் அடையாளமாக விளங்குகிறது.",
      points: ["தூய்மை", "அமைதி", "இறை அருள்"],
    },
    {
      image: "/kumkum-abhishekam.png",
      kicker: "தெய்வீக சக்தியின் அடையாளம்",
      title: "குங்கும",
      highlight: "அபிஷேகம்",
      tamil: "குங்கும அபிஷேகம்",
      description:
        "குங்குமம் தெய்வீக சக்தி, செழிப்பு மற்றும் மங்களகரமான ஆசீர்வாதங்களின் அடையாளமாக விளங்குகிறது.",
      points: ["சக்தி", "செழிப்பு", "ஆசீர்வாதம்"],
    },
    {
      image: "/vibhuti-abhishekam.png",
      kicker: "ஆன்மீக தூய்மையின் அடையாளம்",
      title: "விபூதி",
      highlight: "அபிஷேகம்",
      tamil: "விபூதி அபிஷேகம்",
      description:
        "திருநீறு ஆன்மீக ஞானம், தூய்மை மற்றும் மன அமைதியின் புனித அடையாளமாக விளங்குகிறது.",
      points: ["ஞானம்", "தூய்மை", "அமைதி"],
    },
  ],
};
export default function Home() {
  const storyRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
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
        (current + 1) % aboutTopics[language].length
    );
  }, 3000);

  return () => {
    window.clearInterval(topicTimer);
  };
}, [language]);

  // Abhishekam slider timer
useEffect(() => {
  const ritualTimer = window.setInterval(() => {
    setRitualIndex(
      (current) =>
        (current + 1) % abhishekamSlides[language].length
    );
  }, 4000);

  return () => {
    window.clearInterval(ritualTimer);
  };
}, [language]);

const activeRitual =
  abhishekamSlides[language][ritualIndex];

 const showPreviousRitual = () => {
  setRitualIndex((current) =>
    current === 0
      ? abhishekamSlides[language].length - 1
      : current - 1
  );
};
 const showNextRitual = () => {
  setRitualIndex(
    (current) =>
      (current + 1) % abhishekamSlides[language].length
  );
};



  return (
    <main>
   

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
    {heroLines[language].map((line, index) => (
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

   <h1 className={language === "ta" ? "tamil-title" : ""}>
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

    <section
  className={`marquee ${language === "ta" ? "marquee-tamil" : ""}`}
  aria-label={
    language === "ta"
      ? "சந்தனம் கடையின் சிறப்புகள்"
      : "Santhanam Store highlights"
  }
>


<section
  className="marquee"
  aria-label={
    language === "ta"
      ? "சந்தனம் கடையின் சிறப்புகள்"
      : "Santhanam Store highlights"
  }
>
  <div className="marquee-track">

    <span>
      {language === "ta"
        ? "✦ சந்தனத்தின் தூய்மை · தூய சந்தனம் · மதுரையின் பாரம்பரியம் · தெய்வீக நறுமணம் · மீனாட்சி அம்மன் அருள் · பூஜையின் புனிதம் · பக்தியின் நறுமணம் · பாரம்பரிய பூஜைப் பொருட்கள் · மங்களம் நிறைந்த வழிபாடு · அம்மன் அருளுடன் ஒவ்வொரு தொடக்கமும் · தூய்மையான இறை சேவை · மதுரை மண்ணின் ஆன்மீக மரபு · இல்லம் நிறையும் இறை நறுமணம் · தலைமுறைகள் தொடரும் பாரம்பரியம் · மீனாட்சி தாயின் திருவருள் ✦"
        : "✦ PURITY OF SANDALWOOD · PURE SANDALWOOD · MADURAI TRADITION · DIVINE FRAGRANCE · MEENAKSHI AMMAN BLESSINGS · SACRED POOJA ESSENTIALS · DEVOTION IN EVERY OFFERING · TRADITION FOR GENERATIONS ✦"}
    </span>

    <span aria-hidden="true">
      {language === "ta"
        ? "✦ சந்தனத்தின் தூய்மை · தூய சந்தனம் · மதுரையின் பாரம்பரியம் · தெய்வீக நறுமணம் · மீனாட்சி அம்மன் அருள் · பூஜையின் புனிதம் · பக்தியின் நறுமணம் · பாரம்பரிய பூஜைப் பொருட்கள் · மங்களம் நிறைந்த வழிபாடு · அம்மன் அருளுடன் ஒவ்வொரு தொடக்கமும் · தூய்மையான இறை சேவை · மதுரை மண்ணின் ஆன்மீக மரபு · இல்லம் நிறையும் இறை நறுமணம் · தலைமுறைகள் தொடரும் பாரம்பரியம் · மீனாட்சி தாயின் திருவருள் ✦"
        : "✦ PURITY OF SANDALWOOD · PURE SANDALWOOD · MADURAI TRADITION · DIVINE FRAGRANCE · MEENAKSHI AMMAN BLESSINGS · SACRED POOJA ESSENTIALS · DEVOTION IN EVERY OFFERING · TRADITION FOR GENERATIONS ✦"}
    </span>

  </div>
</section>
</section>

     <section className="living-about" id="about">
  <div className="about-scene">
    <img
      src="/about-worship.png"
      alt="Devotees worshipping Meenakshi Amman with her parrot"
    />

    <span className="lamp-glow one" />
    <span className="lamp-glow two" />

    <div className="scene-label">
      <span>மீனாட்சி அம்மன்</span>

      <small>
        {language === "ta"
          ? "மதுரையை காக்கும் தெய்வம்"
          : "THE GODDESS WHO WATCHES OVER MADURAI"}
      </small>
    </div>
  </div>

  <div className="about-motion">
    <p className="kicker">
      {language === "ta"
        ? "சந்தனம் பற்றி · அம்மன் அருளுடன்"
        : "ABOUT SANTHANAM  · அம்மன் அருளுடன்"}
    </p>

    <div className="topic-window" aria-live="polite">
      {aboutTopics[language].map((item, index) => (
        <article
          className={topic === index ? "active" : ""}
          key={item.no}
        >
          <span>{item.no} / 05</span>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </article>
      ))}
    </div>

    <div className="topic-controls">
      {aboutTopics[language].map((item, index) => (
        <button
          className={topic === index ? "active" : ""}
          onClick={() => setTopic(index)}
          key={item.no}
          aria-label={`Show ${item.title}`}
        >
          <span />
        </button>
      ))}
    </div>

    <div className="topic-timer" key={topic}>
      <span />
    </div>

    <p className="topic-note">
      {language === "ta"
        ? "ஒவ்வொரு 3 விநாடிக்கும் புதிய தகவல் தோன்றும்"
        : "A new story appears every 3 seconds"}
    </p>
  </div>
</section>

    <section className="shop-section section" id="shop">

  <div className="section-title">

    <p className="kicker">
      {language === "ta"
        ? "சந்தனக் கடையின் உள்ளே"
        : "INSIDE THE SANTHANAM KADAI"}
    </p>

   <h2 className={language === "ta" ? "shop-tamil-title" : ""}>
  {language === "ta" ? (
    <>
      பாரம்பரியத்தை
      <br />
      <em>பாருங்கள், உணருங்கள்.</em>
    </>
  ) : (
    <>
      Tradition you can
      <br />
      <em>see, touch and feel.</em>
    </>
  )}
</h2>

    <p>
      {language === "ta"
        ? "மதுரையின் ஆன்மீக மரபுடன் இணைந்த தூய சந்தனம் மற்றும் பாரம்பரிய பூஜைப் பொருட்களை எங்கள் கடையில் காணுங்கள்."
        : "Discover pure sandalwood and traditional pooja essentials inspired by the sacred heritage of Madurai."}
    </p>

  </div>

  <div className="shop-grid">

    {shopCards[language].map((card, index) => (

      <article
        className={`shop-card card-${index + 1}`}
        key={card.title}
      >

        <div className="shop-image">

          <img
            src={card.image}
            alt={card.title}
          />

          <span>{card.note}</span>

          <b>
            {String(index + 1).padStart(2, "0")}
          </b>

        </div>

        <div className="shop-card-copy">

          <p>{card.kicker}</p>

          <h3>{card.title}</h3>

          <div>
            <span />
            <p>{card.text}</p>
          </div>

        </div>

      </article>

    ))}

  </div>

</section>
<section className="tradition" id="tradition">

  <div className="tradition-image">

    {abhishekamSlides[language].map((slide, index) => (
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

      <span>
        / {String(abhishekamSlides[language].length).padStart(2, "0")}
      </span>
    </div>

  </div>

  <div
    className={`tradition-copy ${
      language === "ta" ? "tradition-tamil" : ""
    }`}
    key={`${language}-${ritualIndex}`}
  >

    <p className="kicker ritual-content-animation">
      {activeRitual.kicker}
    </p>

    <h2 className="ritual-content-animation delay-one">
      {activeRitual.title}
      <br />
      <em>{activeRitual.highlight}</em>
    </h2>

    {language === "en" && (
      <p className="tamil-line ritual-content-animation delay-two">
        {activeRitual.tamil}
      </p>
    )}

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

        {abhishekamSlides[language].map((slide, index) => (
          <button
            type="button"
            key={slide.image}
            className={ritualIndex === index ? "active" : ""}
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





    </main>
  );
}
