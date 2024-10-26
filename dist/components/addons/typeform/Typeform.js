'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var script_1 = __importDefault(require("next/script"));
var Typeform = function (props) {
    var typeformId = props.typeformId;
    if (!typeformId)
        return null;
    return (react_1.default.createElement("div", { className: "w-full flex justify-center" },
        react_1.default.createElement("div", { "data-tf-live": typeformId }),
        react_1.default.createElement(script_1.default, { src: "//embed.typeform.com/next/embed.js" })));
};
exports.default = Typeform;
