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
var components_1 = require("../../../components");
var FieldText = function (props) {
    var value = props.value, label = props.label, variant = props.variant, color = props.color, placeholder = props.placeholder, disableLabel = props.disableLabel, _a = props.maxChars, maxChars = _a === void 0 ? 80 : _a, rest = __rest(props, ["value", "label", "variant", "color", "placeholder", "disableLabel", "maxChars"]);
    return (react_1.default.createElement(components_1.FieldWrapper, { label: label, color: color, disableLabel: disableLabel },
        react_1.default.createElement(components_1.ExpandableText, { text: value || placeholder, maxChars: maxChars })));
};
exports.default = FieldText;
