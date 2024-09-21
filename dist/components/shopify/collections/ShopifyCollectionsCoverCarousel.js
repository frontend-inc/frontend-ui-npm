"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_shopify_1 = require("frontend-shopify");
var router_1 = require("next/router");
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var ShopifyCollections = function (props) {
    var href = props.href, _a = props.enableGradient, enableGradient = _a === void 0 ? false : _a, _b = props.enableOverlay, enableOverlay = _b === void 0 ? false : _b, _c = props.enableArrows, enableArrows = _c === void 0 ? false : _c, _d = props.enableAutoPlay, enableAutoPlay = _d === void 0 ? false : _d, buttonText = props.buttonText;
    var router = (0, router_1.useRouter)();
    var _e = (0, frontend_shopify_1.useCollections)(), loading = _e.loading, collections = _e.collections, findCollections = _e.findCollections;
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var handleClick = function (collection) {
        if (href) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            router.push("".concat(clientUrl).concat(href, "/").concat(collection === null || collection === void 0 ? void 0 : collection.handle));
        }
    };
    (0, react_1.useEffect)(function () {
        findCollections();
    }, []);
    return (react_1.default.createElement(__1.Swipeable, { enableAutoPlay: enableAutoPlay, enableArrows: enableArrows }, collections === null || collections === void 0 ? void 0 : collections.map(function (collection, index) { return (react_1.default.createElement(__1.ShopifyCollectionCover, { key: index, shopifyCollection: collection, handleClick: function () { return handleClick(collection); }, enableGradient: enableGradient, enableOverlay: enableOverlay, buttonText: buttonText })); })));
};
exports.default = ShopifyCollections;
