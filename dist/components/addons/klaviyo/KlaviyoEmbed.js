"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var KlaviyoEmbed = function (props) {
    var formId = (props || {}).formId;
    if (!formId)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement("div", { className: "klaviyo-form-".concat(formId) })));
};
exports.default = KlaviyoEmbed;
var sx = {
    root: {
        py: 2,
    },
};
