import {
  JsonLd
} from "/build/_shared/chunk-KDIIO3IC.js";
import {
  motion
} from "/build/_shared/chunk-WDOEMJP7.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-JCUNOMR6.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZKJJQ7LG.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/about.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/about.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/about.tsx"
  );
  import.meta.hot.lastModified = "1726811868208.144";
}
var meta = () => {
  return [{
    title: "About Peak Growth Digital - Your Digital Growth Partner"
  }, {
    name: "description",
    content: "Learn about Peak Growth Digital, our mission, and how we help businesses grow their online presence through innovative digital marketing strategies."
  }];
};
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
function About() {
  const jsonLdData = {
    "@type": "Organization",
    name: "Peak Growth Digital",
    description: "Peak Growth Digital is your partner in achieving online success. We specialize in website ranking, renting, creation, Google Business Profile (GBP) ranking, and a wide range of digital services.",
    url: "https://peakgrowthdigital.com/about"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(JsonLd, { data: jsonLdData }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "container mx-auto px-4 py-8", initial: "hidden", animate: "visible", variants: containerVariants, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.h1, { className: "text-4xl font-bold mb-6", variants: itemVariants, children: "About Peak Growth Digital" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.p, { className: "mb-4", variants: itemVariants, children: "Peak Growth Digital is your partner in achieving online success. We specialize in website ranking, renting, creation, Google Business Profile (GBP) ranking, and a wide range of digital services." }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.h2, { className: "text-2xl font-semibold mt-8 mb-4", variants: itemVariants, children: "Our Mission" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.p, { className: "mb-4", variants: itemVariants, children: "Our mission is to empower businesses of all sizes to thrive in the digital landscape. We combine cutting-edge technology with proven strategies to deliver measurable results for our clients." }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.h2, { className: "text-2xl font-semibold mt-8 mb-4", variants: itemVariants, children: "Our Services" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.ul, { className: "list-disc list-inside mb-4", variants: itemVariants, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Website Ranking: Improve your search engine visibility and drive organic traffic" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Website Renting: Get a high-performing website without the upfront costs" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Website Creation: Custom-designed websites tailored to your business needs" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "GBP Ranking: Boost your local presence and attract nearby customers" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Digital Marketing: Comprehensive strategies to grow your online presence" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.h2, { className: "text-2xl font-semibold mt-8 mb-4", variants: itemVariants, children: "Why Choose Us?" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.ul, { className: "list-disc list-inside mb-4", variants: itemVariants, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Expertise: Our team of digital marketing professionals stays up-to-date with the latest trends and best practices" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Customized Solutions: We tailor our services to meet your unique business goals and challenges" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Transparent Reporting: Regular updates and detailed reports keep you informed about your campaign's progress" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Proven Results: Our track record of success speaks for itself, with numerous satisfied clients across various industries" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Ongoing Support: We're committed to your long-term success and provide continuous support and optimization" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.p, { className: "mt-8", variants: itemVariants, children: [
        "Ready to take your online presence to the next level? ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/contact", className: "text-primary hover:underline", children: "Contact us" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 86,
          columnNumber: 114
        }, this),
        " today to learn how we can help your business grow."
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_c = About;
var _c;
$RefreshReg$(_c, "About");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  About as default,
  meta
};
//# sourceMappingURL=/build/routes/about-3MAUJX3B.js.map
