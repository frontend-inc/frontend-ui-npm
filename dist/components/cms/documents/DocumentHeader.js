'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var react_3 = require("@nextui-org/react");
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var react_4 = require("@remixicon/react");
var DocumentHeader = function (props) {
    var url = props.url, _a = props.query, defaultQuery = _a === void 0 ? {} : _a, _b = props.filterOptions, filterOptions = _b === void 0 ? [] : _b, _c = props.sortOptions, sortOptions = _c === void 0 ? [] : _c, _d = props.enableCreate, enableCreate = _d === void 0 ? false : _d, _e = props.enableSearch, enableSearch = _e === void 0 ? false : _e, _f = props.enableFilters, enableFilters = _f === void 0 ? false : _f, _g = props.enableSorting, enableSorting = _g === void 0 ? false : _g, _h = props.buttonText, buttonText = _h === void 0 ? 'Add' : _h;
    var _j = (0, hooks_1.useSearch)({
        url: url,
        query: defaultQuery,
    }), query = _j.query, keywords = _j.keywords, handleKeywordChange = _j.handleKeywordChange, handleSearch = _j.handleSearch, handleSortBy = _j.handleSortBy, handleSortDirection = _j.handleSortDirection, activeFilters = _j.activeFilters, handleToggleFilter = _j.handleToggleFilter;
    var handleFilterClick = function (name, value) {
        handleToggleFilter({
            name: name,
            value: value,
            operator: 'eq',
        });
    };
    var handleAdd = (0, hooks_1.useDocumentForms)().handleAdd;
    if (!enableSearch && !enableFilters && !enableSorting && !enableCreate) {
        return null;
    }
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-1 mb-1" },
        react_1.default.createElement("div", { className: "flex flex-col sm:flex-row justify-between space-y-1 sm:space-y-0 sm:space-x-1" },
            react_1.default.createElement("div", { className: "flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-1" },
                enableSearch && (react_1.default.createElement(__1.SearchInput, { value: keywords, handleChange: handleKeywordChange, handleSearch: handleSearch })),
                enableFilters && (react_1.default.createElement("div", { className: "w-full sm:w-auto" },
                    react_1.default.createElement(__1.FilterButton, { filterOptions: filterOptions, filters: activeFilters, handleFilter: handleFilterClick }))),
                enableSorting && (react_1.default.createElement("div", { className: "w-full sm:w-auto" },
                    react_1.default.createElement(__1.SortButton, { sortOptions: sortOptions, sortBy: (query === null || query === void 0 ? void 0 : query.sort_by) || 'id', sortDirection: (query === null || query === void 0 ? void 0 : query.sort_direction) || 'desc', handleSortBy: handleSortBy, handleSortDirection: handleSortDirection })))),
            enableCreate && (react_1.default.createElement("div", { className: "flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-1" },
                react_1.default.createElement(react_2.Button, { variant: "solid", color: "primary", className: (0, react_3.cn)('w-full sm:w-auto'), onPress: handleAdd, startContent: react_1.default.createElement(react_4.RiAddFill, null) }, buttonText))))));
};
exports.default = DocumentHeader;
