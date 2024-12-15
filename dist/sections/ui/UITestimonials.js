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
var UITestimonials = function (props) {
    var _a = props.direction, direction = _a === void 0 ? 'column' : _a, layout = props.layout, label = props.label, title = props.title, subtitle = props.subtitle, _b = props.textAlign, textAlign = _b === void 0 ? 'center' : _b, _c = props.fontSize, fontSize = _c === void 0 ? 'md' : _c, bgColor = props.bgColor, bgImage = props.bgImage, bgOverlay = props.bgOverlay, mode = props.mode, py = props.py, px = props.px, maxWidth = props.maxWidth, requireAuth = props.requireAuth, editable = props.editable, handleChange = props.handleChange, rest = __rest(props, ["direction", "layout", "label", "title", "subtitle", "textAlign", "fontSize", "bgColor", "bgImage", "bgOverlay", "mode", "py", "px", "maxWidth", "requireAuth", "editable", "handleChange"]);
    return (react_1.default.createElement(components_1.Section, { requireAuth: requireAuth, bgColor: bgColor, bgImage: bgImage, bgOverlay: bgOverlay, mode: mode, py: py, px: px, maxWidth: maxWidth },
        react_1.default.createElement(components_1.Stack, { spacing: 10 },
            react_1.default.createElement(components_1.Heading, { label: label, title: title, subtitle: subtitle, textAlign: direction == 'row' ? 'left' : 'center', size: fontSize, editable: editable, handleChange: handleChange }),
            react_1.default.createElement(components_2.Testimonials, __assign({}, rest, { layout: layout })))));
};
exports.default = UITestimonials;
