import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  Form,
  Link,
  useLoaderData,
  useSearchParams,
  useSubmit
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

// app/routes/blog._index.tsx
var import_node = __toESM(require_node(), 1);

// app/components/BlogSearch.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/BlogSearch.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/BlogSearch.tsx"
  );
  import.meta.hot.lastModified = "1726812167875.75";
}
function BlogSearch() {
  _s();
  const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
  const submit = useSubmit();
  const handleSearch = (event) => {
    event.preventDefault();
    submit(event.currentTarget, {
      replace: true
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", onSubmit: handleSearch, className: "mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-control", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-group", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "q", placeholder: "Search blog posts...", className: "input input-bordered w-full", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }, void 0, false, {
      fileName: "app/components/BlogSearch.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "btn btn-square", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }, void 0, false, {
      fileName: "app/components/BlogSearch.tsx",
      lineNumber: 40,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/BlogSearch.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/BlogSearch.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BlogSearch.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/BlogSearch.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/BlogSearch.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s(BlogSearch, "tFkVF6p0HDAIYRddCMlZ5jPTaqo=", false, function() {
  return [useSubmit];
});
_c = BlogSearch;
var _c;
$RefreshReg$(_c, "BlogSearch");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/blog._index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/blog._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/blog._index.tsx"
  );
  import.meta.hot.lastModified = "1726812167882.7903";
}
var meta = () => {
  return [{
    title: "Peak Growth Digital Blog - Digital Marketing Insights"
  }, {
    name: "description",
    content: "Stay up-to-date with the latest digital marketing trends, tips, and strategies from Peak Growth Digital."
  }];
};
function BlogIndex() {
  _s2();
  const {
    posts
  } = useLoaderData();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-4xl font-bold mb-8", children: "Peak Growth Digital Blog" }, void 0, false, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BlogSearch, {}, void 0, false, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    searchTerm && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mb-4", children: [
      "Showing results for: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-bold", children: searchTerm }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 73,
        columnNumber: 32
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 72,
      columnNumber: 22
    }, this),
    posts.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "No posts found. Try a different search term." }, void 0, false, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 75,
      columnNumber: 29
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid gap-8", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card bg-base-100 shadow-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-body", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "card-title", children: post.title }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm text-gray-500", children: post.date }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: post.excerpt }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 80,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-actions justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/blog/${post.id}`, className: "btn btn-primary", children: "Read More" }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 82,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 81,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 77,
      columnNumber: 15
    }, this) }, post.id, false, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 76,
      columnNumber: 30
    }, this)) }, void 0, false, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 75,
      columnNumber: 83
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog._index.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}
_s2(BlogIndex, "ReoAURHEB1hHqYuc9Sy2VkMbxB8=", false, function() {
  return [useLoaderData, useSearchParams];
});
_c2 = BlogIndex;
var _c2;
$RefreshReg$(_c2, "BlogIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  BlogIndex as default,
  meta
};
//# sourceMappingURL=/build/routes/blog._index-6X4MVNGH.js.map
