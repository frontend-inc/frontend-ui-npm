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
var webstudio_shopify_1 = require("webstudio-shopify");
var context_1 = require("../../../context");
var components_1 = require("../../../components");
var SearchButton = function (props) {
    var _a = props.showLabel, showLabel = _a === void 0 ? false : _a, _b = props.showIcon, showIcon = _b === void 0 ? true : _b, _c = props.editing, editing = _c === void 0 ? false : _c;
    var toggleSearch = (0, react_1.useContext)(webstudio_shopify_1.ShopContext).toggleSearch;
    var setMenuOpen = (0, react_1.useContext)(context_1.AppContext).setMenuOpen;
    var handleToggleSearch = function () {
        if (!editing) {
            setMenuOpen(false);
            toggleSearch();
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        !showLabel && (react_1.default.createElement(material_1.IconButton, { sx: sx.root, onClick: handleToggleSearch },
            react_1.default.createElement(components_1.Icon, { name: "Search", size: 24 }))),
        showLabel && (react_1.default.createElement(material_1.Button, { fullWidth: true, sx: sx.button, onClick: handleToggleSearch, startIcon: showIcon && react_1.default.createElement(components_1.Icon, { name: "Search", size: 24 }) }, "Search"))));
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
