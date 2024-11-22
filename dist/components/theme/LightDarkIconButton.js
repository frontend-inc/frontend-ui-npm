"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../components");
var next_themes_1 = require("next-themes");
var LightDarkIconButton = function () {
    var _a = (0, next_themes_1.useTheme)(), theme = _a.theme, setTheme = _a.setTheme;
    var handleClick = function () {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (react_1.default.createElement(components_1.IconButton, { onClick: handleClick, className: "flex items-center justify-center" }, theme === 'light' ? (react_1.default.createElement(components_1.RemixIcon, { name: "ri-sun-fill", className: "text-md text-foreground transition duration-200 hover:scale-110" })) : (react_1.default.createElement(components_1.RemixIcon, { name: "ri-moon-fill", className: "text-md text-foreground transition duration-200 hover:scale-110" }))));
};
exports.default = LightDarkIconButton;
