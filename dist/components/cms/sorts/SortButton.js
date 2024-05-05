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
var ui_1 = require("../../ui");
var SortList_1 = __importDefault(require("./SortList"));
var SortButton = function (props) {
    var sortOptions = props.sortOptions, sortBy = props.sortBy, sortDirection = props.sortDirection, handleSortBy = props.handleSortBy, handleSortDirection = props.handleSortDirection;
    var _a = (0, react_1.useState)(null), selected = _a[0], setSelected = _a[1];
    var _b = (0, react_1.useState)(false), showModal = _b[0], setShowModal = _b[1];
    var _c = (0, react_1.useState)(null), anchorEl = _c[0], setAnchorEl = _c[1];
    var handleOpenModal = function (event) {
        setAnchorEl(event.currentTarget);
        setShowModal(true);
    };
    var handleCloseModal = function () {
        setShowModal(false);
    };
    (0, react_1.useEffect)(function () {
        if ((sortOptions === null || sortOptions === void 0 ? void 0 : sortOptions.length) > 0 && sortBy) {
            setSelected(sortOptions.find(function (option) { return option.field == sortBy; }));
        }
    }, [sortOptions, sortBy]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Button, { sx: sx.button, color: "secondary", variant: "contained", onClick: handleOpenModal, endIcon: react_1.default.createElement(ui_1.Icon, { name: sortDirection == 'asc' ? 'ArrowUp' : 'ArrowDown', color: "secondary.contrastText", size: 20 }) }, (selected === null || selected === void 0 ? void 0 : selected.label) ? selected === null || selected === void 0 ? void 0 : selected.label : 'Sort'),
        react_1.default.createElement(material_1.Hidden, { smDown: true },
            react_1.default.createElement(ui_1.Popup, { p: 0, anchorEl: anchorEl, open: showModal, handleClose: handleCloseModal, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                }, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                } },
                react_1.default.createElement(SortList_1.default, { sortOptions: sortOptions, sortBy: sortBy, sortDirection: sortDirection, handleSortBy: handleSortBy, handleSortDirection: handleSortDirection }))),
        react_1.default.createElement(material_1.Hidden, { smUp: true },
            react_1.default.createElement(ui_1.Drawer, { title: "Sort", open: showModal, handleClose: handleCloseModal, anchor: 'right' },
                react_1.default.createElement(SortList_1.default, { sortOptions: sortOptions, sortBy: sortBy, sortDirection: sortDirection, handleSortBy: handleSortBy, handleSortDirection: handleSortDirection })))));
};
exports.default = SortButton;
var sx = {
    button: {
        borderRight: 'none',
        '&:hover': {
            borderRight: 'none',
        },
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
};
