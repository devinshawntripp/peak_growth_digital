import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  JsonLd
} from "/build/_shared/chunk-KDIIO3IC.js";
import {
  AnimatePresence,
  motion
} from "/build/_shared/chunk-EWCLIFBJ.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  Form,
  Link,
  useActionData,
  useNavigation
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

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);

// app/components/Testimonials.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Testimonials.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Testimonials.tsx"
  );
  import.meta.hot.lastModified = "1726811923927.838";
}
var testimonials = [{
  id: 1,
  name: "John Doe",
  company: "Tech Innovators Inc.",
  text: "Peak Growth Digital transformed our online presence. Our website traffic has increased by 200% since working with them!"
}, {
  id: 2,
  name: "Jane Smith",
  company: "Local Business Solutions",
  text: "The team at Peak Growth Digital is incredibly knowledgeable and responsive. They've helped us dominate local search results."
}, {
  id: 3,
  name: "Mike Johnson",
  company: "E-commerce Experts",
  text: "Our e-commerce sales have skyrocketed thanks to Peak Growth Digital's SEO and digital marketing strategies."
}];
var containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
var itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
function Testimonials() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", variants: containerVariants, initial: "hidden", animate: "visible", children: testimonials.map((testimonial) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "card bg-base-100 shadow-xl", variants: itemVariants, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-body", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4", children: [
      '"',
      testimonial.text,
      '"'
    ] }, void 0, true, {
      fileName: "app/components/Testimonials.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold", children: testimonial.name }, void 0, false, {
      fileName: "app/components/Testimonials.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: testimonial.company }, void 0, false, {
      fileName: "app/components/Testimonials.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Testimonials.tsx",
    lineNumber: 63,
    columnNumber: 11
  }, this) }, testimonial.id, false, {
    fileName: "app/components/Testimonials.tsx",
    lineNumber: 62,
    columnNumber: 40
  }, this)) }, void 0, false, {
    fileName: "app/components/Testimonials.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_c = Testimonials;
var _c;
$RefreshReg$(_c, "Testimonials");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/PricingCalculator.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PricingCalculator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PricingCalculator.tsx"
  );
  import.meta.hot.lastModified = "1726812528094.4673";
}
var services = [{
  name: "Website Ranking",
  basePrice: 500
}, {
  name: "Website Renting",
  basePrice: 300
}, {
  name: "Website Creation",
  basePrice: 1e3
}, {
  name: "GBP Ranking",
  basePrice: 400
}, {
  name: "Digital Marketing",
  basePrice: 600
}];
function PricingCalculator() {
  _s();
  const [selectedServices, setSelectedServices] = (0, import_react.useState)([]);
  const [duration, setDuration] = (0, import_react.useState)(1);
  const handleServiceToggle = (serviceName) => {
    setSelectedServices((prev) => prev.includes(serviceName) ? prev.filter((s) => s !== serviceName) : [...prev, serviceName]);
  };
  const calculateTotal = () => {
    return selectedServices.reduce((total, service) => {
      var _a;
      const servicePrice = ((_a = services.find((s) => s.name === service)) == null ? void 0 : _a.basePrice) || 0;
      return total + servicePrice * duration;
    }, 0);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card bg-base-100 shadow-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-body", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "card-title mb-4", children: "Pricing Calculator" }, void 0, false, {
      fileName: "app/components/PricingCalculator.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "font-semibold mb-2", children: "Select Services:" }, void 0, false, {
          fileName: "app/components/PricingCalculator.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-2", children: services.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "checkbox", className: "checkbox checkbox-primary", checked: selectedServices.includes(service.name), onChange: () => handleServiceToggle(service.name) }, void 0, false, {
            fileName: "app/components/PricingCalculator.tsx",
            lineNumber: 60,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
            service.name,
            " ($",
            service.basePrice,
            "/month)"
          ] }, void 0, true, {
            fileName: "app/components/PricingCalculator.tsx",
            lineNumber: 61,
            columnNumber: 19
          }, this)
        ] }, service.name, true, {
          fileName: "app/components/PricingCalculator.tsx",
          lineNumber: 59,
          columnNumber: 40
        }, this)) }, void 0, false, {
          fileName: "app/components/PricingCalculator.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PricingCalculator.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "font-semibold mb-2", children: "Duration:" }, void 0, false, {
          fileName: "app/components/PricingCalculator.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "range", min: "1", max: "12", value: duration, onChange: (e) => setDuration(parseInt(e.target.value)), className: "range range-primary" }, void 0, false, {
          fileName: "app/components/PricingCalculator.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center mt-2", children: [
          duration,
          " month",
          duration > 1 ? "s" : ""
        ] }, void 0, true, {
          fileName: "app/components/PricingCalculator.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PricingCalculator.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PricingCalculator.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-6 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-2xl font-bold", children: [
        "Estimated Total: $",
        calculateTotal()
      ] }, void 0, true, {
        fileName: "app/components/PricingCalculator.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm text-gray-500 mt-1", children: [
        "For ",
        duration,
        " month",
        duration > 1 ? "s" : ""
      ] }, void 0, true, {
        fileName: "app/components/PricingCalculator.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PricingCalculator.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PricingCalculator.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/PricingCalculator.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(PricingCalculator, "vPFAbCQ4aYwdEB4QgeLXM2l6qos=");
_c2 = PricingCalculator;
var _c2;
$RefreshReg$(_c2, "PricingCalculator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NewsletterSignup.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/NewsletterSignup.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewsletterSignup.tsx"
  );
  import.meta.hot.lastModified = "1726812528094.7173";
}
function NewsletterSignup() {
  _s2();
  const [email, setEmail] = (0, import_react2.useState)("");
  const actionData = useActionData();
  const navigation = useNavigation();
  const handleSubmit = (event) => {
    if (!email) {
      event.preventDefault();
      alert("Please enter your email address");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card bg-base-100 shadow-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card-body", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "card-title", children: "Subscribe to Our Newsletter" }, void 0, false, {
      fileName: "app/components/NewsletterSignup.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "post", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "form-control", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { className: "label", htmlFor: "email", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "label-text", children: "Email" }, void 0, false, {
          fileName: "app/components/NewsletterSignup.tsx",
          lineNumber: 41,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/NewsletterSignup.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "email", id: "email", name: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "input input-bordered", required: true }, void 0, false, {
          fileName: "app/components/NewsletterSignup.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/NewsletterSignup.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-error mt-2", children: actionData.error }, void 0, false, {
        fileName: "app/components/NewsletterSignup.tsx",
        lineNumber: 45,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "submit", className: "btn btn-primary mt-4", disabled: navigation.state === "submitting", children: navigation.state === "submitting" ? "Subscribing..." : "Subscribe" }, void 0, false, {
        fileName: "app/components/NewsletterSignup.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NewsletterSignup.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NewsletterSignup.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/NewsletterSignup.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s2(NewsletterSignup, "+5wGVxmTJ5iKwid0knVZ3IQJQtI=", false, function() {
  return [useActionData, useNavigation];
});
_c3 = NewsletterSignup;
var _c3;
$RefreshReg$(_c3, "NewsletterSignup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1726816921758.7227";
}
var meta = () => {
  return [{
    title: "Peak Growth Digital - Boost Your Online Presence"
  }, {
    name: "description",
    content: "Peak Growth Digital offers website ranking, renting, creation, GBP ranking, and general digital services to help your business grow online."
  }];
};
var containerVariants2 = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
var itemVariants2 = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
function Index() {
  _s3();
  const actionData = useActionData();
  const jsonLdData = {
    "@type": "WebSite",
    name: "Peak Growth Digital",
    description: "We help businesses grow their online presence through innovative digital marketing strategies and services.",
    url: "https://peakgrowthdigital.com"
  };
  const services2 = [{
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(JsonLd, { data: jsonLdData }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(motion.div, { className: "container mx-auto px-4", initial: "hidden", animate: "visible", variants: containerVariants2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(motion.section, { className: "hero min-h-screen bg-base-200", variants: itemVariants2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hero-content text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(motion.h1, { className: "text-5xl font-bold", initial: {
          opacity: 0,
          y: -20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.2
        }, children: "Welcome to Peak Growth Digital" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 116,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(motion.p, { className: "py-6", initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.4
        }, children: "Your partner in navigating the digital landscape. We offer a suite of services designed to enhance your online presence and meet your specific needs." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 127,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.6
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/contact", className: "btn btn-primary", children: "Get Started" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 145,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 136,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 115,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 114,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(motion.section, { className: "py-12", variants: itemVariants2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-3xl font-bold text-center mb-8", children: "Our Services" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 152,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: services2.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(motion.div, { className: "card bg-base-100 shadow-xl", variants: itemVariants2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "card-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "card-title", children: service.name }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 156,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
            "We offer top-notch ",
            service.name.toLowerCase(),
            " services to boost your online presence and drive growth."
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 157,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "card-actions justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: service.path, className: "btn btn-primary btn-sm", children: "Learn More" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 159,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 158,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 155,
          columnNumber: 19
        }, this) }, service.name, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 154,
          columnNumber: 40
        }, this)) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 153,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 151,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(motion.section, { className: "py-12 bg-base-200", variants: itemVariants2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-3xl font-bold text-center mb-8", children: "What Our Clients Say" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 167,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Testimonials, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(motion.section, { className: "py-12", variants: itemVariants2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-3xl font-bold text-center mb-8", children: "Pricing Calculator" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 172,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PricingCalculator, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 171,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(motion.section, { className: "py-12 bg-base-200", variants: itemVariants2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-3xl font-bold text-center mb-8", children: "Stay Updated" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 177,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NewsletterSignup, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 178,
          columnNumber: 13
        }, this),
        (actionData == null ? void 0 : actionData.success) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(motion.p, { className: "text-success text-center mt-4", initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, children: "Thank you for subscribing to our newsletter!" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 179,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 176,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(motion.section, { className: "py-12", variants: itemVariants2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-3xl font-bold text-center mb-8", children: "Ready to Grow Your Online Presence?" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 191,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/contact", className: "btn btn-primary btn-lg", children: "Contact Us Today" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 193,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 192,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 190,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 109,
    columnNumber: 10
  }, this);
}
_s3(Index, "fHVw5pq0Zwd2gXh2gyrnVdHnLCc=", false, function() {
  return [useActionData];
});
_c4 = Index;
var _c4;
$RefreshReg$(_c4, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-2O2DUR43.js.map
