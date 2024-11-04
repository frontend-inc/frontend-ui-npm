'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SoundcloudEmbed = function (props) {
    var src = props.src;
    return (react_1.default.createElement("iframe", { width: "100%", height: "166", 
        //@ts-ignore
        frameborder: "no", allow: "autoplay", src: "".concat(src, "&color=%23ff5500&inverse=false&auto_play=false&show_user=true") }));
};
exports.default = SoundcloudEmbed;
