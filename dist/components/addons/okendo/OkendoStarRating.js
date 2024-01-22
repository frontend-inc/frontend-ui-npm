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
var webstudio_shopify_1 = require("webstudio-shopify");
var material_1 = require("@mui/material");
var OkendoStarRating = function (props) {
    var _a;
    var product = props.product;
    var theme = (0, material_1.useTheme)();
    var widgetContainer = (0, react_1.useRef)(null);
    var initialiseWidget = function () {
        // @ts-ignore
        return window.okeWidgetApi.initWidget(widgetContainer.current);
    };
    (0, react_1.useEffect)(function () {
        var _a;
        // @ts-ignore
        if ((_a = window.okeWidgetApi) === null || _a === void 0 ? void 0 : _a.initWidget) {
            initialiseWidget();
        }
        else {
            document.addEventListener("oke-script-loaded", initialiseWidget);
        }
        return function () {
            document.removeEventListener("oke-script-loaded", initialiseWidget);
        };
    }, [product === null || product === void 0 ? void 0 : product.id]);
    if (!(product === null || product === void 0 ? void 0 : product.id))
        return null;
    return (react_1.default.createElement("div", { style: { color: (_a = theme === null || theme === void 0 ? void 0 : theme.palette) === null || _a === void 0 ? void 0 : _a.text.secondary }, ref: widgetContainer, "data-oke-star-rating": true, "data-oke-reviews-product-id": "shopify-".concat((0, webstudio_shopify_1.getShopifyIdFromGid)(product === null || product === void 0 ? void 0 : product.id)) }));
};
exports.default = OkendoStarRating;
