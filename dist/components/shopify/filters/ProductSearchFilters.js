"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ProductFiltersList_1 = __importDefault(require("./ProductFiltersList"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var ProductSearchFilters = function (props) {
    var _a = props.filters, filters = _a === void 0 ? [] : _a, _b = props.options, options = _b === void 0 ? [] : _b, _c = props.priceOptions, priceOptions = _c === void 0 ? [] : _c, handleFilter = props.handleFilter, handleFilterArray = props.handleFilterArray;
    var _d = (0, hooks_1.useMenu)(), open = _d.open, toggleMenu = _d.toggleMenu, closeMenu = _d.closeMenu, anchorEl = _d.anchorEl;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Hidden, { smDown: true },
            react_1.default.createElement(ProductFiltersList_1.default, { filters: filters, options: options, priceOptions: priceOptions, handleFilter: handleFilter, handleFilterArray: handleFilterArray })),
        react_1.default.createElement(material_1.Hidden, { smUp: true },
            react_1.default.createElement(material_1.Button, { sx: sx.button, onClick: toggleMenu, variant: "contained", color: "secondary", startIcon: react_1.default.createElement(__1.Icon, { name: "SlidersHorizontal", size: 20 }) }, "Filters"),
            react_1.default.createElement(__1.Drawer, { open: open, handleClose: closeMenu, anchor: "right" },
                react_1.default.createElement(ProductFiltersList_1.default, { filters: filters, options: options, priceOptions: priceOptions, handleFilter: handleFilter, handleFilterArray: handleFilterArray })))));
};
exports.default = ProductSearchFilters;
var sx = {
    button: {
        width: '100%',
    },
};
