"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var index_1 = require("../../../constants/index");
var icons_material_1 = require("@mui/icons-material");
var lucide_react_1 = require("lucide-react");
var components_1 = require("../../../components");
var FilterForm = function (props) {
    var query = props.query, fields = props.fields, handleChange = props.handleChange, handleSearch = props.handleSearch, handleClearFilters = props.handleClearFilters;
    var _a = (0, react_1.useState)([]), filterOptions = _a[0], setFilterOptions = _a[1];
    var _b = (0, react_1.useState)([]), sortOptions = _b[0], setSortOptions = _b[1];
    var _c = (0, react_1.useState)([]), activeFilters = _c[0], setActiveFilters = _c[1];
    var defaultFilter = {
        where: "AND",
        field: "id",
        operator: "eq",
        value: "",
    };
    var handleFilterChange = function (ev, index) {
        var _a;
        var filter = activeFilters[index];
        var _b = ev.target, name = _b.name, value = _b.value;
        var updatedFilter = __assign(__assign({}, filter), (_a = {}, _a[name] = value, _a));
        // reset the filter
        if (name === "field") {
            updatedFilter = __assign(__assign({}, updatedFilter), { operator: "", value: "" });
        }
        var updatedFilters = __spreadArray([], activeFilters, true);
        updatedFilters[index] = updatedFilter;
        setActiveFilters(updatedFilters);
    };
    var handleAddFilter = function () {
        var updatedFilters = __spreadArray(__spreadArray([], activeFilters, true), [defaultFilter], false);
        setActiveFilters(updatedFilters);
    };
    var handleRemoveFilter = function (index) {
        var updatedFilters = activeFilters.filter(function (f, i) { return i != index; });
        setActiveFilters(updatedFilters);
    };
    var handleFilterSearch = function () {
        var filters = {};
        activeFilters.forEach(function (filter) {
            var _a, _b, _c;
            var where = filter.where, field = filter.field, operator = filter.operator, value = filter.value;
            if (!filters[where]) {
                filters[where] = [];
            }
            filters = __assign(__assign({}, filters), (_a = {}, _a[where] = __spreadArray(__spreadArray([], filters[where], true), [
                (_b = {},
                    _b[field] = (_c = {},
                        _c[operator] = value,
                        _c),
                    _b),
            ], false), _a));
        });
        var searchQuery = {
            page: 1,
            keywords: (query === null || query === void 0 ? void 0 : query.keywords) || "",
            per_page: (query === null || query === void 0 ? void 0 : query.per_page) || 20,
            sort_by: (query === null || query === void 0 ? void 0 : query.sort_by) || "id",
            sort_direction: (query === null || query === void 0 ? void 0 : query.sort_direction) || "desc",
            filters: filters,
        };
        handleSearch(searchQuery);
    };
    var handleFilters = function (fields) {
        var filter = function (field) { return index_1.FILTERABLE_TYPES.includes(field === null || field === void 0 ? void 0 : field.variant); };
        var filters = handleFilterFields(fields, filter);
        setFilterOptions(filters);
    };
    var handleSort = function (fields) {
        var filter = function (field) { return index_1.SORTABLE_TYPES.includes(field === null || field === void 0 ? void 0 : field.variant); };
        var filters = handleFilterFields(fields, filter);
        setSortOptions(filters);
    };
    var handleFilterFields = function (fields, filterFn) {
        return fields
            .filter(filterFn)
            .map(function (field) { return ({
            label: field.name,
            value: field.name,
            variant: field.variant,
            db_type: field.db_type,
            options: field.options,
        }); })
            .sort(function (a, b) { return a.label.localeCompare(b.label); });
    };
    var formatFilterArray = function (filters) {
        var formattedFilters = [];
        if (typeof filters === "object") {
            Object.keys(filters).forEach(function (where) {
                filters[where].forEach(function (filter) {
                    var field = Object.keys(filter)[0];
                    var operator = Object.keys(filter[field])[0];
                    var value = filter[field][operator];
                    formattedFilters.push({
                        where: where,
                        field: field,
                        operator: operator,
                        value: value,
                    });
                });
            });
            setActiveFilters(formattedFilters);
        }
        return formattedFilters;
    };
    (0, react_1.useEffect)(function () {
        if (query === null || query === void 0 ? void 0 : query.filters) {
            formatFilterArray(query === null || query === void 0 ? void 0 : query.filters);
        }
    }, [query]);
    (0, react_1.useEffect)(function () {
        if (fields) {
            handleFilters(fields);
            handleSort(fields);
        }
    }, [fields]);
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(material_1.Box, { sx: sx.searchBar },
            react_1.default.createElement(components_1.FilterKeywordsInput, { label: "keywords", value: query === null || query === void 0 ? void 0 : query.keywords, handleChange: handleChange, handleSearch: handleFilterSearch })),
        react_1.default.createElement(material_1.Box, { sx: sx.searchBar },
            react_1.default.createElement(components_1.FilterSortInput, { label: "sort by", fieldOptions: sortOptions, handleChange: handleChange, sortBy: query === null || query === void 0 ? void 0 : query.sort_by, sortDirection: query === null || query === void 0 ? void 0 : query.sort_direction })),
        react_1.default.createElement(components_1.FilterInputs, { filters: activeFilters, fieldOptions: filterOptions, handleChange: handleFilterChange, handleRemove: handleRemoveFilter }),
        react_1.default.createElement(material_1.Box, { sx: sx.inputField },
            react_1.default.createElement(material_1.Box, { sx: sx.inputLabel }),
            react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(material_1.Button, { variant: "contained", color: "secondary", startIcon: react_1.default.createElement(lucide_react_1.Plus, null), onClick: handleAddFilter, sx: sx.addFilterButton }, "Filter"))),
        react_1.default.createElement(material_1.Button, { sx: sx.button, startIcon: react_1.default.createElement(lucide_react_1.Search, { size: 20 }), onClick: handleFilterSearch, fullWidth: true, variant: "contained", color: "primary" }, "Search"),
        react_1.default.createElement(material_1.Button, { sx: sx.button, startIcon: react_1.default.createElement(icons_material_1.FilterList, null), onClick: handleClearFilters, fullWidth: true, variant: "outlined", color: "secondary" }, "Reset filters")));
};
exports.default = FilterForm;
var sx = {
    button: {
        mt: 2,
    },
    searchBar: {
        width: "100%",
    },
    inputField: {
        py: 0.5,
        px: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    inputLabel: {
        minWidth: "100px",
    },
    addFilterButton: {
        maxWidth: "160px",
        width: { sm: "100%" },
    },
    icon: {
        height: "20px",
        width: "20px",
        color: "icon",
    },
};
