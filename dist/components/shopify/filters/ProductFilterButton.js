"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var material_1 = require("@mui/material");
var lucide_react_1 = require("lucide-react");
var ProductFiltersList_1 = __importDefault(require("./ProductFiltersList"));
var ProductFilterButton = function (props) {
    var _a = (0, hooks_1.useMenu)(), open = _a.open, toggleMenu = _a.toggleMenu, closeMenu = _a.closeMenu, anchorEl = _a.anchorEl;
    var _b = props.filters, filters = _b === void 0 ? [] : _b, _c = props.options, options = _c === void 0 ? [] : _c, handleFilter = props.handleFilter, handleFilterArray = props.handleFilterArray;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Button, { sx: sx.button, onClick: toggleMenu, color: "secondary", startIcon: react_1.default.createElement(lucide_react_1.ListFilter, null) }, "Filter"),
        react_1.default.createElement(material_1.Hidden, { smDown: true },
            react_1.default.createElement(__1.Popup, { anchorEl: anchorEl, open: open, handleClose: closeMenu, p: 1 },
                react_1.default.createElement(ProductFiltersList_1.default, { filters: filters, options: options, handleFilter: handleFilter, handleFilterArray: handleFilterArray }))),
        react_1.default.createElement(material_1.Hidden, { smUp: true },
            react_1.default.createElement(__1.Drawer, { open: open, handleClose: closeMenu },
                react_1.default.createElement(ProductFiltersList_1.default, { filters: filters, options: options, handleFilter: handleFilter, handleFilterArray: handleFilterArray })))));
};
exports.default = ProductFilterButton;
var sx = {
    button: {
        width: {
            sm: 'auto',
            xs: '100%'
        },
        color: 'text.primary',
        bgcolor: 'tertiary.main',
        '&:hover': {
            bgcolor: 'tertiary.light'
        }
    },
};
