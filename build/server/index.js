import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable, json } from "@remix-run/node";
import { RemixServer, Link, Meta, Links, Outlet, ScrollRestoration, Scripts, LiveReload, useRouteError, isRouteErrorResponse, useLoaderData, useSubmit, Form, useSearchParams, useActionData, useNavigation, useLocation } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let prohibitOutOfOrderStreaming = isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode;
  return prohibitOutOfOrderStreaming ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, setTheme };
}
function Navbar() {
  var _a;
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const services2 = [
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
    { name: "sunset", icon: "🌅" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "navbar bg-base-100", children: [
    /* @__PURE__ */ jsxs("div", { className: "navbar-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "dropdown", children: [
        /* @__PURE__ */ jsx("label", { tabIndex: 0, className: "btn btn-ghost lg:hidden", onClick: () => setIsOpen(!isOpen), children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h8m-8 6h16" }) }) }),
        isOpen && /* @__PURE__ */ jsxs("ul", { tabIndex: 0, className: "menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", onClick: () => setIsOpen(false), children: "Home" }) }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("a", { onClick: () => setIsServicesOpen(!isServicesOpen), children: "Services" }),
            isServicesOpen && /* @__PURE__ */ jsx("ul", { className: "p-2 bg-base-100 rounded-box", children: services2.map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: service.path,
                onClick: () => {
                  setIsOpen(false);
                  setIsServicesOpen(false);
                },
                className: "whitespace-nowrap",
                children: service.name
              }
            ) }, service.path)) })
          ] }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", onClick: () => setIsOpen(false), children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog", onClick: () => setIsOpen(false), children: "Blog" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", onClick: () => setIsOpen(false), children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/", className: "btn btn-ghost normal-case text-xl", children: "Peak Growth Digital" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "navbar-center hidden lg:flex", children: /* @__PURE__ */ jsxs("ul", { className: "menu menu-horizontal px-1", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Home" }) }),
      /* @__PURE__ */ jsxs("li", { className: "dropdown dropdown-hover", children: [
        /* @__PURE__ */ jsx("label", { tabIndex: 0, className: "btn btn-ghost", children: "Services" }),
        /* @__PURE__ */ jsx("ul", { tabIndex: 0, className: "dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52", children: services2.map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to: service.path,
            className: "whitespace-nowrap",
            onClick: () => {
              const dropdown = document.activeElement;
              dropdown.blur();
            },
            children: service.name
          }
        ) }, service.path)) })
      ] }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", children: "About" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog", children: "Blog" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Contact" }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-none relative", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "btn btn-ghost btn-circle",
          onClick: () => setIsThemeDropdownOpen(!isThemeDropdownOpen),
          children: ((_a = themes.find((t) => t.name === theme)) == null ? void 0 : _a.icon) || "🎨"
        }
      ),
      isThemeDropdownOpen && /* @__PURE__ */ jsx("div", { className: "absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-base-100 ring-1 ring-black ring-opacity-5 focus:outline-none z-50", children: /* @__PURE__ */ jsx("div", { className: "py-1 grid grid-cols-4 gap-1 p-2", role: "menu", "aria-orientation": "vertical", "aria-labelledby": "options-menu", children: themes.map((t) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setTheme(t.name);
            setIsThemeDropdownOpen(false);
          },
          className: `flex items-center justify-center p-2 rounded-md hover:bg-base-200 ${theme === t.name ? "bg-primary text-primary-content" : ""}`,
          role: "menuitem",
          children: /* @__PURE__ */ jsx("span", { className: "text-2xl", title: t.name, children: t.icon })
        },
        t.name
      )) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "navbar-end", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn btn-primary", children: "Get Started" }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "footer footer-center p-10 bg-base-200 text-base-content rounded", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-flow-col gap-4", children: [
      /* @__PURE__ */ jsx(Link, { to: "/about", className: "link link-hover", children: "About us" }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "link link-hover", children: "Contact" }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "link link-hover", children: "Privacy Policy" }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "link link-hover", children: "Terms of Service" })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-flow-col gap-4", children: [
      /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", className: "fill-current", children: /* @__PURE__ */ jsx("path", { d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" }) }) }),
      /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", className: "fill-current", children: /* @__PURE__ */ jsx("path", { d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" }) }) }),
      /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", className: "fill-current", children: /* @__PURE__ */ jsx("path", { d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { children: [
      "Copyright © ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " - All rights reserved by Peak Growth Digital"
    ] }) })
  ] });
}
const links = () => [
  { rel: "stylesheet", href: "/styles/tailwind.css" }
  // { rel: "icon", href: "/favicon.ico" },
];
function App() {
  const { theme } = useTheme();
  return /* @__PURE__ */ jsxs("html", { lang: "en", "data-theme": theme, children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(Outlet, {}) }),
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {}),
      /* @__PURE__ */ jsx(LiveReload, {})
    ] })
  ] });
}
function ErrorBoundary() {
  var _a;
  const error = useRouteError();
  let errorMessage;
  let errorStatus;
  if (isRouteErrorResponse(error)) {
    errorMessage = ((_a = error.data) == null ? void 0 : _a.message) || "Something went wrong. Please try again.";
    errorStatus = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
    errorStatus = "Error";
  } else {
    errorMessage = "An unexpected error occurred. Please try again later.";
    errorStatus = "Error";
  }
  return /* @__PURE__ */ jsxs("html", { lang: "en", "data-theme": "dim", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("title", { children: errorStatus }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-4", children: errorStatus }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: errorMessage })
      ] }),
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
function FAQSection({ faqs: faqs2 }) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Frequently Asked Questions" }),
    faqs2.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "collapse collapse-plus bg-base-200", children: [
      /* @__PURE__ */ jsx("input", { type: "radio", name: `faq-accordion-${index}` }),
      /* @__PURE__ */ jsx("div", { className: "collapse-title text-xl font-medium", children: faq.question }),
      /* @__PURE__ */ jsx("div", { className: "collapse-content", children: /* @__PURE__ */ jsx("p", { children: faq.answer }) })
    ] }, index))
  ] });
}
const meta$d = () => {
  return [
    { title: "Social Media Management Services - Peak Growth Digital" },
    { name: "description", content: "Comprehensive social media management services for Instagram, Facebook, and Twitter. Boost your brand's online presence with Peak Growth Digital." }
  ];
};
const faqs$8 = [
  {
    question: "How often should I post on social media?",
    answer: "The ideal posting frequency depends on the platform. For example, posting once a day on Instagram can help keep your audience engaged, while 2-3 tweets per day on Twitter ensures you're part of the conversation. We tailor your posting schedule based on your audience's behavior and platform best practices."
  },
  {
    question: "Do I need to be on all social media platforms?",
    answer: "Not necessarily. The key is to be where your audience is. For example, if your business is visual-heavy, Instagram is a must. If you're in a professional industry, LinkedIn might be a better fit. We help determine which platforms are best for your business and focus on those."
  },
  {
    question: "Can social media help with customer support?",
    answer: "Yes! Social media is a great platform for customer service. Customers often turn to social media to ask questions or voice concerns. By being responsive and addressing customer inquiries in real-time, you can provide a better customer experience and improve brand loyalty."
  }
];
const containerVariants$b = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants$b = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function SocialMediaManagement() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants$b,
      children: [
        /* @__PURE__ */ jsx(motion.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants$b, children: "Social Media Management" }),
        /* @__PURE__ */ jsx(motion.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants$b, children: "In today's digital world, having a strong presence on social media is essential for engaging with your audience and building your brand. At Peak Growth Digital, we provide comprehensive Social Media Management services that help you make the most of platforms like Instagram, Facebook, and Twitter." }),
        /* @__PURE__ */ jsxs(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants$b, children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "What is Social Media Management?" }),
            /* @__PURE__ */ jsx("p", { children: "Social media management involves curating, scheduling, and optimizing your brand's social media content across platforms. It's not just about posting regularly—it's about creating engaging, relevant content that connects with your audience, drives traffic, and converts followers into customers." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Why is Social Media Important?" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Brand Awareness:" }),
                " Build visibility and recognition"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Customer Engagement:" }),
                " Interact with your audience in real-time"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Increased Website Traffic:" }),
                " Drive traffic to your website"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Customer Insights:" }),
                " Gain valuable feedback and understand your audience"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$b, children: "Platforms We Manage" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", variants: itemVariants$b, children: [
          { title: "Instagram", icon: "📸", description: "Ideal for visual storytelling and building a community" },
          { title: "Facebook", icon: "👍", description: "Versatile platform suitable for any type of business" },
          { title: "Twitter", icon: "🐦", description: "Perfect for quick updates and real-time conversations" }
        ].map((platform, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: platform.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: platform.title }),
          /* @__PURE__ */ jsx("p", { children: platform.description })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$b, children: "Our Social Media Management Services" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", variants: itemVariants$b, children: [
          { title: "Content Creation", icon: "✍️", description: "Custom content that resonates with your audience" },
          { title: "Content Scheduling", icon: "🗓️", description: "Optimal timing for maximum engagement" },
          { title: "Audience Engagement", icon: "💬", description: "Active monitoring and interaction with your audience" },
          { title: "Analytics and Reporting", icon: "📊", description: "Track performance and adjust strategies" },
          { title: "Social Media Advertising", icon: "📣", description: "Targeted ads to boost visibility and reach" }
        ].map((service, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: service.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: service.title }),
          /* @__PURE__ */ jsx("p", { children: service.description })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$b, children: "Common Questions" }),
        /* @__PURE__ */ jsx(motion.div, { variants: itemVariants$b, children: /* @__PURE__ */ jsx(FAQSection, { faqs: faqs$8 }) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$b, children: "Benefits of Social Media Management" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", variants: itemVariants$b, children: [
          { title: "Consistent Branding", description: "Ensure a consistent look, tone, and message across all platforms" },
          { title: "Increased Engagement", description: "More likes, shares, and comments on your posts" },
          { title: "Boosted Website Traffic", description: "Drive traffic from social media to your website" },
          { title: "Real-Time Feedback", description: "Understand customer sentiment and improve your offerings" }
        ].map((benefit, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: benefit.title }),
          /* @__PURE__ */ jsx("p", { children: benefit.description })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.div, { className: "mt-12 text-center", variants: itemVariants$b, children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn btn-primary btn-lg", children: "Start Your Social Media Journey" }) })
      ]
    }
  );
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SocialMediaManagement,
  meta: meta$d
}, Symbol.toStringTag, { value: "Module" }));
const meta$c = () => {
  return [
    { title: "Business Citations Service - Peak Growth Digital" },
    { name: "description", content: "Improve your local search visibility with our comprehensive business citations service. Boost your local SEO and credibility with Peak Growth Digital." }
  ];
};
const faqs$7 = [
  {
    question: "How long does it take to see results from citations?",
    answer: "Citations typically start to impact your local search rankings within 4 to 6 weeks of submission. It takes time for search engines to crawl and index your listings, but the long-term benefits are significant."
  },
  {
    question: "Can I update my citations if my business information changes?",
    answer: "Yes! If your business address or phone number changes, we can update your existing citations to ensure consistency across all platforms."
  },
  {
    question: "Do I need citations if I already have a Google Business Profile?",
    answer: "While a well-optimized Google Business Profile is critical for local SEO, citations on other reputable platforms reinforce your business's legitimacy and improve your chances of ranking higher in local searches."
  },
  {
    question: "How do citations impact my local SEO?",
    answer: "Citations act as verification points for search engines like Google. The more consistent and authoritative citations you have, the more likely your business will be considered trustworthy and relevant, improving your chances of ranking in local searches."
  }
];
const containerVariants$a = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants$a = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function BusinessCitations() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants$a,
      children: [
        /* @__PURE__ */ jsx(motion.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants$a, children: "Citations Service" }),
        /* @__PURE__ */ jsx(motion.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants$a, children: "One of the key factors that help businesses rank higher in local search results is the presence of consistent and accurate citations across the web. At Peak Growth Digital, we offer a comprehensive Citations Service that helps improve your business's local search visibility, credibility, and trustworthiness." }),
        /* @__PURE__ */ jsxs(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants$a, children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "What Are Citations?" }),
            /* @__PURE__ */ jsx("p", { children: "A citation is any online mention of your business that includes your name, address, and phone number (NAP) information. Citations are found on local directories like Yelp, Yellow Pages, Google My Business, and other relevant platforms." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Why Are Citations Important for Local SEO?" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Improves Local Search Rankings:" }),
                " Helps verify your business's legitimacy and relevance"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Builds Trust and Credibility:" }),
                " Consistent citations signal trustworthiness"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Increases Online Visibility:" }),
                " More listings mean more chances to be found"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$a, children: "Our Citations Service Packages" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", variants: itemVariants$a, children: [
          { title: "120 Citations Package", price: "$299", features: ["Manual submission to 120 high-quality directories", "Detailed NAP consistency checks", "Full report of listings"] },
          { title: "300 Citations Package", price: "$449", features: ["Submission to 300 directories", "Ongoing tracking and updates", "Ideal for highly competitive markets"] }
        ].map((package_, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-2", children: package_.title }),
          /* @__PURE__ */ jsx("p", { className: "text-xl font-bold mb-4", children: package_.price }),
          /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside", children: package_.features.map((feature, fIndex) => /* @__PURE__ */ jsx("li", { children: feature }, fIndex)) })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$a, children: "How We Create and Optimize Citations" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", variants: itemVariants$a, children: [
          { title: "NAP Consistency Check", icon: "🔍", description: "Audit and ensure consistency of your business information" },
          { title: "Manual Submission", icon: "📝", description: "Manually submit to reputable directories" },
          { title: "Ongoing Monitoring", icon: "👀", description: "Regularly check and update your citations" },
          { title: "Reporting", icon: "📊", description: "Provide detailed reports of all your listings" }
        ].map((step, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: step.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { children: step.description })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$a, children: "Common Questions About Citations" }),
        /* @__PURE__ */ jsx(motion.div, { variants: itemVariants$a, children: /* @__PURE__ */ jsx(FAQSection, { faqs: faqs$7 }) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$a, children: "Benefits of Citations Service" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", variants: itemVariants$a, children: [
          { title: "Improved Local SEO", description: "Boost your visibility in local search results" },
          { title: "Enhanced Online Visibility", description: "Increase opportunities for potential customers to find you" },
          { title: "Increased Trust", description: "Build legitimacy and trustworthiness for your business" },
          { title: "Ongoing Support", description: "Ensure your citations remain up to date with our larger package" }
        ].map((benefit, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: benefit.title }),
          /* @__PURE__ */ jsx("p", { children: benefit.description })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.div, { className: "mt-12 text-center", variants: itemVariants$a, children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn btn-primary btn-lg", children: "Get Started with Citations" }) })
      ]
    }
  );
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BusinessCitations,
  meta: meta$c
}, Symbol.toStringTag, { value: "Module" }));
const meta$b = () => {
  return [
    { title: "General Digital Services - Peak Growth Digital" },
    { name: "description", content: "Comprehensive digital marketing services to grow your online presence. Learn about our strategies for SEO, content marketing, social media, and more." }
  ];
};
const faqs$6 = [
  {
    question: "How do I know which digital services are right for my business?",
    answer: "We start by understanding your business goals and target audience. From there, we recommend a combination of services that will help you achieve those goals. Whether you need more traffic, better conversion rates, or increased brand awareness, we tailor our approach to meet your specific needs."
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer: "Results vary depending on the service. PPC can deliver immediate traffic, while SEO and content marketing typically take a few months to show significant results. We continuously monitor and adjust our strategies to ensure you see measurable progress."
  },
  {
    question: "How do you measure success?",
    answer: "Success is measured through key performance indicators (KPIs) that align with your business objectives. For example, for SEO, it might be higher search rankings and increased organic traffic; for social media, it could be engagement rates and follower growth. We provide detailed reports to keep you informed of progress."
  }
];
const containerVariants$9 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants$9 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function DigitalServices() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants$9,
      children: [
        /* @__PURE__ */ jsx(motion.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants$9, children: "General Digital Services" }),
        /* @__PURE__ */ jsx(motion.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants$9, children: "In the modern business landscape, having a strong digital presence is essential, but it goes beyond just having a website. At Peak Growth Digital, we offer a wide range of general digital services designed to enhance your brand's online visibility, increase traffic, and ultimately drive conversions." }),
        /* @__PURE__ */ jsxs(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants$9, children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "What Are General Digital Services?" }),
            /* @__PURE__ */ jsx("p", { children: "General digital services encompass a broad spectrum of online marketing techniques and strategies aimed at improving your brand's digital footprint. Our offerings are designed to help businesses grow by leveraging the power of the internet to attract and engage customers." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Why Choose Our Services?" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Comprehensive Digital Growth:" }),
                " Cover all aspects of online marketing"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Customized Strategies:" }),
                " Tailored to your business needs and goals"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Ongoing Support:" }),
                " Continuous optimization for best results"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Measurable Results:" }),
                " Detailed reporting on key performance indicators"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$9, children: "Our Core Digital Services" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", variants: itemVariants$9, children: [
          { title: "Search Engine Optimization (SEO)", icon: "🔍", description: "Improve your website's visibility in search results" },
          { title: "Content Marketing", icon: "📝", description: "Create and distribute valuable, relevant content" },
          { title: "Social Media Management", icon: "📱", description: "Engage with your audience across social platforms" },
          { title: "Pay-Per-Click (PPC) Advertising", icon: "💰", description: "Drive immediate traffic through targeted ads" },
          { title: "Email Marketing", icon: "📧", description: "Nurture leads and build customer relationships" },
          { title: "Online Reputation Management", icon: "⭐", description: "Monitor and improve your online reputation" }
        ].map((service, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: service.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: service.title }),
          /* @__PURE__ */ jsx("p", { children: service.description })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$9, children: "How Our Services Work Together" }),
        /* @__PURE__ */ jsx(motion.p, { className: "mb-6 text-center", variants: itemVariants$9, children: "Each digital service complements the others, creating a comprehensive digital marketing strategy. When used together, these services create a holistic approach to growing your online presence and driving business success." }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$9, children: "Common Questions" }),
        /* @__PURE__ */ jsx(motion.div, { variants: itemVariants$9, children: /* @__PURE__ */ jsx(FAQSection, { faqs: faqs$6 }) }),
        /* @__PURE__ */ jsx(motion.div, { className: "mt-12 text-center", variants: itemVariants$9, children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn btn-primary btn-lg", children: "Start Your Digital Growth Journey" }) })
      ]
    }
  );
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DigitalServices,
  meta: meta$b
}, Symbol.toStringTag, { value: "Module" }));
const meta$a = () => {
  return [
    { title: "Website Creation Services - Peak Growth Digital" },
    { name: "description", content: "Custom website design and development tailored to your business objectives. Learn about our website creation services and how we can build your perfect online presence." }
  ];
};
const faqs$5 = [
  {
    question: "How long does it take to build a website?",
    answer: "On average, a custom website can take anywhere from 4 to 8 weeks to complete, depending on the complexity of the design and features. We work closely with you throughout the process to ensure it meets your timeline."
  },
  {
    question: "What is the cost of creating a custom website?",
    answer: "The cost of a custom website varies based on the features and functionality you need. At Peak Growth Digital, we offer flexible pricing plans to fit your budget while still delivering a high-quality product."
  },
  {
    question: "Can I update the website on my own?",
    answer: "Yes! We build websites with user-friendly content management systems (CMS) like WordPress, making it easy for you to make updates to your content or add new features without needing technical expertise."
  },
  {
    question: "What happens after the website is launched?",
    answer: "After your website is launched, we offer ongoing maintenance and support. This includes regular updates, security monitoring, and SEO enhancements to keep your site performing at its best."
  }
];
const containerVariants$8 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants$8 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function WebsiteCreation() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants$8,
      children: [
        /* @__PURE__ */ jsx(motion.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants$8, children: "Website Creation" }),
        /* @__PURE__ */ jsx(motion.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants$8, children: "Your website is the digital storefront of your business—it's often the first impression potential customers have of you. At Peak Growth Digital, we craft custom websites that not only look stunning but are also built to perform." }),
        /* @__PURE__ */ jsxs(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants$8, children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "What is Website Creation?" }),
            /* @__PURE__ */ jsx("p", { children: "Website creation involves the design and development of a website tailored to your business's unique needs. We take care of everything from the initial concept to the final deployment, ensuring that your website is both visually appealing and functionally sound." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Why Is a Custom Website Important?" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Unique Branding:" }),
                " Reflect your brand's identity"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Optimized for Conversions:" }),
                " Designed to convert visitors into customers"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Mobile-Friendly:" }),
                " Responsive design for all devices"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$8, children: "Our Website Creation Process" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", variants: itemVariants$8, children: [
          { title: "Discovery", icon: "🔍", description: "We learn about your business, goals, and target audience" },
          { title: "Design", icon: "🎨", description: "Our team creates a custom mockup reflecting your brand identity" },
          { title: "Development", icon: "💻", description: "We bring the design to life with clean, efficient code" },
          { title: "Content", icon: "📝", description: "We create or optimize content for SEO and engagement" },
          { title: "Testing", icon: "🧪", description: "Rigorous testing ensures a seamless user experience" },
          { title: "Launch", icon: "🚀", description: "We deploy your site and provide ongoing support" }
        ].map((step, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: step.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { children: step.description })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$8, children: "Common Questions" }),
        /* @__PURE__ */ jsx(motion.div, { variants: itemVariants$8, children: /* @__PURE__ */ jsx(FAQSection, { faqs: faqs$5 }) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$8, children: "Benefits of Custom Website Creation" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", variants: itemVariants$8, children: [
          { title: "Tailored to Your Needs", description: "We build sites designed to meet your specific business goals" },
          { title: "SEO-Friendly", description: "Built with search engine optimization in mind from the ground up" },
          { title: "Scalable", description: "Grow your website as your business expands" },
          { title: "User-Centric Design", description: "Prioritize user experience for better engagement and conversions" }
        ].map((benefit, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: benefit.title }),
          /* @__PURE__ */ jsx("p", { children: benefit.description })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.div, { className: "mt-12 text-center", variants: itemVariants$8, children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn btn-primary btn-lg", children: "Start Your Website Project" }) })
      ]
    }
  );
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WebsiteCreation,
  meta: meta$a
}, Symbol.toStringTag, { value: "Module" }));
const meta$9 = () => {
  return [
    { title: "Website Ranking Services - Peak Growth Digital" },
    { name: "description", content: "Improve your website's visibility in search engine results with our expert SEO strategies. Learn about our website ranking services and how we can boost your online presence." }
  ];
};
const faqs$4 = [
  {
    question: "How long does it take to improve my website's ranking?",
    answer: "Website ranking is a long-term process. On average, it can take anywhere from 3 to 6 months to see significant improvements, depending on the competition and the current state of your website. However, you may start seeing some improvements within a few weeks of implementing our strategies."
  },
  {
    question: "Can I rank for any keyword?",
    answer: "While it's possible to rank for any keyword, the difficulty varies greatly. We focus on a balanced approach of high-volume and long-tail keywords to maximize your ranking potential. We'll work with you to identify the most valuable and achievable keywords for your business."
  },
  {
    question: "What's the difference between organic ranking and paid ads?",
    answer: "Organic ranking refers to earning your spot on search results naturally through SEO efforts, while paid ads (like Google Ads) require payment for immediate visibility. Organic ranking offers long-term benefits and tends to have higher trust from users, but it takes time. Paid ads provide immediate visibility but stop when you stop paying."
  },
  {
    question: "Do you guarantee first page rankings?",
    answer: "While we can't guarantee specific rankings (no one can, and you should be wary of those who do), we have a strong track record of significantly improving our clients' search engine positions. We use proven strategies and continuously adapt to search engine algorithm changes to give you the best chance of ranking well."
  }
];
const containerVariants$7 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants$7 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function WebsiteRanking() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants$7,
      children: [
        /* @__PURE__ */ jsx(motion.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants$7, children: "Website Ranking" }),
        /* @__PURE__ */ jsx(motion.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants$7, children: "In today's competitive digital world, securing top spots on search engines like Google is vital. Website ranking isn't just about being found; it's about being chosen." }),
        /* @__PURE__ */ jsxs(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants$7, children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "What is Website Ranking?" }),
            /* @__PURE__ */ jsx("p", { children: "Website ranking refers to the position your website holds on search engine result pages (SERPs) when someone searches for a specific keyword or phrase. Search engines rank websites based on hundreds of factors, including relevance, website quality, and user experience." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Why Does Website Ranking Matter?" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Increased Visibility:" }),
                " Higher ranking means more visibility"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Builds Trust:" }),
                " Top-ranked sites are often perceived as more trustworthy"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Boosts Traffic:" }),
                " Better rankings lead to more website visitors"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Cost-Effective:" }),
                " Organic traffic doesn't require ongoing ad spend"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$7, children: "Our Website Ranking Process" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", variants: itemVariants$7, children: [
          { title: "Website Audit", icon: "🔍", description: "Analyze your current website and its performance" },
          { title: "Keyword Research", icon: "🔑", description: "Identify valuable keywords for your business" },
          { title: "On-Page Optimization", icon: "📄", description: "Optimize your website's content and structure" },
          { title: "Content Strategy", icon: "📝", description: "Develop a content strategy targeting chosen keywords" },
          { title: "Link Building", icon: "🔗", description: "Implement ethical link building strategies" },
          { title: "Monitoring", icon: "📊", description: "Continuously monitor rankings and provide reports" }
        ].map((step, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: step.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { children: step.description })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$7, children: "Common Questions" }),
        /* @__PURE__ */ jsx(motion.div, { variants: itemVariants$7, children: /* @__PURE__ */ jsx(FAQSection, { faqs: faqs$4 }) }),
        /* @__PURE__ */ jsx(motion.div, { className: "mt-12 text-center", variants: itemVariants$7, children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn btn-primary btn-lg", children: "Boost Your Website Ranking" }) })
      ]
    }
  );
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WebsiteRanking,
  meta: meta$9
}, Symbol.toStringTag, { value: "Module" }));
const meta$8 = () => {
  return [
    { title: "Website Renting Services - Peak Growth Digital" },
    { name: "description", content: "Rent high-ranking websites to generate leads and drive sales without the time investment of building a new site. Learn about our website renting services." }
  ];
};
const faqs$3 = [
  {
    question: "Is website renting cost-effective?",
    answer: "Yes! Website renting is often much more affordable than building and promoting a new site from scratch. You only pay for the time you rent the site, saving you the costs of ongoing SEO and development."
  },
  {
    question: "Can I customize the rented website?",
    answer: "Absolutely. Although the site is pre-built, we offer customization options, including adding your logo, updating content, and changing design elements to suit your brand's needs."
  },
  {
    question: "How is website renting different from buying a website?",
    answer: "When you rent a website, you lease it for a specific period, benefiting from its established traffic and rankings. Buying a website gives you full ownership, but you'll also have to manage the site and handle its SEO maintenance, which can be costly."
  },
  {
    question: "What happens to the site after the rental period ends?",
    answer: "Once your rental period ends, you can either extend the lease or transition to your own site. If you choose to build your own site, we can help transfer the traffic and rankings to your new platform."
  }
];
const containerVariants$6 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants$6 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function WebsiteRenting() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants$6,
      children: [
        /* @__PURE__ */ jsx(motion.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants$6, children: "Website Renting" }),
        /* @__PURE__ */ jsx(motion.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants$6, children: "In a rapidly evolving digital marketplace, waiting to build an online presence from scratch can feel like a slow process. That's where Website Renting comes in." }),
        /* @__PURE__ */ jsxs(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants$6, children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "What is Website Renting?" }),
            /* @__PURE__ */ jsx("p", { children: "Website renting allows businesses to lease websites that are already fully functional and optimized for search engines. These websites are pre-built, well-maintained, and rank highly for specific keywords relevant to your industry." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Who Can Benefit?" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "New Businesses:" }),
                " Instant online presence"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Market Testers:" }),
                " Cost-effective way to test new markets"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Budget-Conscious:" }),
                " Avoid high upfront costs"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Time-Sensitive:" }),
                " Quick setup without long development"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$6, children: "How Website Renting Works" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", variants: itemVariants$6, children: [
          { title: "Selection", icon: "🔍", description: "Choose a site that aligns with your business" },
          { title: "Customization", icon: "🎨", description: "Adjust the site to reflect your brand" },
          { title: "Instant Traffic", icon: "🚀", description: "Start receiving visitors immediately" },
          { title: "Maintenance", icon: "🔧", description: "We handle all technical aspects" },
          { title: "Analytics", icon: "📊", description: "Track performance and adjust strategy" },
          { title: "Flexibility", icon: "🔄", description: "Extend or transition as needed" }
        ].map((step, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: step.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { children: step.description })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$6, children: "Common Questions" }),
        /* @__PURE__ */ jsx(motion.div, { variants: itemVariants$6, children: /* @__PURE__ */ jsx(FAQSection, { faqs: faqs$3 }) }),
        /* @__PURE__ */ jsx(motion.div, { className: "mt-12 text-center", variants: itemVariants$6, children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn btn-primary btn-lg", children: "Start Website Renting" }) })
      ]
    }
  );
}
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WebsiteRenting,
  meta: meta$8
}, Symbol.toStringTag, { value: "Module" }));
const meta$7 = () => {
  return [
    { title: "Facebook Ads Service - Peak Growth Digital" },
    { name: "description", content: "Create targeted, high-converting Facebook ad campaigns that reach the right audience and deliver measurable results with Peak Growth Digital." }
  ];
};
const faqs$2 = [
  {
    question: "How much should I spend on Facebook Ads?",
    answer: "Your budget depends on your business goals and the audience size you want to reach. We can help you determine a budget that will deliver measurable results. Facebook Ads can be run on any budget, making them accessible to businesses of all sizes."
  },
  {
    question: "How long does it take to see results from Facebook Ads?",
    answer: "Facebook Ads often show results quickly, especially for campaigns focused on traffic or engagement. You can typically start seeing results within the first 48 hours, although it can take longer to optimize campaigns for conversions or lead generation."
  },
  {
    question: "What types of ads can I run on Facebook?",
    answer: "Facebook offers a variety of ad formats, including image ads, video ads, carousel ads (multiple images or videos), and collection ads (a mobile-first format that allows users to browse products). We can help you choose the right format based on your business goals."
  }
];
const containerVariants$5 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants$5 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function FacebookAdsService() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants$5,
      children: [
        /* @__PURE__ */ jsx(motion.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants$5, children: "Facebook Ads Service" }),
        /* @__PURE__ */ jsx(motion.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants$5, children: "Facebook is one of the most powerful advertising platforms available, with over 2.8 billion active users. At Peak Growth Digital, we create targeted, high-converting Facebook ad campaigns that reach the right audience and deliver measurable results." }),
        /* @__PURE__ */ jsxs(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants$5, children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "What is Facebook Ads?" }),
            /* @__PURE__ */ jsx("p", { children: "Facebook Ads allow businesses to create targeted advertisements that appear on users' newsfeeds, stories, and even in Messenger. Unlike traditional advertising, Facebook's advanced targeting tools allow you to zero in on your ideal customers based on demographics, interests, behaviors, and even location." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Why Facebook Ads Are Crucial for Your Business:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Precise Targeting:" }),
                " Reach specific demographics, interests, and behaviors"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Massive Reach:" }),
                " Connect with billions of users worldwide"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Cost-Effective:" }),
                " Pay-per-click or pay-per-impression model"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$5, children: "How We Create High-Converting Facebook Ad Campaigns" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", variants: itemVariants$5, children: [
          { title: "Audience Research", icon: "🔍", description: "We research and create targeted audience segments" },
          { title: "Ad Design", icon: "🎨", description: "We design visually appealing ads with compelling copy" },
          { title: "Campaign Setup", icon: "⚙️", description: "We set up and optimize your campaigns for best performance" },
          { title: "Analytics", icon: "📊", description: "We provide detailed reports on campaign performance" }
        ].map((step, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: step.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { children: step.description })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$5, children: "Common Questions About Facebook Ads" }),
        /* @__PURE__ */ jsx(motion.div, { variants: itemVariants$5, children: /* @__PURE__ */ jsx(FAQSection, { faqs: faqs$2 }) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$5, children: "Benefits of Facebook Ads" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", variants: itemVariants$5, children: [
          { title: "Increased Website Traffic", description: "Drive more traffic to your website, boosting sales and conversions" },
          { title: "Lead Generation", description: "Collect valuable leads through Facebook's Lead Ads feature" },
          { title: "Brand Awareness", description: "Get your brand in front of the right people, locally or globally" },
          { title: "Customer Engagement", description: "Encourage interaction and build stronger customer relationships" }
        ].map((benefit, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: benefit.title }),
          /* @__PURE__ */ jsx("p", { children: benefit.description })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.div, { className: "mt-12 text-center", variants: itemVariants$5, children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn btn-primary btn-lg", children: "Start Your Facebook Ads Campaign" }) })
      ]
    }
  );
}
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FacebookAdsService,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
const meta$6 = () => {
  return [
    { title: "Google Business Profile (GBP) Ranking Services - Peak Growth Digital" },
    { name: "description", content: "Optimize your Google Business Profile to appear prominently in local search results. Learn about our GBP ranking services and how we can boost your local online presence." }
  ];
};
const faqs$1 = [
  {
    question: "How long does it take to see results from GBP optimization?",
    answer: "Results can vary depending on your current standing and competition in your area, but most businesses start seeing improvements in their local ranking within 4 to 8 weeks after optimization efforts begin."
  },
  {
    question: "How important are customer reviews for my GBP ranking?",
    answer: "Reviews are one of the most critical ranking factors. The quantity, quality, and recency of reviews directly influence your local ranking. Encouraging customers to leave reviews and responding to them helps build a strong local presence."
  },
  {
    question: "Can I manage my Google Business Profile myself?",
    answer: "Yes, GBP is user-friendly, and many businesses manage it themselves. However, to see maximum benefit, professional optimization can ensure your profile is fully leveraging all available tools and ranking factors."
  }
];
const containerVariants$4 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants$4 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function GBPRanking() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants$4,
      children: [
        /* @__PURE__ */ jsx(motion.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants$4, children: "Google Business Profile (GBP) Ranking" }),
        /* @__PURE__ */ jsx(motion.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants$4, children: "In today's local-first digital world, having an optimized Google Business Profile (GBP) is essential for attracting nearby customers. At Peak Growth Digital, we specialize in helping businesses rank at the top of local search results through our GBP ranking services, putting your business front and center for users who are searching for your services in your area." }),
        /* @__PURE__ */ jsxs(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants$4, children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "What is GBP Ranking?" }),
            /* @__PURE__ */ jsx("p", { children: 'Your Google Business Profile is the profile that appears when someone searches for your business or relevant services in Google Search or Google Maps. Having a well-optimized profile ensures your business shows up when potential customers search for terms like "restaurants near me" or "plumber in [your city]."' })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "A Fully Optimized GBP Includes:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsx("li", { children: "Business Information: Name, address, phone number (NAP), and business hours." }),
              /* @__PURE__ */ jsx("li", { children: "Photos & Videos: Visual content of your business, products, or services." }),
              /* @__PURE__ */ jsx("li", { children: "Customer Reviews: User-generated reviews that build trust and credibility." }),
              /* @__PURE__ */ jsx("li", { children: "Service Areas: Clearly defined areas that your business serves." }),
              /* @__PURE__ */ jsx("li", { children: "Business Description: A concise and compelling description of what your business does." }),
              /* @__PURE__ */ jsx("li", { children: "Posts and Updates: Frequent updates and posts keep your profile active and engaging." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$4, children: "Why is Google Business Profile Important for Local Search?" }),
        /* @__PURE__ */ jsx(motion.p, { className: "mb-6 text-center", variants: itemVariants$4, children: "Google prioritizes local search results, particularly for mobile users. Your GBP serves as a mini-website, offering searchers the most critical information they need to choose your business over others. Optimizing your GBP allows your business to:" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", variants: itemVariants$4, children: [
          { title: "Rank Higher", icon: "🏆", description: "Appear at the top of local search results, especially in the local pack" },
          { title: "Increase Foot Traffic", icon: "👣", description: "Optimized profiles lead to more visits, both virtual and physical" },
          { title: "Enhance Credibility", icon: "🤝", description: "Positive reviews and an updated profile build trust" }
        ].map((benefit, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: benefit.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: benefit.title }),
          /* @__PURE__ */ jsx("p", { children: benefit.description })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$4, children: "Common Questions" }),
        /* @__PURE__ */ jsx(motion.div, { variants: itemVariants$4, children: /* @__PURE__ */ jsx(FAQSection, { faqs: faqs$1 }) }),
        /* @__PURE__ */ jsx(motion.div, { className: "mt-12 text-center", variants: itemVariants$4, children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn btn-primary btn-lg", children: "Improve Your Local Presence" }) })
      ]
    }
  );
}
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: GBPRanking,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
const meta$5 = () => {
  return [
    { title: "Google Ads Service - Peak Growth Digital" },
    { name: "description", content: "Drive targeted traffic and generate qualified leads with our expert Google Ads management services. Maximize your ROI with Peak Growth Digital." }
  ];
};
const faqs = [
  {
    question: "How much does it cost to run Google Ads?",
    answer: "The cost of Google Ads depends on factors like keyword competition and your budget. Google Ads operates on a bidding system, so you can set a daily or total budget to control how much you spend. We'll work with you to determine an appropriate budget based on your goals."
  },
  {
    question: "How long does it take to see results?",
    answer: "You can start seeing results almost immediately after launching a Google Ads campaign. However, we recommend giving the campaign a few weeks to optimize for the best performance."
  },
  {
    question: "Is Google Ads suitable for all types of businesses?",
    answer: "Yes! Google Ads works well for almost any business type, from local services to e-commerce. Whether you want to drive sales, generate leads, or increase brand awareness, Google Ads can be tailored to meet your needs."
  }
];
const containerVariants$3 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants$3 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function GoogleAdsService() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants$3,
      children: [
        /* @__PURE__ */ jsx(motion.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants$3, children: "Google Ads Service" }),
        /* @__PURE__ */ jsx(motion.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants$3, children: "When people are searching for products or services, they often start with Google. At Peak Growth Digital, we create and manage Google Ads campaigns that drive targeted traffic to your website and generate qualified leads, all while maximizing your return on investment (ROI)." }),
        /* @__PURE__ */ jsxs(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants$3, children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "What is Google Ads?" }),
            /* @__PURE__ */ jsx("p", { children: "Google Ads is an online advertising platform that allows businesses to display ads on Google's search engine results pages (SERPs) as well as across Google's vast Display Network. Google Ads works on a pay-per-click (PPC) model, which means you only pay when someone clicks on your ad." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Why Use Google Ads?" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Immediate Results:" }),
                " Delivers immediate visibility in search results"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Highly Targeted:" }),
                " Target your ideal audience based on various factors"
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Measurable ROI:" }),
                " Detailed analytics for easy performance tracking"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$3, children: "Types of Google Ads Campaigns We Offer" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", variants: itemVariants$3, children: [
          { title: "Search Ads", icon: "🔍", description: "Appear at the top of Google's search results for relevant keywords" },
          { title: "Display Ads", icon: "🖼️", description: "Image-based ads across Google's Display Network" },
          { title: "Shopping Ads", icon: "🛍️", description: "Promote products directly on Google's search results pages" },
          { title: "Video Ads", icon: "🎥", description: "Run video ads on YouTube and other Google Video Partners" },
          { title: "Retargeting Ads", icon: "🎯", description: "Show ads to users who have previously visited your website" }
        ].map((campaign, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: campaign.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: campaign.title }),
          /* @__PURE__ */ jsx("p", { children: campaign.description })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$3, children: "Our Google Ads Process" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", variants: itemVariants$3, children: [
          { title: "Keyword Research", icon: "🔑", description: "Select the best keywords based on your business goals" },
          { title: "Ad Creation", icon: "✍️", description: "Craft compelling ad copy and design eye-catching visuals" },
          { title: "Campaign Setup", icon: "⚙️", description: "Optimize campaign settings for your target audience" },
          { title: "Optimization", icon: "📈", description: "Continuously monitor and adjust for improved performance" },
          { title: "Reporting", icon: "📊", description: "Provide detailed reports on campaign performance" }
        ].map((step, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: step.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { children: step.description })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$3, children: "Common Questions About Google Ads" }),
        /* @__PURE__ */ jsx(motion.div, { variants: itemVariants$3, children: /* @__PURE__ */ jsx(FAQSection, { faqs }) }),
        /* @__PURE__ */ jsx(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants$3, children: "Benefits of Google Ads" }),
        /* @__PURE__ */ jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", variants: itemVariants$3, children: [
          { title: "Instant Visibility", description: "Get in front of users actively searching for your products or services" },
          { title: "Flexible Budgeting", description: "Control your ad spend with customizable budgets" },
          { title: "Measurable Results", description: "Track every click, impression, and conversion for full transparency" },
          { title: "Increased Sales and Leads", description: "Drive qualified traffic to your site, leading to more conversions" }
        ].map((benefit, index) => /* @__PURE__ */ jsxs("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: benefit.title }),
          /* @__PURE__ */ jsx("p", { children: benefit.description })
        ] }, index)) }),
        /* @__PURE__ */ jsx(motion.div, { className: "mt-12 text-center", variants: itemVariants$3, children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn btn-primary btn-lg", children: "Start Your Google Ads Campaign" }) })
      ]
    }
  );
}
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: GoogleAdsService,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
const meta$4 = ({ data }) => {
  if (!data) {
    return [
      { title: "Blog Post Not Found" },
      { name: "description", content: "The requested blog post could not be found." }
    ];
  }
  return [
    { title: `${data.title} - Peak Growth Digital Blog` },
    { name: "description", content: data.content.substring(0, 160) }
  ];
};
const loader$1 = async ({ params }) => {
  const posts = {
    "1": {
      id: "1",
      title: "5 SEO Strategies to Boost Your Website Ranking",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2023-04-15"
    },
    "2": {
      id: "2",
      title: "The Importance of Local SEO for Small Businesses",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2023-04-10"
    },
    "3": {
      id: "3",
      title: "Maximizing ROI with Pay-Per-Click Advertising",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      date: "2023-04-05"
    }
  };
  const post = posts[params.postId] || null;
  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }
  return json(post);
};
function BlogPost() {
  const post = useLoaderData();
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-4", children: post.title }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-4", children: post.date }),
    /* @__PURE__ */ jsx("div", { className: "prose lg:prose-xl", children: post.content })
  ] });
}
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BlogPost,
  loader: loader$1,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
function BlogSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const submit = useSubmit();
  const handleSearch = (event) => {
    event.preventDefault();
    submit(event.currentTarget, { replace: true });
  };
  return /* @__PURE__ */ jsx(Form, { method: "get", onSubmit: handleSearch, className: "mb-8", children: /* @__PURE__ */ jsx("div", { className: "form-control", children: /* @__PURE__ */ jsxs("div", { className: "input-group", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        name: "q",
        placeholder: "Search blog posts...",
        className: "input input-bordered w-full",
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value)
      }
    ),
    /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-square", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) })
  ] }) }) });
}
const meta$3 = () => {
  return [
    { title: "Peak Growth Digital Blog - Digital Marketing Insights" },
    { name: "description", content: "Stay up-to-date with the latest digital marketing trends, tips, and strategies from Peak Growth Digital." }
  ];
};
const loader = async ({ request }) => {
  var _a;
  const url = new URL(request.url);
  const searchTerm = ((_a = url.searchParams.get("q")) == null ? void 0 : _a.toLowerCase()) || "";
  const allPosts = [
    {
      id: "1",
      title: "5 SEO Strategies to Boost Your Website Ranking",
      excerpt: "Learn the top SEO strategies that can help improve your website's visibility in search engine results.",
      date: "2023-04-15"
    },
    {
      id: "2",
      title: "The Importance of Local SEO for Small Businesses",
      excerpt: "Discover why local SEO is crucial for small businesses and how to optimize your online presence for local searches.",
      date: "2023-04-10"
    },
    {
      id: "3",
      title: "Maximizing ROI with Pay-Per-Click Advertising",
      excerpt: "Explore effective strategies to maximize your return on investment in pay-per-click advertising campaigns.",
      date: "2023-04-05"
    }
  ];
  const filteredPosts = searchTerm ? allPosts.filter(
    (post) => post.title.toLowerCase().includes(searchTerm) || post.excerpt.toLowerCase().includes(searchTerm)
  ) : allPosts;
  return json({ posts: filteredPosts });
};
function BlogIndex() {
  const { posts } = useLoaderData();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-8", children: "Peak Growth Digital Blog" }),
    /* @__PURE__ */ jsx(BlogSearch, {}),
    searchTerm && /* @__PURE__ */ jsxs("p", { className: "mb-4", children: [
      "Showing results for: ",
      /* @__PURE__ */ jsx("span", { className: "font-bold", children: searchTerm })
    ] }),
    posts.length === 0 ? /* @__PURE__ */ jsx("p", { children: "No posts found. Try a different search term." }) : /* @__PURE__ */ jsx("div", { className: "grid gap-8", children: posts.map((post) => /* @__PURE__ */ jsx("div", { className: "card bg-base-100 shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
      /* @__PURE__ */ jsx("h2", { className: "card-title", children: post.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: post.date }),
      /* @__PURE__ */ jsx("p", { children: post.excerpt }),
      /* @__PURE__ */ jsx("div", { className: "card-actions justify-end", children: /* @__PURE__ */ jsx(Link, { to: `/blog/${post.id}`, className: "btn btn-primary", children: "Read More" }) })
    ] }) }, post.id)) })
  ] });
}
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BlogIndex,
  loader,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
new PrismaClient();
const meta$2 = () => {
  return [
    { title: "Contact Peak Growth Digital - Get in Touch" },
    { name: "description", content: "Contact Peak Growth Digital for all your digital marketing needs. We're here to help your business grow online." }
  ];
};
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
const action$1 = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const errors = {};
  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "Email is required";
  else if (!validateEmail(email)) errors.email = "Invalid email address";
  if (!message) errors.message = "Message is required";
  if (Object.keys(errors).length > 0) {
    return json({ errors }, { status: 400 });
  }
  try {
    return json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return json({ success: false, error: "An error occurred. Please try again." }, { status: 500 });
  }
};
function Contact() {
  var _a, _b, _c, _d, _e, _f;
  const actionData = useActionData();
  const navigation = useNavigation();
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-6", children: "Contact Us" }),
    /* @__PURE__ */ jsx("p", { className: "mb-8", children: "Have a question or want to learn more about our services? Get in touch with us using the form below." }),
    (actionData == null ? void 0 : actionData.success) && /* @__PURE__ */ jsx("div", { className: "alert alert-success mb-4", children: "Thank you for your message. We'll get back to you soon!" }),
    (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsx("div", { className: "alert alert-error mb-4", children: actionData.error }),
    /* @__PURE__ */ jsxs(Form, { method: "post", className: "max-w-md", children: [
      /* @__PURE__ */ jsxs("div", { className: "form-control mb-4", children: [
        /* @__PURE__ */ jsx("label", { className: "label", htmlFor: "name", children: /* @__PURE__ */ jsx("span", { className: "label-text", children: "Name" }) }),
        /* @__PURE__ */ jsx("input", { type: "text", id: "name", name: "name", className: `input input-bordered ${((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.name) ? "input-error" : ""}`, required: true }),
        ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.name) && /* @__PURE__ */ jsx("p", { className: "text-error text-sm mt-1", children: actionData.errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-control mb-4", children: [
        /* @__PURE__ */ jsx("label", { className: "label", htmlFor: "email", children: /* @__PURE__ */ jsx("span", { className: "label-text", children: "Email" }) }),
        /* @__PURE__ */ jsx("input", { type: "email", id: "email", name: "email", className: `input input-bordered ${((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.email) ? "input-error" : ""}`, required: true }),
        ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.email) && /* @__PURE__ */ jsx("p", { className: "text-error text-sm mt-1", children: actionData.errors.email })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-control mb-4", children: [
        /* @__PURE__ */ jsx("label", { className: "label", htmlFor: "message", children: /* @__PURE__ */ jsx("span", { className: "label-text", children: "Message" }) }),
        /* @__PURE__ */ jsx("textarea", { id: "message", name: "message", className: `textarea textarea-bordered h-24 ${((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.message) ? "textarea-error" : ""}`, required: true }),
        ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.message) && /* @__PURE__ */ jsx("p", { className: "text-error text-sm mt-1", children: actionData.errors.message })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-primary", disabled: navigation.state === "submitting", children: navigation.state === "submitting" ? "Sending..." : "Send Message" })
    ] })
  ] });
}
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1,
  default: Contact,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function JsonLd({ data }) {
  const location = useLocation();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `https://peakgrowthdigital.com${location.pathname}`,
    ...data
  };
  return /* @__PURE__ */ jsx(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
    }
  );
}
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    company: "Tech Innovators Inc.",
    text: "Peak Growth Digital transformed our online presence. Our website traffic has increased by 200% since working with them!"
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "Local Business Solutions",
    text: "The team at Peak Growth Digital is incredibly knowledgeable and responsive. They've helped us dominate local search results."
  },
  {
    id: 3,
    name: "Mike Johnson",
    company: "E-commerce Experts",
    text: "Our e-commerce sales have skyrocketed thanks to Peak Growth Digital's SEO and digital marketing strategies."
  }
];
const containerVariants$2 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants$2 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function Testimonials() {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
      variants: containerVariants$2,
      initial: "hidden",
      animate: "visible",
      children: testimonials.map((testimonial) => /* @__PURE__ */ jsx(motion.div, { className: "card bg-base-100 shadow-xl", variants: itemVariants$2, children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
        /* @__PURE__ */ jsxs("p", { className: "mb-4", children: [
          '"',
          testimonial.text,
          '"'
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-bold", children: testimonial.name }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: testimonial.company })
      ] }) }, testimonial.id))
    }
  );
}
const services = [
  { name: "Website Ranking", basePrice: 500 },
  { name: "Website Renting", basePrice: 300 },
  { name: "Website Creation", basePrice: 1e3 },
  { name: "GBP Ranking", basePrice: 400 },
  { name: "Digital Marketing", basePrice: 600 }
];
function PricingCalculator() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [duration, setDuration] = useState(1);
  const handleServiceToggle = (serviceName) => {
    setSelectedServices(
      (prev) => prev.includes(serviceName) ? prev.filter((s) => s !== serviceName) : [...prev, serviceName]
    );
  };
  const calculateTotal = () => {
    return selectedServices.reduce((total, service) => {
      var _a;
      const servicePrice = ((_a = services.find((s) => s.name === service)) == null ? void 0 : _a.basePrice) || 0;
      return total + servicePrice * duration;
    }, 0);
  };
  return /* @__PURE__ */ jsx("div", { className: "card bg-base-100 shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
    /* @__PURE__ */ jsx("h2", { className: "card-title mb-4", children: "Pricing Calculator" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-2", children: "Select Services:" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: services.map((service) => /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              className: "checkbox checkbox-primary",
              checked: selectedServices.includes(service.name),
              onChange: () => handleServiceToggle(service.name)
            }
          ),
          /* @__PURE__ */ jsxs("span", { children: [
            service.name,
            " ($",
            service.basePrice,
            "/month)"
          ] })
        ] }, service.name)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-2", children: "Duration:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "range",
            min: "1",
            max: "12",
            value: duration,
            onChange: (e) => setDuration(parseInt(e.target.value)),
            className: "range range-primary"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "text-center mt-2", children: [
          duration,
          " month",
          duration > 1 ? "s" : ""
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 text-center", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold", children: [
        "Estimated Total: $",
        calculateTotal()
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500 mt-1", children: [
        "For ",
        duration,
        " month",
        duration > 1 ? "s" : ""
      ] })
    ] })
  ] }) });
}
function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const actionData = useActionData();
  const navigation = useNavigation();
  const handleSubmit = (event) => {
    if (!email) {
      event.preventDefault();
      alert("Please enter your email address");
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "card bg-base-100 shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
    /* @__PURE__ */ jsx("h2", { className: "card-title", children: "Subscribe to Our Newsletter" }),
    /* @__PURE__ */ jsxs(Form, { method: "post", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "form-control", children: [
        /* @__PURE__ */ jsx("label", { className: "label", htmlFor: "email", children: /* @__PURE__ */ jsx("span", { className: "label-text", children: "Email" }) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            id: "email",
            name: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            className: "input input-bordered",
            required: true
          }
        )
      ] }),
      (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsx("p", { className: "text-error mt-2", children: actionData.error }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "btn btn-primary mt-4",
          disabled: navigation.state === "submitting",
          children: navigation.state === "submitting" ? "Subscribing..." : "Subscribe"
        }
      )
    ] })
  ] }) });
}
const meta$1 = () => {
  return [
    { title: "Peak Growth Digital - Boost Your Online Presence" },
    { name: "description", content: "Peak Growth Digital offers website ranking, renting, creation, GBP ranking, and general digital services to help your business grow online." }
  ];
};
const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  console.log(`Subscribing email: ${email}`);
  return json({ success: true });
};
const containerVariants$1 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};
const itemVariants$1 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
function Index() {
  const actionData = useActionData();
  const jsonLdData = {
    "@type": "WebSite",
    name: "Peak Growth Digital",
    description: "We help businesses grow their online presence through innovative digital marketing strategies and services.",
    url: "https://peakgrowthdigital.com"
  };
  const services2 = [
    { name: "Website Ranking", path: "/services/website-ranking", icon: "🏆" },
    { name: "Website Renting", path: "/services/website-renting", icon: "🏠" },
    { name: "Website Creation", path: "/services/website-creation", icon: "🎨" },
    { name: "GBP Ranking", path: "/services/gbp-ranking", icon: "📍" },
    { name: "Digital Services", path: "/services/digital-services", icon: "💻" },
    { name: "Facebook Ads", path: "/services/facebook-ads", icon: "👍" },
    { name: "Google Ads", path: "/services/google-ads", icon: "🔍" },
    { name: "Social Media Management", path: "/services/social-media-management", icon: "📱" },
    { name: "Business Citations", path: "/services/business-citations", icon: "📊" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(JsonLd, { data: jsonLdData }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "container mx-auto px-4",
        initial: "hidden",
        animate: "visible",
        variants: containerVariants$1,
        children: [
          /* @__PURE__ */ jsx(motion.section, { className: "hero min-h-screen bg-gradient-to-br from-primary to-secondary text-primary-content", variants: itemVariants$1, children: /* @__PURE__ */ jsx("div", { className: "hero-content text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md", children: [
            /* @__PURE__ */ jsx(
              motion.h1,
              {
                className: "text-5xl font-bold mb-8",
                initial: { opacity: 0, y: -50 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.2 },
                children: "Welcome to Peak Growth Digital"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                className: "py-6 text-lg",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.8, delay: 0.4 },
                children: "Your partner in navigating the digital landscape. We offer a suite of services designed to enhance your online presence and meet your specific needs."
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.6 },
                children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn btn-secondary btn-lg", children: "Get Started" })
              }
            )
          ] }) }) }),
          /* @__PURE__ */ jsxs(motion.section, { className: "py-20 bg-base-200", variants: itemVariants$1, children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-center mb-12", children: "Our Services" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: services2.map((service, index) => /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300",
                variants: itemVariants$1,
                initial: "hidden",
                animate: "visible",
                transition: { delay: index * 0.1 },
                children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "card-title text-2xl flex items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-3xl mr-2", children: service.icon }),
                    service.name
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-base-content/80", children: [
                    "We offer top-notch ",
                    service.name.toLowerCase(),
                    " services to boost your online presence and drive growth."
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "card-actions justify-end mt-4", children: /* @__PURE__ */ jsx(Link, { to: service.path, className: "btn btn-primary", children: "Learn More" }) })
                ] })
              },
              service.name
            )) })
          ] }),
          /* @__PURE__ */ jsxs(motion.section, { className: "py-20 bg-gradient-to-br from-accent to-accent-focus text-accent-content", variants: itemVariants$1, children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-center mb-12", children: "What Our Clients Say" }),
            /* @__PURE__ */ jsx(Testimonials, {})
          ] }),
          /* @__PURE__ */ jsxs(motion.section, { className: "py-20", variants: itemVariants$1, children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-center mb-12", children: "Pricing Calculator" }),
            /* @__PURE__ */ jsx(PricingCalculator, {})
          ] }),
          /* @__PURE__ */ jsxs(motion.section, { className: "py-20 bg-base-200", variants: itemVariants$1, children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-center mb-12", children: "Stay Updated" }),
            /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto", children: [
              /* @__PURE__ */ jsx(NewsletterSignup, {}),
              (actionData == null ? void 0 : actionData.success) && /* @__PURE__ */ jsx(
                motion.p,
                {
                  className: "text-success text-center mt-4",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  children: "Thank you for subscribing to our newsletter!"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs(motion.section, { className: "py-20 bg-gradient-to-br from-secondary to-primary text-primary-content", variants: itemVariants$1, children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-center mb-8", children: "Ready to Grow Your Online Presence?" }),
            /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn btn-secondary btn-lg", children: "Contact Us Today" }) })
          ] })
        ]
      }
    ) })
  ] });
}
const route13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: Index,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const meta = () => {
  return [
    { title: "About Peak Growth Digital - Your Digital Growth Partner" },
    { name: "description", content: "Learn about Peak Growth Digital, our mission, and how we help businesses grow their online presence through innovative digital marketing strategies." }
  ];
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function About() {
  const jsonLdData = {
    "@type": "Organization",
    name: "Peak Growth Digital",
    description: "Peak Growth Digital is your partner in achieving online success. We specialize in website ranking, renting, creation, Google Business Profile (GBP) ranking, and a wide range of digital services.",
    url: "https://peakgrowthdigital.com/about"
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(JsonLd, { data: jsonLdData }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "container mx-auto px-4 py-8",
        initial: "hidden",
        animate: "visible",
        variants: containerVariants,
        children: [
          /* @__PURE__ */ jsx(motion.h1, { className: "text-4xl font-bold mb-6", variants: itemVariants, children: "About Peak Growth Digital" }),
          /* @__PURE__ */ jsx(motion.p, { className: "mb-4", variants: itemVariants, children: "Peak Growth Digital is your partner in achieving online success. We specialize in website ranking, renting, creation, Google Business Profile (GBP) ranking, and a wide range of digital services." }),
          /* @__PURE__ */ jsx(motion.h2, { className: "text-2xl font-semibold mt-8 mb-4", variants: itemVariants, children: "Our Mission" }),
          /* @__PURE__ */ jsx(motion.p, { className: "mb-4", variants: itemVariants, children: "Our mission is to empower businesses of all sizes to thrive in the digital landscape. We combine cutting-edge technology with proven strategies to deliver measurable results for our clients." }),
          /* @__PURE__ */ jsx(motion.h2, { className: "text-2xl font-semibold mt-8 mb-4", variants: itemVariants, children: "Our Services" }),
          /* @__PURE__ */ jsxs(motion.ul, { className: "list-disc list-inside mb-4", variants: itemVariants, children: [
            /* @__PURE__ */ jsx("li", { children: "Website Ranking: Improve your search engine visibility and drive organic traffic" }),
            /* @__PURE__ */ jsx("li", { children: "Website Renting: Get a high-performing website without the upfront costs" }),
            /* @__PURE__ */ jsx("li", { children: "Website Creation: Custom-designed websites tailored to your business needs" }),
            /* @__PURE__ */ jsx("li", { children: "GBP Ranking: Boost your local presence and attract nearby customers" }),
            /* @__PURE__ */ jsx("li", { children: "Digital Marketing: Comprehensive strategies to grow your online presence" })
          ] }),
          /* @__PURE__ */ jsx(motion.h2, { className: "text-2xl font-semibold mt-8 mb-4", variants: itemVariants, children: "Why Choose Us?" }),
          /* @__PURE__ */ jsxs(motion.ul, { className: "list-disc list-inside mb-4", variants: itemVariants, children: [
            /* @__PURE__ */ jsx("li", { children: "Expertise: Our team of digital marketing professionals stays up-to-date with the latest trends and best practices" }),
            /* @__PURE__ */ jsx("li", { children: "Customized Solutions: We tailor our services to meet your unique business goals and challenges" }),
            /* @__PURE__ */ jsx("li", { children: "Transparent Reporting: Regular updates and detailed reports keep you informed about your campaign's progress" }),
            /* @__PURE__ */ jsx("li", { children: "Proven Results: Our track record of success speaks for itself, with numerous satisfied clients across various industries" }),
            /* @__PURE__ */ jsx("li", { children: "Ongoing Support: We're committed to your long-term success and provide continuous support and optimization" })
          ] }),
          /* @__PURE__ */ jsxs(motion.p, { className: "mt-8", variants: itemVariants, children: [
            "Ready to take your online presence to the next level? ",
            /* @__PURE__ */ jsx("a", { href: "/contact", className: "text-primary hover:underline", children: "Contact us" }),
            " today to learn how we can help your business grow."
          ] })
        ]
      }
    )
  ] });
}
const route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DTIDw1NP.js", "imports": ["/assets/index-CFzYG15F.js", "/assets/components-DMBqBoRK.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-CkEzgPG7.js", "imports": ["/assets/index-CFzYG15F.js", "/assets/components-DMBqBoRK.js", "/assets/index-aWJx3OZ6.js", "/assets/use-constant-DZc81Vim.js"], "css": [] }, "routes/services.social-media-management": { "id": "routes/services.social-media-management", "parentId": "root", "path": "services/social-media-management", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/services.social-media-management-BUY8laVK.js", "imports": ["/assets/index-CFzYG15F.js", "/assets/FAQSection-DixTOksr.js", "/assets/proxy-CeJI3rgl.js", "/assets/components-DMBqBoRK.js", "/assets/use-constant-DZc81Vim.js"], "css": [] }, "routes/services.business-citations": { "id": "routes/services.business-citations", "parentId": "root", "path": "services/business-citations", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/services.business-citations-Ceq1hUjd.js", "imports": ["/assets/index-CFzYG15F.js", "/assets/FAQSection-DixTOksr.js", "/assets/proxy-CeJI3rgl.js", "/assets/components-DMBqBoRK.js", "/assets/use-constant-DZc81Vim.js"], "css": [] }, "routes/services.digital-services": { "id": "routes/services.digital-services", "parentId": "root", "path": "services/digital-services", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/services.digital-services-ChQ3kdKx.js", "imports": ["/assets/index-CFzYG15F.js", "/assets/FAQSection-DixTOksr.js", "/assets/proxy-CeJI3rgl.js", "/assets/components-DMBqBoRK.js", "/assets/use-constant-DZc81Vim.js"], "css": [] }, "routes/services.website-creation": { "id": "routes/services.website-creation", "parentId": "root", "path": "services/website-creation", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/services.website-creation-p9Z2zxsV.js", "imports": ["/assets/index-CFzYG15F.js", "/assets/FAQSection-DixTOksr.js", "/assets/proxy-CeJI3rgl.js", "/assets/components-DMBqBoRK.js", "/assets/use-constant-DZc81Vim.js"], "css": [] }, "routes/services.website-ranking": { "id": "routes/services.website-ranking", "parentId": "root", "path": "services/website-ranking", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/services.website-ranking-BQfwso2h.js", "imports": ["/assets/index-CFzYG15F.js", "/assets/FAQSection-DixTOksr.js", "/assets/proxy-CeJI3rgl.js", "/assets/components-DMBqBoRK.js", "/assets/use-constant-DZc81Vim.js"], "css": [] }, "routes/services.website-renting": { "id": "routes/services.website-renting", "parentId": "root", "path": "services/website-renting", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/services.website-renting-gwfHd4nj.js", "imports": ["/assets/index-CFzYG15F.js", "/assets/FAQSection-DixTOksr.js", "/assets/proxy-CeJI3rgl.js", "/assets/components-DMBqBoRK.js", "/assets/use-constant-DZc81Vim.js"], "css": [] }, "routes/services.facebook-ads": { "id": "routes/services.facebook-ads", "parentId": "root", "path": "services/facebook-ads", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/services.facebook-ads-C1SzL98H.js", "imports": ["/assets/index-CFzYG15F.js", "/assets/FAQSection-DixTOksr.js", "/assets/proxy-CeJI3rgl.js", "/assets/components-DMBqBoRK.js", "/assets/use-constant-DZc81Vim.js"], "css": [] }, "routes/services.gbp-ranking": { "id": "routes/services.gbp-ranking", "parentId": "root", "path": "services/gbp-ranking", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/services.gbp-ranking-CJWhunrJ.js", "imports": ["/assets/index-CFzYG15F.js", "/assets/FAQSection-DixTOksr.js", "/assets/proxy-CeJI3rgl.js", "/assets/components-DMBqBoRK.js", "/assets/use-constant-DZc81Vim.js"], "css": [] }, "routes/services.google-ads": { "id": "routes/services.google-ads", "parentId": "root", "path": "services/google-ads", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/services.google-ads-3TUOV3rk.js", "imports": ["/assets/index-CFzYG15F.js", "/assets/FAQSection-DixTOksr.js", "/assets/proxy-CeJI3rgl.js", "/assets/components-DMBqBoRK.js", "/assets/use-constant-DZc81Vim.js"], "css": [] }, "routes/blog.$postId": { "id": "routes/blog.$postId", "parentId": "root", "path": "blog/:postId", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/blog._postId-C_LtPl3q.js", "imports": ["/assets/index-CFzYG15F.js", "/assets/components-DMBqBoRK.js"], "css": [] }, "routes/blog._index": { "id": "routes/blog._index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/blog._index-I8RjDVEI.js", "imports": ["/assets/index-CFzYG15F.js", "/assets/components-DMBqBoRK.js"], "css": [] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/contact-DF_1Ymml.js", "imports": ["/assets/index-CFzYG15F.js", "/assets/components-DMBqBoRK.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-P7vJGxyu.js", "imports": ["/assets/index-CFzYG15F.js", "/assets/JsonLd-DPEObuuU.js", "/assets/proxy-CeJI3rgl.js", "/assets/components-DMBqBoRK.js", "/assets/index-aWJx3OZ6.js", "/assets/use-constant-DZc81Vim.js"], "css": [] }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-DG1f08By.js", "imports": ["/assets/index-CFzYG15F.js", "/assets/JsonLd-DPEObuuU.js", "/assets/proxy-CeJI3rgl.js", "/assets/use-constant-DZc81Vim.js"], "css": [] } }, "url": "/assets/manifest-7afae83b.js", "version": "7afae83b" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "unstable_singleFetch": false, "unstable_lazyRouteDiscovery": false, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/services.social-media-management": {
    id: "routes/services.social-media-management",
    parentId: "root",
    path: "services/social-media-management",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/services.business-citations": {
    id: "routes/services.business-citations",
    parentId: "root",
    path: "services/business-citations",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/services.digital-services": {
    id: "routes/services.digital-services",
    parentId: "root",
    path: "services/digital-services",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/services.website-creation": {
    id: "routes/services.website-creation",
    parentId: "root",
    path: "services/website-creation",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/services.website-ranking": {
    id: "routes/services.website-ranking",
    parentId: "root",
    path: "services/website-ranking",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/services.website-renting": {
    id: "routes/services.website-renting",
    parentId: "root",
    path: "services/website-renting",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/services.facebook-ads": {
    id: "routes/services.facebook-ads",
    parentId: "root",
    path: "services/facebook-ads",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/services.gbp-ranking": {
    id: "routes/services.gbp-ranking",
    parentId: "root",
    path: "services/gbp-ranking",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/services.google-ads": {
    id: "routes/services.google-ads",
    parentId: "root",
    path: "services/google-ads",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/blog.$postId": {
    id: "routes/blog.$postId",
    parentId: "root",
    path: "blog/:postId",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/blog._index": {
    id: "routes/blog._index",
    parentId: "root",
    path: "blog",
    index: true,
    caseSensitive: void 0,
    module: route11
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route13
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
