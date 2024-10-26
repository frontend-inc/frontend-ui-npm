'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FilterList_1 = __importDefault(require("./FilterList"));
var core_1 = require("../../core");
var components_1 = require("../../../components");
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var __2 = require("../..");
var SearchFilters = function (_a) {
    var _b = _a.filters, filters = _b === void 0 ? [] : _b, _c = _a.filterOptions, filterOptions = _c === void 0 ? [] : _c, handleFilter = _a.handleFilter;
    var _d = (0, hooks_1.useMenu)(), open = _d.open, toggleMenu = _d.toggleMenu, closeMenu = _d.closeMenu;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "hidden sm:block" },
            react_1.default.createElement(FilterList_1.default, { filters: filters, filterOptions: filterOptions, handleFilter: handleFilter })),
        react_1.default.createElement(core_1.Hidden, { smUp: true },
            react_1.default.createElement(components_1.Button, { variant: "secondary", className: "w-full", onClick: toggleMenu },
                react_1.default.createElement(__2.Icon, { name: "SlidersHorizontal", className: "mr-2 h-4 w-4" }),
                "Filters"),
            react_1.default.createElement(__1.Sheet, { open: open, handleClose: closeMenu },
                react_1.default.createElement(FilterList_1.default, { filters: filters, filterOptions: filterOptions, handleFilter: handleFilter })))));
};
exports.default = SearchFilters;
