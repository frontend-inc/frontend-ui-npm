'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
var FormWizardInputWrapper = function (props) {
    var fadeIn = props.fadeIn, title = props.title, description = props.description, children = props.children;
    return (react_1.default.createElement(components_1.Fade, { in: fadeIn },
        react_1.default.createElement("div", { className: "flex flex-col space-y-4" },
            react_1.default.createElement("div", { className: "p-1 flex flex-col space-y-2" },
                react_1.default.createElement(components_1.Typography, { variant: "h4" }, title),
                react_1.default.createElement(components_1.Typography, { variant: "body1", className: "text-foreground/70" }, description)),
            react_1.default.createElement("div", { className: "p-1" }, children))));
};
exports.default = FormWizardInputWrapper;
