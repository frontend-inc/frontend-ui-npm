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
    var _a = props || {}, avatar = _a.avatar, resource = _a.resource, primary = _a.primary, secondary = _a.secondary, label = _a.label, image = _a.image, _b = _a.fields, fields = _b === void 0 ? [] : _b, _c = _a.direction, direction = _c === void 0 ? 'column' : _c;
    return (react_1.default.createElement("div", { className: "w-full flex flex-col space-y-2" },
        image && (react_1.default.createElement("div", { className: "w-full h-[200px]" },
            react_1.default.createElement(components_1.Image, { alt: label, src: image, label: label }))),
        avatar && avatar,
        react_1.default.createElement(core_1.Typography, { variant: "h5" }, primary),
        secondary && (react_1.default.createElement(core_1.Typography, { variant: "body2", className: "text-muted-foreground" }, secondary)),
        react_1.default.createElement(components_1.DisplayFields, { fields: fields, resource: resource, direction: direction })));
};
exports.default = ResourceDetails;
