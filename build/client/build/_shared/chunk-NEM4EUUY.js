import {
  createHotContext
} from "/build/_shared/chunk-ZKJJQ7LG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/FAQSection.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/FAQSection.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/FAQSection.tsx"
  );
  import.meta.hot.lastModified = "1726812275805.6052";
}
function FAQSection({
  faqs
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-semibold mb-4", children: "Frequently Asked Questions" }, void 0, false, {
      fileName: "app/components/FAQSection.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    faqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collapse collapse-plus bg-base-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: `faq-accordion-${index}` }, void 0, false, {
        fileName: "app/components/FAQSection.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collapse-title text-xl font-medium", children: faq.question }, void 0, false, {
        fileName: "app/components/FAQSection.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collapse-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: faq.answer }, void 0, false, {
        fileName: "app/components/FAQSection.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/FAQSection.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, index, true, {
      fileName: "app/components/FAQSection.tsx",
      lineNumber: 27,
      columnNumber: 33
    }, this))
  ] }, void 0, true, {
    fileName: "app/components/FAQSection.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = FAQSection;
var _c;
$RefreshReg$(_c, "FAQSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  FAQSection
};
//# sourceMappingURL=/build/_shared/chunk-NEM4EUUY.js.map
