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
exports.Collapse = void 0;
var react_1 = __importStar(require("react"));
var framer_motion_1 = require("framer-motion");
var react_2 = require("@nextui-org/react");
var Collapse = function (_a) {
    var inProp = _a.in, children = _a.children, className = _a.className, _b = _a.timeout, timeout = _b === void 0 ? 300 : _b;
    var contentRef = (0, react_1.useRef)(null);
    var _c = react_1.default.useState(0), height = _c[0], setHeight = _c[1];
    (0, react_1.useEffect)(function () {
        if (inProp && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
        else {
            setHeight(0);
        }
    }, [inProp]);
    return (react_1.default.createElement(framer_motion_1.AnimatePresence, { initial: false }, (inProp || height !== 0) && (react_1.default.createElement(framer_motion_1.motion.div, { className: (0, react_2.cn)('overflow-hidden', className), initial: { height: 0 }, animate: { height: inProp ? height : 0 }, exit: { height: 0 }, transition: { duration: timeout / 1000, ease: 'easeInOut' } },
        react_1.default.createElement("div", { ref: contentRef }, children)))));
};
exports.Collapse = Collapse;
exports.default = exports.Collapse;
