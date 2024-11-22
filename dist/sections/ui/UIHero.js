'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var components_2 = require("../../components");
var UIHero = function (props) {
    var fill = props.fill, border = props.border, bgColor = props.bgColor, mode = props.mode, py = props.py, px = props.px, _a = props.maxWidth, maxWidth = _a === void 0 ? 'xl' : _a, requireAuth = props.requireAuth, style = props.style, rest = __rest(props, ["fill", "border", "bgColor", "mode", "py", "px", "maxWidth", "requireAuth", "style"]);
    var fullWidth = style == 'spotlight' || style == 'cover' ? true : false;
    return (react_1.default.createElement(components_1.Section, { requireAuth: requireAuth, bgColor: bgColor, mode: mode, py: fullWidth ? 'none' : py, px: fullWidth ? 'none' : px, maxWidth: maxWidth, fill: fill, border: border },
        react_1.default.createElement(components_2.Hero, __assign({}, rest, { style: style }))));
};
exports.default = UIHero;
