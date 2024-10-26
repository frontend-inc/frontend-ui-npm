'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
var components_2 = require("../../../../components");
var helpers_1 = require("../../../../helpers");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var SortableReferenceItem = function (_a) {
    var _b;
    var item = _a.item, handleEditItem = _a.handleEditItem, handleRemoveItem = _a.handleRemoveItem;
    var target = (item || {}).target;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_2.cn)('flex flex-row bg-background border-2 border-border rounded-md p-0 mb-1 w-full', item.isDragging && 'bg-background-hover') },
        react_1.default.createElement("div", { className: "flex items-center justify-center w-8 bg-muted rounded-l-md" },
            react_1.default.createElement(components_1.Icon, { name: "GripVertical", className: "text-primary" })),
        react_1.default.createElement("div", { className: "w-18" },
            react_1.default.createElement(components_1.Image, { src: (_b = target === null || target === void 0 ? void 0 : target.image) === null || _b === void 0 ? void 0 : _b.url, alt: target === null || target === void 0 ? void 0 : target.title, height: 72, disableBorderRadius: true })),
        react_1.default.createElement("div", { className: "flex-grow" },
            react_1.default.createElement("div", { className: "flex justify-between items-center px-2" },
                react_1.default.createElement("div", { className: "flex-grow" },
                    react_1.default.createElement(components_1.Label, { label: target === null || target === void 0 ? void 0 : target.content_type })),
                react_1.default.createElement("div", { className: "flex items-center" },
                    react_1.default.createElement(components_2.PublishLabel, { published: target === null || target === void 0 ? void 0 : target.published }),
                    react_1.default.createElement(frontend_shadcn_1.DropdownMenu, null,
                        react_1.default.createElement(frontend_shadcn_1.DropdownMenuTrigger, { asChild: true },
                            react_1.default.createElement(components_1.MenuButton, null)),
                        react_1.default.createElement(frontend_shadcn_1.DropdownMenuContent, null,
                            react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { onClick: function () { return handleEditItem(target); } }, "Edit"),
                            react_1.default.createElement(frontend_shadcn_1.DropdownMenuItem, { onClick: function () { return handleRemoveItem(item); } }, "Remove"))))),
            react_1.default.createElement("div", { className: "px-2 pb-1" },
                react_1.default.createElement("p", { className: "text-sm font-medium text-foreground" }, (0, helpers_1.truncate)(target === null || target === void 0 ? void 0 : target.title))))));
};
exports.default = SortableReferenceItem;
