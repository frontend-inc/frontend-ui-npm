"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var head_1 = __importDefault(require("next/head"));
var script_1 = __importDefault(require("next/script"));
var RedditScript = function (props) {
  var id = (props || {}).id;
  if (!id) return null;
  return react_1.default.createElement(
    head_1.default,
    null,
    react_1.default.createElement(
      script_1.default,
      { id: "google-analytics", strategy: "lazyOnload" },
      "!(function (w, d) {\n            if (!w.rdt) {\n              var p = (w.rdt = function () {\n                p.sendEvent\n                  ? p.sendEvent.apply(p, arguments)\n                  : p.callQueue.push(arguments)\n              })\n              p.callQueue = []\n              var t = d.createElement('script')\n              ;(t.src = 'https://www.redditstatic.com/ads/pixel.js'), (t.async = !0)\n              var s = d.getElementsByTagName('script')[0]\n              s.parentNode.insertBefore(t, s)\n            }\n          })(window, document)\n          rdt('init', '".concat(
        id,
        "', {\n            optOut: false,\n            useDecimalCurrencyValues: true,\n          })\n          rdt('track', 'PageVisit')        \n        "
      )
    )
  );
};
exports.default = RedditScript;
