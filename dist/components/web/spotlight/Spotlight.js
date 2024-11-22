'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var SpotlightList_1 = __importDefault(require("./SpotlightList"));
var SpotlightCard_1 = __importDefault(require("./SpotlightCard"));
var Spotlight = function (props) {
    var _a = props || {}, _b = _a.direction, direction = _b === void 0 ? 'column' : _b, image = _a.image, label = _a.label, title = _a.title, subtitle = _a.subtitle, _c = _a.buttons, buttons = _c === void 0 ? [] : _c, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, editable = _a.editable, handleChange = _a.handleChange;
    var Component = {
        column: SpotlightList_1.default,
        row: SpotlightCard_1.default,
    }[direction] || SpotlightList_1.default;
    var justifyContent = {
        column: 'justify-center',
        row: 'justify-left',
    }[direction] || 'justify-center';
    return (react_1.default.createElement(Component, { label: label, title: title, subtitle: subtitle, editable: editable, handleChange: handleChange, actions: (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement(__1.ButtonActions, { size: "lg", buttons: buttons, 
            // @ts-ignore
            justifyContent: justifyContent })), image: image, enableGradient: enableGradient, enableOverlay: enableOverlay }));
};
exports.default = Spotlight;
