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
var frontend_shadcn_1 = require("frontend-shadcn");
function NumberTicker(_a) {
    var value = _a.value, _b = _a.direction, direction = _b === void 0 ? 'up' : _b, _c = _a.delay, delay = _c === void 0 ? 0 : _c, className = _a.className, _d = _a.decimalPlaces, decimalPlaces = _d === void 0 ? 0 : _d;
    var ref = (0, react_1.useRef)(null);
    var motionValue = (0, framer_motion_1.useMotionValue)(direction === 'down' ? value : 0);
    var springValue = (0, framer_motion_1.useSpring)(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    var isInView = (0, framer_motion_1.useInView)(ref, { once: true, margin: '0px' });
    (0, react_1.useEffect)(function () {
        isInView &&
            setTimeout(function () {
                motionValue.set(direction === 'down' ? 0 : value);
            }, delay * 1000);
    }, [motionValue, isInView, delay, value, direction]);
    (0, react_1.useEffect)(function () {
        return springValue.on('change', function (latest) {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat('en-US', {
                    minimumFractionDigits: decimalPlaces,
                    maximumFractionDigits: decimalPlaces,
                }).format(Number(latest.toFixed(decimalPlaces)));
            }
        });
    }, [springValue, decimalPlaces]);
    return (react_1.default.createElement("span", { className: (0, frontend_shadcn_1.cn)('inline-block tabular-nums text-black dark:text-white tracking-wider', className), ref: ref }));
}
exports.default = NumberTicker;
