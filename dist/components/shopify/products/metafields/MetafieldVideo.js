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
var frontend_shopify_2 = require("frontend-shopify");
var MetafieldVideo = function (props) {
    var handle = props.handle, metafield = props.metafield, _a = props.controls, controls = _a === void 0 ? false : _a, _b = props.autoPlay, autoPlay = _b === void 0 ? false : _b, _c = props.height, height = _c === void 0 ? 300 : _c;
    var _d = (0, frontend_shopify_2.useProducts)(), loading = _d.loading, product = _d.product, findProduct = _d.findProduct;
    var _e = (0, react_1.useState)(null), mp4 = _e[0], setMp4 = _e[1];
    var _f = (0, react_1.useState)(null), ogg = _f[0], setOgg = _f[1];
    (0, react_1.useEffect)(function () {
        if (handle && metafield) {
            findProduct(handle, [metafield]);
        }
    }, [handle, metafield]);
    (0, react_1.useEffect)(function () {
        if (product) {
            var videoRef = (0, frontend_shopify_1.getMetafieldReference)(product, metafield.key);
            var mp4_1 = videoRef === null || videoRef === void 0 ? void 0 : videoRef.sources.find(function (source) { return source.format === 'mp4'; });
            var ogg_1 = videoRef === null || videoRef === void 0 ? void 0 : videoRef.sources.find(function (source) { return source.format === 'ogg'; });
            setMp4(mp4_1 === null || mp4_1 === void 0 ? void 0 : mp4_1.url);
            setOgg(ogg_1 === null || ogg_1 === void 0 ? void 0 : ogg_1.url);
        }
    }, [product]);
    if (!mp4)
        return null;
    return (react_1.default.createElement("video", { height: "".concat(height, "px"), width: '100%', controls: controls, autoPlay: autoPlay },
        react_1.default.createElement("source", { src: mp4, type: "video/mp4" }),
        react_1.default.createElement("source", { src: ogg, type: "video/ogg" }),
        "Your browser does not support the video tag."));
};
exports.default = MetafieldVideo;
