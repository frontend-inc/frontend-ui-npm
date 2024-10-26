'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fade = void 0;
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
var frontend_shadcn_1 = require("frontend-shadcn");
var Fade = function (_a) {
    var children = _a.children, _b = _a.in, inProp = _b === void 0 ? false : _b, _c = _a.duration, duration = _c === void 0 ? 0.3 : _c, className = _a.className;
    return (react_1.default.createElement(framer_motion_1.AnimatePresence, null, inProp && (react_1.default.createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: duration }, className: (0, frontend_shadcn_1.cn)(className) }, children))));
};
exports.Fade = Fade;
