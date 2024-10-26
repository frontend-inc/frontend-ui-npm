'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function AdminHeading(_a) {
    var title = _a.title, description = _a.description, secondaryAction = _a.secondaryAction;
    return (react_1.default.createElement("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 mb-6" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h1", { className: "text-lg font-semibold text-foreground" }, title),
            description && (react_1.default.createElement("p", { className: "text-sm text-muted-foreground mt-1" }, description))),
        secondaryAction && react_1.default.createElement("div", { className: "mt-2 sm:mt-0" }, secondaryAction)));
}
exports.default = AdminHeading;
