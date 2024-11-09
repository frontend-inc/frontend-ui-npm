'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var PageHeader = function (props) {
    var label = props.label, title = props.title, subtitle = props.subtitle, breadcrumbs = props.breadcrumbs, buttons = props.buttons;
    return (react_1.default.createElement("div", { className: "w-full" },
        react_1.default.createElement("div", { className: "px-2 w-full" },
            react_1.default.createElement(components_1.Breadcrumbs, { links: breadcrumbs })),
        react_1.default.createElement("div", { className: "flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 justify-left items-center sm:justify-between w-full border-b border-divider pb-2" },
            react_1.default.createElement(components_1.Heading, { label: label, title: title, subtitle: subtitle, size: "sm", textAlign: "left", className: "py-4" }),
            (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement("div", { className: "w-full flex justify-center sm:justify-end pb-2 sm:pb-0" },
                react_1.default.createElement(components_1.ButtonActions, { buttons: buttons }))))));
};
exports.default = PageHeader;
