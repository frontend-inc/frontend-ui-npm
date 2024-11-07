'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var Hero = function (props) {
    var _a = props || {}, title = _a.title, description = _a.description, image = _a.image, _b = _a.style, style = _b === void 0 ? 'card' : _b, _c = _a.buttons, buttons = _c === void 0 ? [] : _c, _d = _a.enableGradient, enableGradient = _d === void 0 ? false : _d, _e = _a.enableOverlay, enableOverlay = _e === void 0 ? false : _e, _f = _a.objectFit, objectFit = _f === void 0 ? 'cover' : _f;
    var Component = {
        card: components_1.HeroCard,
        cover: components_1.HeroCover,
        list: components_1.HeroList,
        avatar: components_1.HeroAvatar,
    }[style] || components_1.HeroList;
    var slots = {
        image: {
            enableGradient: enableGradient,
            enableOverlay: enableOverlay,
            objectFit: objectFit
        }
    };
    return (react_1.default.createElement(Component, { primary: title, secondary: description, image: image, secondaryAction: buttons && react_1.default.createElement(components_1.ButtonActions, { buttons: buttons }), slots: slots }));
};
exports.default = Hero;
