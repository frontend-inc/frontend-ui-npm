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
// Assuming SORT_DIRECTIONS is imported from a constants file
var SORT_DIRECTIONS = [
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' },
];
function SortList(props) {
    var sortOptions = props.sortOptions, sortBy = props.sortBy, sortDirection = props.sortDirection, handleSortBy = props.handleSortBy, handleSortDirection = props.handleSortDirection;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-3 w-full p-4" },
        react_1.default.createElement(components_1.Typography, { variant: "body1", className: "text-primary font-medium" }, "Sort by"),
        react_1.default.createElement("ul", { className: "space-y-1" }, sortOptions === null || sortOptions === void 0 ? void 0 : sortOptions.map(function (sortOption) { return (react_1.default.createElement(components_1.Button, { key: sortOption.name, variant: "ghost", className: (0, frontend_shadcn_1.cn)('w-full justify-between', sortBy === sortOption.name && 'bg-muted'), onClick: function () { return handleSortBy(sortOption); }, endIcon: sortBy === sortOption.name && react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4" }) }, sortOption.label)); })),
        react_1.default.createElement(components_1.Typography, { variant: "body1", className: "text-primary font-medium" }, "Direction"),
        react_1.default.createElement("ul", { className: "space-y-1" }, SORT_DIRECTIONS.map(function (direction) { return (react_1.default.createElement(components_1.Button, { key: direction.value, variant: "ghost", fullWidth: true, onClick: function () {
                return handleSortDirection(direction.value);
            }, className: (0, frontend_shadcn_1.cn)('justify-between', sortDirection === direction.value && 'bg-muted'), endIcon: sortDirection === direction.value && (react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4 ml-2" })) }, direction.label)); }))));
}
exports.default = SortList;
