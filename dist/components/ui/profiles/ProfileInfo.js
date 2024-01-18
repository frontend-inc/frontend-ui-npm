"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var ProfileInfo = function (props) {
    var title = props.title, description = props.description, label = props.label;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 },
        react_1.default.createElement(material_1.Stack, { direction: "column" },
            react_1.default.createElement(components_1.FieldString, { value: label, variant: "caption", color: "text.secondary" }),
            react_1.default.createElement(components_1.FieldString, { value: title }),
            react_1.default.createElement(components_1.FieldText, { value: description, variant: "body2", color: "text.secondary" }))));
};
exports.default = ProfileInfo;
