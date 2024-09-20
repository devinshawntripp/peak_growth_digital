import React, { useState } from 'react';
import { Link } from '@remix-run/react';
import { useTheme } from '~/hooks/useTheme';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

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

  const themes = [
    { name: "light", icon: "☀️" },
    { name: "dark", icon: "🌙" },
    { name: "cupcake", icon: "🧁" },
    { name: "bumblebee", icon: "🐝" },
    { name: "emerald", icon: "💎" },
    { name: "corporate", icon: "🏢" },
    { name: "synthwave", icon: "🌆" },
    { name: "retro", icon: "🕹️" },
    { name: "cyberpunk", icon: "🤖" },
    { name: "valentine", icon: "💖" },
    { name: "halloween", icon: "🎃" },
    { name: "garden", icon: "🌻" },
    { name: "forest", icon: "🌳" },
    { name: "aqua", icon: "💧" },
    { name: "lofi", icon: "🎵" },
    { name: "pastel", icon: "🎨" },
    { name: "fantasy", icon: "🧙" },
    { name: "wireframe", icon: "📐" },
    { name: "black", icon: "⚫" },
    { name: "luxury", icon: "💎" },
    { name: "dracula", icon: "🧛" },
    { name: "cmyk", icon: "🖨️" },
    { name: "autumn", icon: "🍂" },
    { name: "business", icon: "💼" },
    { name: "acid", icon: "🧪" },
    { name: "lemonade", icon: "🍋" },
    { name: "night", icon: "🌃" },
    { name: "coffee", icon: "☕" },
    { name: "winter", icon: "❄️" },
    { name: "dim", icon: "🔅" },
    { name: "nord", icon: "🧊" },
    { name: "sunset", icon: "🌅" },
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
      <div className="flex-none relative">
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
        >
          {themes.find(t => t.name === theme)?.icon || '🎨'}
        </button>
        {isThemeDropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-base-100 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            <div className="py-1 grid grid-cols-4 gap-1 p-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {themes.map((t) => (
                <button
                  key={t.name}
                  onClick={() => {
                    setTheme(t.name);
                    setIsThemeDropdownOpen(false);
                  }}
                  className={`flex items-center justify-center p-2 rounded-md hover:bg-base-200 ${theme === t.name ? 'bg-primary text-primary-content' : ''}`}
                  role="menuitem"
                >
                  <span className="text-2xl" title={t.name}>{t.icon}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="navbar-end">
        <Link to="/contact" className="btn btn-primary">Get Started</Link>
      </div>
    </div>
  );
}