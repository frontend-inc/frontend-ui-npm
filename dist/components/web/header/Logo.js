'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var LOGO_WIDTH = 180;
var LOGO_HEIGHT = 56;
function Logo(props) {
    var _a = (0, hooks_1.useApp)(), logo = _a.logo, name = _a.name;
    var src = props.src, _b = props.width, width = _b === void 0 ? LOGO_WIDTH : _b, _c = props.height, height = _c === void 0 ? LOGO_HEIGHT : _c, handleClick = props.handleClick;
    return (react_1.default.createElement(components_1.Button, { variant: "ghost", className: "p-0 rounded-none h-[56px] min-w-0 hover:bg-transparent focus-visible:bg-transparent overflow-hidden", onClick: function () { return handleClick('/'); } }, src ? (react_1.default.createElement(image_1.default, { src: src, alt: "logo", width: width, height: height, className: "object-contain" })) : (react_1.default.createElement("span", { className: "text-xl tracking-tight font-semibold text-primary" }, name))));
}
exports.default = Logo;
