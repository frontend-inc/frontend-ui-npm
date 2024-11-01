'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_1 = require("frontend-shadcn");
var PublishButton = function (_a) {
    var document = _a.document, handleTogglePublish = _a.handleTogglePublish, _b = _a.fullWidth, fullWidth = _b === void 0 ? false : _b;
    var isPublished = document === null || document === void 0 ? void 0 : document.published;
    return (react_1.default.createElement(components_1.Button, { variant: isPublished ? 'secondary' : 'default', className: (0, frontend_shadcn_1.cn)('bg-green-500 hover:bg-green-600 text-white relative overflow-hidden transition-all duration-300', isPublished ? 'justify-center' : 'justify-center', fullWidth && 'w-full', 'h-10 px-4'), onClick: handleTogglePublish },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex items-center transition-all duration-300', isPublished ? 'space-x-2' : 'space-x-0') },
            react_1.default.createElement("span", { className: (0, frontend_shadcn_1.cn)('transition-all duration-300', isPublished ? 'translate-x-0' : 'translate-x-0') }, isPublished ? 'Published' : 'Publish'),
            react_1.default.createElement("span", { className: (0, frontend_shadcn_1.cn)('transition-all duration-300 flex items-center', isPublished ? 'opacity-100 animate-slide-fade-in' : 'opacity-0') },
                react_1.default.createElement(lucide_react_1.CheckCircle, { className: "w-5 h-5" })))));
};
exports.default = PublishButton;
