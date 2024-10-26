'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var link_1 = __importDefault(require("next/link"));
var components_1 = require("../../../components");
var FieldURL = function (props) {
    var value = props.value, label = props.label, color = props.color, disableLabel = props.disableLabel;
    return (react_1.default.createElement(components_1.FieldWrapper, { label: label, color: color, disableLabel: disableLabel }, value && (react_1.default.createElement(link_1.default, { className: "p-0 h-auto text-muted-foreground hover:text-foreground", href: value || '#', target: "_blank", rel: "noopener noreferrer" }, value))));
};
exports.default = FieldURL;
