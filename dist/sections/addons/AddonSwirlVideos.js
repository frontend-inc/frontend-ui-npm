'use client';
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../components");
var AddonSwirlVideos = function (props) {
    var bgColor = props.bgColor, mode = props.mode, py = props.py, px = props.px, maxWidth = props.maxWidth, requireAuth = props.requireAuth, rest = __rest(props, ["bgColor", "mode", "py", "px", "maxWidth", "requireAuth"]);
    return (react_1.default.createElement(components_1.Section, { requireAuth: requireAuth, bgColor: bgColor, mode: mode, py: py, px: px, maxWidth: maxWidth },
        react_1.default.createElement(react_1.default.Fragment, null)));
};
exports.default = AddonSwirlVideos;
