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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var index_1 = require("../../../../constants/index");
var FilterInput_1 = __importDefault(require("../filters/FilterInput"));
var SortFields = function (props) {
    var fields = props.fields, sortBy = props.sortBy, sortDirection = props.sortDirection, handleSortBy = props.handleSortBy, handleSortDirection = props.handleSortDirection;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(FilterInput_1.default, { label: "Sort by" }, fields === null || fields === void 0 ? void 0 : fields.map(function (field) { return (react_1.default.createElement(material_1.ListItem, { disablePadding: true, disableGutters: true, sx: sx.listItem },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, disableRipple: true, onClick: function () { return handleSortBy(field === null || field === void 0 ? void 0 : field.name); } },
                react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(material_1.Radio, { checked: sortBy == (field === null || field === void 0 ? void 0 : field.name), onChange: function () { return handleSortBy(field === null || field === void 0 ? void 0 : field.name); } })),
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "button" }, field === null || field === void 0 ? void 0 : field.name) })))); })),
        react_1.default.createElement(FilterInput_1.default, { label: "Direction" }, index_1.SORT_DIRECTIONS.map(function (direction, i) { return (react_1.default.createElement(material_1.ListItem, { disablePadding: true, key: i, sx: sx.listItem },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, disableRipple: true, onClick: function () { return handleSortDirection(direction === null || direction === void 0 ? void 0 : direction.value); } },
                react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(material_1.Radio, { checked: sortDirection == (direction === null || direction === void 0 ? void 0 : direction.value), onChange: function () { return handleSortDirection(direction === null || direction === void 0 ? void 0 : direction.value); } })),
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "button" }, direction === null || direction === void 0 ? void 0 : direction.label) })))); }))));
};
var SortButton = function (props) {
    var fields = props.fields, sortBy = props.sortBy, sortDirection = props.sortDirection, handleSortBy = props.handleSortBy, handleSortDirection = props.handleSortDirection;
    var _a = (0, react_1.useState)(false), showModal = _a[0], setShowModal = _a[1];
    var _b = (0, react_1.useState)(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var handleOpenModal = function (event) {
        setAnchorEl(event.currentTarget);
        setShowModal(true);
    };
    var handleCloseModal = function () {
        setShowModal(false);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.ButtonGroup, null,
            react_1.default.createElement(material_1.Button, { sx: sx.button, variant: "text", onClick: handleOpenModal, endIcon: sortDirection == "asc" ? (react_1.default.createElement(__1.Icon, { name: "ArrowUp", size: 20 })) : (react_1.default.createElement(__1.Icon, { name: "ArrowDown", size: 20 })) },
                "Sort ",
                sortBy == "id" ? "by" : sortBy)),
        react_1.default.createElement(material_1.Hidden, { smDown: true },
            react_1.default.createElement(__1.Popup, { p: 1, anchorEl: anchorEl, open: showModal, handleClose: handleCloseModal },
                react_1.default.createElement(SortFields, { fields: fields, sortBy: sortBy, sortDirection: sortDirection, handleSortBy: handleSortBy, handleSortDirection: handleSortDirection }))),
        react_1.default.createElement(material_1.Hidden, { smUp: true },
            react_1.default.createElement(__1.Drawer, { title: "Sort", open: showModal, handleClose: handleCloseModal, anchor: "right" },
                react_1.default.createElement(SortFields, { fields: fields, sortBy: sortBy, sortDirection: sortDirection, handleSortBy: handleSortBy, handleSortDirection: handleSortDirection })))));
};
exports.default = SortButton;
var sx = {
    button: {
        color: "text.secondary",
        borderRight: "none",
        "&:hover": {
            borderRight: "none",
        },
    },
    listItem: {
        py: 0,
    },
    listItemButton: {
        p: 0,
    },
    listItemIcon: {
        minWidth: "32px",
    },
    sortDirectionButton: {
        width: "32px",
        borderLeft: "none",
        "&:hover": {
            borderLeft: "none",
        },
    },
    icon: {
        height: "20px",
        width: "20px",
    },
};
