'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_3 = require("frontend-shadcn");
var MediaItem = function (_a) {
    var _b;
    var item = _a.item, selected = _a.selected, handleClick = _a.handleClick, handleRemove = _a.handleRemove;
    var _c = (0, react_1.useState)(''), contentType = _c[0], setContentType = _c[1];
    (0, react_1.useEffect)(function () {
        var _a;
        setContentType((_a = item === null || item === void 0 ? void 0 : item.content_type) === null || _a === void 0 ? void 0 : _a.split('/')[0]);
    }, [item]);
    return (react_1.default.createElement(frontend_shadcn_1.Card, { className: (0, frontend_shadcn_3.cn)('rounded-md bg-background p-0 min-w-[120px] h-[208px] border border-transparent', selected && 'border-primary') },
        react_1.default.createElement(frontend_shadcn_1.CardHeader, { className: "py-1 px-1 flex flex-row justify-between items-center" },
            react_1.default.createElement(components_1.Label, { variant: "outline", label: (_b = item === null || item === void 0 ? void 0 : item.content_type) === null || _b === void 0 ? void 0 : _b.split('/')[1] }),
            handleRemove && (react_1.default.createElement(frontend_shadcn_2.DropdownMenu, null,
                react_1.default.createElement(frontend_shadcn_2.DropdownMenuTrigger, { asChild: true },
                    react_1.default.createElement(components_2.Button, { variant: "ghost", className: "h-8 w-8 p-0" },
                        react_1.default.createElement(lucide_react_1.MoreHorizontal, { className: "h-4 w-4" }))),
                react_1.default.createElement(frontend_shadcn_2.DropdownMenuContent, { align: "end" },
                    react_1.default.createElement(frontend_shadcn_2.DropdownMenuItem, { onClick: handleRemove }, "Remove"))))),
        contentType === 'image' || contentType === 'video' ? (react_1.default.createElement(components_1.TouchableOpacity, { handleClick: function () { return handleClick && handleClick(item); } },
            react_1.default.createElement("div", { className: "h-[160px] w-[180px] flex items-center justify-center overflow-hidden" },
                react_1.default.createElement(components_1.Image, { disableBorderRadius: true, aspectRatio: 4 / 3, src: item === null || item === void 0 ? void 0 : item.url, alt: item === null || item === void 0 ? void 0 : item.content_type })))) : (react_1.default.createElement(components_1.AttachmentImage, { icon: "File", width: 64, height: 64 }))));
};
exports.default = MediaItem;
