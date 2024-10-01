"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var Spotlight = function (props) {
    var _a = props || {}, _b = _a.style, style = _b === void 0 ? 'list' : _b, image = _a.image, label = _a.label, title = _a.title, description = _a.description, _c = _a.logos, logos = _c === void 0 ? [] : _c, _d = _a.buttons, buttons = _d === void 0 ? [] : _d;
    var Component = {
        list: __1.SpotlightList,
        card: __1.SpotlightCard,
    }[style] || __1.SpotlightList;
    return (react_1.default.createElement(Component, { label: label, primary: title, secondary: description && (react_1.default.createElement(material_1.Typography, { variant: "subtitle1", color: "text.secondary" }, description)), actions: (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 &&
            react_1.default.createElement(__1.ButtonActions, { buttons: buttons, size: "large", justifyContent: style == 'card' ? 'flex-start' : 'center' }), logos: logos, image: image }));
};
exports.default = Spotlight;
