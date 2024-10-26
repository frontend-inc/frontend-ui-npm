'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var __1 = require("../..");
var frontend_shadcn_1 = require("frontend-shadcn");
var DataListItem = function (props) {
    var _a = props || {}, sortable = _a.sortable, selectable = _a.selectable, selected = _a.selected, label = _a.label, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, secondaryAction = _a.secondaryAction, _b = _a.height, height = _b === void 0 ? 180 : _b, image = _a.image, handleClick = _a.handleClick, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete, handleSelect = _a.handleSelect, _c = _a.slots, slots = _c === void 0 ? {
        item: {},
        image: {},
    } : _c;
    var handleChange = function () {
        if (handleSelect) {
            handleSelect();
        }
    };
    return (react_1.default.createElement("div", { className: "w-full flex flex-row pt-1 pb-2 overflow-hidden border-b border-divider bg-background" },
        react_1.default.createElement("div", { className: "w-full flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1" },
            react_1.default.createElement("div", { className: "flex flex-row items-start" },
                selectable && (react_1.default.createElement(frontend_shadcn_1.Checkbox, { checked: selected, onCheckedChange: handleChange, className: "mr-2" })),
                sortable && (react_1.default.createElement(__1.Icon, { name: "GripVertical", className: "text-muted-foreground" })),
                react_1.default.createElement("div", { className: "pr-0 sm:pr-2 mr-0 sm:mr-2 w-full sm:w-[220px] sm:min-w-[220px] h-full" },
                    react_1.default.createElement(__1.TouchableOpacity, { handleClick: handleClick },
                        react_1.default.createElement(__1.Image, __assign({ label: label, src: image, height: height, alt: primary }, slots.image))))),
            react_1.default.createElement("div", { className: "flex flex-row space-x-1 w-full" },
                react_1.default.createElement("div", { className: "flex flex-col justify-between items-start h-full w-full py-0 sm:py-1" },
                    react_1.default.createElement("div", { className: "flex flex-col space-y-0.5" },
                        react_1.default.createElement(core_1.Typography, { variant: "subtitle2" }, primary),
                        react_1.default.createElement(core_1.Typography, { className: "text-muted-foreground", variant: "body2" }, secondary)),
                    react_1.default.createElement("div", { className: "flex flex-row justify-end" }, actions)),
                react_1.default.createElement("div", { className: "flex flex-row justify-end" }, (handleEdit || handleDelete) && (react_1.default.createElement(__1.MenuButton, { handleEdit: handleEdit, handleDelete: handleDelete }, secondaryAction)))))));
};
exports.default = DataListItem;
