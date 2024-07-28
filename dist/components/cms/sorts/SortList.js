"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var index_1 = require("../../../constants/index");
var SortList = function (props) {
    var sortOptions = props.sortOptions, sortBy = props.sortBy, sortDirection = props.sortDirection, handleSortBy = props.handleSortBy, handleSortDirection = props.handleSortDirection;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(__1.MenuList, { disablePadding: true, label: "Sort by" }, sortOptions === null || sortOptions === void 0 ? void 0 : sortOptions.map(function (sortOption) { return (react_1.default.createElement(material_1.ListItem, { disablePadding: true, disableGutters: true, sx: sx.listItem },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, disableRipple: true, onClick: function () { return handleSortBy(sortOption); } },
                react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(material_1.Radio, { checked: sortBy == (sortOption === null || sortOption === void 0 ? void 0 : sortOption.name), onChange: function () { return handleSortBy(sortOption); } })),
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "button" }, sortOption === null || sortOption === void 0 ? void 0 : sortOption.label) })))); })),
        react_1.default.createElement(__1.MenuList, { disablePadding: true, label: "Direction" }, index_1.SORT_DIRECTIONS.map(function (direction, i) { return (react_1.default.createElement(material_1.ListItem, { disablePadding: true, key: i, sx: sx.listItem },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, disableRipple: true, onClick: function () { return handleSortDirection(direction === null || direction === void 0 ? void 0 : direction.value); } },
                react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(material_1.Radio, { checked: sortDirection == (direction === null || direction === void 0 ? void 0 : direction.value), onChange: function () { return handleSortDirection(direction === null || direction === void 0 ? void 0 : direction.value); } })),
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "button" }, direction === null || direction === void 0 ? void 0 : direction.label) })))); }))));
};
exports.default = SortList;
var sx = {
    listItem: {
        py: 0,
    },
    listItemButton: {
        p: 0,
    },
    listItemIcon: {
        minWidth: '40px',
    },
    sortDirectionButton: {
        width: '32px',
        borderLeft: 'none',
        '&:hover': {
            borderLeft: 'none',
        },
    },
};
