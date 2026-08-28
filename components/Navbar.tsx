"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { useCart } from "./CartProvider";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
   const [showCart, setShowCart] = useState(false);
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

 const [showForm, setShowForm] = useState(false);

const [customer, setCustomer] = useState({
  name: "",
  phone: "",
  email: "",
});
 const sendToWhatsApp = () => {
  if (!customer.name.trim() || !customer.phone.trim()) {
    alert(
      language === "ta"
        ? "பெயர் மற்றும் தொலைபேசி எண்ணை உள்ளிடவும்."
        : "Please enter your name and phone number."
    );
    return;
  }

  if (cartItems.length === 0) {
    alert(
      language === "ta"
        ? "முதலில் ஒரு பொருளை சேர்க்கவும்."
        : "Please add at least one product."
    );
    return;
  }

  const productLines = cartItems
    .map(
      (item, index) =>
        `${index + 1}. ${item.name} (${item.tamil}) - Qty: ${item.quantity}`
    )
    .join("\n");

  const message = `
Hello Santhanam Store,

Customer Details:
Name: ${customer.name}
Phone: ${customer.phone}
Email: ${customer.email || "-"}

Selected Products:
${productLines}

Please contact me regarding these products.
  `.trim();

  const whatsappNumber = "7550008588";

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
};
  return (
    <>
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
            {language === "ta"
              ? "முகப்பு"
              : "Home"}
          </a>

          <a href="/about">
            {language === "ta"
              ? "எங்களைப் பற்றி"
              : "About"}
          </a>

          <a href="/tradition">
            {language === "ta"
              ? "சேவைகள்"
              : "Services"}
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


        {/* CART BUTTON */}
       <button
  type="button"
  className="navbar-cart-button"
  onClick={() => setShowCart(true)}
>
  <span className="navbar-cart-icon">🛒</span>

  {cartItems.length > 0 && (
    <span className="navbar-cart-count">
      {cartItems.length}
    </span>
  )}
</button>


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
          {language === "ta"
            ? "English"
            : "தமிழ்"}
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
              {language === "ta"
                ? "முகப்பு"
                : "Home"}
            </a>

            <a href="/about">
              {language === "ta"
                ? "எங்களைப் பற்றி"
                : "About"}
            </a>

            <a href="/tradition">
              {language === "ta"
                ? "சேவைகள்"
                : "Services"}
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


      {/* CART POPUP */}
{showCart && (
      <div className="cart-popup-overlay">

        <div className="cart-popup">

          <div className="cart-popup-header">
            <h3>
              {language === "ta"
                ? "சேர்க்கப்பட்ட பொருட்கள்"
                : "Added Products"}
            </h3>

            <button
              type="button"
              onClick={() => setShowCart(false)}
            >
              ×
            </button>
          </div>

          {cartItems.length === 0 ? (

            <p>
              {language === "ta"
                ? "பொருட்கள் எதுவும் சேர்க்கப்படவில்லை"
                : "No products added"}
            </p>

          ) : (

            <div className="cart-items">

              {cartItems.map((item) => (

                <div
                  className="cart-item"
                  key={item.number}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <span>{item.tamil}</span>
                  </div>

                  <div className="cart-quantity">

                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item.number)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item.number)
                      }
                    >
                      +
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

{cartItems.length > 0 && (
  <button
    type="button"
    className="cart-proceed-btn"
  onClick={() => setShowForm(true)}
  >
    {language === "ta"
      ? "விசாரணை அனுப்ப"
      : "Send Enquiry"}

    <span>→</span>
  </button>
)}
{/* CUSTOMER FORM POPUP */}
{showForm && (
  <div className="cart-form-overlay">

    <div className="cart-form-popup">

      {/* CLOSE */}
      <button
        type="button"
        className="cart-form-close"
        onClick={() => setShowForm(false)}
      >
        ×
      </button>

      <p className="cart-form-kicker">
        {language === "ta"
          ? "விசாரணை விவரங்கள்"
          : "ENQUIRY DETAILS"}
      </p>

      <h2>
        {language === "ta"
          ? "உங்கள் விவரங்களை உள்ளிடவும்"
          : "Enter Your Details"}
      </h2>

      {/* NAME */}
      <label>
        {language === "ta" ? "பெயர்" : "Name"}
      </label>

      <input
        type="text"
        placeholder={
          language === "ta"
            ? "உங்கள் பெயரை உள்ளிடவும்"
            : "Enter your name"
        }
        value={customer.name}
        onChange={(e) =>
          setCustomer({
            ...customer,
            name: e.target.value,
          })
        }
      />

      {/* PHONE */}
      <label>
        {language === "ta"
          ? "தொலைபேசி எண்"
          : "Phone Number"}
      </label>

      <input
        type="tel"
        placeholder={
          language === "ta"
            ? "உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்"
            : "Enter your phone number"
        }
        value={customer.phone}
        onChange={(e) =>
          setCustomer({
            ...customer,
            phone: e.target.value,
          })
        }
      />

      {/* EMAIL */}
      <label>
        {language === "ta"
          ? "மின்னஞ்சல்"
          : "Email"}
      </label>

      <input
        type="email"
        placeholder={
          language === "ta"
            ? "உங்கள் மின்னஞ்சலை உள்ளிடவும்"
            : "Enter your email"
        }
        value={customer.email}
        onChange={(e) =>
          setCustomer({
            ...customer,
            email: e.target.value,
          })
        }
      />

      {/* WHATSAPP BUTTON */}
      <button
        type="button"
        className="cart-whatsapp-btn"
        onClick={sendToWhatsApp}
      >
        {language === "ta"
          ? "WhatsApp மூலம் அனுப்ப"
          : "Send to WhatsApp"}
      </button>

    </div>

  </div>
)}

        </div>

      </div>
    )}

  </>
);
}
