'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@dnd-kit/core");
var frontend_shadcn_1 = require("frontend-shadcn");
var Droppable = function (_a) {
    var id = _a.id, children = _a.children;
    var _b = (0, core_1.useDroppable)({
        id: id,
    }), isOver = _b.isOver, setNodeRef = _b.setNodeRef;
    return (react_1.default.createElement("div", { ref: setNodeRef, className: (0, frontend_shadcn_1.cn)('flex flex-row items-center justify-center w-[260px] h-full p-2 rounded', 'border border-border', isOver && 'border-primary') }, children));
};
exports.default = Droppable;
