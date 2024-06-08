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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var frontend_shopify_1 = require("frontend-shopify");
var context_1 = require("../../../context");
var components_1 = require("../../../components");
var TopNavSearchButton = function (props) {
    var handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.IconButton, { sx: sx.root, onClick: handleClick },
        react_1.default.createElement(components_1.Icon, { name: "Search", size: 24 })));
};
var SideNavSearchButton = function (props) {
    var handleClick = props.handleClick;
    return (react_1.default.createElement(material_2.ListItem, { disablePadding: true, disableGutters: true },
        react_1.default.createElement(material_2.ListItemButton, { onClick: handleClick },
            react_1.default.createElement(material_2.ListItemText, { primary: react_1.default.createElement(material_2.Typography, { variant: "subtitle2", color: "text.primary" }, "Search") }))));
};
var SearchButton = function (props) {
    var _a = props.variant, variant = _a === void 0 ? 'topNav' : _a;
    var toggleSearch = (0, react_1.useContext)(frontend_shopify_1.ShopifyContext).toggleSearch;
    var setMenuOpen = (0, react_1.useContext)(context_1.AppContext).setMenuOpen;
    var handleToggleSearch = function () {
        setMenuOpen(false);
        toggleSearch();
    };
    return variant == 'topNav' ? (react_1.default.createElement(TopNavSearchButton, { handleClick: handleToggleSearch })) : (react_1.default.createElement(SideNavSearchButton, { handleClick: handleToggleSearch }));
};
exports.default = SearchButton;
var sx = {
    root: {
        px: 1,
    },
    button: {
        color: 'text.primary',
        justifyContent: 'flex-start',
    },
};
