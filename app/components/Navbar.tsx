import React from 'react';
import { Link } from '@remix-run/react';
import { useTheme } from '~/hooks/useTheme';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

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
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300 z-40"> {/* Doubled height */}
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <div className="flex-1 px-2 mx-2">
            <Link to="/" className="btn btn-ghost normal-case text-3xl">Peak Growth Digital</Link> {/* Increased text size */}
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal px-1 text-2xl"> {/* Increased text size */}
              <li><Link to="/">Home</Link></li>
              <li>
                <details>
                  <summary>Services</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    {services.map((service) => (
                      <li key={service.path}><Link to={service.path}>{service.name}</Link></li>
                    ))}
                  </ul>
                </details>
              </li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle btn-lg">
                <div className="indicator text-3xl">
                  {themes.find(t => t.name === theme)?.icon || '🎨'}
                </div>
              </label>
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-64 bg-base-100 shadow">
                <div className="card-body">
                  <div className="grid grid-cols-4 gap-2">
                    {themes.map((t) => (
                      <button
                        key={t.name}
                        onClick={() => setTheme(t.name)}
                        className={`btn btn-ghost ${theme === t.name ? 'btn-active' : ''} text-2xl`}
                        title={t.name}
                      >
                        {t.icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary btn-lg ml-2 text-xl">Get Started</Link> {/* Increased button and text size */}
          </div>
        </div>
      </div> 
      <div className="drawer-side z-30">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-4/5 h-full bg-base-300 text-base-content">
          <li><Link to="/" className="text-4xl py-8">Home</Link></li> {/* Increased text size and padding */}
          <li>
            <details>
              <summary className="text-4xl py-8">Services</summary> {/* Increased text size and padding */}
              <ul className="pl-4">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link to={service.path} className="text-3xl py-6"> {/* Increased text size and padding */}
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li><Link to="/about" className="text-4xl py-8">About</Link></li> {/* Increased text size and padding */}
          <li><Link to="/blog" className="text-4xl py-8">Blog</Link></li> {/* Increased text size and padding */}
          <li><Link to="/contact" className="text-4xl py-8">Contact</Link></li> {/* Increased text size and padding */}
        </ul>
      </div>
    </div>
  );
}
