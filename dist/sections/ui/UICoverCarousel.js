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
var UICoverCarousel = function (props) {
    var bgColor = props.bgColor, bgImage = props.bgImage, bgOverlay = props.bgOverlay, _a = props.mode, mode = _a === void 0 ? 'dark' : _a, px = props.px, py = props.py, maxWidth = props.maxWidth, requireAuth = props.requireAuth, rest = __rest(props, ["bgColor", "bgImage", "bgOverlay", "mode", "px", "py", "maxWidth", "requireAuth"]);
    return (react_1.default.createElement(components_1.Section, { requireAuth: requireAuth, mode: mode, py: "none", px: "none", maxWidth: maxWidth },
        react_1.default.createElement(components_2.CoverCarousel, __assign({}, rest))));
};
exports.default = UICoverCarousel;
