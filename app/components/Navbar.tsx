import React, { useState } from "react";
import { Link } from "@remix-run/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Website Ranking", path: "/services/website-ranking" },
    { name: "Website Renting", path: "/services/website-renting" },
    { name: "Website Creation", path: "/services/website-creation" },
    { name: "GBP Ranking", path: "/services/gbp-ranking" },
    { name: "Digital Services", path: "/services/digital-services" },
    { name: "Facebook Ads", path: "/services/facebook-ads" },
    { name: "Google Ads", path: "/services/google-ads" },
    { name: "Social Media Management", path: "/services/social-media-management" },
    { name: "Business Citations", path: "/services/business-citations" }
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          {isOpen && (
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li>
                <a onClick={() => setIsServicesOpen(!isServicesOpen)}>Services</a>
                {isServicesOpen && (
                  <ul className="p-2 bg-base-100 rounded-box">
                    {services.map((service) => (
                      <li key={service.path}>
                        <Link 
                          to={service.path} 
                          onClick={() => {
                            setIsOpen(false);
                            setIsServicesOpen(false);
                          }} 
                          className="whitespace-nowrap"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
              <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          )}
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Peak Growth Digital</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost">Services</label>
            <ul tabIndex={0} className="dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path} 
                    className="whitespace-nowrap"
                    onClick={() => {
                      const dropdown = document.activeElement as HTMLElement;
                      dropdown.blur();
                    }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/contact" className="btn btn-primary">Get Started</Link>
      </div>
    </div>
  );
}