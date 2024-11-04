'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var core_1 = require("../../core");
var ResourceDetails = function (props) {
    var _a = props || {}, resource = _a.resource, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, label = _a.label, image = _a.image, _b = _a.fields, fields = _b === void 0 ? [] : _b;
    var imageField = fields.find(function (field) { return field.variant === 'image'; });
    return (react_1.default.createElement("div", { className: "w-full flex flex-col space-y-6" },
        imageField && (react_1.default.createElement("div", { className: "w-full h-[240px]" },
            react_1.default.createElement(components_1.Image, { alt: label, src: image, label: label }))),
        actions && (react_1.default.createElement("div", { className: "flex flex-row items-center justify-center w-full" }, actions)),
        primary && react_1.default.createElement(core_1.Typography, { variant: "h4", className: "px-2" }, primary),
        secondary && (react_1.default.createElement(core_1.Typography, { variant: "body1", className: "px-2 text-lg italic text-muted-foreground" }, secondary)),
        react_1.default.createElement(components_1.ShowFields, { fields: fields, resource: resource })));
};
exports.default = ResourceDetails;
