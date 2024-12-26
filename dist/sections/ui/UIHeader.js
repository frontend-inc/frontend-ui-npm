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
var frontend_shadcn_1 = require("frontend-shadcn");
var UIHeader = function (props) {
    var router = (0, navigation_1.useRouter)();
    var _a = props || {}, mode = _a.mode, rest = __rest(_a, ["mode"]);
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var handleClick = function (link) {
        var path = (link === null || link === void 0 ? void 0 : link.path) || '/';
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        router.push("".concat(clientUrl).concat(path));
    };
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)(mode, 'w-full') },
        react_1.default.createElement(components_1.Header, __assign({}, rest, { handleClick: handleClick }))));
};
exports.default = UIHeader;
