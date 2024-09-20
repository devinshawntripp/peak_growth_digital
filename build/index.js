var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
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
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse
} from "@remix-run/react";
import { AnimatePresence } from "framer-motion";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-3ILBZIMH.css";

// app/components/Navbar.tsx
import { useState } from "react";
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function Navbar() {
  let [isOpen, setIsOpen] = useState(!1), [isServicesOpen, setIsServicesOpen] = useState(!1), services2 = [
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
  return /* @__PURE__ */ jsxDEV2("div", { className: "navbar bg-base-100", children: [
    /* @__PURE__ */ jsxDEV2("div", { className: "navbar-start", children: [
      /* @__PURE__ */ jsxDEV2("div", { className: "dropdown", children: [
        /* @__PURE__ */ jsxDEV2("label", { tabIndex: 0, className: "btn btn-ghost lg:hidden", onClick: () => setIsOpen(!isOpen), children: /* @__PURE__ */ jsxDEV2("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV2("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h8m-8 6h16" }, void 0, !1, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 25,
          columnNumber: 127
        }, this) }, void 0, !1, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        isOpen && /* @__PURE__ */ jsxDEV2("ul", { tabIndex: 0, className: "menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52", children: [
          /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(Link, { to: "/", onClick: () => setIsOpen(!1), children: "Home" }, void 0, !1, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 29,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 29,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV2("li", { children: [
            /* @__PURE__ */ jsxDEV2("a", { onClick: () => setIsServicesOpen(!isServicesOpen), children: "Services" }, void 0, !1, {
              fileName: "app/components/Navbar.tsx",
              lineNumber: 31,
              columnNumber: 17
            }, this),
            isServicesOpen && /* @__PURE__ */ jsxDEV2("ul", { className: "p-2 bg-base-100 rounded-box", children: services2.map((service) => /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(
              Link,
              {
                to: service.path,
                onClick: () => {
                  setIsOpen(!1), setIsServicesOpen(!1);
                },
                className: "whitespace-nowrap",
                children: service.name
              },
              void 0,
              !1,
              {
                fileName: "app/components/Navbar.tsx",
                lineNumber: 36,
                columnNumber: 25
              },
              this
            ) }, service.path, !1, {
              fileName: "app/components/Navbar.tsx",
              lineNumber: 35,
              columnNumber: 23
            }, this)) }, void 0, !1, {
              fileName: "app/components/Navbar.tsx",
              lineNumber: 33,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 30,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(Link, { to: "/about", onClick: () => setIsOpen(!1), children: "About" }, void 0, !1, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 51,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(Link, { to: "/blog", onClick: () => setIsOpen(!1), children: "Blog" }, void 0, !1, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 52,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(Link, { to: "/contact", onClick: () => setIsOpen(!1), children: "Contact" }, void 0, !1, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 53,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 53,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Link, { to: "/", className: "btn btn-ghost normal-case text-xl", children: "Peak Growth Digital" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("div", { className: "navbar-center hidden lg:flex", children: /* @__PURE__ */ jsxDEV2("ul", { className: "menu menu-horizontal px-1", children: [
      /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 61,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2("li", { className: "dropdown dropdown-hover", children: [
        /* @__PURE__ */ jsxDEV2("label", { tabIndex: 0, className: "btn btn-ghost", children: "Services" }, void 0, !1, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV2("ul", { tabIndex: 0, className: "dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52", children: services2.map((service) => /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(
          Link,
          {
            to: service.path,
            className: "whitespace-nowrap",
            onClick: () => {
              document.activeElement.blur();
            },
            children: service.name
          },
          void 0,
          !1,
          {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 67,
            columnNumber: 19
          },
          this
        ) }, service.path, !1, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 66,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(Link, { to: "/about", children: "About" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 81,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(Link, { to: "/blog", children: "Blog" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 82,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(Link, { to: "/contact", children: "Contact" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 83,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("div", { className: "navbar-end", children: /* @__PURE__ */ jsxDEV2(Link, { to: "/contact", className: "btn btn-primary", children: "Get Started" }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/components/Footer.tsx
import { Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Footer() {
  return /* @__PURE__ */ jsxDEV3("footer", { className: "footer footer-center p-10 bg-base-200 text-base-content rounded", children: [
    /* @__PURE__ */ jsxDEV3("div", { className: "grid grid-flow-col gap-4", children: [
      /* @__PURE__ */ jsxDEV3(Link2, { to: "/about", className: "link link-hover", children: "About us" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Link2, { to: "/contact", className: "link link-hover", children: "Contact" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("a", { href: "#", className: "link link-hover", children: "Privacy Policy" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("a", { href: "#", className: "link link-hover", children: "Terms of Service" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { children: /* @__PURE__ */ jsxDEV3("div", { className: "grid grid-flow-col gap-4", children: [
      /* @__PURE__ */ jsxDEV3("a", { href: "#", children: /* @__PURE__ */ jsxDEV3("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", className: "fill-current", children: /* @__PURE__ */ jsxDEV3("path", { d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 14,
        columnNumber: 131
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 14,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("a", { href: "#", children: /* @__PURE__ */ jsxDEV3("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", className: "fill-current", children: /* @__PURE__ */ jsxDEV3("path", { d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 15,
        columnNumber: 131
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 15,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("a", { href: "#", children: /* @__PURE__ */ jsxDEV3("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", className: "fill-current", children: /* @__PURE__ */ jsxDEV3("path", { d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 16,
        columnNumber: 131
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 16,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { children: /* @__PURE__ */ jsxDEV3("p", { children: [
      "Copyright \xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " - All rights reserved by Peak Growth Digital"
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/root.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var meta = () => [
  { charset: "utf-8" },
  { title: "Peak Growth Digital" },
  { name: "viewport", content: "width=device-width,initial-scale=1" }
], links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "icon", href: "/favicon.ico" }
];
function App() {
  return /* @__PURE__ */ jsxDEV4("html", { lang: "en", "data-theme": "dim", children: [
    /* @__PURE__ */ jsxDEV4("head", { children: [
      /* @__PURE__ */ jsxDEV4(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("body", { children: [
      /* @__PURE__ */ jsxDEV4(Navbar, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxDEV4(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = useRouteError(), errorMessage, errorStatus;
  return isRouteErrorResponse(error) ? (errorMessage = error.data?.message || "Something went wrong. Please try again.", errorStatus = `${error.status} ${error.statusText}`) : error instanceof Error ? (errorMessage = error.message, errorStatus = "Error") : (errorMessage = "An unexpected error occurred. Please try again later.", errorStatus = "Error"), /* @__PURE__ */ jsxDEV4("html", { lang: "en", "data-theme": "dim", children: [
    /* @__PURE__ */ jsxDEV4("head", { children: [
      /* @__PURE__ */ jsxDEV4("title", { children: errorStatus }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("body", { children: [
      /* @__PURE__ */ jsxDEV4(Navbar, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "container mx-auto px-4 py-8", children: [
        /* @__PURE__ */ jsxDEV4("h1", { className: "text-4xl font-bold mb-4", children: errorStatus }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "mb-4", children: errorMessage }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}

// app/routes/services.social-media-management.tsx
var services_social_media_management_exports = {};
__export(services_social_media_management_exports, {
  default: () => SocialMediaManagement,
  meta: () => meta2
});
import { Link as Link3 } from "@remix-run/react";
import { motion } from "framer-motion";

// app/components/FAQSection.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function FAQSection({ faqs: faqs10 }) {
  return /* @__PURE__ */ jsxDEV5("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxDEV5("h2", { className: "text-2xl font-semibold mb-4", children: "Frequently Asked Questions" }, void 0, !1, {
      fileName: "app/components/FAQSection.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    faqs10.map((faq, index) => /* @__PURE__ */ jsxDEV5("div", { className: "collapse collapse-plus bg-base-200", children: [
      /* @__PURE__ */ jsxDEV5("input", { type: "radio", name: `faq-accordion-${index}` }, void 0, !1, {
        fileName: "app/components/FAQSection.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "collapse-title text-xl font-medium", children: faq.question }, void 0, !1, {
        fileName: "app/components/FAQSection.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "collapse-content", children: /* @__PURE__ */ jsxDEV5("p", { children: faq.answer }, void 0, !1, {
        fileName: "app/components/FAQSection.tsx",
        lineNumber: 23,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/FAQSection.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, index, !0, {
      fileName: "app/components/FAQSection.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this))
  ] }, void 0, !0, {
    fileName: "app/components/FAQSection.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/services.social-media-management.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "Social Media Management Services - Peak Growth Digital" },
  { name: "description", content: "Comprehensive social media management services for Instagram, Facebook, and Twitter. Boost your brand's online presence with Peak Growth Digital." }
], faqs = [
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
], containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}, itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function SocialMediaManagement() {
  return /* @__PURE__ */ jsxDEV6(
    motion.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants,
      children: [
        /* @__PURE__ */ jsxDEV6(motion.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants, children: "Social Media Management" }, void 0, !1, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV6(motion.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants, children: "In today's digital world, having a strong presence on social media is essential for engaging with your audience and building your brand. At Peak Growth Digital, we provide comprehensive Social Media Management services that help you make the most of platforms like Instagram, Facebook, and Twitter." }, void 0, !1, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 50,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV6(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants, children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV6("h2", { className: "text-2xl font-semibold mb-4", children: "What is Social Media Management?" }, void 0, !1, {
              fileName: "app/routes/services.social-media-management.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV6("p", { children: "Social media management involves curating, scheduling, and optimizing your brand's social media content across platforms. It's not just about posting regularly\u2014it's about creating engaging, relevant content that connects with your audience, drives traffic, and converts followers into customers." }, void 0, !1, {
              fileName: "app/routes/services.social-media-management.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.social-media-management.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV6("h2", { className: "text-2xl font-semibold mb-4", children: "Why is Social Media Important?" }, void 0, !1, {
              fileName: "app/routes/services.social-media-management.tsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV6("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxDEV6("li", { children: [
                /* @__PURE__ */ jsxDEV6("strong", { children: "Brand Awareness:" }, void 0, !1, {
                  fileName: "app/routes/services.social-media-management.tsx",
                  lineNumber: 64,
                  columnNumber: 17
                }, this),
                " Build visibility and recognition"
              ] }, void 0, !0, {
                fileName: "app/routes/services.social-media-management.tsx",
                lineNumber: 64,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV6("li", { children: [
                /* @__PURE__ */ jsxDEV6("strong", { children: "Customer Engagement:" }, void 0, !1, {
                  fileName: "app/routes/services.social-media-management.tsx",
                  lineNumber: 65,
                  columnNumber: 17
                }, this),
                " Interact with your audience in real-time"
              ] }, void 0, !0, {
                fileName: "app/routes/services.social-media-management.tsx",
                lineNumber: 65,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV6("li", { children: [
                /* @__PURE__ */ jsxDEV6("strong", { children: "Increased Website Traffic:" }, void 0, !1, {
                  fileName: "app/routes/services.social-media-management.tsx",
                  lineNumber: 66,
                  columnNumber: 17
                }, this),
                " Drive traffic to your website"
              ] }, void 0, !0, {
                fileName: "app/routes/services.social-media-management.tsx",
                lineNumber: 66,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV6("li", { children: [
                /* @__PURE__ */ jsxDEV6("strong", { children: "Customer Insights:" }, void 0, !1, {
                  fileName: "app/routes/services.social-media-management.tsx",
                  lineNumber: 67,
                  columnNumber: 17
                }, this),
                " Gain valuable feedback and understand your audience"
              ] }, void 0, !0, {
                fileName: "app/routes/services.social-media-management.tsx",
                lineNumber: 67,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.social-media-management.tsx",
              lineNumber: 63,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.social-media-management.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV6(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants, children: "Platforms We Manage" }, void 0, !1, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 72,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV6(motion.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", variants: itemVariants, children: [
          { title: "Instagram", icon: "\u{1F4F8}", description: "Ideal for visual storytelling and building a community" },
          { title: "Facebook", icon: "\u{1F44D}", description: "Versatile platform suitable for any type of business" },
          { title: "Twitter", icon: "\u{1F426}", description: "Perfect for quick updates and real-time conversations" }
        ].map((platform, index) => /* @__PURE__ */ jsxDEV6("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "text-4xl mb-4", children: platform.icon }, void 0, !1, {
            fileName: "app/routes/services.social-media-management.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV6("h3", { className: "text-xl font-semibold mb-2", children: platform.title }, void 0, !1, {
            fileName: "app/routes/services.social-media-management.tsx",
            lineNumber: 81,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV6("p", { children: platform.description }, void 0, !1, {
            fileName: "app/routes/services.social-media-management.tsx",
            lineNumber: 82,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 73,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV6(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants, children: "Our Social Media Management Services" }, void 0, !1, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 87,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV6(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", variants: itemVariants, children: [
          { title: "Content Creation", icon: "\u270D\uFE0F", description: "Custom content that resonates with your audience" },
          { title: "Content Scheduling", icon: "\u{1F5D3}\uFE0F", description: "Optimal timing for maximum engagement" },
          { title: "Audience Engagement", icon: "\u{1F4AC}", description: "Active monitoring and interaction with your audience" },
          { title: "Analytics and Reporting", icon: "\u{1F4CA}", description: "Track performance and adjust strategies" },
          { title: "Social Media Advertising", icon: "\u{1F4E3}", description: "Targeted ads to boost visibility and reach" }
        ].map((service, index) => /* @__PURE__ */ jsxDEV6("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "text-4xl mb-4", children: service.icon }, void 0, !1, {
            fileName: "app/routes/services.social-media-management.tsx",
            lineNumber: 97,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV6("h3", { className: "text-xl font-semibold mb-2", children: service.title }, void 0, !1, {
            fileName: "app/routes/services.social-media-management.tsx",
            lineNumber: 98,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV6("p", { children: service.description }, void 0, !1, {
            fileName: "app/routes/services.social-media-management.tsx",
            lineNumber: 99,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 88,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV6(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants, children: "Common Questions" }, void 0, !1, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 104,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV6(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxDEV6(FAQSection, { faqs }, void 0, !1, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 106,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 105,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV6(motion.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants, children: "Benefits of Social Media Management" }, void 0, !1, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 109,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV6(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", variants: itemVariants, children: [
          { title: "Consistent Branding", description: "Ensure a consistent look, tone, and message across all platforms" },
          { title: "Increased Engagement", description: "More likes, shares, and comments on your posts" },
          { title: "Boosted Website Traffic", description: "Drive traffic from social media to your website" },
          { title: "Real-Time Feedback", description: "Understand customer sentiment and improve your offerings" }
        ].map((benefit, index) => /* @__PURE__ */ jsxDEV6("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsxDEV6("h3", { className: "text-xl font-semibold mb-2", children: benefit.title }, void 0, !1, {
            fileName: "app/routes/services.social-media-management.tsx",
            lineNumber: 118,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV6("p", { children: benefit.description }, void 0, !1, {
            fileName: "app/routes/services.social-media-management.tsx",
            lineNumber: 119,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 110,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV6(motion.div, { className: "mt-12 text-center", variants: itemVariants, children: /* @__PURE__ */ jsxDEV6(Link3, { to: "/contact", className: "btn btn-primary btn-lg", children: "Start Your Social Media Journey" }, void 0, !1, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 125,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.social-media-management.tsx",
          lineNumber: 124,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/services.social-media-management.tsx",
      lineNumber: 41,
      columnNumber: 5
    },
    this
  );
}

// app/routes/services.business-citations.tsx
var services_business_citations_exports = {};
__export(services_business_citations_exports, {
  default: () => BusinessCitations,
  meta: () => meta3
});
import { Link as Link4 } from "@remix-run/react";
import { motion as motion2 } from "framer-motion";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "Business Citations Service - Peak Growth Digital" },
  { name: "description", content: "Improve your local search visibility with our comprehensive business citations service. Boost your local SEO and credibility with Peak Growth Digital." }
], faqs2 = [
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
], containerVariants2 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}, itemVariants2 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function BusinessCitations() {
  return /* @__PURE__ */ jsxDEV7(
    motion2.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants2,
      children: [
        /* @__PURE__ */ jsxDEV7(motion2.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants2, children: "Citations Service" }, void 0, !1, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV7(motion2.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants2, children: "One of the key factors that help businesses rank higher in local search results is the presence of consistent and accurate citations across the web. At Peak Growth Digital, we offer a comprehensive Citations Service that helps improve your business's local search visibility, credibility, and trustworthiness." }, void 0, !1, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV7(motion2.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants2, children: [
          /* @__PURE__ */ jsxDEV7("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV7("h2", { className: "text-2xl font-semibold mb-4", children: "What Are Citations?" }, void 0, !1, {
              fileName: "app/routes/services.business-citations.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7("p", { children: "A citation is any online mention of your business that includes your name, address, and phone number (NAP) information. Citations are found on local directories like Yelp, Yellow Pages, Google My Business, and other relevant platforms." }, void 0, !1, {
              fileName: "app/routes/services.business-citations.tsx",
              lineNumber: 61,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.business-citations.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV7("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV7("h2", { className: "text-2xl font-semibold mb-4", children: "Why Are Citations Important for Local SEO?" }, void 0, !1, {
              fileName: "app/routes/services.business-citations.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxDEV7("li", { children: [
                /* @__PURE__ */ jsxDEV7("strong", { children: "Improves Local Search Rankings:" }, void 0, !1, {
                  fileName: "app/routes/services.business-citations.tsx",
                  lineNumber: 68,
                  columnNumber: 17
                }, this),
                " Helps verify your business's legitimacy and relevance"
              ] }, void 0, !0, {
                fileName: "app/routes/services.business-citations.tsx",
                lineNumber: 68,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV7("li", { children: [
                /* @__PURE__ */ jsxDEV7("strong", { children: "Builds Trust and Credibility:" }, void 0, !1, {
                  fileName: "app/routes/services.business-citations.tsx",
                  lineNumber: 69,
                  columnNumber: 17
                }, this),
                " Consistent citations signal trustworthiness"
              ] }, void 0, !0, {
                fileName: "app/routes/services.business-citations.tsx",
                lineNumber: 69,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV7("li", { children: [
                /* @__PURE__ */ jsxDEV7("strong", { children: "Increases Online Visibility:" }, void 0, !1, {
                  fileName: "app/routes/services.business-citations.tsx",
                  lineNumber: 70,
                  columnNumber: 17
                }, this),
                " More listings mean more chances to be found"
              ] }, void 0, !0, {
                fileName: "app/routes/services.business-citations.tsx",
                lineNumber: 70,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.business-citations.tsx",
              lineNumber: 67,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.business-citations.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV7(motion2.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants2, children: "Our Citations Service Packages" }, void 0, !1, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 75,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV7(motion2.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", variants: itemVariants2, children: [
          { title: "120 Citations Package", price: "$299", features: ["Manual submission to 120 high-quality directories", "Detailed NAP consistency checks", "Full report of listings"] },
          { title: "300 Citations Package", price: "$449", features: ["Submission to 300 directories", "Ongoing tracking and updates", "Ideal for highly competitive markets"] }
        ].map((package_, index) => /* @__PURE__ */ jsxDEV7("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsxDEV7("h3", { className: "text-2xl font-semibold mb-2", children: package_.title }, void 0, !1, {
            fileName: "app/routes/services.business-citations.tsx",
            lineNumber: 82,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV7("p", { className: "text-xl font-bold mb-4", children: package_.price }, void 0, !1, {
            fileName: "app/routes/services.business-citations.tsx",
            lineNumber: 83,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV7("ul", { className: "list-disc list-inside", children: package_.features.map((feature, fIndex) => /* @__PURE__ */ jsxDEV7("li", { children: feature }, fIndex, !1, {
            fileName: "app/routes/services.business-citations.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this)) }, void 0, !1, {
            fileName: "app/routes/services.business-citations.tsx",
            lineNumber: 84,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 76,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV7(motion2.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants2, children: "How We Create and Optimize Citations" }, void 0, !1, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 93,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV7(motion2.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", variants: itemVariants2, children: [
          { title: "NAP Consistency Check", icon: "\u{1F50D}", description: "Audit and ensure consistency of your business information" },
          { title: "Manual Submission", icon: "\u{1F4DD}", description: "Manually submit to reputable directories" },
          { title: "Ongoing Monitoring", icon: "\u{1F440}", description: "Regularly check and update your citations" },
          { title: "Reporting", icon: "\u{1F4CA}", description: "Provide detailed reports of all your listings" }
        ].map((step, index) => /* @__PURE__ */ jsxDEV7("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsxDEV7("div", { className: "text-4xl mb-4", children: step.icon }, void 0, !1, {
            fileName: "app/routes/services.business-citations.tsx",
            lineNumber: 102,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV7("h3", { className: "text-xl font-semibold mb-2", children: step.title }, void 0, !1, {
            fileName: "app/routes/services.business-citations.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV7("p", { children: step.description }, void 0, !1, {
            fileName: "app/routes/services.business-citations.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 94,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV7(motion2.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants2, children: "Common Questions About Citations" }, void 0, !1, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 109,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV7(motion2.div, { variants: itemVariants2, children: /* @__PURE__ */ jsxDEV7(FAQSection, { faqs: faqs2 }, void 0, !1, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 111,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 110,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV7(motion2.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants2, children: "Benefits of Citations Service" }, void 0, !1, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 114,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV7(motion2.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", variants: itemVariants2, children: [
          { title: "Improved Local SEO", description: "Boost your visibility in local search results" },
          { title: "Enhanced Online Visibility", description: "Increase opportunities for potential customers to find you" },
          { title: "Increased Trust", description: "Build legitimacy and trustworthiness for your business" },
          { title: "Ongoing Support", description: "Ensure your citations remain up to date with our larger package" }
        ].map((benefit, index) => /* @__PURE__ */ jsxDEV7("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsxDEV7("h3", { className: "text-xl font-semibold mb-2", children: benefit.title }, void 0, !1, {
            fileName: "app/routes/services.business-citations.tsx",
            lineNumber: 123,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV7("p", { children: benefit.description }, void 0, !1, {
            fileName: "app/routes/services.business-citations.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 115,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV7(motion2.div, { className: "mt-12 text-center", variants: itemVariants2, children: /* @__PURE__ */ jsxDEV7(Link4, { to: "/contact", className: "btn btn-primary btn-lg", children: "Get Started with Citations" }, void 0, !1, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 130,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.business-citations.tsx",
          lineNumber: 129,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/services.business-citations.tsx",
      lineNumber: 45,
      columnNumber: 5
    },
    this
  );
}

// app/routes/services.digital-services.tsx
var services_digital_services_exports = {};
__export(services_digital_services_exports, {
  default: () => DigitalServices,
  meta: () => meta4
});
import { Link as Link5 } from "@remix-run/react";
import { motion as motion3 } from "framer-motion";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "General Digital Services - Peak Growth Digital" },
  { name: "description", content: "Comprehensive digital marketing services to grow your online presence. Learn about our strategies for SEO, content marketing, social media, and more." }
], faqs3 = [
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
], containerVariants3 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}, itemVariants3 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function DigitalServices() {
  return /* @__PURE__ */ jsxDEV8(
    motion3.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants3,
      children: [
        /* @__PURE__ */ jsxDEV8(motion3.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants3, children: "General Digital Services" }, void 0, !1, {
          fileName: "app/routes/services.digital-services.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV8(motion3.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants3, children: "In the modern business landscape, having a strong digital presence is essential, but it goes beyond just having a website. At Peak Growth Digital, we offer a wide range of general digital services designed to enhance your brand's online visibility, increase traffic, and ultimately drive conversions." }, void 0, !1, {
          fileName: "app/routes/services.digital-services.tsx",
          lineNumber: 50,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV8(motion3.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants3, children: [
          /* @__PURE__ */ jsxDEV8("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV8("h2", { className: "text-2xl font-semibold mb-4", children: "What Are General Digital Services?" }, void 0, !1, {
              fileName: "app/routes/services.digital-services.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV8("p", { children: "General digital services encompass a broad spectrum of online marketing techniques and strategies aimed at improving your brand's digital footprint. Our offerings are designed to help businesses grow by leveraging the power of the internet to attract and engage customers." }, void 0, !1, {
              fileName: "app/routes/services.digital-services.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.digital-services.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV8("h2", { className: "text-2xl font-semibold mb-4", children: "Why Choose Our Services?" }, void 0, !1, {
              fileName: "app/routes/services.digital-services.tsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV8("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxDEV8("li", { children: [
                /* @__PURE__ */ jsxDEV8("strong", { children: "Comprehensive Digital Growth:" }, void 0, !1, {
                  fileName: "app/routes/services.digital-services.tsx",
                  lineNumber: 64,
                  columnNumber: 17
                }, this),
                " Cover all aspects of online marketing"
              ] }, void 0, !0, {
                fileName: "app/routes/services.digital-services.tsx",
                lineNumber: 64,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV8("li", { children: [
                /* @__PURE__ */ jsxDEV8("strong", { children: "Customized Strategies:" }, void 0, !1, {
                  fileName: "app/routes/services.digital-services.tsx",
                  lineNumber: 65,
                  columnNumber: 17
                }, this),
                " Tailored to your business needs and goals"
              ] }, void 0, !0, {
                fileName: "app/routes/services.digital-services.tsx",
                lineNumber: 65,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV8("li", { children: [
                /* @__PURE__ */ jsxDEV8("strong", { children: "Ongoing Support:" }, void 0, !1, {
                  fileName: "app/routes/services.digital-services.tsx",
                  lineNumber: 66,
                  columnNumber: 17
                }, this),
                " Continuous optimization for best results"
              ] }, void 0, !0, {
                fileName: "app/routes/services.digital-services.tsx",
                lineNumber: 66,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV8("li", { children: [
                /* @__PURE__ */ jsxDEV8("strong", { children: "Measurable Results:" }, void 0, !1, {
                  fileName: "app/routes/services.digital-services.tsx",
                  lineNumber: 67,
                  columnNumber: 17
                }, this),
                " Detailed reporting on key performance indicators"
              ] }, void 0, !0, {
                fileName: "app/routes/services.digital-services.tsx",
                lineNumber: 67,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.digital-services.tsx",
              lineNumber: 63,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.digital-services.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.digital-services.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV8(motion3.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants3, children: "Our Core Digital Services" }, void 0, !1, {
          fileName: "app/routes/services.digital-services.tsx",
          lineNumber: 72,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV8(motion3.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", variants: itemVariants3, children: [
          { title: "Search Engine Optimization (SEO)", icon: "\u{1F50D}", description: "Improve your website's visibility in search results" },
          { title: "Content Marketing", icon: "\u{1F4DD}", description: "Create and distribute valuable, relevant content" },
          { title: "Social Media Management", icon: "\u{1F4F1}", description: "Engage with your audience across social platforms" },
          { title: "Pay-Per-Click (PPC) Advertising", icon: "\u{1F4B0}", description: "Drive immediate traffic through targeted ads" },
          { title: "Email Marketing", icon: "\u{1F4E7}", description: "Nurture leads and build customer relationships" },
          { title: "Online Reputation Management", icon: "\u2B50", description: "Monitor and improve your online reputation" }
        ].map((service, index) => /* @__PURE__ */ jsxDEV8("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsxDEV8("div", { className: "text-4xl mb-4", children: service.icon }, void 0, !1, {
            fileName: "app/routes/services.digital-services.tsx",
            lineNumber: 83,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("h3", { className: "text-xl font-semibold mb-2", children: service.title }, void 0, !1, {
            fileName: "app/routes/services.digital-services.tsx",
            lineNumber: 84,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("p", { children: service.description }, void 0, !1, {
            fileName: "app/routes/services.digital-services.tsx",
            lineNumber: 85,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.digital-services.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.digital-services.tsx",
          lineNumber: 73,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV8(motion3.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants3, children: "How Our Services Work Together" }, void 0, !1, {
          fileName: "app/routes/services.digital-services.tsx",
          lineNumber: 90,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV8(motion3.p, { className: "mb-6 text-center", variants: itemVariants3, children: "Each digital service complements the others, creating a comprehensive digital marketing strategy. When used together, these services create a holistic approach to growing your online presence and driving business success." }, void 0, !1, {
          fileName: "app/routes/services.digital-services.tsx",
          lineNumber: 91,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV8(motion3.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants3, children: "Common Questions" }, void 0, !1, {
          fileName: "app/routes/services.digital-services.tsx",
          lineNumber: 95,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV8(motion3.div, { variants: itemVariants3, children: /* @__PURE__ */ jsxDEV8(FAQSection, { faqs: faqs3 }, void 0, !1, {
          fileName: "app/routes/services.digital-services.tsx",
          lineNumber: 97,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.digital-services.tsx",
          lineNumber: 96,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV8(motion3.div, { className: "mt-12 text-center", variants: itemVariants3, children: /* @__PURE__ */ jsxDEV8(Link5, { to: "/contact", className: "btn btn-primary btn-lg", children: "Start Your Digital Growth Journey" }, void 0, !1, {
          fileName: "app/routes/services.digital-services.tsx",
          lineNumber: 101,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.digital-services.tsx",
          lineNumber: 100,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/services.digital-services.tsx",
      lineNumber: 41,
      columnNumber: 5
    },
    this
  );
}

// app/routes/services.website-creation.tsx
var services_website_creation_exports = {};
__export(services_website_creation_exports, {
  default: () => WebsiteCreation,
  meta: () => meta5
});
import { Link as Link6 } from "@remix-run/react";
import { motion as motion4 } from "framer-motion";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "Website Creation Services - Peak Growth Digital" },
  { name: "description", content: "Custom website design and development tailored to your business objectives. Learn about our website creation services and how we can build your perfect online presence." }
], faqs4 = [
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
], containerVariants4 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}, itemVariants4 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function WebsiteCreation() {
  return /* @__PURE__ */ jsxDEV9(
    motion4.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants4,
      children: [
        /* @__PURE__ */ jsxDEV9(motion4.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants4, children: "Website Creation" }, void 0, !1, {
          fileName: "app/routes/services.website-creation.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV9(motion4.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants4, children: "Your website is the digital storefront of your business\u2014it's often the first impression potential customers have of you. At Peak Growth Digital, we craft custom websites that not only look stunning but are also built to perform." }, void 0, !1, {
          fileName: "app/routes/services.website-creation.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV9(motion4.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants4, children: [
          /* @__PURE__ */ jsxDEV9("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV9("h2", { className: "text-2xl font-semibold mb-4", children: "What is Website Creation?" }, void 0, !1, {
              fileName: "app/routes/services.website-creation.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV9("p", { children: "Website creation involves the design and development of a website tailored to your business's unique needs. We take care of everything from the initial concept to the final deployment, ensuring that your website is both visually appealing and functionally sound." }, void 0, !1, {
              fileName: "app/routes/services.website-creation.tsx",
              lineNumber: 61,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.website-creation.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV9("h2", { className: "text-2xl font-semibold mb-4", children: "Why Is a Custom Website Important?" }, void 0, !1, {
              fileName: "app/routes/services.website-creation.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV9("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxDEV9("li", { children: [
                /* @__PURE__ */ jsxDEV9("strong", { children: "Unique Branding:" }, void 0, !1, {
                  fileName: "app/routes/services.website-creation.tsx",
                  lineNumber: 68,
                  columnNumber: 17
                }, this),
                " Reflect your brand's identity"
              ] }, void 0, !0, {
                fileName: "app/routes/services.website-creation.tsx",
                lineNumber: 68,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV9("li", { children: [
                /* @__PURE__ */ jsxDEV9("strong", { children: "Optimized for Conversions:" }, void 0, !1, {
                  fileName: "app/routes/services.website-creation.tsx",
                  lineNumber: 69,
                  columnNumber: 17
                }, this),
                " Designed to convert visitors into customers"
              ] }, void 0, !0, {
                fileName: "app/routes/services.website-creation.tsx",
                lineNumber: 69,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV9("li", { children: [
                /* @__PURE__ */ jsxDEV9("strong", { children: "Mobile-Friendly:" }, void 0, !1, {
                  fileName: "app/routes/services.website-creation.tsx",
                  lineNumber: 70,
                  columnNumber: 17
                }, this),
                " Responsive design for all devices"
              ] }, void 0, !0, {
                fileName: "app/routes/services.website-creation.tsx",
                lineNumber: 70,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.website-creation.tsx",
              lineNumber: 67,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.website-creation.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.website-creation.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV9(motion4.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants4, children: "Our Website Creation Process" }, void 0, !1, {
          fileName: "app/routes/services.website-creation.tsx",
          lineNumber: 75,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV9(motion4.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", variants: itemVariants4, children: [
          { title: "Discovery", icon: "\u{1F50D}", description: "We learn about your business, goals, and target audience" },
          { title: "Design", icon: "\u{1F3A8}", description: "Our team creates a custom mockup reflecting your brand identity" },
          { title: "Development", icon: "\u{1F4BB}", description: "We bring the design to life with clean, efficient code" },
          { title: "Content", icon: "\u{1F4DD}", description: "We create or optimize content for SEO and engagement" },
          { title: "Testing", icon: "\u{1F9EA}", description: "Rigorous testing ensures a seamless user experience" },
          { title: "Launch", icon: "\u{1F680}", description: "We deploy your site and provide ongoing support" }
        ].map((step, index) => /* @__PURE__ */ jsxDEV9("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsxDEV9("div", { className: "text-4xl mb-4", children: step.icon }, void 0, !1, {
            fileName: "app/routes/services.website-creation.tsx",
            lineNumber: 86,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV9("h3", { className: "text-xl font-semibold mb-2", children: step.title }, void 0, !1, {
            fileName: "app/routes/services.website-creation.tsx",
            lineNumber: 87,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV9("p", { children: step.description }, void 0, !1, {
            fileName: "app/routes/services.website-creation.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.website-creation.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.website-creation.tsx",
          lineNumber: 76,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV9(motion4.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants4, children: "Common Questions" }, void 0, !1, {
          fileName: "app/routes/services.website-creation.tsx",
          lineNumber: 93,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV9(motion4.div, { variants: itemVariants4, children: /* @__PURE__ */ jsxDEV9(FAQSection, { faqs: faqs4 }, void 0, !1, {
          fileName: "app/routes/services.website-creation.tsx",
          lineNumber: 95,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.website-creation.tsx",
          lineNumber: 94,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV9(motion4.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants4, children: "Benefits of Custom Website Creation" }, void 0, !1, {
          fileName: "app/routes/services.website-creation.tsx",
          lineNumber: 98,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV9(motion4.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", variants: itemVariants4, children: [
          { title: "Tailored to Your Needs", description: "We build sites designed to meet your specific business goals" },
          { title: "SEO-Friendly", description: "Built with search engine optimization in mind from the ground up" },
          { title: "Scalable", description: "Grow your website as your business expands" },
          { title: "User-Centric Design", description: "Prioritize user experience for better engagement and conversions" }
        ].map((benefit, index) => /* @__PURE__ */ jsxDEV9("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsxDEV9("h3", { className: "text-xl font-semibold mb-2", children: benefit.title }, void 0, !1, {
            fileName: "app/routes/services.website-creation.tsx",
            lineNumber: 107,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV9("p", { children: benefit.description }, void 0, !1, {
            fileName: "app/routes/services.website-creation.tsx",
            lineNumber: 108,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.website-creation.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.website-creation.tsx",
          lineNumber: 99,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV9(motion4.div, { className: "mt-12 text-center", variants: itemVariants4, children: /* @__PURE__ */ jsxDEV9(Link6, { to: "/contact", className: "btn btn-primary btn-lg", children: "Start Your Website Project" }, void 0, !1, {
          fileName: "app/routes/services.website-creation.tsx",
          lineNumber: 114,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.website-creation.tsx",
          lineNumber: 113,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/services.website-creation.tsx",
      lineNumber: 45,
      columnNumber: 5
    },
    this
  );
}

// app/routes/services.website-ranking.tsx
var services_website_ranking_exports = {};
__export(services_website_ranking_exports, {
  default: () => WebsiteRanking,
  meta: () => meta6
});
import { Link as Link7 } from "@remix-run/react";
import { motion as motion5 } from "framer-motion";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var meta6 = () => [
  { title: "Website Ranking Services - Peak Growth Digital" },
  { name: "description", content: "Improve your website's visibility in search engine results with our expert SEO strategies. Learn about our website ranking services and how we can boost your online presence." }
], faqs5 = [
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
], containerVariants5 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}, itemVariants5 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function WebsiteRanking() {
  return /* @__PURE__ */ jsxDEV10(
    motion5.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants5,
      children: [
        /* @__PURE__ */ jsxDEV10(motion5.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants5, children: "Website Ranking" }, void 0, !1, {
          fileName: "app/routes/services.website-ranking.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV10(motion5.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants5, children: "In today's competitive digital world, securing top spots on search engines like Google is vital. Website ranking isn't just about being found; it's about being chosen." }, void 0, !1, {
          fileName: "app/routes/services.website-ranking.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV10(motion5.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants5, children: [
          /* @__PURE__ */ jsxDEV10("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV10("h2", { className: "text-2xl font-semibold mb-4", children: "What is Website Ranking?" }, void 0, !1, {
              fileName: "app/routes/services.website-ranking.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV10("p", { children: "Website ranking refers to the position your website holds on search engine result pages (SERPs) when someone searches for a specific keyword or phrase. Search engines rank websites based on hundreds of factors, including relevance, website quality, and user experience." }, void 0, !1, {
              fileName: "app/routes/services.website-ranking.tsx",
              lineNumber: 61,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.website-ranking.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV10("h2", { className: "text-2xl font-semibold mb-4", children: "Why Does Website Ranking Matter?" }, void 0, !1, {
              fileName: "app/routes/services.website-ranking.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV10("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxDEV10("li", { children: [
                /* @__PURE__ */ jsxDEV10("strong", { children: "Increased Visibility:" }, void 0, !1, {
                  fileName: "app/routes/services.website-ranking.tsx",
                  lineNumber: 68,
                  columnNumber: 17
                }, this),
                " Higher ranking means more visibility"
              ] }, void 0, !0, {
                fileName: "app/routes/services.website-ranking.tsx",
                lineNumber: 68,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV10("li", { children: [
                /* @__PURE__ */ jsxDEV10("strong", { children: "Builds Trust:" }, void 0, !1, {
                  fileName: "app/routes/services.website-ranking.tsx",
                  lineNumber: 69,
                  columnNumber: 17
                }, this),
                " Top-ranked sites are often perceived as more trustworthy"
              ] }, void 0, !0, {
                fileName: "app/routes/services.website-ranking.tsx",
                lineNumber: 69,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV10("li", { children: [
                /* @__PURE__ */ jsxDEV10("strong", { children: "Boosts Traffic:" }, void 0, !1, {
                  fileName: "app/routes/services.website-ranking.tsx",
                  lineNumber: 70,
                  columnNumber: 17
                }, this),
                " Better rankings lead to more website visitors"
              ] }, void 0, !0, {
                fileName: "app/routes/services.website-ranking.tsx",
                lineNumber: 70,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV10("li", { children: [
                /* @__PURE__ */ jsxDEV10("strong", { children: "Cost-Effective:" }, void 0, !1, {
                  fileName: "app/routes/services.website-ranking.tsx",
                  lineNumber: 71,
                  columnNumber: 17
                }, this),
                " Organic traffic doesn't require ongoing ad spend"
              ] }, void 0, !0, {
                fileName: "app/routes/services.website-ranking.tsx",
                lineNumber: 71,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.website-ranking.tsx",
              lineNumber: 67,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.website-ranking.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.website-ranking.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV10(motion5.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants5, children: "Our Website Ranking Process" }, void 0, !1, {
          fileName: "app/routes/services.website-ranking.tsx",
          lineNumber: 76,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV10(motion5.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", variants: itemVariants5, children: [
          { title: "Website Audit", icon: "\u{1F50D}", description: "Analyze your current website and its performance" },
          { title: "Keyword Research", icon: "\u{1F511}", description: "Identify valuable keywords for your business" },
          { title: "On-Page Optimization", icon: "\u{1F4C4}", description: "Optimize your website's content and structure" },
          { title: "Content Strategy", icon: "\u{1F4DD}", description: "Develop a content strategy targeting chosen keywords" },
          { title: "Link Building", icon: "\u{1F517}", description: "Implement ethical link building strategies" },
          { title: "Monitoring", icon: "\u{1F4CA}", description: "Continuously monitor rankings and provide reports" }
        ].map((step, index) => /* @__PURE__ */ jsxDEV10("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsxDEV10("div", { className: "text-4xl mb-4", children: step.icon }, void 0, !1, {
            fileName: "app/routes/services.website-ranking.tsx",
            lineNumber: 87,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV10("h3", { className: "text-xl font-semibold mb-2", children: step.title }, void 0, !1, {
            fileName: "app/routes/services.website-ranking.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV10("p", { children: step.description }, void 0, !1, {
            fileName: "app/routes/services.website-ranking.tsx",
            lineNumber: 89,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.website-ranking.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.website-ranking.tsx",
          lineNumber: 77,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV10(motion5.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants5, children: "Common Questions" }, void 0, !1, {
          fileName: "app/routes/services.website-ranking.tsx",
          lineNumber: 94,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV10(motion5.div, { variants: itemVariants5, children: /* @__PURE__ */ jsxDEV10(FAQSection, { faqs: faqs5 }, void 0, !1, {
          fileName: "app/routes/services.website-ranking.tsx",
          lineNumber: 96,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.website-ranking.tsx",
          lineNumber: 95,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV10(motion5.div, { className: "mt-12 text-center", variants: itemVariants5, children: /* @__PURE__ */ jsxDEV10(Link7, { to: "/contact", className: "btn btn-primary btn-lg", children: "Boost Your Website Ranking" }, void 0, !1, {
          fileName: "app/routes/services.website-ranking.tsx",
          lineNumber: 100,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.website-ranking.tsx",
          lineNumber: 99,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/services.website-ranking.tsx",
      lineNumber: 45,
      columnNumber: 5
    },
    this
  );
}

// app/routes/services.website-renting.tsx
var services_website_renting_exports = {};
__export(services_website_renting_exports, {
  default: () => WebsiteRenting,
  meta: () => meta7
});
import { Link as Link8 } from "@remix-run/react";
import { motion as motion6 } from "framer-motion";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var meta7 = () => [
  { title: "Website Renting Services - Peak Growth Digital" },
  { name: "description", content: "Rent high-ranking websites to generate leads and drive sales without the time investment of building a new site. Learn about our website renting services." }
], faqs6 = [
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
], containerVariants6 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}, itemVariants6 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function WebsiteRenting() {
  return /* @__PURE__ */ jsxDEV11(
    motion6.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants6,
      children: [
        /* @__PURE__ */ jsxDEV11(motion6.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants6, children: "Website Renting" }, void 0, !1, {
          fileName: "app/routes/services.website-renting.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV11(motion6.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants6, children: "In a rapidly evolving digital marketplace, waiting to build an online presence from scratch can feel like a slow process. That's where Website Renting comes in." }, void 0, !1, {
          fileName: "app/routes/services.website-renting.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV11(motion6.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants6, children: [
          /* @__PURE__ */ jsxDEV11("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV11("h2", { className: "text-2xl font-semibold mb-4", children: "What is Website Renting?" }, void 0, !1, {
              fileName: "app/routes/services.website-renting.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV11("p", { children: "Website renting allows businesses to lease websites that are already fully functional and optimized for search engines. These websites are pre-built, well-maintained, and rank highly for specific keywords relevant to your industry." }, void 0, !1, {
              fileName: "app/routes/services.website-renting.tsx",
              lineNumber: 61,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.website-renting.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV11("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV11("h2", { className: "text-2xl font-semibold mb-4", children: "Who Can Benefit?" }, void 0, !1, {
              fileName: "app/routes/services.website-renting.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV11("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxDEV11("li", { children: [
                /* @__PURE__ */ jsxDEV11("strong", { children: "New Businesses:" }, void 0, !1, {
                  fileName: "app/routes/services.website-renting.tsx",
                  lineNumber: 68,
                  columnNumber: 17
                }, this),
                " Instant online presence"
              ] }, void 0, !0, {
                fileName: "app/routes/services.website-renting.tsx",
                lineNumber: 68,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV11("li", { children: [
                /* @__PURE__ */ jsxDEV11("strong", { children: "Market Testers:" }, void 0, !1, {
                  fileName: "app/routes/services.website-renting.tsx",
                  lineNumber: 69,
                  columnNumber: 17
                }, this),
                " Cost-effective way to test new markets"
              ] }, void 0, !0, {
                fileName: "app/routes/services.website-renting.tsx",
                lineNumber: 69,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV11("li", { children: [
                /* @__PURE__ */ jsxDEV11("strong", { children: "Budget-Conscious:" }, void 0, !1, {
                  fileName: "app/routes/services.website-renting.tsx",
                  lineNumber: 70,
                  columnNumber: 17
                }, this),
                " Avoid high upfront costs"
              ] }, void 0, !0, {
                fileName: "app/routes/services.website-renting.tsx",
                lineNumber: 70,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV11("li", { children: [
                /* @__PURE__ */ jsxDEV11("strong", { children: "Time-Sensitive:" }, void 0, !1, {
                  fileName: "app/routes/services.website-renting.tsx",
                  lineNumber: 71,
                  columnNumber: 17
                }, this),
                " Quick setup without long development"
              ] }, void 0, !0, {
                fileName: "app/routes/services.website-renting.tsx",
                lineNumber: 71,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.website-renting.tsx",
              lineNumber: 67,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.website-renting.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.website-renting.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV11(motion6.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants6, children: "How Website Renting Works" }, void 0, !1, {
          fileName: "app/routes/services.website-renting.tsx",
          lineNumber: 76,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV11(motion6.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", variants: itemVariants6, children: [
          { title: "Selection", icon: "\u{1F50D}", description: "Choose a site that aligns with your business" },
          { title: "Customization", icon: "\u{1F3A8}", description: "Adjust the site to reflect your brand" },
          { title: "Instant Traffic", icon: "\u{1F680}", description: "Start receiving visitors immediately" },
          { title: "Maintenance", icon: "\u{1F527}", description: "We handle all technical aspects" },
          { title: "Analytics", icon: "\u{1F4CA}", description: "Track performance and adjust strategy" },
          { title: "Flexibility", icon: "\u{1F504}", description: "Extend or transition as needed" }
        ].map((step, index) => /* @__PURE__ */ jsxDEV11("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsxDEV11("div", { className: "text-4xl mb-4", children: step.icon }, void 0, !1, {
            fileName: "app/routes/services.website-renting.tsx",
            lineNumber: 87,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11("h3", { className: "text-xl font-semibold mb-2", children: step.title }, void 0, !1, {
            fileName: "app/routes/services.website-renting.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { children: step.description }, void 0, !1, {
            fileName: "app/routes/services.website-renting.tsx",
            lineNumber: 89,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.website-renting.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.website-renting.tsx",
          lineNumber: 77,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV11(motion6.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants6, children: "Common Questions" }, void 0, !1, {
          fileName: "app/routes/services.website-renting.tsx",
          lineNumber: 94,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV11(motion6.div, { variants: itemVariants6, children: /* @__PURE__ */ jsxDEV11(FAQSection, { faqs: faqs6 }, void 0, !1, {
          fileName: "app/routes/services.website-renting.tsx",
          lineNumber: 96,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.website-renting.tsx",
          lineNumber: 95,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV11(motion6.div, { className: "mt-12 text-center", variants: itemVariants6, children: /* @__PURE__ */ jsxDEV11(Link8, { to: "/contact", className: "btn btn-primary btn-lg", children: "Start Website Renting" }, void 0, !1, {
          fileName: "app/routes/services.website-renting.tsx",
          lineNumber: 100,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.website-renting.tsx",
          lineNumber: 99,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/services.website-renting.tsx",
      lineNumber: 45,
      columnNumber: 5
    },
    this
  );
}

// app/routes/services.facebook-ads.tsx
var services_facebook_ads_exports = {};
__export(services_facebook_ads_exports, {
  default: () => FacebookAdsService,
  meta: () => meta8
});
import { Link as Link9 } from "@remix-run/react";
import { motion as motion7 } from "framer-motion";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var meta8 = () => [
  { title: "Facebook Ads Service - Peak Growth Digital" },
  { name: "description", content: "Create targeted, high-converting Facebook ad campaigns that reach the right audience and deliver measurable results with Peak Growth Digital." }
], faqs7 = [
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
], containerVariants7 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}, itemVariants7 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function FacebookAdsService() {
  return /* @__PURE__ */ jsxDEV12(
    motion7.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants7,
      children: [
        /* @__PURE__ */ jsxDEV12(motion7.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants7, children: "Facebook Ads Service" }, void 0, !1, {
          fileName: "app/routes/services.facebook-ads.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV12(motion7.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants7, children: "Facebook is one of the most powerful advertising platforms available, with over 2.8 billion active users. At Peak Growth Digital, we create targeted, high-converting Facebook ad campaigns that reach the right audience and deliver measurable results." }, void 0, !1, {
          fileName: "app/routes/services.facebook-ads.tsx",
          lineNumber: 50,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV12(motion7.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants7, children: [
          /* @__PURE__ */ jsxDEV12("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV12("h2", { className: "text-2xl font-semibold mb-4", children: "What is Facebook Ads?" }, void 0, !1, {
              fileName: "app/routes/services.facebook-ads.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV12("p", { children: "Facebook Ads allow businesses to create targeted advertisements that appear on users' newsfeeds, stories, and even in Messenger. Unlike traditional advertising, Facebook's advanced targeting tools allow you to zero in on your ideal customers based on demographics, interests, behaviors, and even location." }, void 0, !1, {
              fileName: "app/routes/services.facebook-ads.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.facebook-ads.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV12("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV12("h2", { className: "text-2xl font-semibold mb-4", children: "Why Facebook Ads Are Crucial for Your Business:" }, void 0, !1, {
              fileName: "app/routes/services.facebook-ads.tsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV12("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxDEV12("li", { children: [
                /* @__PURE__ */ jsxDEV12("strong", { children: "Precise Targeting:" }, void 0, !1, {
                  fileName: "app/routes/services.facebook-ads.tsx",
                  lineNumber: 64,
                  columnNumber: 17
                }, this),
                " Reach specific demographics, interests, and behaviors"
              ] }, void 0, !0, {
                fileName: "app/routes/services.facebook-ads.tsx",
                lineNumber: 64,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV12("li", { children: [
                /* @__PURE__ */ jsxDEV12("strong", { children: "Massive Reach:" }, void 0, !1, {
                  fileName: "app/routes/services.facebook-ads.tsx",
                  lineNumber: 65,
                  columnNumber: 17
                }, this),
                " Connect with billions of users worldwide"
              ] }, void 0, !0, {
                fileName: "app/routes/services.facebook-ads.tsx",
                lineNumber: 65,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV12("li", { children: [
                /* @__PURE__ */ jsxDEV12("strong", { children: "Cost-Effective:" }, void 0, !1, {
                  fileName: "app/routes/services.facebook-ads.tsx",
                  lineNumber: 66,
                  columnNumber: 17
                }, this),
                " Pay-per-click or pay-per-impression model"
              ] }, void 0, !0, {
                fileName: "app/routes/services.facebook-ads.tsx",
                lineNumber: 66,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.facebook-ads.tsx",
              lineNumber: 63,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.facebook-ads.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.facebook-ads.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV12(motion7.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants7, children: "How We Create High-Converting Facebook Ad Campaigns" }, void 0, !1, {
          fileName: "app/routes/services.facebook-ads.tsx",
          lineNumber: 71,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV12(motion7.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", variants: itemVariants7, children: [
          { title: "Audience Research", icon: "\u{1F50D}", description: "We research and create targeted audience segments" },
          { title: "Ad Design", icon: "\u{1F3A8}", description: "We design visually appealing ads with compelling copy" },
          { title: "Campaign Setup", icon: "\u2699\uFE0F", description: "We set up and optimize your campaigns for best performance" },
          { title: "Analytics", icon: "\u{1F4CA}", description: "We provide detailed reports on campaign performance" }
        ].map((step, index) => /* @__PURE__ */ jsxDEV12("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsxDEV12("div", { className: "text-4xl mb-4", children: step.icon }, void 0, !1, {
            fileName: "app/routes/services.facebook-ads.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("h3", { className: "text-xl font-semibold mb-2", children: step.title }, void 0, !1, {
            fileName: "app/routes/services.facebook-ads.tsx",
            lineNumber: 81,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("p", { children: step.description }, void 0, !1, {
            fileName: "app/routes/services.facebook-ads.tsx",
            lineNumber: 82,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.facebook-ads.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.facebook-ads.tsx",
          lineNumber: 72,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV12(motion7.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants7, children: "Common Questions About Facebook Ads" }, void 0, !1, {
          fileName: "app/routes/services.facebook-ads.tsx",
          lineNumber: 87,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV12(motion7.div, { variants: itemVariants7, children: /* @__PURE__ */ jsxDEV12(FAQSection, { faqs: faqs7 }, void 0, !1, {
          fileName: "app/routes/services.facebook-ads.tsx",
          lineNumber: 89,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.facebook-ads.tsx",
          lineNumber: 88,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV12(motion7.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants7, children: "Benefits of Facebook Ads" }, void 0, !1, {
          fileName: "app/routes/services.facebook-ads.tsx",
          lineNumber: 92,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV12(motion7.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", variants: itemVariants7, children: [
          { title: "Increased Website Traffic", description: "Drive more traffic to your website, boosting sales and conversions" },
          { title: "Lead Generation", description: "Collect valuable leads through Facebook's Lead Ads feature" },
          { title: "Brand Awareness", description: "Get your brand in front of the right people, locally or globally" },
          { title: "Customer Engagement", description: "Encourage interaction and build stronger customer relationships" }
        ].map((benefit, index) => /* @__PURE__ */ jsxDEV12("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsxDEV12("h3", { className: "text-xl font-semibold mb-2", children: benefit.title }, void 0, !1, {
            fileName: "app/routes/services.facebook-ads.tsx",
            lineNumber: 101,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("p", { children: benefit.description }, void 0, !1, {
            fileName: "app/routes/services.facebook-ads.tsx",
            lineNumber: 102,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.facebook-ads.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.facebook-ads.tsx",
          lineNumber: 93,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV12(motion7.div, { className: "mt-12 text-center", variants: itemVariants7, children: /* @__PURE__ */ jsxDEV12(Link9, { to: "/contact", className: "btn btn-primary btn-lg", children: "Start Your Facebook Ads Campaign" }, void 0, !1, {
          fileName: "app/routes/services.facebook-ads.tsx",
          lineNumber: 108,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.facebook-ads.tsx",
          lineNumber: 107,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/services.facebook-ads.tsx",
      lineNumber: 41,
      columnNumber: 5
    },
    this
  );
}

// app/routes/services.gbp-ranking.tsx
var services_gbp_ranking_exports = {};
__export(services_gbp_ranking_exports, {
  default: () => GBPRanking,
  meta: () => meta9
});
import { Link as Link10 } from "@remix-run/react";
import { motion as motion8 } from "framer-motion";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var meta9 = () => [
  { title: "Google Business Profile (GBP) Ranking Services - Peak Growth Digital" },
  { name: "description", content: "Optimize your Google Business Profile to appear prominently in local search results. Learn about our GBP ranking services and how we can boost your local online presence." }
], faqs8 = [
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
], containerVariants8 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}, itemVariants8 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function GBPRanking() {
  return /* @__PURE__ */ jsxDEV13(
    motion8.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants8,
      children: [
        /* @__PURE__ */ jsxDEV13(motion8.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants8, children: "Google Business Profile (GBP) Ranking" }, void 0, !1, {
          fileName: "app/routes/services.gbp-ranking.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV13(motion8.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants8, children: "In today's local-first digital world, having an optimized Google Business Profile (GBP) is essential for attracting nearby customers. At Peak Growth Digital, we specialize in helping businesses rank at the top of local search results through our GBP ranking services, putting your business front and center for users who are searching for your services in your area." }, void 0, !1, {
          fileName: "app/routes/services.gbp-ranking.tsx",
          lineNumber: 50,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV13(motion8.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants8, children: [
          /* @__PURE__ */ jsxDEV13("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV13("h2", { className: "text-2xl font-semibold mb-4", children: "What is GBP Ranking?" }, void 0, !1, {
              fileName: "app/routes/services.gbp-ranking.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { children: 'Your Google Business Profile is the profile that appears when someone searches for your business or relevant services in Google Search or Google Maps. Having a well-optimized profile ensures your business shows up when potential customers search for terms like "restaurants near me" or "plumber in [your city]."' }, void 0, !1, {
              fileName: "app/routes/services.gbp-ranking.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.gbp-ranking.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV13("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV13("h2", { className: "text-2xl font-semibold mb-4", children: "A Fully Optimized GBP Includes:" }, void 0, !1, {
              fileName: "app/routes/services.gbp-ranking.tsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV13("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxDEV13("li", { children: "Business Information: Name, address, phone number (NAP), and business hours." }, void 0, !1, {
                fileName: "app/routes/services.gbp-ranking.tsx",
                lineNumber: 64,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV13("li", { children: "Photos & Videos: Visual content of your business, products, or services." }, void 0, !1, {
                fileName: "app/routes/services.gbp-ranking.tsx",
                lineNumber: 65,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV13("li", { children: "Customer Reviews: User-generated reviews that build trust and credibility." }, void 0, !1, {
                fileName: "app/routes/services.gbp-ranking.tsx",
                lineNumber: 66,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV13("li", { children: "Service Areas: Clearly defined areas that your business serves." }, void 0, !1, {
                fileName: "app/routes/services.gbp-ranking.tsx",
                lineNumber: 67,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV13("li", { children: "Business Description: A concise and compelling description of what your business does." }, void 0, !1, {
                fileName: "app/routes/services.gbp-ranking.tsx",
                lineNumber: 68,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV13("li", { children: "Posts and Updates: Frequent updates and posts keep your profile active and engaging." }, void 0, !1, {
                fileName: "app/routes/services.gbp-ranking.tsx",
                lineNumber: 69,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.gbp-ranking.tsx",
              lineNumber: 63,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.gbp-ranking.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.gbp-ranking.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV13(motion8.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants8, children: "Why is Google Business Profile Important for Local Search?" }, void 0, !1, {
          fileName: "app/routes/services.gbp-ranking.tsx",
          lineNumber: 74,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV13(motion8.p, { className: "mb-6 text-center", variants: itemVariants8, children: "Google prioritizes local search results, particularly for mobile users. Your GBP serves as a mini-website, offering searchers the most critical information they need to choose your business over others. Optimizing your GBP allows your business to:" }, void 0, !1, {
          fileName: "app/routes/services.gbp-ranking.tsx",
          lineNumber: 75,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV13(motion8.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", variants: itemVariants8, children: [
          { title: "Rank Higher", icon: "\u{1F3C6}", description: "Appear at the top of local search results, especially in the local pack" },
          { title: "Increase Foot Traffic", icon: "\u{1F463}", description: "Optimized profiles lead to more visits, both virtual and physical" },
          { title: "Enhance Credibility", icon: "\u{1F91D}", description: "Positive reviews and an updated profile build trust" }
        ].map((benefit, index) => /* @__PURE__ */ jsxDEV13("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsxDEV13("div", { className: "text-4xl mb-4", children: benefit.icon }, void 0, !1, {
            fileName: "app/routes/services.gbp-ranking.tsx",
            lineNumber: 85,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13("h3", { className: "text-xl font-semibold mb-2", children: benefit.title }, void 0, !1, {
            fileName: "app/routes/services.gbp-ranking.tsx",
            lineNumber: 86,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13("p", { children: benefit.description }, void 0, !1, {
            fileName: "app/routes/services.gbp-ranking.tsx",
            lineNumber: 87,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.gbp-ranking.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.gbp-ranking.tsx",
          lineNumber: 78,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV13(motion8.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants8, children: "Common Questions" }, void 0, !1, {
          fileName: "app/routes/services.gbp-ranking.tsx",
          lineNumber: 92,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV13(motion8.div, { variants: itemVariants8, children: /* @__PURE__ */ jsxDEV13(FAQSection, { faqs: faqs8 }, void 0, !1, {
          fileName: "app/routes/services.gbp-ranking.tsx",
          lineNumber: 94,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.gbp-ranking.tsx",
          lineNumber: 93,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV13(motion8.div, { className: "mt-12 text-center", variants: itemVariants8, children: /* @__PURE__ */ jsxDEV13(Link10, { to: "/contact", className: "btn btn-primary btn-lg", children: "Improve Your Local Presence" }, void 0, !1, {
          fileName: "app/routes/services.gbp-ranking.tsx",
          lineNumber: 98,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.gbp-ranking.tsx",
          lineNumber: 97,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/services.gbp-ranking.tsx",
      lineNumber: 41,
      columnNumber: 5
    },
    this
  );
}

// app/routes/services.google-ads.tsx
var services_google_ads_exports = {};
__export(services_google_ads_exports, {
  default: () => GoogleAdsService,
  meta: () => meta10
});
import { Link as Link11 } from "@remix-run/react";
import { motion as motion9 } from "framer-motion";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var meta10 = () => [
  { title: "Google Ads Service - Peak Growth Digital" },
  { name: "description", content: "Drive targeted traffic and generate qualified leads with our expert Google Ads management services. Maximize your ROI with Peak Growth Digital." }
], faqs9 = [
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
], containerVariants9 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}, itemVariants9 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function GoogleAdsService() {
  return /* @__PURE__ */ jsxDEV14(
    motion9.div,
    {
      className: "container mx-auto px-4 py-8",
      initial: "hidden",
      animate: "visible",
      variants: containerVariants9,
      children: [
        /* @__PURE__ */ jsxDEV14(motion9.h1, { className: "text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", variants: itemVariants9, children: "Google Ads Service" }, void 0, !1, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV14(motion9.p, { className: "mb-6 text-xl text-center max-w-3xl mx-auto", variants: itemVariants9, children: "When people are searching for products or services, they often start with Google. At Peak Growth Digital, we create and manage Google Ads campaigns that drive targeted traffic to your website and generate qualified leads, all while maximizing your return on investment (ROI)." }, void 0, !1, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 50,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV14(motion9.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", variants: itemVariants9, children: [
          /* @__PURE__ */ jsxDEV14("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV14("h2", { className: "text-2xl font-semibold mb-4", children: "What is Google Ads?" }, void 0, !1, {
              fileName: "app/routes/services.google-ads.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV14("p", { children: "Google Ads is an online advertising platform that allows businesses to display ads on Google's search engine results pages (SERPs) as well as across Google's vast Display Network. Google Ads works on a pay-per-click (PPC) model, which means you only pay when someone clicks on your ad." }, void 0, !1, {
              fileName: "app/routes/services.google-ads.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.google-ads.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV14("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
            /* @__PURE__ */ jsxDEV14("h2", { className: "text-2xl font-semibold mb-4", children: "Why Use Google Ads?" }, void 0, !1, {
              fileName: "app/routes/services.google-ads.tsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV14("ul", { className: "list-disc list-inside", children: [
              /* @__PURE__ */ jsxDEV14("li", { children: [
                /* @__PURE__ */ jsxDEV14("strong", { children: "Immediate Results:" }, void 0, !1, {
                  fileName: "app/routes/services.google-ads.tsx",
                  lineNumber: 64,
                  columnNumber: 17
                }, this),
                " Delivers immediate visibility in search results"
              ] }, void 0, !0, {
                fileName: "app/routes/services.google-ads.tsx",
                lineNumber: 64,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV14("li", { children: [
                /* @__PURE__ */ jsxDEV14("strong", { children: "Highly Targeted:" }, void 0, !1, {
                  fileName: "app/routes/services.google-ads.tsx",
                  lineNumber: 65,
                  columnNumber: 17
                }, this),
                " Target your ideal audience based on various factors"
              ] }, void 0, !0, {
                fileName: "app/routes/services.google-ads.tsx",
                lineNumber: 65,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV14("li", { children: [
                /* @__PURE__ */ jsxDEV14("strong", { children: "Measurable ROI:" }, void 0, !1, {
                  fileName: "app/routes/services.google-ads.tsx",
                  lineNumber: 66,
                  columnNumber: 17
                }, this),
                " Detailed analytics for easy performance tracking"
              ] }, void 0, !0, {
                fileName: "app/routes/services.google-ads.tsx",
                lineNumber: 66,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.google-ads.tsx",
              lineNumber: 63,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.google-ads.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV14(motion9.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants9, children: "Types of Google Ads Campaigns We Offer" }, void 0, !1, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 71,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV14(motion9.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", variants: itemVariants9, children: [
          { title: "Search Ads", icon: "\u{1F50D}", description: "Appear at the top of Google's search results for relevant keywords" },
          { title: "Display Ads", icon: "\u{1F5BC}\uFE0F", description: "Image-based ads across Google's Display Network" },
          { title: "Shopping Ads", icon: "\u{1F6CD}\uFE0F", description: "Promote products directly on Google's search results pages" },
          { title: "Video Ads", icon: "\u{1F3A5}", description: "Run video ads on YouTube and other Google Video Partners" },
          { title: "Retargeting Ads", icon: "\u{1F3AF}", description: "Show ads to users who have previously visited your website" }
        ].map((campaign, index) => /* @__PURE__ */ jsxDEV14("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsxDEV14("div", { className: "text-4xl mb-4", children: campaign.icon }, void 0, !1, {
            fileName: "app/routes/services.google-ads.tsx",
            lineNumber: 81,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14("h3", { className: "text-xl font-semibold mb-2", children: campaign.title }, void 0, !1, {
            fileName: "app/routes/services.google-ads.tsx",
            lineNumber: 82,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14("p", { children: campaign.description }, void 0, !1, {
            fileName: "app/routes/services.google-ads.tsx",
            lineNumber: 83,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 72,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV14(motion9.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants9, children: "Our Google Ads Process" }, void 0, !1, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 88,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV14(motion9.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", variants: itemVariants9, children: [
          { title: "Keyword Research", icon: "\u{1F511}", description: "Select the best keywords based on your business goals" },
          { title: "Ad Creation", icon: "\u270D\uFE0F", description: "Craft compelling ad copy and design eye-catching visuals" },
          { title: "Campaign Setup", icon: "\u2699\uFE0F", description: "Optimize campaign settings for your target audience" },
          { title: "Optimization", icon: "\u{1F4C8}", description: "Continuously monitor and adjust for improved performance" },
          { title: "Reporting", icon: "\u{1F4CA}", description: "Provide detailed reports on campaign performance" }
        ].map((step, index) => /* @__PURE__ */ jsxDEV14("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg text-center", children: [
          /* @__PURE__ */ jsxDEV14("div", { className: "text-4xl mb-4", children: step.icon }, void 0, !1, {
            fileName: "app/routes/services.google-ads.tsx",
            lineNumber: 98,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14("h3", { className: "text-xl font-semibold mb-2", children: step.title }, void 0, !1, {
            fileName: "app/routes/services.google-ads.tsx",
            lineNumber: 99,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14("p", { children: step.description }, void 0, !1, {
            fileName: "app/routes/services.google-ads.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 89,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV14(motion9.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants9, children: "Common Questions About Google Ads" }, void 0, !1, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 105,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV14(motion9.div, { variants: itemVariants9, children: /* @__PURE__ */ jsxDEV14(FAQSection, { faqs: faqs9 }, void 0, !1, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 107,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 106,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV14(motion9.h2, { className: "text-3xl font-semibold mt-12 mb-6 text-center", variants: itemVariants9, children: "Benefits of Google Ads" }, void 0, !1, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 110,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV14(motion9.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", variants: itemVariants9, children: [
          { title: "Instant Visibility", description: "Get in front of users actively searching for your products or services" },
          { title: "Flexible Budgeting", description: "Control your ad spend with customizable budgets" },
          { title: "Measurable Results", description: "Track every click, impression, and conversion for full transparency" },
          { title: "Increased Sales and Leads", description: "Drive qualified traffic to your site, leading to more conversions" }
        ].map((benefit, index) => /* @__PURE__ */ jsxDEV14("div", { className: "bg-base-200 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsxDEV14("h3", { className: "text-xl font-semibold mb-2", children: benefit.title }, void 0, !1, {
            fileName: "app/routes/services.google-ads.tsx",
            lineNumber: 119,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14("p", { children: benefit.description }, void 0, !1, {
            fileName: "app/routes/services.google-ads.tsx",
            lineNumber: 120,
            columnNumber: 13
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 111,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV14(motion9.div, { className: "mt-12 text-center", variants: itemVariants9, children: /* @__PURE__ */ jsxDEV14(Link11, { to: "/contact", className: "btn btn-primary btn-lg", children: "Start Your Google Ads Campaign" }, void 0, !1, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 126,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/services.google-ads.tsx",
          lineNumber: 125,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/services.google-ads.tsx",
      lineNumber: 41,
      columnNumber: 5
    },
    this
  );
}

// app/routes/blog.$postId.tsx
var blog_postId_exports = {};
__export(blog_postId_exports, {
  default: () => BlogPost,
  loader: () => loader,
  meta: () => meta11
});
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var meta11 = ({ data }) => data ? [
  { title: `${data.title} - Peak Growth Digital Blog` },
  { name: "description", content: data.content.substring(0, 160) }
] : [
  { title: "Blog Post Not Found" },
  { name: "description", content: "The requested blog post could not be found." }
], loader = async ({ params }) => {
  let post = {
    1: {
      id: "1",
      title: "5 SEO Strategies to Boost Your Website Ranking",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2023-04-15"
    },
    2: {
      id: "2",
      title: "The Importance of Local SEO for Small Businesses",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2023-04-10"
    },
    3: {
      id: "3",
      title: "Maximizing ROI with Pay-Per-Click Advertising",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      date: "2023-04-05"
    }
  }[params.postId] || null;
  if (!post)
    throw new Response("Not Found", { status: 404 });
  return json(post);
};
function BlogPost() {
  let post = useLoaderData();
  return /* @__PURE__ */ jsxDEV15("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxDEV15("h1", { className: "text-4xl font-bold mb-4", children: post.title }, void 0, !1, {
      fileName: "app/routes/blog.$postId.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("p", { className: "text-sm text-gray-500 mb-4", children: post.date }, void 0, !1, {
      fileName: "app/routes/blog.$postId.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("div", { className: "prose lg:prose-xl", children: post.content }, void 0, !1, {
      fileName: "app/routes/blog.$postId.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.$postId.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

// app/routes/blog._index.tsx
var blog_index_exports = {};
__export(blog_index_exports, {
  default: () => BlogIndex,
  loader: () => loader2,
  meta: () => meta12
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2, useSearchParams, Link as Link12 } from "@remix-run/react";

// app/components/BlogSearch.tsx
import { useState as useState2 } from "react";
import { Form, useSubmit } from "@remix-run/react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function BlogSearch() {
  let [searchTerm, setSearchTerm] = useState2(""), submit = useSubmit();
  return /* @__PURE__ */ jsxDEV16(Form, { method: "get", onSubmit: (event) => {
    event.preventDefault(), submit(event.currentTarget, { replace: !0 });
  }, className: "mb-8", children: /* @__PURE__ */ jsxDEV16("div", { className: "form-control", children: /* @__PURE__ */ jsxDEV16("div", { className: "input-group", children: [
    /* @__PURE__ */ jsxDEV16(
      "input",
      {
        type: "text",
        name: "q",
        placeholder: "Search blog posts...",
        className: "input input-bordered w-full",
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value)
      },
      void 0,
      !1,
      {
        fileName: "app/components/BlogSearch.tsx",
        lineNumber: 17,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ jsxDEV16("button", { type: "submit", className: "btn btn-square", children: /* @__PURE__ */ jsxDEV16("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV16("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }, void 0, !1, {
      fileName: "app/components/BlogSearch.tsx",
      lineNumber: 27,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/BlogSearch.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/BlogSearch.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BlogSearch.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/BlogSearch.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/BlogSearch.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/blog._index.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var meta12 = () => [
  { title: "Peak Growth Digital Blog - Digital Marketing Insights" },
  { name: "description", content: "Stay up-to-date with the latest digital marketing trends, tips, and strategies from Peak Growth Digital." }
], loader2 = async ({ request }) => {
  let searchTerm = new URL(request.url).searchParams.get("q")?.toLowerCase() || "", allPosts = [
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
  ], filteredPosts = searchTerm ? allPosts.filter(
    (post) => post.title.toLowerCase().includes(searchTerm) || post.excerpt.toLowerCase().includes(searchTerm)
  ) : allPosts;
  return json2({ posts: filteredPosts });
};
function BlogIndex() {
  let { posts } = useLoaderData2(), [searchParams] = useSearchParams(), searchTerm = searchParams.get("q") || "";
  return /* @__PURE__ */ jsxDEV17("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxDEV17("h1", { className: "text-4xl font-bold mb-8", children: "Peak Growth Digital Blog" }, void 0, !1, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17(BlogSearch, {}, void 0, !1, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    searchTerm && /* @__PURE__ */ jsxDEV17("p", { className: "mb-4", children: [
      "Showing results for: ",
      /* @__PURE__ */ jsxDEV17("span", { className: "font-bold", children: searchTerm }, void 0, !1, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 68,
        columnNumber: 32
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    posts.length === 0 ? /* @__PURE__ */ jsxDEV17("p", { children: "No posts found. Try a different search term." }, void 0, !1, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV17("div", { className: "grid gap-8", children: posts.map((post) => /* @__PURE__ */ jsxDEV17("div", { className: "card bg-base-100 shadow-xl", children: /* @__PURE__ */ jsxDEV17("div", { className: "card-body", children: [
      /* @__PURE__ */ jsxDEV17("h2", { className: "card-title", children: post.title }, void 0, !1, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV17("p", { className: "text-sm text-gray-500", children: post.date }, void 0, !1, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV17("p", { children: post.excerpt }, void 0, !1, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 80,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV17("div", { className: "card-actions justify-end", children: /* @__PURE__ */ jsxDEV17(Link12, { to: `/blog/${post.id}`, className: "btn btn-primary", children: "Read More" }, void 0, !1, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 82,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 81,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 77,
      columnNumber: 15
    }, this) }, post.id, !1, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog._index.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action,
  default: () => Contact,
  meta: () => meta13
});
import { json as json3 } from "@remix-run/node";
import { Form as Form2, useActionData, useNavigation } from "@remix-run/react";
import { PrismaClient } from "@prisma/client";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var prisma = new PrismaClient(), meta13 = () => [
  { title: "Contact Peak Growth Digital - Get in Touch" },
  { name: "description", content: "Contact Peak Growth Digital for all your digital marketing needs. We're here to help your business grow online." }
];
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
var action = async ({ request }) => {
  let formData = await request.formData(), name = formData.get("name"), email = formData.get("email"), message = formData.get("message"), errors = {};
  if (name || (errors.name = "Name is required"), email ? validateEmail(email) || (errors.email = "Invalid email address") : errors.email = "Email is required", message || (errors.message = "Message is required"), Object.keys(errors).length > 0)
    return json3({ errors }, { status: 400 });
  try {
    return json3({ success: !0 });
  } catch (error) {
    return console.error("Error processing contact form:", error), json3({ success: !1, error: "An error occurred. Please try again." }, { status: 500 });
  }
};
function Contact() {
  let actionData = useActionData(), navigation = useNavigation();
  return /* @__PURE__ */ jsxDEV18("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxDEV18("h1", { className: "text-4xl font-bold mb-6", children: "Contact Us" }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18("p", { className: "mb-8", children: "Have a question or want to learn more about our services? Get in touch with us using the form below." }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    actionData?.success && /* @__PURE__ */ jsxDEV18("div", { className: "alert alert-success mb-4", children: "Thank you for your message. We'll get back to you soon!" }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    actionData?.error && /* @__PURE__ */ jsxDEV18("div", { className: "alert alert-error mb-4", children: actionData.error }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV18(Form2, { method: "post", className: "max-w-md", children: [
      /* @__PURE__ */ jsxDEV18("div", { className: "form-control mb-4", children: [
        /* @__PURE__ */ jsxDEV18("label", { className: "label", htmlFor: "name", children: /* @__PURE__ */ jsxDEV18("span", { className: "label-text", children: "Name" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV18("input", { type: "text", id: "name", name: "name", className: `input input-bordered ${actionData?.errors?.name ? "input-error" : ""}`, required: !0 }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        actionData?.errors?.name && /* @__PURE__ */ jsxDEV18("p", { className: "text-error text-sm mt-1", children: actionData.errors.name }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 76,
          columnNumber: 40
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "form-control mb-4", children: [
        /* @__PURE__ */ jsxDEV18("label", { className: "label", htmlFor: "email", children: /* @__PURE__ */ jsxDEV18("span", { className: "label-text", children: "Email" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV18("input", { type: "email", id: "email", name: "email", className: `input input-bordered ${actionData?.errors?.email ? "input-error" : ""}`, required: !0 }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        actionData?.errors?.email && /* @__PURE__ */ jsxDEV18("p", { className: "text-error text-sm mt-1", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 83,
          columnNumber: 41
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "form-control mb-4", children: [
        /* @__PURE__ */ jsxDEV18("label", { className: "label", htmlFor: "message", children: /* @__PURE__ */ jsxDEV18("span", { className: "label-text", children: "Message" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV18("textarea", { id: "message", name: "message", className: `textarea textarea-bordered h-24 ${actionData?.errors?.message ? "textarea-error" : ""}`, required: !0 }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        actionData?.errors?.message && /* @__PURE__ */ jsxDEV18("p", { className: "text-error text-sm mt-1", children: actionData.errors.message }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 90,
          columnNumber: 43
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18("button", { type: "submit", className: "btn btn-primary", disabled: navigation.state === "submitting", children: navigation.state === "submitting" ? "Sending..." : "Send Message" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action2,
  default: () => Index,
  meta: () => meta14
});
import { json as json4 } from "@remix-run/node";
import { Link as Link13, useActionData as useActionData3 } from "@remix-run/react";
import { motion as motion11, AnimatePresence as AnimatePresence2 } from "framer-motion";

// app/components/JsonLd.tsx
import { useLocation } from "@remix-run/react";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function JsonLd({ data }) {
  let jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `https://peakgrowthdigital.com${useLocation().pathname}`,
    ...data
  };
  return /* @__PURE__ */ jsxDEV19(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
    },
    void 0,
    !1,
    {
      fileName: "app/components/JsonLd.tsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}

// app/components/Testimonials.tsx
import { motion as motion10 } from "framer-motion";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
var testimonials = [
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
], containerVariants10 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}, itemVariants10 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function Testimonials() {
  return /* @__PURE__ */ jsxDEV20(
    motion10.div,
    {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
      variants: containerVariants10,
      initial: "hidden",
      animate: "visible",
      children: testimonials.map((testimonial) => /* @__PURE__ */ jsxDEV20(motion10.div, { className: "card bg-base-100 shadow-xl", variants: itemVariants10, children: /* @__PURE__ */ jsxDEV20("div", { className: "card-body", children: [
        /* @__PURE__ */ jsxDEV20("p", { className: "mb-4", children: [
          '"',
          testimonial.text,
          '"'
        ] }, void 0, !0, {
          fileName: "app/components/Testimonials.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV20("p", { className: "font-bold", children: testimonial.name }, void 0, !1, {
          fileName: "app/components/Testimonials.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV20("p", { className: "text-sm", children: testimonial.company }, void 0, !1, {
          fileName: "app/components/Testimonials.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Testimonials.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this) }, testimonial.id, !1, {
        fileName: "app/components/Testimonials.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this))
    },
    void 0,
    !1,
    {
      fileName: "app/components/Testimonials.tsx",
      lineNumber: 44,
      columnNumber: 5
    },
    this
  );
}

// app/components/PricingCalculator.tsx
import { useState as useState3 } from "react";
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
var services = [
  { name: "Website Ranking", basePrice: 500 },
  { name: "Website Renting", basePrice: 300 },
  { name: "Website Creation", basePrice: 1e3 },
  { name: "GBP Ranking", basePrice: 400 },
  { name: "Digital Marketing", basePrice: 600 }
];
function PricingCalculator() {
  let [selectedServices, setSelectedServices] = useState3([]), [duration, setDuration] = useState3(1), handleServiceToggle = (serviceName) => {
    setSelectedServices(
      (prev) => prev.includes(serviceName) ? prev.filter((s) => s !== serviceName) : [...prev, serviceName]
    );
  }, calculateTotal = () => selectedServices.reduce((total, service) => {
    let servicePrice = services.find((s) => s.name === service)?.basePrice || 0;
    return total + servicePrice * duration;
  }, 0);
  return /* @__PURE__ */ jsxDEV21("div", { className: "card bg-base-100 shadow-xl", children: /* @__PURE__ */ jsxDEV21("div", { className: "card-body", children: [
    /* @__PURE__ */ jsxDEV21("h2", { className: "card-title mb-4", children: "Pricing Calculator" }, void 0, !1, {
      fileName: "app/components/PricingCalculator.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV21("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxDEV21("div", { children: [
        /* @__PURE__ */ jsxDEV21("h3", { className: "font-semibold mb-2", children: "Select Services:" }, void 0, !1, {
          fileName: "app/components/PricingCalculator.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV21("div", { className: "space-y-2", children: services.map((service) => /* @__PURE__ */ jsxDEV21("label", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxDEV21(
            "input",
            {
              type: "checkbox",
              className: "checkbox checkbox-primary",
              checked: selectedServices.includes(service.name),
              onChange: () => handleServiceToggle(service.name)
            },
            void 0,
            !1,
            {
              fileName: "app/components/PricingCalculator.tsx",
              lineNumber: 40,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV21("span", { children: [
            service.name,
            " ($",
            service.basePrice,
            "/month)"
          ] }, void 0, !0, {
            fileName: "app/components/PricingCalculator.tsx",
            lineNumber: 46,
            columnNumber: 19
          }, this)
        ] }, service.name, !0, {
          fileName: "app/components/PricingCalculator.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/components/PricingCalculator.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/PricingCalculator.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21("div", { children: [
        /* @__PURE__ */ jsxDEV21("h3", { className: "font-semibold mb-2", children: "Duration:" }, void 0, !1, {
          fileName: "app/components/PricingCalculator.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV21(
          "input",
          {
            type: "range",
            min: "1",
            max: "12",
            value: duration,
            onChange: (e) => setDuration(parseInt(e.target.value)),
            className: "range range-primary"
          },
          void 0,
          !1,
          {
            fileName: "app/components/PricingCalculator.tsx",
            lineNumber: 53,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV21("div", { className: "text-center mt-2", children: [
          duration,
          " month",
          duration > 1 ? "s" : ""
        ] }, void 0, !0, {
          fileName: "app/components/PricingCalculator.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/PricingCalculator.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/PricingCalculator.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV21("div", { className: "mt-6 text-center", children: [
      /* @__PURE__ */ jsxDEV21("p", { className: "text-2xl font-bold", children: [
        "Estimated Total: $",
        calculateTotal()
      ] }, void 0, !0, {
        fileName: "app/components/PricingCalculator.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21("p", { className: "text-sm text-gray-500 mt-1", children: [
        "For ",
        duration,
        " month",
        duration > 1 ? "s" : ""
      ] }, void 0, !0, {
        fileName: "app/components/PricingCalculator.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/PricingCalculator.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PricingCalculator.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/PricingCalculator.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/components/NewsletterSignup.tsx
import { useState as useState4 } from "react";
import { Form as Form3, useActionData as useActionData2, useNavigation as useNavigation2 } from "@remix-run/react";
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
function NewsletterSignup() {
  let [email, setEmail] = useState4(""), actionData = useActionData2(), navigation = useNavigation2();
  return /* @__PURE__ */ jsxDEV22("div", { className: "card bg-base-100 shadow-xl", children: /* @__PURE__ */ jsxDEV22("div", { className: "card-body", children: [
    /* @__PURE__ */ jsxDEV22("h2", { className: "card-title", children: "Subscribe to Our Newsletter" }, void 0, !1, {
      fileName: "app/components/NewsletterSignup.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV22(Form3, { method: "post", onSubmit: (event) => {
      email || (event.preventDefault(), alert("Please enter your email address"));
    }, children: [
      /* @__PURE__ */ jsxDEV22("div", { className: "form-control", children: [
        /* @__PURE__ */ jsxDEV22("label", { className: "label", htmlFor: "email", children: /* @__PURE__ */ jsxDEV22("span", { className: "label-text", children: "Email" }, void 0, !1, {
          fileName: "app/components/NewsletterSignup.tsx",
          lineNumber: 23,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/NewsletterSignup.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV22(
          "input",
          {
            type: "email",
            id: "email",
            name: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            className: "input input-bordered",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewsletterSignup.tsx",
            lineNumber: 25,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/NewsletterSignup.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      actionData?.error && /* @__PURE__ */ jsxDEV22("p", { className: "text-error mt-2", children: actionData.error }, void 0, !1, {
        fileName: "app/components/NewsletterSignup.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV22(
        "button",
        {
          type: "submit",
          className: "btn btn-primary mt-4",
          disabled: navigation.state === "submitting",
          children: navigation.state === "submitting" ? "Subscribing..." : "Subscribe"
        },
        void 0,
        !1,
        {
          fileName: "app/components/NewsletterSignup.tsx",
          lineNumber: 38,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/NewsletterSignup.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NewsletterSignup.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/NewsletterSignup.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
import { Fragment, jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
var meta14 = () => [
  { title: "Peak Growth Digital - Boost Your Online Presence" },
  { name: "description", content: "Peak Growth Digital offers website ranking, renting, creation, GBP ranking, and general digital services to help your business grow online." }
], action2 = async ({ request }) => {
  let email = (await request.formData()).get("email");
  return console.log(`Subscribing email: ${email}`), json4({ success: !0 });
}, containerVariants11 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}, itemVariants11 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function Index() {
  let actionData = useActionData3(), jsonLdData = {
    "@type": "WebSite",
    name: "Peak Growth Digital",
    description: "We help businesses grow their online presence through innovative digital marketing strategies and services.",
    url: "https://peakgrowthdigital.com"
  }, services2 = [
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
  return /* @__PURE__ */ jsxDEV23(Fragment, { children: [
    /* @__PURE__ */ jsxDEV23(JsonLd, { data: jsonLdData }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV23(AnimatePresence2, { children: /* @__PURE__ */ jsxDEV23(
      motion11.div,
      {
        className: "container mx-auto px-4",
        initial: "hidden",
        animate: "visible",
        variants: containerVariants11,
        children: [
          /* @__PURE__ */ jsxDEV23(motion11.section, { className: "hero min-h-screen bg-base-200", variants: itemVariants11, children: /* @__PURE__ */ jsxDEV23("div", { className: "hero-content text-center", children: /* @__PURE__ */ jsxDEV23("div", { className: "max-w-md", children: [
            /* @__PURE__ */ jsxDEV23(
              motion11.h1,
              {
                className: "text-5xl font-bold",
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2 },
                children: "Welcome to Peak Growth Digital"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 74,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV23(
              motion11.p,
              {
                className: "py-6",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.4 },
                children: "Your partner in navigating the digital landscape. We offer a suite of services designed to enhance your online presence and meet your specific needs."
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 82,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV23(
              motion11.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.6 },
                children: /* @__PURE__ */ jsxDEV23(Link13, { to: "/contact", className: "btn btn-primary", children: "Get Started" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 95,
                  columnNumber: 19
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 90,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 71,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV23(motion11.section, { className: "py-12", variants: itemVariants11, children: [
            /* @__PURE__ */ jsxDEV23("h2", { className: "text-3xl font-bold text-center mb-8", children: "Our Services" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 102,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV23("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: services2.map((service) => /* @__PURE__ */ jsxDEV23(motion11.div, { className: "card bg-base-100 shadow-xl", variants: itemVariants11, children: /* @__PURE__ */ jsxDEV23("div", { className: "card-body", children: [
              /* @__PURE__ */ jsxDEV23("h3", { className: "card-title", children: service.name }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 107,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV23("p", { children: [
                "We offer top-notch ",
                service.name.toLowerCase(),
                " services to boost your online presence and drive growth."
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 108,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV23("div", { className: "card-actions justify-end", children: /* @__PURE__ */ jsxDEV23(Link13, { to: service.path, className: "btn btn-primary btn-sm", children: "Learn More" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 110,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 109,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 106,
              columnNumber: 19
            }, this) }, service.name, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 105,
              columnNumber: 17
            }, this)) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 103,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 101,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV23(motion11.section, { className: "py-12 bg-base-200", variants: itemVariants11, children: [
            /* @__PURE__ */ jsxDEV23("h2", { className: "text-3xl font-bold text-center mb-8", children: "What Our Clients Say" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 119,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV23(Testimonials, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 120,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 118,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV23(motion11.section, { className: "py-12", variants: itemVariants11, children: [
            /* @__PURE__ */ jsxDEV23("h2", { className: "text-3xl font-bold text-center mb-8", children: "Pricing Calculator" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 124,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV23(PricingCalculator, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 125,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 123,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV23(motion11.section, { className: "py-12 bg-base-200", variants: itemVariants11, children: [
            /* @__PURE__ */ jsxDEV23("h2", { className: "text-3xl font-bold text-center mb-8", children: "Stay Updated" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 129,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV23(NewsletterSignup, {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 130,
              columnNumber: 13
            }, this),
            actionData?.success && /* @__PURE__ */ jsxDEV23(
              motion11.p,
              {
                className: "text-success text-center mt-4",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                children: "Thank you for subscribing to our newsletter!"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 132,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 128,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV23(motion11.section, { className: "py-12", variants: itemVariants11, children: [
            /* @__PURE__ */ jsxDEV23("h2", { className: "text-3xl font-bold text-center mb-8", children: "Ready to Grow Your Online Presence?" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 143,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV23("div", { className: "text-center", children: /* @__PURE__ */ jsxDEV23(Link13, { to: "/contact", className: "btn btn-primary btn-lg", children: "Contact Us Today" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 145,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 144,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 142,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 65,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  meta: () => meta15
});
import { motion as motion12 } from "framer-motion";
import { Fragment as Fragment2, jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
var meta15 = () => [
  { title: "About Peak Growth Digital - Your Digital Growth Partner" },
  { name: "description", content: "Learn about Peak Growth Digital, our mission, and how we help businesses grow their online presence through innovative digital marketing strategies." }
], containerVariants12 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}, itemVariants12 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
function About() {
  return /* @__PURE__ */ jsxDEV24(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV24(JsonLd, { data: {
      "@type": "Organization",
      name: "Peak Growth Digital",
      description: "Peak Growth Digital is your partner in achieving online success. We specialize in website ranking, renting, creation, Google Business Profile (GBP) ranking, and a wide range of digital services.",
      url: "https://peakgrowthdigital.com/about"
    } }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV24(
      motion12.div,
      {
        className: "container mx-auto px-4 py-8",
        initial: "hidden",
        animate: "visible",
        variants: containerVariants12,
        children: [
          /* @__PURE__ */ jsxDEV24(motion12.h1, { className: "text-4xl font-bold mb-6", variants: itemVariants12, children: "About Peak Growth Digital" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV24(motion12.p, { className: "mb-4", variants: itemVariants12, children: "Peak Growth Digital is your partner in achieving online success. We specialize in website ranking, renting, creation, Google Business Profile (GBP) ranking, and a wide range of digital services." }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV24(motion12.h2, { className: "text-2xl font-semibold mt-8 mb-4", variants: itemVariants12, children: "Our Mission" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV24(motion12.p, { className: "mb-4", variants: itemVariants12, children: "Our mission is to empower businesses of all sizes to thrive in the digital landscape. We combine cutting-edge technology with proven strategies to deliver measurable results for our clients." }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV24(motion12.h2, { className: "text-2xl font-semibold mt-8 mb-4", variants: itemVariants12, children: "Our Services" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 45,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV24(motion12.ul, { className: "list-disc list-inside mb-4", variants: itemVariants12, children: [
            /* @__PURE__ */ jsxDEV24("li", { children: "Website Ranking: Improve your search engine visibility and drive organic traffic" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV24("li", { children: "Website Renting: Get a high-performing website without the upfront costs" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV24("li", { children: "Website Creation: Custom-designed websites tailored to your business needs" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV24("li", { children: "GBP Ranking: Boost your local presence and attract nearby customers" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 50,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV24("li", { children: "Digital Marketing: Comprehensive strategies to grow your online presence" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 51,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/about.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV24(motion12.h2, { className: "text-2xl font-semibold mt-8 mb-4", variants: itemVariants12, children: "Why Choose Us?" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV24(motion12.ul, { className: "list-disc list-inside mb-4", variants: itemVariants12, children: [
            /* @__PURE__ */ jsxDEV24("li", { children: "Expertise: Our team of digital marketing professionals stays up-to-date with the latest trends and best practices" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV24("li", { children: "Customized Solutions: We tailor our services to meet your unique business goals and challenges" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV24("li", { children: "Transparent Reporting: Regular updates and detailed reports keep you informed about your campaign's progress" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV24("li", { children: "Proven Results: Our track record of success speaks for itself, with numerous satisfied clients across various industries" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 59,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV24("li", { children: "Ongoing Support: We're committed to your long-term success and provide continuous support and optimization" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/about.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV24(motion12.p, { className: "mt-8", variants: itemVariants12, children: [
            "Ready to take your online presence to the next level? ",
            /* @__PURE__ */ jsxDEV24("a", { href: "/contact", className: "text-primary hover:underline", children: "Contact us" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 63,
              columnNumber: 114
            }, this),
            " today to learn how we can help your business grow."
          ] }, void 0, !0, {
            fileName: "app/routes/about.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/about.tsx",
        lineNumber: 33,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-X2F3DRW2.js", imports: ["/build/_shared/chunk-X3PXDGUE.js", "/build/_shared/chunk-JCUNOMR6.js", "/build/_shared/chunk-ZKJJQ7LG.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-PLT55Z5M.js", "/build/_shared/chunk-F4KNNEUR.js", "/build/_shared/chunk-2Z2JGDFU.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GSQLNDOF.js", imports: ["/build/_shared/chunk-EWCLIFBJ.js", "/build/_shared/chunk-Y6RJRNBS.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-2O2DUR43.js", imports: ["/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-KDIIO3IC.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-5Q3BP3L3.js", imports: ["/build/_shared/chunk-KDIIO3IC.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blog.$postId": { id: "routes/blog.$postId", parentId: "root", path: "blog/:postId", index: void 0, caseSensitive: void 0, module: "/build/routes/blog.$postId-5VSJPIJI.js", imports: ["/build/_shared/chunk-NBEH4DGX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blog._index": { id: "routes/blog._index", parentId: "root", path: "blog", index: !0, caseSensitive: void 0, module: "/build/routes/blog._index-6X4MVNGH.js", imports: ["/build/_shared/chunk-NBEH4DGX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-LORVVLXX.js", imports: ["/build/_shared/chunk-NBEH4DGX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/services.business-citations": { id: "routes/services.business-citations", parentId: "root", path: "services/business-citations", index: void 0, caseSensitive: void 0, module: "/build/routes/services.business-citations-EVBO4ND6.js", imports: ["/build/_shared/chunk-NEM4EUUY.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/services.digital-services": { id: "routes/services.digital-services", parentId: "root", path: "services/digital-services", index: void 0, caseSensitive: void 0, module: "/build/routes/services.digital-services-6OMUWLUB.js", imports: ["/build/_shared/chunk-NEM4EUUY.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/services.facebook-ads": { id: "routes/services.facebook-ads", parentId: "root", path: "services/facebook-ads", index: void 0, caseSensitive: void 0, module: "/build/routes/services.facebook-ads-AITLPIY2.js", imports: ["/build/_shared/chunk-NEM4EUUY.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/services.gbp-ranking": { id: "routes/services.gbp-ranking", parentId: "root", path: "services/gbp-ranking", index: void 0, caseSensitive: void 0, module: "/build/routes/services.gbp-ranking-R2JVTTBL.js", imports: ["/build/_shared/chunk-NEM4EUUY.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/services.google-ads": { id: "routes/services.google-ads", parentId: "root", path: "services/google-ads", index: void 0, caseSensitive: void 0, module: "/build/routes/services.google-ads-JWEGE6FJ.js", imports: ["/build/_shared/chunk-NEM4EUUY.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/services.social-media-management": { id: "routes/services.social-media-management", parentId: "root", path: "services/social-media-management", index: void 0, caseSensitive: void 0, module: "/build/routes/services.social-media-management-6Z4BE5Y5.js", imports: ["/build/_shared/chunk-NEM4EUUY.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/services.website-creation": { id: "routes/services.website-creation", parentId: "root", path: "services/website-creation", index: void 0, caseSensitive: void 0, module: "/build/routes/services.website-creation-TODKICBC.js", imports: ["/build/_shared/chunk-NEM4EUUY.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/services.website-ranking": { id: "routes/services.website-ranking", parentId: "root", path: "services/website-ranking", index: void 0, caseSensitive: void 0, module: "/build/routes/services.website-ranking-OCIR6ACM.js", imports: ["/build/_shared/chunk-NEM4EUUY.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/services.website-renting": { id: "routes/services.website-renting", parentId: "root", path: "services/website-renting", index: void 0, caseSensitive: void 0, module: "/build/routes/services.website-renting-JGWSE3H5.js", imports: ["/build/_shared/chunk-NEM4EUUY.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "d4d41ca0", hmr: { runtime: "/build/_shared/chunk-ZKJJQ7LG.js", timestamp: 1726849072517 }, url: "/build/manifest-D4D41CA0.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, unstable_singleFetch: !1, unstable_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/services.social-media-management": {
    id: "routes/services.social-media-management",
    parentId: "root",
    path: "services/social-media-management",
    index: void 0,
    caseSensitive: void 0,
    module: services_social_media_management_exports
  },
  "routes/services.business-citations": {
    id: "routes/services.business-citations",
    parentId: "root",
    path: "services/business-citations",
    index: void 0,
    caseSensitive: void 0,
    module: services_business_citations_exports
  },
  "routes/services.digital-services": {
    id: "routes/services.digital-services",
    parentId: "root",
    path: "services/digital-services",
    index: void 0,
    caseSensitive: void 0,
    module: services_digital_services_exports
  },
  "routes/services.website-creation": {
    id: "routes/services.website-creation",
    parentId: "root",
    path: "services/website-creation",
    index: void 0,
    caseSensitive: void 0,
    module: services_website_creation_exports
  },
  "routes/services.website-ranking": {
    id: "routes/services.website-ranking",
    parentId: "root",
    path: "services/website-ranking",
    index: void 0,
    caseSensitive: void 0,
    module: services_website_ranking_exports
  },
  "routes/services.website-renting": {
    id: "routes/services.website-renting",
    parentId: "root",
    path: "services/website-renting",
    index: void 0,
    caseSensitive: void 0,
    module: services_website_renting_exports
  },
  "routes/services.facebook-ads": {
    id: "routes/services.facebook-ads",
    parentId: "root",
    path: "services/facebook-ads",
    index: void 0,
    caseSensitive: void 0,
    module: services_facebook_ads_exports
  },
  "routes/services.gbp-ranking": {
    id: "routes/services.gbp-ranking",
    parentId: "root",
    path: "services/gbp-ranking",
    index: void 0,
    caseSensitive: void 0,
    module: services_gbp_ranking_exports
  },
  "routes/services.google-ads": {
    id: "routes/services.google-ads",
    parentId: "root",
    path: "services/google-ads",
    index: void 0,
    caseSensitive: void 0,
    module: services_google_ads_exports
  },
  "routes/blog.$postId": {
    id: "routes/blog.$postId",
    parentId: "root",
    path: "blog/:postId",
    index: void 0,
    caseSensitive: void 0,
    module: blog_postId_exports
  },
  "routes/blog._index": {
    id: "routes/blog._index",
    parentId: "root",
    path: "blog",
    index: !0,
    caseSensitive: void 0,
    module: blog_index_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
