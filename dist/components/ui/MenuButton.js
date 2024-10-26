'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../components");
var lucide_react_1 = require("lucide-react");
var MenuButton = function (props) {
    var children = props.children, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(frontend_shadcn_1.DropdownMenu, null,
        react_1.default.createElement(frontend_shadcn_1.DropdownMenuTrigger, { asChild: true },
            react_1.default.createElement(components_1.Button, { variant: "ghost", className: "h-8 w-8 p-0" },
                react_1.default.createElement("span", { className: "sr-only" }, "Open menu"),
                react_1.default.createElement(lucide_react_1.MoreVertical, { className: "h-4 w-4 text-foreground" }))),
        react_1.default.createElement(frontend_shadcn_1.DropdownMenuContent, { align: "end", className: "bg-background w-[100px]" },
            children,
            handleEdit && (react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { className: "text-foreground", onClick: handleEdit }, "Edit")),
            handleDelete && (react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { className: "text-foreground", onClick: handleDelete }, "Delete")))));
};
exports.default = MenuButton;
