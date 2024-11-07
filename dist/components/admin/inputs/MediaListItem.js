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
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_3 = require("frontend-shadcn");
var MediaItem = function (_a) {
    var item = _a.item, selected = _a.selected, handleClick = _a.handleClick, handleRemove = _a.handleRemove;
    return (react_1.default.createElement(frontend_shadcn_1.Card, { className: (0, frontend_shadcn_3.cn)('rounded-md bg-muted/20 hover:bg-muted/50 p-0 min-w-[160px] h-[200px] border border-transparent overflow-hidden', selected && 'border-primary') },
        react_1.default.createElement(frontend_shadcn_1.CardHeader, { className: "py-1 px-1 flex flex-row justify-end items-center" }, handleRemove && (react_1.default.createElement(frontend_shadcn_2.DropdownMenu, null,
            react_1.default.createElement(frontend_shadcn_2.DropdownMenuTrigger, { asChild: true },
                react_1.default.createElement(components_2.Button, { variant: "ghost", className: "h-8 w-8 p-0" },
                    react_1.default.createElement(lucide_react_1.MoreHorizontal, { className: "h-4 w-4" }))),
            react_1.default.createElement(frontend_shadcn_2.DropdownMenuContent, { align: "end" },
                react_1.default.createElement(frontend_shadcn_2.DropdownMenuItem, { onClick: handleRemove }, "Remove"))))),
        react_1.default.createElement(frontend_shadcn_1.CardContent, { className: "p-0" }, item.resource_type === 'file' ? (react_1.default.createElement(components_1.AttachmentImage, { icon: "File", width: 64, height: 64 })) : (react_1.default.createElement("div", { className: "min-h-[180px] w-[242px]" },
            react_1.default.createElement("button", { onClick: function () { return handleClick(item); }, className: "w-full focus:outline-none p-0" },
                react_1.default.createElement(components_1.Image, { aspectRatio: 1.5, disableBorderRadius: true, src: item === null || item === void 0 ? void 0 : item.thumbnail_url, alt: item === null || item === void 0 ? void 0 : item.content_type, height: 240 })))))));
};
exports.default = MediaItem;
