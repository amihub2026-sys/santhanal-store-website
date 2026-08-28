"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../../components/LanguageProvider";
import { useCart } from "../../components/CartProvider";

export default function ProductsPage() {
    const { cartItems, addToCart } = useCart();
  const { language } = useLanguage();
    const [heroSlide, setHeroSlide] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
const [showForm, setShowForm] = useState(false);

const [customer, setCustomer] = useState({
  name: "",
  phone: "",
  email: "",
});
const addProduct = (product: any) => {
  const alreadyAdded = selectedProducts.find(
    (item) => item.number === product.number
  );

  if (alreadyAdded) {
    return;
  }

  setSelectedProducts([
    ...selectedProducts,
    {
      ...product,
      quantity: 1,
    },
  ]);
};
const heroSlides = [
  {
    image: "pro1.png",
    en: {
      kicker: "PURITY • DEVOTION • TRADITION",
      title: "The sacred fragrance",
      highlight: "of tradition.",
      description:
        "Pure sandalwood, kumkum, vibhuti and traditional pooja essentials for every sacred moment.",
    },
    ta: {
      kicker: "தூய்மை • பக்தி • பாரம்பரியம்",
      title: "பாரம்பரியத்தின்",
      highlight: "புனித நறுமணம்.",
      description:
        "சந்தனம், குங்குமம், விபூதி மற்றும் பாரம்பரிய பூஜைப் பொருட்கள் — ஒவ்வொரு வழிபாட்டிற்கும் தூய்மையுடன்.",
    },
  },

  {
    image: "pro3.png",
    en: {
      kicker: "SACRED POOJA ESSENTIALS",
      title: "Purity for every",
      highlight: "divine offering.",
      description:
        "Carefully selected traditional products for temple worship, ceremonies and your daily prayers.",
    },
    ta: {
      kicker: "புனித பூஜைப் பொருட்கள்",
      title: "ஒவ்வொரு வழிபாட்டிற்கும்",
      highlight: "தெய்வீக தூய்மை.",
      description:
        "கோவில் வழிபாடு, விசேஷ பூஜைகள் மற்றும் தினசரி இறை வழிபாட்டிற்காக தேர்ந்தெடுக்கப்பட்ட பாரம்பரிய பொருட்கள்.",
    },
  },

  {
   image: "pro2.png",

    en: {
      kicker: "FROM THE HEART OF MADURAI",
      title: "A tradition carried",
      highlight: "through generations.",
      description:
        "Experience the sacred fragrance and timeless devotional traditions of Madurai.",
    },
    ta: {
      kicker: "மதுரையின் ஆன்மீக மரபு",
      title: "தலைமுறைகள் தொடரும்",
      highlight: "புனித பாரம்பரியம்.",
      description:
        "மதுரையின் ஆன்மீக மரபையும், இறை வழிபாட்டின் புனித நறுமணத்தையும் உங்கள் இல்லத்திற்கு கொண்டு செல்லுங்கள்.",
    },
  },
];

useEffect(() => {
  const timer = window.setInterval(() => {
    setHeroSlide((current) =>
      current === heroSlides.length - 1 ? 0 : current + 1
    );
  }, 5000);

  return () => window.clearInterval(timer);
}, []);

const nextHeroSlide = () => {
  setHeroSlide((current) =>
    current === heroSlides.length - 1 ? 0 : current + 1
  );
};

const previousHeroSlide = () => {
  setHeroSlide((current) =>
    current === 0 ? heroSlides.length - 1 : current - 1
  );
};

const currentHero = heroSlides[heroSlide];
const heroContent = currentHero[language];
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
  return (
    <main>
<section className="products-slider-hero">

  {/* BACKGROUND IMAGES */}
  <div className="products-slider-backgrounds">
    {heroSlides.map((slide, index) => (
      <div
        key={slide.image}
        className={`products-slider-bg ${
          index === heroSlide ? "active" : ""
        }`}
        style={{
          backgroundImage: `url("${slide.image}")`,
        }}
      />
    ))}
  </div>

  {/* DARK OVERLAY */}
  <div className="products-slider-overlay" />

  {/* TEXT */}
  <div
    className="products-slider-content"
    key={`${heroSlide}-${language}`}
  >
    <p className="products-slider-kicker">
      {heroContent.kicker}
    </p>

    <h1>
      {heroContent.title}
      <br />
      <em>{heroContent.highlight}</em>
    </h1>

    <p className="products-slider-description">
      {heroContent.description}
    </p>

    <a href="#products" className="products-slider-button">
      {language === "ta"
        ? "எங்கள் பொருட்களை காண"
        : "Explore Products"}

      <span>→</span>
    </a>
  </div>




  {/* BOTTOM CONTROLS */}
  <div className="products-slider-controls">

    <div className="products-slider-dots">
      {heroSlides.map((_, index) => (
        <button
          key={index}
          type="button"
          className={index === heroSlide ? "active" : ""}
          onClick={() => setHeroSlide(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>

    <span className="products-slider-count">
      {String(heroSlide + 1).padStart(2, "0")}
      <i />
      {String(heroSlides.length).padStart(2, "0")}
    </span>

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
<button
  type="button"
  className="pooja-select-product-btn"
  onClick={() => addToCart(product)}
>
  {cartItems.some(
    (item) => item.number === product.number
  )
    ? language === "ta"
      ? "சேர்க்கப்பட்டது ✓"
      : "Added ✓"
    : language === "ta"
      ? "கார்டில் சேர்க்க"
      : "Add to Cart"}
</button>


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
    </main>
  );
}