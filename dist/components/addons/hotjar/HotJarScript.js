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
var HotJarScript = function (props) {
  var id = (props || {}).id;
  if (!id) return null;
  return react_1.default.createElement(
    head_1.default,
    null,
    react_1.default.createElement(
      script_1.default,
      { id: "hotjar", strategy: "lazyOnload" },
      "(function(h,o,t,j,a,r){\n            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n            h._hjSettings={hjid:".concat(
        id,
        ",hjsv:6};\n            a=o.getElementsByTagName('head')[0];\n            r=o.createElement('script');r.async=1;\n            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n            a.appendChild(r);\n          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');"
      )
    )
  );
};
exports.default = HotJarScript;
