'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var react_3 = require("@nextui-org/react");
var components_1 = require("../../components");
var MenuButton = function (props) {
    var handleEdit = props.handleEdit, handleDelete = props.handleDelete, className = props.className;
    var handleAction = function (action) {
        switch (action) {
            case 'edit':
                //@ts-ignore
                handleEdit();
                break;
            case 'delete':
                //@ts-ignore
                handleDelete();
                break;
        }
    };
    return (react_1.default.createElement(react_2.Dropdown, null,
        react_1.default.createElement(react_2.DropdownTrigger, null,
            react_1.default.createElement(react_3.Button, { isIconOnly: true, "aria-label": "More options", variant: "light", className: "min-w-8 w-8 h-8" },
                react_1.default.createElement(components_1.RemixIcon, { name: "ri-more-2-line", className: className }))),
        react_1.default.createElement(react_2.DropdownMenu, { onAction: handleAction },
            handleEdit ? react_1.default.createElement(react_2.DropdownItem, { key: "edit" }, "Edit") : null,
            handleDelete ? react_1.default.createElement(react_2.DropdownItem, { key: "delete" }, "Delete") : null)));
};
exports.default = MenuButton;
