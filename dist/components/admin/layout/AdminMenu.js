"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminMenusItems = function (props) {
    var _a;
    var _b = props || {}, _c = _b.menuItems, menuItems = _c === void 0 ? {} : _c, activeMenu = _b.activeMenu, handleClick = _b.handleClick;
    if (((_a = Object.keys(menuItems)) === null || _a === void 0 ? void 0 : _a.length) === 0)
        return null;
    return (react_1.default.createElement(components_1.AdminLayoutLeft, null, Object.keys(menuItems).map(function (key, index) {
        var _a;
        return (react_1.default.createElement(components_1.MenuList, { label: key, enableBorder: index !== 0 }, (_a = menuItems[key]) === null || _a === void 0 ? void 0 : _a.map(function (menuItem) { return (react_1.default.createElement(components_1.MenuListItem, { key: menuItem.value, title: menuItem.label, icon: menuItem.icon, handleClick: function () { return handleClick(menuItem); }, selected: activeMenu === menuItem.value })); })));
    })));
};
exports.default = AdminMenusItems;
