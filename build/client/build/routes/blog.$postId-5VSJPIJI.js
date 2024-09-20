import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  useLoaderData
} from "/build/_shared/chunk-JCUNOMR6.js";
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

// app/routes/blog.$postId.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/blog.$postId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/blog.$postId.tsx"
  );
  import.meta.hot.lastModified = "1726812167875.7754";
}
var meta = ({
  data
}) => {
  if (!data) {
    return [{
      title: "Blog Post Not Found"
    }, {
      name: "description",
      content: "The requested blog post could not be found."
    }];
  }
  return [{
    title: `${data.title} - Peak Growth Digital Blog`
  }, {
    name: "description",
    content: data.content.substring(0, 160)
  }];
};
function BlogPost() {
  _s();
  const post = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold mb-4", children: post.title }, void 0, false, {
      fileName: "app/routes/blog.$postId.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500 mb-4", children: post.date }, void 0, false, {
      fileName: "app/routes/blog.$postId.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "prose lg:prose-xl", children: post.content }, void 0, false, {
      fileName: "app/routes/blog.$postId.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog.$postId.tsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
}
_s(BlogPost, "fZHiJAe/O1AbG9n0uZeka359gO0=", false, function() {
  return [useLoaderData];
});
_c = BlogPost;
var _c;
$RefreshReg$(_c, "BlogPost");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  BlogPost as default,
  meta
};
//# sourceMappingURL=/build/routes/blog.$postId-5VSJPIJI.js.map
