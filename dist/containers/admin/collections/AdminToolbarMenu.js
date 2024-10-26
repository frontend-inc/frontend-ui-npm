'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var AdminToolbarMenu = function (props) {
    var handleSaveView = props.handleSaveView;
    var onSaveView = function () {
        handleSaveView();
    };
    return (react_1.default.createElement(frontend_shadcn_1.DropdownMenu, null,
        react_1.default.createElement(frontend_shadcn_1.DropdownMenuTrigger, { asChild: true },
            react_1.default.createElement(components_1.Button, { variant: "ghost", className: "h-8 w-8 p-0" },
                react_1.default.createElement("span", { className: "sr-only" }, "Open menu"),
                react_1.default.createElement(lucide_react_1.MoreHorizontal, { className: "h-4 w-4" }))),
        react_1.default.createElement(frontend_shadcn_1.DropdownMenuContent, { align: "end" },
            react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { onClick: onSaveView }, "Save view"))));
};
exports.default = AdminToolbarMenu;
