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
var hooks_1 = require("../../../hooks");
var containers_1 = require("../../../containers");
var AdminMenuForm_1 = __importDefault(require("./AdminMenuForm"));
var AdminMenuList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)(), activeMenu = _b[0], setActiveMenu = _b[1];
    var handleClick = function (menu) {
        setActiveMenu(menu);
        setOpen(true);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.ResourceList, { sortable: true, enableBorder: true, url: "".concat(apiUrl, "/menus"), name: "menu", enableCreate: true, enableEdit: true, enableSearch: true, enableDelete: true, handleClick: handleClick, query: {
                sort_by: 'position',
                sort_direction: 'asc',
            }, edit: AdminMenuForm_1.default, create: AdminMenuForm_1.default, component: containers_1.AdminMenuItem, emptyIcon: "FolderTree", emptyTitle: "No menus", emptyDescription: "No menus yet." }),
        react_1.default.createElement(components_1.Sheet, { open: open, handleClose: function () { return setOpen(false); }, title: activeMenu === null || activeMenu === void 0 ? void 0 : activeMenu.label }, (activeMenu === null || activeMenu === void 0 ? void 0 : activeMenu.id) && (react_1.default.createElement(containers_1.AdminMenuLinkList, { menuId: activeMenu === null || activeMenu === void 0 ? void 0 : activeMenu.id, handleClick: handleClick })))));
};
exports.default = AdminMenuList;
