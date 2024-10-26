'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var SimplePage = function (_a) {
    var title = _a.title, body = _a.body, publishedAt = _a.publishedAt, _b = _a.html, html = _b === void 0 ? false : _b, _c = _a.disablePadding, disablePadding = _c === void 0 ? false : _c;
    return (react_1.default.createElement("div", { className: "w-full flex justify-center items-start ".concat(disablePadding ? '' : 'p-6') },
        react_1.default.createElement("div", { className: "w-full max-w-3xl space-y-4" },
            react_1.default.createElement(core_1.Typography, { variant: "h2", className: "text-foreground text-center" }, title),
            react_1.default.createElement(core_1.Typography, { variant: "caption", className: "block text-center" },
                "Last updated ",
                publishedAt),
            html ? (react_1.default.createElement(core_1.Typography, { variant: "body1", className: "whitespace-pre-line" },
                react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: body } }))) : (react_1.default.createElement(core_1.Typography, { variant: "body1", className: "whitespace-pre-line" }, body)))));
};
exports.default = SimplePage;
