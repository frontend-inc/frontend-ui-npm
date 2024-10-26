'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var core_1 = require("../../core");
var Hero = function (props) {
    var _a = props || {}, title = _a.title, description = _a.description, image = _a.image, _b = _a.style, style = _b === void 0 ? 'card' : _b, _c = _a.buttons, buttons = _c === void 0 ? [] : _c;
    var Component = {
        card: components_1.HeroCard,
        cover: components_1.HeroCover,
        list: components_1.HeroList,
        avatar: components_1.HeroAvatar,
    }[style] || components_1.HeroList;
    return (react_1.default.createElement(Component, { primary: title, secondary: react_1.default.createElement(core_1.Typography, { variant: "body1", className: "text-muted-foreground" }, description), image: image, secondaryAction: buttons && react_1.default.createElement(components_1.ButtonActions, { buttons: buttons }) }));
};
exports.default = Hero;
