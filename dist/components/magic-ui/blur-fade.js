'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var framer_motion_1 = require("framer-motion");
function BlurFade(_a) {
    var children = _a.children, className = _a.className, variant = _a.variant, _b = _a.duration, duration = _b === void 0 ? 0.4 : _b, _c = _a.delay, delay = _c === void 0 ? 0 : _c, _d = _a.yOffset, yOffset = _d === void 0 ? 6 : _d, _e = _a.inView, inView = _e === void 0 ? false : _e, _f = _a.inViewMargin, inViewMargin = _f === void 0 ? '-50px' : _f, _g = _a.blur, blur = _g === void 0 ? '6px' : _g;
    var ref = (0, react_1.useRef)(null);
    var inViewResult = (0, framer_motion_1.useInView)(ref, { once: true, margin: inViewMargin });
    var isInView = !inView || inViewResult;
    var defaultVariants = {
        hidden: { y: yOffset, opacity: 0, filter: "blur(".concat(blur, ")") },
        visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
    };
    var combinedVariants = variant || defaultVariants;
    return (react_1.default.createElement(framer_motion_1.AnimatePresence, null,
        react_1.default.createElement(framer_motion_1.motion.div, { ref: ref, initial: "hidden", animate: isInView ? 'visible' : 'hidden', exit: "hidden", variants: combinedVariants, transition: {
                delay: 0.04 + delay,
                duration: duration,
                ease: 'easeOut',
            }, className: className }, children)));
}
exports.default = BlurFade;
