'use client';
"use strict";
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
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var CarouselDot = function (props) {
    var onClick = props.onClick, active = props.active, index = props.index, onMove = props.onMove, _a = props.styles, styles = _a === void 0 ? {} : _a, rest = __rest(props, ["onClick", "active", "index", "onMove", "styles"]);
    var _b = rest.carouselState, currentSlide = _b.currentSlide, deviceType = _b.deviceType;
    return (react_1.default.createElement(components_1.Button, { variant: "ghost", className: "py-1 px-0 shadow-none mx-0 hover:shadow-none hover:bg-transparent", onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); } },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full h-1 bg-gray-200 transition-all duration-300 ease-in-out', active && 'bg-primary'), style: styles })));
};
exports.default = CarouselDot;
