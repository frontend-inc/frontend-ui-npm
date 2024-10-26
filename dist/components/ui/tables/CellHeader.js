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
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_1 = require("frontend-shadcn");
function CellHeader(_a) {
    var field = _a.field, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSort = _a.handleSort;
    var _b = (0, react_1.useState)(false), active = _b[0], setActive = _b[1];
    (0, react_1.useEffect)(function () {
        setActive(sortBy === (field === null || field === void 0 ? void 0 : field.name));
    }, [field, sortBy]);
    return (react_1.default.createElement(components_1.Button, { variant: "ghost", className: (0, frontend_shadcn_1.cn)('w-full h-11 rounded-none flex justify-between items-center px-2', 'hover:bg-muted hover:text-foreground'), onClick: function () { return handleSort(field); } },
        react_1.default.createElement("span", { className: "font-medium" }, field === null || field === void 0 ? void 0 : field.label),
        active && (react_1.default.createElement("span", { className: (0, frontend_shadcn_1.cn)('transition-transform duration-200', sortDirection === 'desc' && 'rotate-180') },
            react_1.default.createElement(lucide_react_1.ChevronUp, { className: "h-5 w-5 text-muted-foreground" })))));
}
exports.default = CellHeader;
