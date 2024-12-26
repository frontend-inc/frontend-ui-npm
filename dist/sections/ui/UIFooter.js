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
var navigation_1 = require("next/navigation");
var hooks_1 = require("../../hooks");
var UIFooter = function (props) {
    var router = (0, navigation_1.useRouter)();
    var _a = props || {}, bgColor = _a.bgColor, mode = _a.mode, _b = _a.maxWidth, maxWidth = _b === void 0 ? 'lg' : _b, _c = _a.links, links = _c === void 0 ? [] : _c, rest = __rest(_a, ["bgColor", "mode", "maxWidth", "links"]);
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var handleClick = function (path) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        router.push("".concat(clientUrl).concat(path));
    };
    return (react_1.default.createElement(components_1.Section, { bgColor: bgColor, mode: mode, maxWidth: maxWidth },
        react_1.default.createElement(components_1.Footer, __assign({}, rest, { links: links, handleClick: handleClick }))));
};
exports.default = UIFooter;
