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
var react_2 = require("@nextui-org/react");
var framer_motion_1 = require("framer-motion");
function Marquee(_a) {
    var className = _a.className, _b = _a.reverse, reverse = _b === void 0 ? false : _b, children = _a.children, _c = _a.vertical, vertical = _c === void 0 ? false : _c, _d = _a.repeat, repeat = _d === void 0 ? 4 : _d, _e = _a.speed, speed = _e === void 0 ? 40 : _e, // Default speed in seconds
    props = __rest(_a, ["className", "reverse", "children", "vertical", "repeat", "speed"]);
    return (react_1.default.createElement("div", __assign({}, props, { className: (0, react_2.cn)('group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]', {
            'flex-row': !vertical,
            'flex-col': vertical,
        }, className) }), Array(repeat)
        .fill(0)
        .map(function (_, i) { return (react_1.default.createElement(framer_motion_1.motion.div, { key: i, className: (0, react_2.cn)('flex shrink-0 justify-around [gap:var(--gap)]', {
            'flex-row': !vertical,
            'flex-col': vertical,
        }), initial: {
            x: vertical ? 0 : reverse ? '-100%' : '100%',
            y: vertical ? (reverse ? '-100%' : '100%') : 0,
        }, animate: {
            x: vertical ? 0 : reverse ? '100%' : '-100%',
            y: vertical ? (reverse ? '100%' : '-100%') : 0,
        }, transition: {
            duration: speed, // Adjusted to slow down animation
            repeat: Infinity,
            ease: 'linear',
        } }, children)); })));
}
exports.default = Marquee;
