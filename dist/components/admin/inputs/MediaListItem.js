'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var frontend_shadcn_3 = require("frontend-shadcn");
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_4 = require("frontend-shadcn");
var MediaItem = function (_a) {
    var item = _a.item, selected = _a.selected, handleClick = _a.handleClick, handleRemove = _a.handleRemove;
    return (react_1.default.createElement(frontend_shadcn_1.Card, { className: (0, frontend_shadcn_4.cn)('rounded-md bg-background p-0 min-w-[160px] h-[208px] border border-transparent', selected && 'border-primary') },
        react_1.default.createElement(frontend_shadcn_1.CardHeader, { className: "py-1 px-1 flex flex-row justify-between items-center" },
            react_1.default.createElement(frontend_shadcn_2.Badge, { className: "px-3 py-1" }, item === null || item === void 0 ? void 0 : item.content_type),
            handleRemove && (react_1.default.createElement(frontend_shadcn_3.DropdownMenu, null,
                react_1.default.createElement(frontend_shadcn_3.DropdownMenuTrigger, { asChild: true },
                    react_1.default.createElement(components_2.Button, { variant: "ghost", className: "h-8 w-8 p-0" },
                        react_1.default.createElement(lucide_react_1.MoreHorizontal, { className: "h-4 w-4" }))),
                react_1.default.createElement(frontend_shadcn_3.DropdownMenuContent, { align: "end" },
                    react_1.default.createElement(frontend_shadcn_3.DropdownMenuItem, { onClick: handleRemove }, "Remove"))))),
        item.resource_type === 'file' ? (react_1.default.createElement(components_1.AttachmentImage, { icon: "File", width: 64, height: 64 })) : (react_1.default.createElement("div", { className: "h-[160px] w-[205px] flex items-center justify-center overflow-hidden" },
            react_1.default.createElement(components_1.Image, { disableBorderRadius: true, aspectRatio: 4 / 3, src: item === null || item === void 0 ? void 0 : item.thumbnail_url, alt: item === null || item === void 0 ? void 0 : item.content_type, handleClick: handleClick ? function () { return handleClick(item); } : undefined })))));
};
exports.default = MediaItem;
