'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
var frontend_shadcn_1 = require("frontend-shadcn");
var BlurIn = function (_a) {
    var children = _a.children, className = _a.className, variant = _a.variant, _b = _a.duration, duration = _b === void 0 ? 1 : _b;
    var defaultVariants = {
        hidden: { filter: 'blur(10px)', opacity: 0 },
        visible: { filter: 'blur(0px)', opacity: 1 },
    };
    var combinedVariants = variant || defaultVariants;
    return (react_1.default.createElement(framer_motion_1.motion.div, { initial: "hidden", animate: "visible", transition: { duration: duration }, variants: combinedVariants, className: (0, frontend_shadcn_1.cn)(className) }, children));
};
exports.default = BlurIn;
