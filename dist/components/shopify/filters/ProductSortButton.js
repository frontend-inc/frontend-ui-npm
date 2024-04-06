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
var __1 = require("../..");
var SortList_1 = __importDefault(require("./SortList"));
var material_1 = require("@mui/material");
var frontend_shopify_1 = require("frontend-shopify");
var __2 = require("../..");
var ProductSortButton = function (props) {
    var _a;
    var _b = props.sortKey, sortKey = _b === void 0 ? 'COLLECTION_DEFAULT' : _b, reverse = props.reverse, handleClick = props.handleClick;
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var _d = (0, react_1.useState)(null), anchorEl = _d[0], setAnchorEl = _d[1];
    var handleOpen = function (ev) {
        setAnchorEl(ev.currentTarget);
        setOpen(!open);
    };
    var handleClose = function () { return setOpen(false); };
    var handleSortClick = function (sortKey, reverse) {
        handleClick(sortKey, reverse);
        setOpen(!open);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.ButtonGroup, { sx: sx.buttonGroup },
            react_1.default.createElement(material_1.Button, { sx: sx.button, variant: "contained", color: "secondary", onClick: handleOpen, endIcon: react_1.default.createElement(__2.Icon, { name: "ArrowDownUp", size: 20 }) }, (_a = frontend_shopify_1.COLLECTION_SORT_OPTIONS.find(function (option) { return option.value === sortKey; })) === null || _a === void 0 ? void 0 : _a.label)),
        react_1.default.createElement(material_1.Hidden, { smDown: true },
            react_1.default.createElement(__1.Popup, { anchorEl: anchorEl, open: open, handleClose: handleClose, p: 1 },
                react_1.default.createElement(SortList_1.default, { enableIcons: true, value: sortKey, reverse: reverse, options: frontend_shopify_1.COLLECTION_SORT_OPTIONS, handleClick: handleSortClick }))),
        react_1.default.createElement(material_1.Hidden, { smUp: true },
            react_1.default.createElement(__2.Drawer, { anchor: "right", open: open, handleClose: handleClose },
                react_1.default.createElement(SortList_1.default, { enableIcons: true, value: sortKey, reverse: reverse, options: frontend_shopify_1.COLLECTION_SORT_OPTIONS, handleClick: handleSortClick })))));
};
exports.default = ProductSortButton;
var sx = {
    buttonGroup: {
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
    button: {
        width: {
            sm: 'auto',
            xs: '100%',
        },
        borderRight: 'none',
    },
};
