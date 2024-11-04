'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var InstagramEmbed = function (props) {
    var src = props.src;
    return (react_1.default.createElement("blockquote", { className: "instagram-media", "data-instgrm-permalink": src, "data-instgrm-version": "12", style: { maxWidth: '540px', width: '100%' } },
        react_1.default.createElement("a", { href: src })));
};
exports.default = InstagramEmbed;
