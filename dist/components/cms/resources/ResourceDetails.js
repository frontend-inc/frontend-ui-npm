'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var react_2 = require("@nextui-org/react");
var ResourceDetails = function (props) {
    var _a = props || {}, disableImage = _a.disableImage, resource = _a.resource, title = _a.title, subtitle = _a.subtitle, label = _a.label, image = _a.image, _b = _a.fields, fields = _b === void 0 ? [] : _b;
    return (react_1.default.createElement("div", { className: "w-full py-4" },
        react_1.default.createElement("div", { className: "w-full flex flex-col space-y-6" },
            !disableImage && (react_1.default.createElement("div", { className: "justify-center items-center flex flex-col space-y-6 w-full" },
                react_1.default.createElement("div", { className: "min-w-[240px] min-h-[240px]" },
                    react_1.default.createElement(components_1.Image, { alt: label, src: image, label: label, height: 240, fullWidth: true })))),
            react_1.default.createElement("div", { className: (0, react_2.cn)('w-full flex flex-col space-y-6') },
                title && (react_1.default.createElement(components_2.Typography, { variant: "h4", className: "px-2" }, title)),
                subtitle && (react_1.default.createElement(components_2.Typography, { variant: "body1", className: "px-2 text-lg italic text-foreground/70" }, subtitle)),
                react_1.default.createElement(components_1.ShowFields, { fields: fields, resource: resource })))));
};
exports.default = ResourceDetails;
