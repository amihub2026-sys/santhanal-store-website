"use client";

import { useEffect, useRef, useState } from "react";
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
      image: "/shop-reference.png",
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

const poojaProducts = {
  en: [
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
  ],

  ta: [
    {
      number: "01",
      tamil: "சந்தனம்",
      name: "தூய சந்தனம்",
      description: "பூஜை மற்றும் புனித அபிஷேகங்களுக்கான இயற்கை நறுமணம் நிறைந்த தூய சந்தனம்.",
      image: "/products/sandal-paste.png",
    },
    {
      number: "02",
      tamil: "குங்குமம்",
      name: "பாரம்பரிய குங்குமம்",
      description: "கோவில் மற்றும் இல்ல வழிபாட்டிற்காக தயாரிக்கப்படும் மங்களகரமான குங்குமம்.",
      image: "/products/kumkum.png",
    },
    {
      number: "03",
      tamil: "விபூதி",
      name: "புனித விபூதி",
      description: "தினசரி வழிபாடு மற்றும் இறை ஆசீர்வாதத்திற்கான பாரம்பரிய திருநீறு.",
      image: "/products/vibhuti.png",
    },
    {
      number: "04",
      tamil: "மஞ்சள்",
      name: "தூய மஞ்சள்",
      description: "தூய்மை, பாதுகாப்பு மற்றும் செழிப்பைக் குறிக்கும் இயற்கை மஞ்சள்.",
      image: "/products/turmeric.png",
    },
    {
      number: "05",
      tamil: "கற்பூரம்",
      name: "பூஜை கற்பூரம்",
      description: "தீபாராதனை மற்றும் தினசரி வழிபாட்டிற்கான தரமான கற்பூரம்.",
      image: "/products/camphor.png",
    },
    {
      number: "06",
      tamil: "ஊதுபத்தி",
      name: "நறுமண ஊதுபத்தி",
      description: "பூஜை அறைக்கு இனிய ஆன்மீக நறுமணம் தரும் ஊதுபத்திகள்.",
      image: "/products/incense-sticks.png",
    },
    {
      number: "07",
      tamil: "சாம்பிராணி",
      name: "பாரம்பரிய சாம்பிராணி",
      description: "அமைதியான சூழலை உருவாக்கும் பாரம்பரிய நறுமண சாம்பிராணி.",
      image: "/products/sambrani.png",
    },
    {
      number: "08",
      tamil: "தீப எண்ணெய்",
      name: "பூஜை தீப எண்ணெய்",
      description: "பாரம்பரிய விளக்குகள் ஏற்றுவதற்காக தயாரிக்கப்பட்ட பூஜை எண்ணெய்.",
      image: "/products/pooja-oil.png",
    },
    {
      number: "09",
      tamil: "பஞ்சுத் திரி",
      name: "தூய பஞ்சுத் திரி",
      description: "விளக்கு மற்றும் தீபம் ஏற்றுவதற்கான தரமான பஞ்சுத் திரிகள்.",
      image: "/products/cotton-wicks.png",
    },
    {
      number: "10",
      tamil: "பூஜை பாத்திரங்கள்",
      name: "பூஜை உபகரணங்கள்",
      description: "கோவில் மற்றும் இல்ல வழிபாட்டிற்கான பாரம்பரிய பூஜைப் பாத்திரங்கள்.",
      image: "/products/pooja-essentials.png",
    },
  ],
};
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
const [language, setLanguage] = useState<"en" | "ta">("ta");
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
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Santhanal Stores home">
          <span className="brand-mark">ஸ்ரீ</span>
          <span><strong>Santhanal</strong><small>SANDALWOOD STORE</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
        

       <nav className="desktop-nav" aria-label="Main navigation">
  <a href="#home">
    {language === "ta" ? "முகப்பு" : "Home"}
  </a>

  <a href="#about">
    {language === "ta" ? "எங்களைப் பற்றி" : "About"}
  </a>

  <a href="#shop">
    {language === "ta" ? "எங்கள் கடை" : "Our Store"}
  </a>

  <a href="#tradition">
    {language === "ta" ? "பாரம்பரியம்" : "Tradition"}
  </a>

  <a href="#products">
    {language === "ta" ? "பூஜைப் பொருட்கள்" : "Products"}
  </a>

  <a className="nav-cta" href="#contact">
    {language === "ta" ? "தொடர்புக்கு" : "Contact"}
  </a>
</nav>
        </nav>
                            <button
  className="language-toggle"
  type="button"
  onClick={() =>
    setLanguage(language === "ta" ? "en" : "ta")
  }
>
  {language === "ta" ? "English" : "தமிழ்"}
</button>
        <details className="mobile-menu">
          <summary aria-label="Open menu"><span /><span /><span /></summary>
   
         <nav className="desktop-nav" aria-label="Main navigation">
  <a href="#home">
    {language === "ta" ? "முகப்பு" : "Home"}
  </a>

  <a href="#about">
    {language === "ta" ? "எங்களைப் பற்றி" : "About"}
  </a>

  <a href="#shop">
    {language === "ta" ? "எங்கள் கடை" : "Our Store"}
  </a>

  <a href="#tradition">
    {language === "ta" ? "பாரம்பரியம்" : "Tradition"}
  </a>

  <a href="#products">
    {language === "ta" ? "பூஜைப் பொருட்கள்" : "Products"}
  </a>

  <a className="nav-cta" href="#contact">
    {language === "ta" ? "தொடர்புக்கு" : "Contact"}
  </a>
</nav>
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
<section className="pooja-collection section" id="products">
  <div className="pooja-container">

    <header className="pooja-heading">

      <p className="kicker">
        {language === "ta"
          ? "புனித பூஜைப் பொருட்கள்"
          : "SACRED POOJA COLLECTION"}
      </p>

      <h2 className={language === "ta" ? "pooja-tamil-title" : ""}>
        {language === "ta" ? (
          <>
            பாரம்பரிய பூஜைப் பொருட்கள்
            <br />
            <em>ஒவ்வொரு புனித தருணத்திற்கும்.</em>
          </>
        ) : (
          <>
            Traditional essentials for
            <br />
            <em>every sacred moment.</em>
          </>
        )}
      </h2>

      <div className="pooja-title-bottom">

        <span>
          {language === "ta"
            ? "பூஜைப் பொருட்கள்"
            : "POOJA ESSENTIALS"}
        </span>

        <p>
          {language === "ta"
            ? "கோவில், விசேஷ பூஜைகள் மற்றும் தினசரி வழிபாட்டிற்காக கவனமாக தேர்ந்தெடுக்கப்பட்ட பாரம்பரிய பொருட்கள்."
            : "Carefully selected traditional products for temples, ceremonies and everyday worship."}
        </p>

      </div>
    </header>

    <div className="pooja-grid">

      {poojaProducts[language].map((product) => (

        <article
          className="pooja-card"
          key={product.number}
        >

          <div className="pooja-card-image">

            <img
              src={product.image}
              alt={`${product.name} - ${product.tamil}`}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <span className="pooja-number">
              {product.number}
            </span>

            <div className="pooja-image-overlay">
              <span>
                {language === "ta"
                  ? "தொகுப்பைப் பார்க்க"
                  : "View Collection"}
              </span>

              <b>↗</b>
            </div>

          </div>

          <div className="pooja-card-content">

            <span className="pooja-tamil">
              {product.tamil}
            </span>

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <div className="pooja-card-footer">
              <span>
                {language === "ta"
                  ? "சந்தனம் கடை"
                  : "Santhanam Store"}
              </span>

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
          href="https://wa.me/91XXXXXXXXXX"
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
          href="tel:+91XXXXXXXXXX"
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
          src="/santhanal-store-contact.png"
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
                ? "மதுரை, தமிழ்நாடு"
                : "Madurai, Tamil Nadu"}
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
                ? "திங்கள் – ஞாயிறு · காலை 8:00 – இரவு 9:00"
                : "Monday – Sunday · 8:00 AM – 9:00 PM"}
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

            <h3>+91 XXXXX XXXXX</h3>

            <p>
              {language === "ta"
                ? "பொருட்களின் கிடைக்கும் நிலை மற்றும் விசாரணைகளுக்கு எங்களை அழைக்கவும்"
                : "Call us for product availability and enquiries"}
            </p>
          </div>

          <a
            href="tel:+91XXXXXXXXXX"
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
      src="https://www.google.com/maps?q=Madurai,Tamil%20Nadu&output=embed"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
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
          <strong>Santhanam</strong>
          <small>
            {language === "ta"
              ? "சந்தனக் கடை"
              : "SANDALWOOD STORE"}
          </small>
        </div>
      </a>

      <p>
        {language === "ta"
          ? "தூய நறுமணம், உயிரோட்டமிக்க பாரம்பரியம் மற்றும் இறை அருள். மதுரையின் இதயத்திலிருந்து பாரம்பரிய பூஜைப் பொருட்கள்."
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
          aria-label="Facebook"
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
          aria-label="YouTube"
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
          aria-label="WhatsApp"
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
      <p className="footer-heading">
        {language === "ta" ? "பக்கங்கள்" : "EXPLORE"}
      </p>

      <nav className="footer-nav">

        <a href="#home">
          <span>01</span>
          {language === "ta" ? "முகப்பு" : "Home"}
        </a>

        <a href="#about">
          <span>02</span>
          {language === "ta" ? "எங்களைப் பற்றி" : "About Us"}
        </a>

        <a href="#products">
          <span>03</span>
          {language === "ta" ? "பூஜைப் பொருட்கள்" : "Pooja Products"}
        </a>

        <a href="#tradition">
          <span>04</span>
          {language === "ta" ? "புனித பாரம்பரியம்" : "Sacred Tradition"}
        </a>

        <a href="#contact">
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

          <a href="tel:+91XXXXXXXXXX">
            +91 XXXXX XXXXX
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
            {language === "ta" ? "ஞாயிறு" : "Sunday"}
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

    <p>
      பாண்டிய குலப் பேரரசி! மதுரை மீனாட்சி தாயே!
    </p>

    <span>✦</span>
  </div>

  <div className="footer-bottom">

    <small>
      {language === "ta"
        ? "© 2026 சந்தனம் கடை, மதுரை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
        : "© 2026 Santhanam Store, Madurai. All rights reserved."}
    </small>

    <div>
      <a href="#home">
        {language === "ta"
          ? "தனியுரிமைக் கொள்கை"
          : "Privacy Policy"}
      </a>

      <span>•</span>

      <a href="#home">
        {language === "ta"
          ? "விதிமுறைகள்"
          : "Terms & Conditions"}
      </a>
    </div>

    <a href="#home" className="footer-back-top">
      {language === "ta"
        ? "மேலே செல்ல"
        : "BACK TO TOP"}

      <span>↑</span>
    </a>

  </div>
</footer>
    </main>
  );
}
