'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../../../components/core");
var components_1 = require("../../../../components");
var components_2 = require("../../../../components");
var helpers_1 = require("../../../../helpers");
var frontend_shadcn_1 = require("frontend-shadcn");
var DocumentListItem = function (props) {
    var _a;
    var document = props.document, handleClick = props.handleClick, _b = props.selected, selected = _b === void 0 ? false : _b;
    return (react_1.default.createElement("li", { className: (0, frontend_shadcn_1.cn)('bg-background rounded border-2 border-border mb-1 overflow-hidden transition-colors duration-200 ease-in-out', selected && 'border-primary') },
        react_1.default.createElement("div", { className: "flex items-center p-0 cursor-pointer", onClick: handleClick },
            react_1.default.createElement("div", { className: "w-[72px] mr-2" },
                react_1.default.createElement(components_2.Image, { src: (_a = document === null || document === void 0 ? void 0 : document.image) === null || _a === void 0 ? void 0 : _a.url, alt: document === null || document === void 0 ? void 0 : document.title, height: 72, disableBorderRadius: true })),
            react_1.default.createElement("div", { className: "flex-grow" },
                react_1.default.createElement(core_1.Typography, { variant: "body2", className: "max-w-[146px]" }, (0, helpers_1.truncate)(document === null || document === void 0 ? void 0 : document.title))),
            react_1.default.createElement("div", { className: "ml-auto" },
                react_1.default.createElement(components_1.PublishLabel, { published: document === null || document === void 0 ? void 0 : document.published })))));
};
exports.default = DocumentListItem;
