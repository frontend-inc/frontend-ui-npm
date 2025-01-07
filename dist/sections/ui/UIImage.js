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
var components_2 = require("../../components");
var UIImage = function (props) {
    var image = props.image, title = props.title, variant = props.variant, bgColor = props.bgColor, bgImage = props.bgImage, bgOverlay = props.bgOverlay, mode = props.mode, py = props.py, px = props.px, _a = props.maxWidth, maxWidth = _a === void 0 ? 'sm' : _a, _b = props.aspectRatio, aspectRatio = _b === void 0 ? 1.5 : _b, requireAuth = props.requireAuth, rest = __rest(props, ["image", "title", "variant", "bgColor", "bgImage", "bgOverlay", "mode", "py", "px", "maxWidth", "aspectRatio", "requireAuth"]);
    return (react_1.default.createElement(components_1.Section, { requireAuth: requireAuth, bgColor: bgColor, bgImage: bgImage, bgOverlay: bgOverlay, mode: mode, py: py, px: px, maxWidth: maxWidth, variant: variant },
        react_1.default.createElement("figure", { className: "w-full flex flex-col space-y-2" },
            react_1.default.createElement(components_2.Image, __assign({}, rest, { src: image, fullWidth: true })),
            title && (react_1.default.createElement("figcaption", { className: "text-sm text-foreground/70 text-center" }, title)))));
};
exports.default = UIImage;
