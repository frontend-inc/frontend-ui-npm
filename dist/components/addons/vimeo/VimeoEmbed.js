'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var VimeoEmbed = function (props) {
    var src = props.src;
    return (react_1.default.createElement("div", { className: "relative overflow-hidden pb-[56.25%] w-full max-w-full" },
        react_1.default.createElement("iframe", { src: src, className: "absolute top-0 left-0 w-full h-full", 
            //@ts-ignore
            frameborder: "0" })));
};
exports.default = VimeoEmbed;
