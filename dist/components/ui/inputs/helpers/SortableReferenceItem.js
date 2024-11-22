'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../../..");
var frontend_shadcn_1 = require("frontend-shadcn");
var core_1 = require("../../../core");
var lucide_react_1 = require("lucide-react");
function SortableReferenceItem(_a) {
    var image = _a.image, title = _a.title, isDragging = _a.isDragging, handleDelete = _a.handleDelete, handleEdit = _a.handleEdit;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex items-center justify-between', 'px-1 py-2', 'transition-shadow duration-200', 'border border-border', 'rounded', 'my-1', 'hover:shadow-md', isDragging && 'shadow-md') },
        react_1.default.createElement("div", { className: "flex items-center" },
            react_1.default.createElement("div", { className: "mr-2 cursor-grab" },
                react_1.default.createElement(lucide_react_1.GripVertical, null)),
            react_1.default.createElement("div", { className: "mr-2 w-8 h-8" },
                react_1.default.createElement(__1.Image, { alt: "image", src: image, height: 32, width: 32 })),
            react_1.default.createElement(core_1.Typography, { variant: "body1" }, title)),
        react_1.default.createElement(__1.MenuButton, { handleDelete: handleDelete, handleEdit: handleEdit })));
}
exports.default = SortableReferenceItem;
