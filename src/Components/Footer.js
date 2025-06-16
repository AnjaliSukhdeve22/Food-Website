// components/Footer.jsx
import '../style/Footer.css'
export default function Footer() {
  return (
   <footer>
  <div class="container">
    <div>
      <h2>Restaurant Name</h2>
      <p>Fine dining experience with exquisite flavors and elegant ambiance.</p>
    </div>
    <div>
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div>
      <h3>Opening Hours</h3>
      <ul>
        <li>Mon–Fri: 12:00–22:00</li>
        <li>Sat: 13:00–23:00</li>
        <li>Sun: Closed</li>
      </ul>
    </div>
    <div>
      <h3>Contact</h3>
      <ul>
        <li>📍 123 Gourmet St, Cityname</li>
        <li>📞 +91 98765 43210</li>
        <li>📧 info@restaurant.com</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    © 2025 Restaurant Name. All rights reserved.
  </div>
</footer>


  );
}
