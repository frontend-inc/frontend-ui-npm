'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var components_2 = require("../../../components");
// Assuming SORT_DIRECTIONS is imported from a constants file
var SORT_DIRECTIONS = [
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' },
];
function SortList(_a) {
    var sortOptions = _a.sortOptions, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSortBy = _a.handleSortBy, handleSortDirection = _a.handleSortDirection;
    return (react_1.default.createElement("ul", null,
        react_1.default.createElement(components_2.MenuList, { label: "Sort By" },
            react_1.default.createElement("ul", { className: "space-y-2" }, sortOptions === null || sortOptions === void 0 ? void 0 : sortOptions.map(function (sortOption) { return (react_1.default.createElement(components_1.Button, { key: sortOption.name, variant: "outline", className: (0, frontend_shadcn_1.cn)('w-full justify-start hover:bg-primary/10', sortBy === sortOption.name &&
                    'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground'), onClick: function () { return handleSortBy(sortOption); } },
                react_1.default.createElement("span", { className: "flex-1 text-left" }, sortOption.label),
                sortBy === sortOption.name && react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4 ml-2" }))); }))),
        react_1.default.createElement(components_2.MenuList, { label: "Direction", enableBorder: true },
            react_1.default.createElement("ul", { className: "space-y-2" }, SORT_DIRECTIONS.map(function (direction) { return (react_1.default.createElement(components_1.Button, { key: direction.value, variant: "outline", className: (0, frontend_shadcn_1.cn)('w-full justify-start hover:bg-primary hover:text-primary-foreground', sortDirection === direction.value &&
                    'bg-primary text-primary-foreground'), onClick: function () {
                    return handleSortDirection(direction.value);
                } },
                react_1.default.createElement("span", { className: "flex-1 text-left" }, direction.label),
                sortDirection === direction.value && (react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4 ml-2" })))); })))));
}
exports.default = SortList;
