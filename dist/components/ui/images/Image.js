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
var react_3 = require("@nextui-org/react");
var frontend_shadcn_1 = require("frontend-shadcn");
var NoImage_1 = __importDefault(require("./NoImage"));
var ImageCard = function (props) {
    var _a = props || {}, src = _a.src, alt = _a.alt, label = _a.label, handleClick = _a.handleClick, isBlurred = _a.isBlurred, _b = _a.disableZoom, disableZoom = _b === void 0 ? false : _b, _c = _a.disableBorderRadius, disableBorderRadius = _c === void 0 ? false : _c, height = _a.height, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, className = _a.className;
    return (react_1.default.createElement(react_2.Card, { isFooterBlurred: true, isPressable: handleClick ? true : false, onPress: handleClick, className: (0, react_3.cn)(disableBorderRadius ? 'rounded-none' : 'rounded-large', 'relative w-full h-full') },
        react_1.default.createElement(react_2.Image, { removeWrapper: true, height: height, radius: 'none', isBlurred: isBlurred, isZoomed: !disableZoom, src: src, alt: alt || label, className: (0, react_3.cn)("w-full h-full object-cover", className) }),
        enableGradient && react_1.default.createElement("div", { className: "z-20 absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent bg-opacity-50" }),
        enableOverlay && react_1.default.createElement("div", { className: "z-20 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" }),
        label && (react_1.default.createElement(react_2.CardFooter, { className: "z-20 w-full overflow-hidden py-1 absolute left-0 bottom-0 text-white text-sm" },
            react_1.default.createElement("div", { className: "truncate p-4" }, label)))));
};
var NextImage = function (props) {
    var _a = props || {}, src = _a.src, height = _a.height, aspectRatio = _a.aspectRatio, handleClick = _a.handleClick, disableBorderRadius = _a.disableBorderRadius, rest = __rest(_a, ["src", "height", "aspectRatio", "handleClick", "disableBorderRadius"]);
    if (!src)
        return (react_1.default.createElement(NoImage_1.default, { disableBorderRadius: disableBorderRadius, aspectRatio: aspectRatio, height: height, onClick: handleClick }));
    return (aspectRatio ?
        react_1.default.createElement(frontend_shadcn_1.AspectRatio, { ratio: aspectRatio },
            react_1.default.createElement(ImageCard, __assign({ src: src, handleClick: handleClick, disableBorderRadius: disableBorderRadius }, rest))) :
        react_1.default.createElement(ImageCard, __assign({ src: src, height: height, handleClick: handleClick, disableBorderRadius: disableBorderRadius }, rest)));
};
exports.default = NextImage;
