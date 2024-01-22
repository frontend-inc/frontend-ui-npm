"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var script_1 = __importDefault(require("next/script"));
var KlaviyoScript = function (props) {
  var id = (props || {}).id;
  if (!id) return null;
  return react_1.default.createElement(script_1.default, {
    src: "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=".concat(
      id
    ),
  });
};
exports.default = KlaviyoScript;
