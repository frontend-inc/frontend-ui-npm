"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CollectionFilterList_1 = __importDefault(require("./CollectionFilterList"));
var material_1 = require("@mui/material");
var __1 = require("../../..");
var hooks_1 = require("../../../../hooks");
var CollectionSearchFilters = function (props) {
    var _a = props.filters, filters = _a === void 0 ? [] : _a, _b = props.filterOptions, filterOptions = _b === void 0 ? [] : _b, handleFilter = props.handleFilter;
    var _c = (0, hooks_1.useMenu)(), open = _c.open, toggleMenu = _c.toggleMenu, closeMenu = _c.closeMenu, anchorEl = _c.anchorEl;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Hidden, { smDown: true },
            react_1.default.createElement(CollectionFilterList_1.default, { filters: filters, filterOptions: filterOptions, handleFilter: handleFilter })),
        react_1.default.createElement(material_1.Hidden, { smUp: true },
            react_1.default.createElement(material_1.Button, { sx: sx.button, onClick: toggleMenu, variant: "text", startIcon: react_1.default.createElement(__1.Icon, { name: "SlidersHorizontal", size: 20 }) }, "Filters"),
            react_1.default.createElement(__1.Drawer, { open: open, handleClose: closeMenu, anchor: "right" },
                react_1.default.createElement(CollectionFilterList_1.default, { filters: filters, filterOptions: filterOptions, handleFilter: handleFilter })))));
};
exports.default = CollectionSearchFilters;
var sx = {
    button: {
        width: '100%',
        color: 'text.primary',
        bgcolor: 'tertiary.main',
        '&:hover': {
            bgcolor: 'tertiary.dark',
        },
    },
};
