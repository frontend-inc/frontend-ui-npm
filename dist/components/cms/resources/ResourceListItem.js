'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var frontend_shadcn_1 = require("frontend-shadcn");
var react_3 = require("@nextui-org/react");
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var components_2 = require("../../../components");
var components_3 = require("../../../components");
function ResourceListItem(props) {
    var icon = props.icon, avatar = props.avatar, _a = props.color, color = _a === void 0 ? 'bg-accent' : _a, primary = props.primary, secondary = props.secondary, image = props.image, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, handleSelect = props.handleSelect, secondaryAction = props.secondaryAction, sortable = props.sortable, selectable = props.selectable, selected = props.selected, _b = props.disableImage, disableImage = _b === void 0 ? false : _b;
    return (react_1.default.createElement("div", { className: (0, react_2.cn)('group', 'hover:bg-content2 transition-all duration-200 p-1 py-2 overflow-hidden rounded-xl', selected && 'border-primary') },
        react_1.default.createElement("div", { className: "flex items-center p-1 rounded space-x-4" },
            sortable && (react_1.default.createElement(lucide_react_1.GripVertical, { className: "w-4 h-4 opacity-0 group-hover:opacity-100 text-foreground cursor-grab active:cursor-grabbing" })),
            selectable && (react_1.default.createElement(react_3.Checkbox, { isSelected: selected, onValueChange: handleSelect })),
            avatar && (react_1.default.createElement("div", { className: "mr-2" },
                react_1.default.createElement("button", { className: "w-full h-full focus:outline-none focus:ring-2 items-center justify-center", onClick: handleClick }, avatar))),
            !disableImage && (react_1.default.createElement("div", { className: "mr-2 min-w-[64px] min-h-[64px]" },
                react_1.default.createElement("button", { className: "w-full h-full focus:outline-none focus:ring-2 items-center justify-center", onClick: handleClick },
                    react_1.default.createElement(components_3.Image, { src: image || null, aspectRatio: 1.0, alt: image })))),
            icon && (react_1.default.createElement("button", { className: "focus:outline-none focus:ring-2 items-center justify-center", onClick: handleClick },
                react_1.default.createElement(frontend_shadcn_1.Avatar, { className: "mr-2 rounded" },
                    react_1.default.createElement(frontend_shadcn_1.AvatarFallback, { className: color },
                        react_1.default.createElement(components_3.RemixIcon, { name: icon, className: 'text-white' }))))),
            react_1.default.createElement("div", { className: "flex-grow cursor-pointer", onClick: handleClick },
                react_1.default.createElement(components_2.Typography, { variant: "body1" }, primary),
                secondary && (react_1.default.createElement(components_2.Typography, { variant: "body2", className: "text-foreground/70" }, secondary))),
            react_1.default.createElement("div", { className: "flex items-center space-x-1" },
                secondaryAction,
                (handleEdit || handleDelete) && (react_1.default.createElement(components_1.MenuButton, { handleEdit: handleEdit, handleDelete: handleDelete }))))));
}
exports.default = ResourceListItem;
