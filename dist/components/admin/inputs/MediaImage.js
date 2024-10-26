'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var MediaImage = function (_a) {
    var image = _a.image, _b = _a.objectFit, objectFit = _b === void 0 ? 'cover' : _b, handleRemove = _a.handleRemove;
    return (react_1.default.createElement(frontend_shadcn_1.Card, { className: "relative h-40 p-0 rounded border border-border bg-background" },
        react_1.default.createElement(frontend_shadcn_1.CardContent, { className: "p-0 h-full" },
            react_1.default.createElement(components_1.Image, { disableBorderRadius: true, height: 160, src: image === null || image === void 0 ? void 0 : image.url, alt: 'media', objectFit: objectFit, className: "w-full h-full" }),
            (image === null || image === void 0 ? void 0 : image.url) && (react_1.default.createElement(components_2.Button, { variant: "secondary", size: "icon", className: "absolute top-1 right-1 opacity-50 hover:opacity-100 bg-background text-foreground", onClick: handleRemove },
                react_1.default.createElement(components_1.Icon, { name: "X", className: "h-4 w-4" }))))));
};
exports.default = MediaImage;
