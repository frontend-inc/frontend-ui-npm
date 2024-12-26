'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var script_1 = __importDefault(require("next/script"));
var GorgiasContactForm = function (props) {
    var _a = props || {}, src = _a.src, gorgiasContactFormSrc = _a.gorgiasContactFormSrc;
    if (!src)
        return null;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(script_1.default, { strategy: "beforeInteractive", src: gorgiasContactFormSrc }),
        react_1.default.createElement("iframe", { src: src })));
};
exports.default = GorgiasContactForm;
