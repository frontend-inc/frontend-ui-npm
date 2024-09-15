"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var AdminLayout = function (props) {
    var logo = props.logo, children = props.children, handleClick = props.handleClick, _a = props.menuItems, menuItems = _a === void 0 ? [] : _a, secondaryActions = props.secondaryActions;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(components_1.Alert, { anchorBottom: true }),
        react_1.default.createElement(components_1.AdminLayoutTabs, null,
            react_1.default.createElement(components_1.AdminTabIcons, { logo: logo, handleClick: handleClick, menuItems: menuItems, secondaryActions: secondaryActions })),
        react_1.default.createElement(material_1.Box, { sx: sx.content }, children)));
};
exports.default = AdminLayout;
var sx = {
    root: {
        width: '100vw',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
    },
    content: {
        width: 'calc(100vw - 60px)',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        display: 'flex',
        flexDirection: {
            sm: 'row',
            xs: 'column',
        },
    },
};
