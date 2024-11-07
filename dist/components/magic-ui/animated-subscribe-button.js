"use client";
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
exports.AnimatedSubscribeButton = void 0;
var react_1 = __importStar(require("react"));
var framer_motion_1 = require("framer-motion");
var AnimatedSubscribeButton = function (_a) {
    var buttonColor = _a.buttonColor, subscribeStatus = _a.subscribeStatus, buttonTextColor = _a.buttonTextColor, changeText = _a.changeText, initialText = _a.initialText;
    var _b = (0, react_1.useState)(subscribeStatus), isSubscribed = _b[0], setIsSubscribed = _b[1];
    return (react_1.default.createElement(framer_motion_1.AnimatePresence, { mode: "wait" }, isSubscribed ? (react_1.default.createElement(framer_motion_1.motion.button, { className: "relative flex w-[200px] items-center justify-center overflow-hidden rounded-md bg-white p-[10px] outline outline-1 outline-black", onClick: function () { return setIsSubscribed(false); }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
        react_1.default.createElement(framer_motion_1.motion.span, { key: "action", className: "relative block h-full w-full font-semibold", initial: { y: -50 }, animate: { y: 0 }, style: { color: buttonColor } }, changeText))) : (react_1.default.createElement(framer_motion_1.motion.button, { className: "relative flex w-[200px] cursor-pointer items-center justify-center rounded-md border-none p-[10px]", style: { backgroundColor: buttonColor, color: buttonTextColor }, onClick: function () { return setIsSubscribed(true); }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
        react_1.default.createElement(framer_motion_1.motion.span, { key: "reaction", className: "relative block font-semibold", initial: { x: 0 }, exit: { x: 50, transition: { duration: 0.1 } } }, initialText)))));
};
exports.AnimatedSubscribeButton = AnimatedSubscribeButton;
