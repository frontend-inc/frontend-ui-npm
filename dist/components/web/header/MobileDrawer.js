'use client';
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
var components_1 = require("../../../components");
var __1 = require("../..");
var context_1 = require("../../../context");
var MobileDrawerLink_1 = __importDefault(require("./MobileDrawerLink"));
var MobileDrawer = function (props) {
    var _a = (0, react_1.useContext)(context_1.AppContext), menuOpen = _a.menuOpen, setMenuOpen = _a.setMenuOpen;
    var links = props.links, handleClick = props.handleClick;
    var handleMenuClick = function (path) {
        setMenuOpen(false);
        handleClick(path);
    };
    return (react_1.default.createElement(__1.Sheet, { open: menuOpen, handleClose: function () { return setMenuOpen(false); }, side: "left" },
        react_1.default.createElement("div", null,
            react_1.default.createElement(components_1.List, { className: 'space-y-2' }, links === null || links === void 0 ? void 0 : links.map(function (menuItem, index) { return (react_1.default.createElement(MobileDrawerLink_1.default, { key: index, menuItem: menuItem, handleClick: handleMenuClick })); })))));
};
exports.default = MobileDrawer;
