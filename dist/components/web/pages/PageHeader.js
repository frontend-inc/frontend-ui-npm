'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var PageHeader = function (props) {
    var label = props.label, title = props.title, description = props.description, links = props.links, buttons = props.buttons;
    return (react_1.default.createElement("div", { className: "w-full flex flex-col space-y-1" },
        react_1.default.createElement(components_1.Breadcrumbs, { links: links }),
        react_1.default.createElement("div", { className: "flex flex-col space-y-1 justify-between w-full border-b border-divider pb-1" },
            react_1.default.createElement(components_1.Heading, { label: label, title: title, description: description, textAlign: "left" }),
            (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement("div", { className: "flex items-start justify-end sm:pb-0 xs:pb-1" },
                react_1.default.createElement(components_1.ButtonActions, { buttons: buttons }))))));
};
exports.default = PageHeader;
