'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var react_2 = require("@nextui-org/react");
var hooks_1 = require("../../../hooks");
var LOGO_WIDTH = 180;
var LOGO_HEIGHT = 56;
function Logo(props) {
    var _a = (0, hooks_1.useApp)(), logo = _a.logo, name = _a.name;
    var src = props.src, _b = props.width, width = _b === void 0 ? LOGO_WIDTH : _b, _c = props.height, height = _c === void 0 ? LOGO_HEIGHT : _c, handleClick = props.handleClick;
    return (react_1.default.createElement(react_2.Button, { className: 'px-2', variant: "light", onPress: function () { return handleClick('/'); } }, src ? (react_1.default.createElement(image_1.default, { src: src, alt: "logo", width: width, height: height, className: "object-contain" })) : (react_1.default.createElement("div", { className: "flex items-center text-foreground" },
        react_1.default.createElement("svg", { fill: "none", height: "36", viewBox: "0 0 32 32", width: "36" },
            react_1.default.createElement("path", { clipRule: "evenodd", d: "M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z", fill: "currentColor", fillRule: "evenodd" })),
        react_1.default.createElement("p", { className: "text-foreground font-bold uppercase text-inherit" }, name)))));
}
exports.default = Logo;
