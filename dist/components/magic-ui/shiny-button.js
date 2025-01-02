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
var framer_motion_1 = require("framer-motion");
var react_2 = require("@nextui-org/react");
var animationProps = {
    initial: { '--x': '100%', scale: 0.8 },
    animate: { '--x': '-100%', scale: 1 },
    whileTap: { scale: 0.95 },
    transition: {
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 1,
        type: 'spring',
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
            type: 'spring',
            stiffness: 200,
            damping: 5,
            mass: 0.5,
        },
    },
};
var ShinyButton = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (react_1.default.createElement(framer_motion_1.motion.button, __assign({ ref: ref }, animationProps, props, { className: (0, react_2.cn)('relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]', className) }),
        react_1.default.createElement("span", { className: "relative block size-full text-sm uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)]", style: {
                maskImage: 'linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))',
            } }, children),
        react_1.default.createElement("span", { style: {
                mask: 'linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))',
                maskComposite: 'exclude',
            }, className: "absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px" })));
});
ShinyButton.displayName = 'ShinyButton';
exports.default = ShinyButton;
