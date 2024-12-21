import React from "react";
import'./Footer.css';
export default function Footer() {
  const submitEmail = () => {
    // هنا يمكنك إضافة منطق إرسال البريد الإلكتروني
    console.log("Email submitted");
  };

  return (
    <footer>
      <div className="image"></div>
      <div className="subscribe-container">
        <h2 className="subscribe-title">Subscribe to our emails</h2>
        <div className="input-container">
          <input
            type="email"
            required
            placeholder="Email"
            className="email-input"
            id="email"
            pattern="roomar@gmail\.com"
          />
          <button className="arrow" onClick={submitEmail}>
            →
          </button>
        </div>
      </div>

      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100083387468313" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.tiktok.com/@koffeekulture?lang=en" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
        <a href="https://www.instagram.com/koffee.kulture/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}