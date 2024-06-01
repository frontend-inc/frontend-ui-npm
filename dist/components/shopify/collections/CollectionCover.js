"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var CollectionCover = function (props) {
    var _a;
    var shopifyCollection = props.shopifyCollection, handleClick = props.handleClick, _b = props.height, height = _b === void 0 ? 400 : _b, _c = props.alt, alt = _c === void 0 ? 'image' : _c, _d = props.enableGradient, enableGradient = _d === void 0 ? false : _d, _e = props.enableOverlay, enableOverlay = _e === void 0 ? false : _e, _f = props.opacity, opacity = _f === void 0 ? 0.5 : _f, _g = props.alignItems, alignItems = _g === void 0 ? 'center' : _g, _h = props.overlayColor, overlayColor = _h === void 0 ? '#000000' : _h, href = props.href;
    if (!shopifyCollection)
        return null;
    return (react_1.default.createElement(__1.Cover, { enableOverlay: enableOverlay, enableGradient: enableGradient, opacity: opacity, overlayColor: overlayColor, height: height, title: shopifyCollection === null || shopifyCollection === void 0 ? void 0 : shopifyCollection.title, description: shopifyCollection === null || shopifyCollection === void 0 ? void 0 : shopifyCollection.description, image: (_a = shopifyCollection === null || shopifyCollection === void 0 ? void 0 : shopifyCollection.image) === null || _a === void 0 ? void 0 : _a.url, alt: alt, alignItems: alignItems, href: href, handleClick: handleClick }));
};
exports.default = CollectionCover;
