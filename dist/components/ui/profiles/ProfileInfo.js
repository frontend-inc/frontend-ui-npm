"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var ProfileInfo = function (props) {
    var title = props.title, description = props.description, label = props.label, _a = props.socialLinks, socialLinks = _a === void 0 ? [] : _a;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 },
        react_1.default.createElement(material_1.Stack, { direction: "column" },
            react_1.default.createElement(components_1.FieldString, { value: label, variant: "caption", color: "text.secondary" }),
            react_1.default.createElement(components_1.FieldString, { value: title }),
            (socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.length) > 0 && (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 }, socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.map(function (link, index) { return (react_1.default.createElement(components_1.SocialLink, { key: index, provider: link.value, url: link.url })); }))),
            react_1.default.createElement(components_1.FieldText, { value: description, variant: "body2", color: "text.secondary" }))));
};
exports.default = ProfileInfo;
