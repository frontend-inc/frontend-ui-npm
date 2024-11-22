'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var frontend_shadcn_1 = require("frontend-shadcn");
var react_2 = require("@remixicon/react");
var ResourceHeader = function (props) {
    var _a = props || {}, _b = _a.direction, direction = _b === void 0 ? 'row' : _b, _c = _a.buttonText, buttonText = _c === void 0 ? 'Add' : _c, enableSearch = _a.enableSearch, enableFilters = _a.enableFilters, enableSorting = _a.enableSorting, enableCreate = _a.enableCreate, handleSearch = _a.handleSearch, handleKeywordChange = _a.handleKeywordChange, handleFilter = _a.handleFilter, handleClearFilters = _a.handleClearFilters, handleSort = _a.handleSort, handleSortDirection = _a.handleSortDirection, handleAdd = _a.handleAdd, keywords = _a.keywords, activeFilters = _a.activeFilters, filterOptions = _a.filterOptions, sortOptions = _a.sortOptions, secondaryAction = _a.secondaryAction, _d = _a.query, query = _d === void 0 ? {} : _d;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col space-y-2 w-full align-center justify-between', direction == 'row' && 'sm:flex-row sm:space-x-2 sm:space-y-0') },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full flex flex-col space-y-2 items-center justify-start', direction == 'row' && 'sm:flex-row sm:space-x-2 sm:space-y-0') },
            enableSearch && (react_1.default.createElement(__1.SearchInput, { value: keywords, handleChange: handleKeywordChange, handleSearch: handleSearch })),
            enableFilters && (react_1.default.createElement(__1.FilterButton, { filters: activeFilters, handleFilter: handleFilter, filterOptions: filterOptions })),
            enableSorting && (react_1.default.createElement(__1.SortButton, { sortBy: (query === null || query === void 0 ? void 0 : query.sort_by) || 'id', sortDirection: (query === null || query === void 0 ? void 0 : query.sort_direction) || 'desc', sortOptions: sortOptions, handleSortBy: handleSort, handleSortDirection: handleSortDirection }))),
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col space-y-2 w-full align-center justify-end', direction == 'row' && 'sm:flex-row sm:space-x-2 sm:space-y-0') },
            secondaryAction,
            (enableCreate || secondaryAction) && (react_1.default.createElement(components_1.Button, { size: "default", className: "w-full sm:w-auto", onClick: handleAdd, startIcon: react_1.default.createElement(react_2.RiAddFill, { className: "text-primary-foreground" }) }, buttonText)))));
};
exports.default = ResourceHeader;
