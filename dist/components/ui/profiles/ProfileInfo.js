'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var ProfileInfo = function (props) {
    var title = props.title, description = props.description, label = props.label, _a = props.socialLinks, socialLinks = _a === void 0 ? [] : _a;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
        react_1.default.createElement("div", { className: "flex flex-col" },
            react_1.default.createElement(components_1.FieldString, { value: label, variant: "caption", className: "text-foreground/70" }),
            react_1.default.createElement(components_1.FieldString, { value: title }),
            (socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.length) > 0 && (react_1.default.createElement("div", { className: "flex flex-row space-x-1" }, socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.map(function (link, index) { return (react_1.default.createElement(components_1.SocialLink, { key: index, provider: link.value, url: link.url })); }))),
            react_1.default.createElement(components_1.FieldText, { value: description, variant: "body2", className: "text-foreground/70" }))));
};
exports.default = ProfileInfo;
