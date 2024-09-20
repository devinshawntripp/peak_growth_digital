import {
  AnimatePresence
} from "/build/_shared/chunk-EWCLIFBJ.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError
} from "/build/_shared/chunk-JCUNOMR6.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZKJJQ7LG.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-3ILBZIMH.css";

// app/components/Navbar.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Navbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Navbar.tsx"
  );
  import.meta.hot.lastModified = "1726816921758.6104";
}
function Navbar() {
  _s();
  const [isOpen, setIsOpen] = (0, import_react.useState)(false);
  const [isServicesOpen, setIsServicesOpen] = (0, import_react.useState)(false);
  const services = [{
    name: "Website Ranking",
    path: "/services/website-ranking"
  }, {
    name: "Website Renting",
    path: "/services/website-renting"
  }, {
    name: "Website Creation",
    path: "/services/website-creation"
  }, {
    name: "GBP Ranking",
    path: "/services/gbp-ranking"
  }, {
    name: "Digital Services",
    path: "/services/digital-services"
  }, {
    name: "Facebook Ads",
    path: "/services/facebook-ads"
  }, {
    name: "Google Ads",
    path: "/services/google-ads"
  }, {
    name: "Social Media Management",
    path: "/services/social-media-management"
  }, {
    name: "Business Citations",
    path: "/services/business-citations"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "navbar bg-base-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "navbar-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { tabIndex: 0, className: "btn btn-ghost lg:hidden", onClick: () => setIsOpen(!isOpen), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h8m-8 6h16" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 60,
          columnNumber: 127
        }, this) }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { tabIndex: 0, className: "menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", onClick: () => setIsOpen(false), children: "Home" }, void 0, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 63,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { onClick: () => setIsServicesOpen(!isServicesOpen), children: "Services" }, void 0, false, {
              fileName: "app/components/Navbar.tsx",
              lineNumber: 65,
              columnNumber: 17
            }, this),
            isServicesOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "p-2 bg-base-100 rounded-box", children: services.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: service.path, onClick: () => {
              setIsOpen(false);
              setIsServicesOpen(false);
            }, className: "whitespace-nowrap", children: service.name }, void 0, false, {
              fileName: "app/components/Navbar.tsx",
              lineNumber: 68,
              columnNumber: 25
            }, this) }, service.path, false, {
              fileName: "app/components/Navbar.tsx",
              lineNumber: 67,
              columnNumber: 46
            }, this)) }, void 0, false, {
              fileName: "app/components/Navbar.tsx",
              lineNumber: 66,
              columnNumber: 36
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", onClick: () => setIsOpen(false), children: "About" }, void 0, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 77,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/blog", onClick: () => setIsOpen(false), children: "Blog" }, void 0, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 78,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/contact", onClick: () => setIsOpen(false), children: "Contact" }, void 0, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 79,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 62,
          columnNumber: 22
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "btn btn-ghost normal-case text-xl", children: "Peak Growth Digital" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "navbar-center hidden lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "menu menu-horizontal px-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Home" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 86,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "dropdown dropdown-hover", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { tabIndex: 0, className: "btn btn-ghost", children: "Services" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { tabIndex: 0, className: "dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52", children: services.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: service.path, className: "whitespace-nowrap", onClick: () => {
          const dropdown = document.activeElement;
          dropdown.blur();
        }, children: service.name }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 91,
          columnNumber: 19
        }, this) }, service.path, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 90,
          columnNumber: 40
        }, this)) }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", children: "About" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 100,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/blog", children: "Blog" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 101,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/contact", children: "Contact" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 102,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "navbar-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/contact", className: "btn btn-primary", children: "Get Started" }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s(Navbar, "AJoEHl1SNcIoOepz9DrCvNYfPBE=");
_c = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Footer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Footer.tsx"
  );
  import.meta.hot.lastModified = "1726811570732.6228";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "footer footer-center p-10 bg-base-200 text-base-content rounded", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-flow-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/about", className: "link link-hover", children: "About us" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/contact", className: "link link-hover", children: "Contact" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "link link-hover", children: "Privacy Policy" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "link link-hover", children: "Terms of Service" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-flow-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", className: "fill-current", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 32,
        columnNumber: 131
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 32,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", className: "fill-current", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 33,
        columnNumber: 131
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 33,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", className: "fill-current", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 34,
        columnNumber: 131
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 34,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      "Copyright \xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " - All rights reserved by Peak Growth Digital"
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c2 = Footer;
var _c2;
$RefreshReg$(_c2, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var meta = () => [{
  charset: "utf-8"
}, {
  title: "Peak Growth Digital"
}, {
  name: "viewport",
  content: "width=device-width,initial-scale=1"
}];
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}, {
  rel: "icon",
  href: "/favicon.ico"
}];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", "data-theme": "dim", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navbar, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_c3 = App;
function ErrorBoundary() {
  var _a;
  _s2();
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", "data-theme": "dim", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: errorStatus }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navbar, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-4xl font-bold mb-4", children: errorStatus }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mb-4", children: errorMessage }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
}
_s2(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c22 = ErrorBoundary;
var _c3;
var _c22;
$RefreshReg$(_c3, "App");
$RefreshReg$(_c22, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-GSQLNDOF.js.map
