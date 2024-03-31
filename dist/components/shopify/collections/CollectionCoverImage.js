"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var CollectionCoverImage = function (props) {
    var _a;
    var shopifyCollection = props.shopifyCollection, _b = props.editing, editing = _b === void 0 ? false : _b, handleClick = props.handleClick, _c = props.height, height = _c === void 0 ? 400 : _c, _d = props.alt, alt = _d === void 0 ? 'image' : _d, _e = props.enableGradient, enableGradient = _e === void 0 ? false : _e, _f = props.enableOverlay, enableOverlay = _f === void 0 ? false : _f, _g = props.opacity, opacity = _g === void 0 ? 0.5 : _g, _h = props.alignItems, alignItems = _h === void 0 ? 'center' : _h, _j = props.overlayColor, overlayColor = _j === void 0 ? '#000000' : _j, href = props.href;
    if (!shopifyCollection)
        return null;
    return (react_1.default.createElement(__1.CoverImage, { editing: editing, enableOverlay: enableOverlay, enableGradient: enableGradient, opacity: opacity, overlayColor: overlayColor, height: height, title: shopifyCollection === null || shopifyCollection === void 0 ? void 0 : shopifyCollection.title, description: shopifyCollection === null || shopifyCollection === void 0 ? void 0 : shopifyCollection.description, image: (_a = shopifyCollection === null || shopifyCollection === void 0 ? void 0 : shopifyCollection.image) === null || _a === void 0 ? void 0 : _a.url, alt: alt, alignItems: alignItems, href: href, handleClick: handleClick }));
};
exports.default = CollectionCoverImage;
