import {
  useLocation
} from "/build/_shared/chunk-JCUNOMR6.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZKJJQ7LG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/JsonLd.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/JsonLd.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/JsonLd.tsx"
  );
  import.meta.hot.lastModified = "1726811716693.3674";
}
function JsonLd({
  data
}) {
  _s();
  const location = useLocation();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `https://peakgrowthdigital.com${location.pathname}`,
    ...data
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
    __html: JSON.stringify(jsonLd)
  } }, void 0, false, {
    fileName: "app/components/JsonLd.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s(JsonLd, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c = JsonLd;
var _c;
$RefreshReg$(_c, "JsonLd");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  JsonLd
};
//# sourceMappingURL=/build/_shared/chunk-KDIIO3IC.js.map
