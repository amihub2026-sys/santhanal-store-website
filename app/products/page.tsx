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
  const poojaProducts = [
  {
    number: "01",
    tamil: "சந்தனம்",
    image: "/p4.jpeg",

    en: {
      name: "Pure Sandal Paste",
      description:
        "Pure fragrant sandal paste for pooja and sacred abhishekam.",
    },

    ta: {
      name: "தூய சந்தனம்",
      description:
        "பூஜை மற்றும் புனித அபிஷேகங்களுக்கான இயற்கை நறுமணம் நிறைந்த தூய சந்தனம்.",
    },
  },

  {
    number: "02",
    tamil: "குங்குமம்",
    image: "/p5.jpeg",

    en: {
      name: "Traditional Kumkum",
      description:
        "Auspicious kumkum prepared for temple and home worship.",
    },

    ta: {
      name: "பாரம்பரிய குங்குமம்",
      description:
        "கோவில் மற்றும் இல்ல வழிபாட்டிற்காக தயாரிக்கப்படும் மங்களகரமான குங்குமம்.",
    },
  },

  {
    number: "03",
    tamil: "விபூதி",
    image: "/p19.png",

    en: {
      name: "Sacred Vibhuti",
      description:
        "Traditional sacred ash for daily prayers and blessings.",
    },

    ta: {
      name: "புனித விபூதி",
      description:
        "தினசரி வழிபாடு மற்றும் இறை ஆசீர்வாதத்திற்கான பாரம்பரிய திருநீறு.",
    },
  },

  {
    number: "04",
    tamil: "மஞ்சள்",
    image: "/p6.jpeg",

    en: {
      name: "Turmeric Powder",
      description:
        "Natural turmeric representing purity, protection and prosperity.",
    },

    ta: {
      name: "தூய மஞ்சள்",
      description:
        "தூய்மை, பாதுகாப்பு மற்றும் செழிப்பைக் குறிக்கும் இயற்கை மஞ்சள்.",
    },
  },

  {
    number: "05",
    tamil: "கற்பூரம்",
    image: "/p3.jpeg",

    en: {
      name: "Pooja Camphor",
      description:
        "Clean-burning camphor for traditional deeparadhana.",
    },

    ta: {
      name: "பூஜை கற்பூரம்",
      description:
        "தீபாராதனை மற்றும் தினசரி வழிபாட்டிற்கான தரமான கற்பூரம்.",
    },
  },

  {
    number: "06",
    tamil: "ஊதுபத்தி",
    image: "/p2.jpeg",

    en: {
      name: "Incense Sticks",
      description:
        "Long-lasting devotional fragrance for your prayer space.",
    },

    ta: {
      name: "நறுமண ஊதுபத்தி",
      description:
        "பூஜை அறைக்கு இனிய ஆன்மீக நறுமணம் தரும் ஊதுபத்திகள்.",
    },
  },

  {
    number: "07",
    tamil: "சாம்பிராணி",
    image: "/p1.jpeg",

    en: {
      name: "Traditional Sambrani",
      description:
        "Sacred sambrani with a calming traditional fragrance.",
    },

    ta: {
      name: "பாரம்பரிய சாம்பிராணி",
      description:
        "அமைதியான சூழலை உருவாக்கும் பாரம்பரிய நறுமண சாம்பிராணி.",
    },
  },

  {
    number: "08",
    tamil: "தீப எண்ணெய்",
    image: "/p14.png",

    en: {
      name: "Pooja Lamp Oil",
      description:
        "Special oil prepared for lighting traditional pooja lamps.",
    },

    ta: {
      name: "பூஜை தீப எண்ணெய்",
      description:
        "பாரம்பரிய விளக்குகள் ஏற்றுவதற்காக தயாரிக்கப்பட்ட பூஜை எண்ணெய்.",
    },
  },

  {
    number: "09",
    tamil: "பஞ்சுத் திரி",
    image: "/p33.JPG",

    en: {
      name: "Cotton Wicks",
      description:
        "Pure cotton wicks made for lamps and traditional diyas.",
    },

    ta: {
      name: "தூய பஞ்சுத் திரி",
      description:
        "விளக்கு மற்றும் தீபம் ஏற்றுவதற்கான தரமான பஞ்சுத் திரிகள்.",
    },
  },

  {
  number: "10",
  tamil: "கட்டி சாம்பிராணி",
  image: "/p16.jpeg",

  en: {
    name: "Katti Sambrani",
    description:
      "Traditional Katti Sambrani with a rich natural fragrance for pooja and home worship.",
  },

  ta: {
    name: "கட்டி சாம்பிராணி",
    description:
      "பூஜை மற்றும் இல்ல வழிபாட்டிற்கு இயற்கையான நறுமணம் தரும் பாரம்பரிய கட்டி சாம்பிராணி.",
  },
},

  {
    number: "11",
    tamil: "தேன்",
    image: "/p8.jpeg",

    en: {
      name: "Pure Honey",
      description:
        "Pure and natural honey for pooja, traditional ceremonies and everyday use.",
    },

    ta: {
      name: "தூய தேன்",
      description:
        "பூஜை, பாரம்பரிய சடங்குகள் மற்றும் தினசரி பயன்பாட்டிற்கான தூய இயற்கை தேன்.",
    },
  },

  {
    number: "12",
    tamil: "பன்னீர்",
    image: "/p7.jpeg",

    en: {
      name: "Rose Water",
      description:
        "Pure fragrant rose water for pooja, temple rituals and traditional ceremonies.",
    },

    ta: {
      name: "ரோஜா பன்னீர்",
      description:
        "பூஜை, கோவில் வழிபாடு மற்றும் பாரம்பரிய சடங்குகளுக்கான நறுமணம் நிறைந்த தூய ரோஜா பன்னீர்.",
    },
  },

  {
    number: "13",
    tamil: "தைலம்",
    image: "/p9.jpeg",

    en: {
      name: "Herbal Thailam",
      description:
        "Traditional aromatic herbal thailam prepared with care for everyday use.",
    },

    ta: {
      name: "மூலிகை தைலம்",
      description:
        "பாரம்பரிய முறையில் தயாரிக்கப்பட்ட நறுமணம் நிறைந்த தரமான மூலிகை தைலம்.",
    },
  },
  {
  number: "14",
  tamil: "ஒயிட் ஸ்டிக்",
  image: "/p11.jpeg",

  en: {
    name: "Liberty White Stick",
    description:
      "Aromatic incense sticks with a pleasant fragrance for pooja, prayer and everyday use.",
  },

  ta: {
    name: "லிபர்ட்டி ஒயிட் ஸ்டிக்",
    description:
      "பூஜை, வழிபாடு மற்றும் தினசரி பயன்பாட்டிற்கு இனிய நறுமணம் தரும் தரமான ஊதுபத்தி.",
  },
},

{
  number: "15",
  tamil: "6 இன் 1 ஊதுபத்தி",
  image: "/p10.jpeg",

  en: {
    name: "Alaukik 6 in 1 Incense Sticks",
    description:
      "Premium incense sticks with multiple fragrances in one pack for a refreshing devotional atmosphere.",
  },

  ta: {
    name: "அலௌகிக் 6 இன் 1 ஊதுபத்தி",
    description:
      "பல நறுமணங்கள் ஒரே தொகுப்பில் கிடைக்கும், பூஜை மற்றும் ஆன்மீக சூழலுக்கான பிரீமியம் ஊதுபத்தி.",
  },
},

{
  number: "16",
  tamil: "மஸ்க்மெலன் ஊதுபத்தி",
  image: "/p12.jpeg",

  en: {
    name: "Alaukik Muskmelon Incense Sticks",
    description:
      "Premium muskmelon fragrance incense sticks for a fresh and pleasant prayer space.",
  },

  ta: {
    name: "அலௌகிக் மஸ்க்மெலன் ஊதுபத்தி",
    description:
      "இனிய மஸ்க்மெலன் நறுமணம் தரும் பூஜை மற்றும் இல்ல பயன்பாட்டிற்கான பிரீமியம் ஊதுபத்தி.",
  },
},

{
  number: "17",
  tamil: "பிளாக் ஃபாரஸ்ட் ஊதுபத்தி",
  image: "/p13.jpeg",

  en: {
    name: "Black Forest Incense Sticks",
    description:
      "Rich Black Forest fragrance incense sticks designed for a calm and aromatic devotional atmosphere.",
  },

  ta: {
    name: "பிளாக் ஃபாரஸ்ட் ஊதுபத்தி",
    description:
      "அமைதியான மற்றும் இனிய ஆன்மீக சூழலை உருவாக்கும் பிளாக் ஃபாரஸ்ட் நறுமண ஊதுபத்தி.",
  },
},
{
  number: "18",
  tamil: "சந்தனக் கட்டை",
  image: "/p17.jpeg",

  en: {
    name: "Pure Sandalwood",
    description:
      "Premium natural sandalwood for pooja, traditional rituals and devotional use.",
  },

  ta: {
    name: "தூய சந்தனக் கட்டை",
    description:
      "பூஜை, பாரம்பரிய சடங்குகள் மற்றும் ஆன்மீக பயன்பாட்டிற்கான தரமான இயற்கை சந்தனக் கட்டை.",
  },
},

{
  number: "19",
  tamil: "புனுகு எண்ணெய்",
  image: "/p18.jpeg",

  en: {
    name: "Punugu Oil",
    description:
      "Traditional aromatic Punugu Oil for temple pooja, spiritual rituals and devotional use.",
  },

  ta: {
    name: "புனுகு எண்ணெய்",
    description:
      "கோவில் பூஜை, ஆன்மீக வழிபாடு மற்றும் பாரம்பரிய சடங்குகளுக்கான நறுமணம் நிறைந்த புனுகு எண்ணெய்.",
  },
},
{
  number: "20",
  tamil: "கப் சாம்பிராணி",
  image: "/p20.jpeg",

  en: {
    name: "Cup Sambrani",
    description:
      "Easy-to-use traditional cup sambrani with a rich devotional fragrance for pooja and home use.",
  },

  ta: {
    name: "கப் சாம்பிராணி",
    description:
      "பூஜை மற்றும் இல்ல பயன்பாட்டிற்கு இனிய பாரம்பரிய நறுமணம் தரும் எளிதில் பயன்படுத்தக்கூடிய கப் சாம்பிராணி.",
  },
},
{
  number: "21",
  tamil: "யானை சாணம் விளக்கு",
  image: "/p21.jpeg",
  en: {
    name: "Yaanai Saanam Vilakku",
    description:
      "Traditional eco-friendly lamp made from elephant dung, used for pooja and spiritual rituals.",
  },
  ta: {
    name: "யானை சாணம் விளக்கு",
    description:
      "யானை சாணத்தால் தயாரிக்கப்படும் பாரம்பரிய இயற்கை விளக்கு. பூஜை மற்றும் ஆன்மீக வழிபாடுகளில் பயன்படுத்தப்படுகிறது.",
  },
},
{
  number: "22",
  tamil: "கோன் சாம்பிராணி",
  image: "/p22.jpeg",
  en: {
    name: "Cone Sambrani",
    description:
      "Traditional cone-shaped sambrani with a pleasant fragrance, ideal for pooja, prayer rooms and everyday home use.",
  },
  ta: {
    name: "கோன் சாம்பிராணி",
    description:
      "பூஜை, பூஜை அறை மற்றும் தினசரி இல்ல பயன்பாட்டிற்கு இனிய நறுமணம் தரும் பாரம்பரிய கோன் வடிவ சாம்பிராணி.",
  },
},
 {
  number: "23",
  tamil: "காதோட்டு கருமணி",
  image: "/p23.JPG",
  en: {
    name: "Kathottu Karumani",
    description:
      "Traditional ear ornament with black beads, commonly used for children as part of Tamil cultural customs.",
  },
  ta: {
    name: "காதோட்டு கருமணி",
    description:
      "தமிழர் பாரம்பரியத்தில் குழந்தைகளுக்கு அணிவிக்கப்படும் கருமணியுடன் கூடிய பாரம்பரிய காதணி.",
  },
},
{
  number: "24",
  tamil: "பச்சை கற்பூரம்",
  image: "/p24.JPG",
  en: {
    name: "Edible Camphor",
    description:
      "Traditional crystalline camphor commonly used for devotional purposes and selected traditional preparations.",
  },
  ta: {
    name: "பச்சை கற்பூரம்",
    description:
      "பூஜை மற்றும் பாரம்பரிய பயன்பாடுகளுக்காக பயன்படுத்தப்படும் தூய படிக வடிவ பச்சை கற்பூரம்.",
  },
},
{
  number: "25",
  tamil: "ஜவ்வாது",
  image: "/p29.JPG",
  en: {
    name: "Javadhu",
    description:
      "Traditional aromatic Javadhu fragrance with a rich and pleasant scent, commonly used for pooja and devotional purposes.",
  },
  ta: {
    name: "ஜவ்வாது",
    description:
      "பூஜை மற்றும் ஆன்மீக பயன்பாட்டிற்கு இனிய நறுமணம் தரும் பாரம்பரிய ஜவ்வாது வாசனை திரவியம்.",
  },
},

{
  number: "26",
  tamil: "அரகஜா அத்தர்",
  image: "/p26.JPG",
  en: {
    name: "Aragaja Attar",
    description:
      "Traditional alcohol-free Aragaja Attar with a rich and long-lasting fragrance for devotional and personal use.",
  },
  ta: {
    name: "அரகஜா அத்தர்",
    description:
      "பூஜை மற்றும் தனிப்பட்ட பயன்பாட்டிற்கு நீண்ட நேரம் இனிய நறுமணம் தரும் பாரம்பரிய ஆல்கஹால் இல்லாத அரகஜா அத்தர்.",
  },
},

{
  number: "27",
  tamil: "சந்தனப் பொடி",
  image: "/p25.JPG",
  en: {
    name: "Sandalwood Powder",
    description:
      "Traditional sandalwood powder with a natural soothing fragrance, suitable for pooja and devotional rituals.",
  },
  ta: {
    name: "சந்தனப் பொடி",
    description:
      "பூஜை மற்றும் ஆன்மீக வழிபாடுகளில் பயன்படுத்தப்படும் இயற்கையான நறுமணம் கொண்ட பாரம்பரிய சந்தனப் பொடி.",
  },
},

{
  number: "28",
  tamil: "அரகஜா தைலம்",
  image: "/p28.JPG",
  en: {
    name: "Aragaja Oil",
    description:
      "Traditional aromatic Aragaja oil with a rich fragrance, suitable for pooja, devotional and spiritual use.",
  },
  ta: {
    name: "அரகஜா தைலம்",
    description:
      "பூஜை மற்றும் ஆன்மீக பயன்பாட்டிற்கு இனிய நறுமணம் தரும் பாரம்பரிய அரகஜா தைலம்.",
  },
},
{
  number: "29",
  tamil: "அத்தர்",
  image: "/p27.JPG",
  en: {
    name: "Attar",
    description:
      "Traditional concentrated fragrance with a rich and long-lasting aroma, suitable for personal and devotional use.",
  },
  ta: {
    name: "அத்தர்",
    description:
      "தனிப்பட்ட மற்றும் ஆன்மீக பயன்பாட்டிற்கு நீண்ட நேரம் இனிய நறுமணம் தரும் பாரம்பரிய அத்தர்.",
  },
},
{
  number: "30",
  tamil: "பஞ்சகவ்யம்",
  image: "/p30.JPG",
  en: {
    name: "Panchagavya",
    description:
      "Traditional Panchagavya preparation used for pooja, temple rituals and other devotional purposes.",
  },
  ta: {
    name: "பஞ்சகவ்யம்",
    description:
      "பூஜை, கோவில் வழிபாடு மற்றும் பாரம்பரிய ஆன்மீக சடங்குகளில் பயன்படுத்தப்படும் பஞ்சகவ்யம்.",
  },
},
{
  number: "31",
  tamil: "சந்தன பேஸ்ட்",
  image: "/p31.JPG",
  en: {
    name: "Sandalwood Paste",
    description:
      "Traditional sandalwood paste with a soothing fragrance, commonly used for pooja, temple rituals and devotional purposes.",
  },
  ta: {
    name: "சந்தன பேஸ்ட்",
    description:
      "பூஜை, கோவில் வழிபாடு மற்றும் ஆன்மீக பயன்பாடுகளுக்குப் பயன்படுத்தப்படும் இனிய நறுமணம் கொண்ட பாரம்பரிய சந்தன பேஸ்ட்.",
  },
},
{
  number: "32",
  tamil: "மை",
  image: "/p32.JPG",
  en: {
    name: "Mai",
    description:
      "Traditional black Mai preparation used for customary and devotional purposes.",
  },
  ta: {
    name: "மை",
    description:
      "பாரம்பரிய மற்றும் வழிபாட்டு பயன்பாடுகளுக்காக பயன்படுத்தப்படும் கருப்பு மை.",
  },
},
{
  number: "33",
  tamil: "திருமஞ்சனப் பொடி",
  image: "/p34.JPG",
  en: {
    name: "Thirumanjana Powder",
    description:
      "Traditional herbal Thirumanjana powder used for abhishekam, pooja and other devotional rituals.",
  },
  ta: {
    name: "திருமஞ்சனப் பொடி",
    description:
      "அபிஷேகம், பூஜை மற்றும் பாரம்பரிய ஆன்மீக சடங்குகளில் பயன்படுத்தப்படும் திருமஞ்சனப் பொடி.",
  },
},

{
  number: "34",
  tamil: "நூல் திரி",
  image: "/p15.jpg",
  en: {
    name: "Nool Thiri",
    description:
      "Traditional cotton thread wick used for lighting oil lamps during pooja, prayers and auspicious occasions.",
  },
  ta: {
    name: "நூல் திரி",
    description:
      "பூஜை, வழிபாடு மற்றும் சுப நிகழ்ச்சிகளில் எண்ணெய் விளக்கு ஏற்றுவதற்குப் பயன்படுத்தப்படும் பாரம்பரிய பருத்தி நூல் திரி.",
  },
},

{
  number: "35",
  tamil: "நவமணி",
  image: "/p35.JPG",
  en: {
    name: "Navamani",
    description:
      "Traditional set of nine coloured stones used for pooja, spiritual rituals and other auspicious purposes.",
  },
  ta: {
    name: "நவமணி",
    description:
      "பூஜை, ஆன்மீக சடங்குகள் மற்றும் சுப காரியங்களில் பயன்படுத்தப்படும் ஒன்பது வண்ண மணிகளின் பாரம்பரிய தொகுப்பு.",
  },
},

{
  number: "36",
  tamil: "லட்சுமி பஞ்சலோக நாணயம்",
  image: "/p.36.JPG",
  en: {
    name: "Lakshmi Panchalogam Coin",
    description:
      "Traditional Lakshmi Panchalogam coins used for pooja, auspicious ceremonies and devotional purposes.",
  },
  ta: {
    name: "லட்சுமி பஞ்சலோக நாணயம்",
    description:
      "பூஜை, சுப நிகழ்ச்சிகள் மற்றும் ஆன்மீக வழிபாடுகளில் பயன்படுத்தப்படும் பாரம்பரிய லட்சுமி பஞ்சலோக நாணயங்கள்.",
  },
},
{
  number: "37",
  tamil: "புனுகு பேஸ்ட்",
  image: "/p37.JPG",
  en: {
    name: "Punugu Paste",
    description:
      "Traditional aromatic paste used for pooja, temple rituals and other devotional purposes.",
  },
  ta: {
    name: "புனுகு பேஸ்ட்",
    description:
      "பூஜை, கோவில் வழிபாடு மற்றும் பாரம்பரிய ஆன்மீக பயன்பாடுகளுக்குப் பயன்படுத்தப்படும் நறுமண பேஸ்ட்.",
  },
},

{
  number: "38",
  tamil: "எருக்கன் திரி",
  image: "/p38.JPG",
  en: {
    name: "Erukkan Thiri",
    description:
      "Traditional Erukkan wick used for lighting lamps during pooja, prayers and spiritual rituals.",
  },
  ta: {
    name: "எருக்கன் திரி",
    description:
      "பூஜை, வழிபாடு மற்றும் ஆன்மீக சடங்குகளில் விளக்கு ஏற்றுவதற்குப் பயன்படுத்தப்படும் பாரம்பரிய எருக்கன் திரி.",
  },
},

{
  number: "39",
  tamil: "அனுமன் சிந்தூரம்",
  image: "/p39.JPG",
  en: {
    name: "Hanuman Sindoor",
    description:
      "Traditional sindoor used for Hanuman pooja, temple worship and other devotional rituals.",
  },
  ta: {
    name: "அனுமன் சிந்தூரம்",
    description:
      "அனுமன் பூஜை, கோவில் வழிபாடு மற்றும் ஆன்மீக சடங்குகளில் பயன்படுத்தப்படும் பாரம்பரிய சிந்தூரம்.",
  },
},

{
  number: "40",
  tamil: "புனுகு",
  image: "/p40.JPG",
  en: {
    name: "Punugu",
    description:
      "Traditional aromatic fragrance used for pooja, temple worship and devotional purposes.",
  },
  ta: {
    name: "புனுகு",
    description:
      "பூஜை, கோவில் வழிபாடு மற்றும் ஆன்மீக பயன்பாடுகளுக்குப் பயன்படுத்தப்படும் பாரம்பரிய நறுமணப் பொருள்.",
  },
},
];
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

    {poojaProducts.map((product) => {
  const content = product[language];

  return (
    <article
      className="pooja-card"
      key={product.number}
    >
      <div className="pooja-card-image">
        <img
          src={product.image}
          alt={`${content.name} - ${product.tamil}`}
          loading="lazy"
        />

        <span className="pooja-number">
          {product.number}
        </span>
      </div>

      <div className="pooja-card-content">

       
        <h3>{content.name}</h3>

        <p>{content.description}</p>

        <button
          type="button"
          className="pooja-select-product-btn"
          onClick={() =>
            addToCart({
              ...product,
              name: content.name,
              description: content.description,
            })
          }
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

      </div>
    </article>
  );
})}

    </div>
  </div>
</section>
    </main>
  );
}