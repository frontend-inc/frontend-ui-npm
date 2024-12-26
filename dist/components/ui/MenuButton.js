'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../components");
var components_2 = require("../../components");
var MenuButton = function (props) {
    var children = props.children, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(frontend_shadcn_1.Popover, null,
        react_1.default.createElement(frontend_shadcn_1.PopoverTrigger, { asChild: true },
            react_1.default.createElement(components_1.Button, { variant: "ghost", className: "h-8 w-8 p-0" },
                react_1.default.createElement("span", { className: "sr-only" }, "Open menu"),
                react_1.default.createElement(components_2.RemixIcon, { name: "ri-more-2-line", className: "text-foreground" }))),
        react_1.default.createElement(frontend_shadcn_1.PopoverContent, { className: "p-0 bg-background w-[100px]" },
            children,
            handleEdit && (react_1.default.createElement("button", { className: "flex w-full items-center px-2 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none", onClick: handleEdit }, "Edit")),
            handleDelete && (react_1.default.createElement("button", { className: "flex w-full items-center px-2 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none", onClick: handleDelete }, "Delete")))));
};
exports.default = MenuButton;
