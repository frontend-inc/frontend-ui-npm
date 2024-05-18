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
var WebPrices = function (props) {
    var label = props.label, title = props.title, description = props.description, textAlign = props.textAlign, bgcolor = props.bgcolor, py = props.py, px = props.px, maxWidth = props.maxWidth, requireAuth = props.requireAuth, rest = __rest(props, ["label", "title", "description", "textAlign", "bgcolor", "py", "px", "maxWidth", "requireAuth"]);
    return (react_1.default.createElement(components_1.Section, { requireAuth: requireAuth, bgcolor: bgcolor, py: py, px: px, maxWidth: maxWidth },
        react_1.default.createElement(components_1.Heading, { label: label, title: title, description: description, textAlign: textAlign }),
        react_1.default.createElement(components_2.Prices, __assign({}, rest))));
};
exports.default = WebPrices;
