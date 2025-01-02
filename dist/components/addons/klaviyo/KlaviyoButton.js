'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var KlaviyoButton = function (props) {
    var _a = props || {}, formId = _a.formId, _b = _a.buttonText, buttonText = _b === void 0 ? 'Subscribe' : _b;
    var handleClick = function () {
        // @ts-ignore
        window._klOnsite = window._klOnsite || [];
        // @ts-ignore
        window._klOnsite.push(['openForm', 'Tpqv7M']);
    };
    if (!formId)
        return null;
    return (react_1.default.createElement("div", { className: "flex flex-row justify-center" },
        react_1.default.createElement(react_2.Button, { variant: "solid", onPress: handleClick }, buttonText)));
};
exports.default = KlaviyoButton;
