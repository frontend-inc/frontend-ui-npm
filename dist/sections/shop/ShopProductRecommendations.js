'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../components");
var shop_1 = require("../../components/shop");
var ShopProductRecommendations = function (props) {
    var label = props.label, title = props.title, subtitle = props.subtitle, textAlign = props.textAlign, bgColor = props.bgColor, bgImage = props.bgImage, bgOverlay = props.bgOverlay, mode = props.mode, py = props.py, px = props.px, maxWidth = props.maxWidth, requireAuth = props.requireAuth, rest = __rest(props, ["label", "title", "subtitle", "textAlign", "bgColor", "bgImage", "bgOverlay", "mode", "py", "px", "maxWidth", "requireAuth"]);
    return (react_1.default.createElement(components_1.Section, { requireAuth: requireAuth, bgColor: bgColor, bgImage: bgImage, bgOverlay: bgOverlay, mode: mode, py: py, px: px, maxWidth: maxWidth },
        react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
            react_1.default.createElement(components_1.Heading, { label: label, title: title, subtitle: subtitle, textAlign: textAlign }),
            react_1.default.createElement(shop_1.ProductSimilarList, __assign({}, rest)))));
};
exports.default = ShopProductRecommendations;
