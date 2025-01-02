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
var react_2 = require("@nextui-org/react");
var lucide_react_1 = require("lucide-react");
var react_3 = require("@nextui-org/react");
var SORT_DIRECTIONS = [
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' },
];
function SortButton(props) {
    var _a = props || {}, sortOptions = _a.sortOptions, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSortBy = _a.handleSortBy, handleSortDirection = _a.handleSortDirection;
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var toggleOpen = function () { return setIsOpen(!isOpen); };
    var handleSortByKeys = function (key) {
        handleSortBy(key === null || key === void 0 ? void 0 : key.currentKey);
    };
    var handleSortDirectionKeys = function (key) {
        handleSortDirection(key === null || key === void 0 ? void 0 : key.currentKey);
    };
    return (react_1.default.createElement(react_2.Popover, { isOpen: isOpen, onOpenChange: setIsOpen },
        react_1.default.createElement(react_2.PopoverTrigger, null,
            react_1.default.createElement(react_2.Button, { variant: "ghost", onPress: toggleOpen, className: "text-foreground w-full md:w-auto", endContent: sortDirection === 'asc' ? (react_1.default.createElement(lucide_react_1.ArrowUp, { className: "h-4 w-4 text-foreground" })) : (react_1.default.createElement(lucide_react_1.ArrowDown, { className: "h-4 w-4 text-foreground" })) }, "Sort")),
        react_1.default.createElement(react_2.PopoverContent, { className: "w-full md:min-w-[220px]" },
            react_1.default.createElement(react_3.Listbox, { disallowEmptySelection: true, selectedKeys: [sortBy], selectionMode: "single", 
                //@ts-ignore 
                onSelectionChange: handleSortByKeys },
                react_1.default.createElement(react_3.ListboxSection, { title: "Sort by" }, sortOptions === null || sortOptions === void 0 ? void 0 : sortOptions.map(function (sortOption) { return (react_1.default.createElement(react_3.ListboxItem, { key: sortOption.name }, sortOption.label)); }))),
            react_1.default.createElement(react_3.Listbox, { disallowEmptySelection: true, selectedKeys: [sortDirection], selectionMode: "single", 
                //@ts-ignore
                onSelectionChange: handleSortDirectionKeys },
                react_1.default.createElement(react_3.ListboxSection, { title: "Sort direction" }, SORT_DIRECTIONS.map(function (direction) { return (react_1.default.createElement(react_3.ListboxItem, { key: direction.value }, direction.label)); }))))));
}
exports.default = SortButton;
