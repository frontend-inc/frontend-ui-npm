"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var tiktok_pixel_1 = __importDefault(require("tiktok-pixel"));
// Implementation of the Tiktok Pixel
// https://www.npmjs.com/package/tiktok-pixel
var useTiktok = function (props) {
  var pathname = (0, navigation_1.usePathname)();
  var tikTokPixelId = (props || {}).tikTokPixelId;
  (0, react_1.useEffect)(
    function () {
      if (tikTokPixelId) {
        tiktok_pixel_1.default.init(tikTokPixelId, {}, { debug: false });
      }
    },
    [tikTokPixelId]
  );
  (0, react_1.useEffect)(
    function () {
      if (tikTokPixelId) {
        tiktok_pixel_1.default.pageView();
      }
    },
    [tikTokPixelId, pathname]
  );
  var trackAddToCart = function (data) {
    tiktok_pixel_1.default.track("AddToCart", data);
  };
  var trackCustomEvent = function (custom) {
    //@ts-ignore
    tiktok_pixel_1.default.track(custom);
  };
  return {
    trackAddToCart: trackAddToCart,
    trackCustomEvent: trackCustomEvent,
  };
};
exports.default = useTiktok;
