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
exports.Backdrop = void 0;
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var framer_motion_1 = require("framer-motion");
function Backdrop(props) {
    var children = props.children, open = props.open, onClick = props.onClick, className = props.className, rest = __rest(props, ["children", "open", "onClick", "className"]);
    return (react_1.default.createElement(framer_motion_1.AnimatePresence, null, open && (
    //@ts-ignore
    react_1.default.createElement(framer_motion_1.motion.div, __assign({ initial: { opacity: 0, backdropFilter: 'blur(0px)' }, animate: {
            opacity: 1,
            backdropFilter: 'blur(5px)',
            transition: { duration: 0.3 },
        }, exit: {
            opacity: 0,
            backdropFilter: 'blur(0px)',
            transition: { duration: 0.3, delay: 0.1 },
        }, onClick: onClick, className: (0, frontend_shadcn_1.cn)('fixed inset-0 z-50 flex items-center justify-center bg-black/60', className) }, props),
        react_1.default.createElement(framer_motion_1.motion.div, { initial: { scale: 0.9, opacity: 0 }, animate: {
                scale: 1,
                opacity: 1,
                transition: { delay: 0.1, duration: 0.2 },
            }, exit: {
                scale: 0.9,
                opacity: 0,
                transition: { duration: 0.2 },
            } }, children)))));
}
exports.Backdrop = Backdrop;
