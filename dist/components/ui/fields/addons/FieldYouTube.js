'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../../..");
var FieldYouTube = function (props) {
    var value = (props || {}).value;
    return (react_1.default.createElement("div", { className: "w-full roundex-lg flex justify-center items-center bg-black" },
        react_1.default.createElement(__1.YouTubeEmbed, { src: value })));
};
exports.default = FieldYouTube;
