"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var context_1 = require("../../../context");
// Call To Action
var CTA = function (props) {
    var _a = props || {}, label = _a.label, title = _a.title, description = _a.description, buttonText = _a.buttonText, _b = _a.textVariant, textVariant = _b === void 0 ? 'h4' : _b, href = _a.href, handleClick = _a.handleClick;
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { sx: sx.content, direction: "column", spacing: 1 },
            label && (react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "caption", sx: sx.label }, label)),
            title && (react_1.default.createElement(material_1.Typography, { variant: 'h3', color: "text.primary", sx: sx.title }, title)),
            description && (react_1.default.createElement(material_1.Typography, { variant: "subtitle2", color: "text.secondary", sx: sx.description }, description)),
            buttonText && (react_1.default.createElement(material_1.Box, { sx: sx.actions },
                react_1.default.createElement(material_1.Button, { size: "large", variant: "contained", color: "primary", onClick: handleItemClick }, buttonText))))));
};
exports.default = CTA;
var sx = {
    root: {
        width: '100%',
    },
    content: {
        width: '100%',
        alignItems: 'center',
    },
    label: {
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
        color: 'text.primary',
    },
    description: {
        color: 'text.secondary',
        textAlign: 'center',
        maxWidth: '600px',
    },
    actions: {
        mt: 2,
        textAlign: 'center',
        width: '100%',
    },
};
