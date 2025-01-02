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
var frontend_shadcn_1 = require("frontend-shadcn");
var Gradient = function (props) {
    var _a = props || {}, disableBorderRadius = _a.disableBorderRadius, onClick = _a.onClick, height = _a.height;
    return (react_1.default.createElement("div", { onClick: onClick, style: {
            height: height ? "".concat(height, "px") : '100%'
        }, className: (0, react_2.cn)('min-h-[200px] cursor-pointer', disableBorderRadius ? 'rounded-none' : 'rounded-large', 'h-full w-full bg-gradient-to-br from-black to-gray-600') }));
};
var NoImage = function (props) {
    var _a = props || {}, aspectRatio = _a.aspectRatio, height = _a.height, rest = __rest(_a, ["aspectRatio", "height"]);
    return (aspectRatio ?
        react_1.default.createElement(frontend_shadcn_1.AspectRatio, { ratio: aspectRatio },
            react_1.default.createElement(Gradient, __assign({}, rest))) :
        react_1.default.createElement(Gradient, __assign({ height: height }, rest)));
};
exports.default = NoImage;
