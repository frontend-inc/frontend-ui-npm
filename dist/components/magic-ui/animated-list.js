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
exports.AnimatedListItem = exports.AnimatedList = void 0;
var react_1 = __importStar(require("react"));
var framer_motion_1 = require("framer-motion");
exports.AnimatedList = react_1.default.memo(function (_a) {
    var className = _a.className, children = _a.children, _b = _a.delay, delay = _b === void 0 ? 1000 : _b;
    var _c = (0, react_1.useState)(0), index = _c[0], setIndex = _c[1];
    var childrenArray = (0, react_1.useMemo)(function () { return react_1.default.Children.toArray(children); }, [children]);
    (0, react_1.useEffect)(function () {
        if (index < childrenArray.length - 1) {
            var timeout_1 = setTimeout(function () {
                setIndex(function (prevIndex) { return prevIndex + 1; });
            }, delay);
            return function () { return clearTimeout(timeout_1); };
        }
    }, [index, delay, childrenArray.length]);
    var itemsToShow = (0, react_1.useMemo)(function () {
        var result = childrenArray.slice(0, index + 1).reverse();
        return result;
    }, [index, childrenArray]);
    return (react_1.default.createElement("div", { className: "flex flex-col items-center gap-4 ".concat(className) },
        react_1.default.createElement(framer_motion_1.AnimatePresence, null, itemsToShow.map(function (item) { return (react_1.default.createElement(AnimatedListItem, { key: item.key }, item)); }))));
});
exports.AnimatedList.displayName = 'AnimatedList';
function AnimatedListItem(_a) {
    var children = _a.children;
    var animations = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1, originY: 0 },
        exit: { scale: 0, opacity: 0 },
        transition: { type: 'spring', stiffness: 350, damping: 40 },
    };
    return (react_1.default.createElement(framer_motion_1.motion.div, __assign({}, animations, { layout: true, className: "mx-auto w-full" }), children));
}
exports.AnimatedListItem = AnimatedListItem;
