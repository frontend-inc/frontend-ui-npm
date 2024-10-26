'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var TabContent_1 = __importDefault(require("./TabContent"));
var CustomTabs = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b;
    return (react_1.default.createElement(frontend_shadcn_1.Tabs, { defaultValue: "0", className: "w-full" },
        react_1.default.createElement(frontend_shadcn_1.TabsList, { className: "flex justify-center mb-4" }, items.map(function (item, i) { return (react_1.default.createElement(frontend_shadcn_1.TabsTrigger, { key: i, value: i.toString(), className: "flex items-center justify-center" },
            item.icon && (react_1.default.createElement(components_1.Icon, { name: item.icon, className: "w-5 h-5 mr-2 text-current" })),
            item.label)); })),
        items.map(function (item, i) { return (react_1.default.createElement(frontend_shadcn_1.TabsContent, { key: i, value: i.toString() },
            react_1.default.createElement(TabContent_1.default, { active: true, title: item.title, description: item.description, image: item.image }))); }),
        items.length === 0 && (react_1.default.createElement("div", { className: "flex flex-col items-center justify-center p-8 text-center" },
            react_1.default.createElement(components_1.Icon, { name: "Search", className: "w-12 h-12 text-gray-400 mb-4" }),
            react_1.default.createElement("h2", { className: "text-xl font-semibold mb-2" }, "No content"),
            react_1.default.createElement("p", { className: "text-gray-600" }, "Your content will appear here.")))));
};
exports.default = CustomTabs;
