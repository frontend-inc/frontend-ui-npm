'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var react_3 = require("@remixicon/react");
var InputLabel = function (props) {
    var label = props.label, info = props.info;
    return (react_1.default.createElement("div", { className: "min-w-[100px] flex flex-row gap-2" },
        label && (react_1.default.createElement("label", { className: "text-sm text-bold text-foreground" }, label)),
        info && (react_1.default.createElement(react_2.Tooltip, { title: info },
            react_1.default.createElement(react_2.Button, { isIconOnly: true, variant: "light", className: "min-w-8 h-8 w-8" },
                react_1.default.createElement(react_3.RiInformation2Line, { name: "Info", size: "sm", className: "text-foreground/70" }))))));
};
exports.default = InputLabel;
