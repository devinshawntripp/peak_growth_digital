import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link to="/about" className="link link-hover">About us</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
        <Link to="/privacy-policy" className="link link-hover">Privacy Policy</Link>
        <Link to="/terms-of-service" className="link link-hover">Terms of Service</Link>
      </div>
      <div>
        <p className="font-semibold">Peak Growth Digital LLC</p>
        <p>312 Pueblo Bonito Trl, Haslet, TX 76052</p>
        <p>
          <a href="tel:+12145160778" className="link link-hover">(214) 516-0778</a>
          {" · "}
          <a href="mailto:info@peakgrowthdigital.com" className="link link-hover">info@peakgrowthdigital.com</a>
        </p>
      </div>
      <div>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved by Peak Growth Digital</p>
      </div>
    </footer>
  );
}
