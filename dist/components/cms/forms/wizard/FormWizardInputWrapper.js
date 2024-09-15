"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var FormWizardInputWrapper = function (props) {
    var fadeIn = props.fadeIn, title = props.title, description = props.description, children = props.children, _a = props.timeout, timeout = _a === void 0 ? 350 : _a;
    return (react_1.default.createElement(material_1.Fade, { in: fadeIn, timeout: timeout },
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 3 },
            react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 },
                react_1.default.createElement(material_1.Typography, { sx: sx.title, variant: "h4", color: "text.primary" }, title),
                react_1.default.createElement(material_1.Typography, { sx: sx.description, variant: "body1", color: "text.secondary" }, description)),
            children)));
};
exports.default = FormWizardInputWrapper;
var sx = {
    title: {
        textAlign: 'left',
        width: '100%',
    },
    description: {
        textAlign: 'left',
        width: '100%',
    },
};
