"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var FooterLinks = function (props) {
    var menuItem = props.menuItem, handleClick = props.handleClick;
    var children = (menuItem || {}).children;
    return (react_1.default.createElement(material_1.List, { sx: sx.list, component: "nav", subheader: react_1.default.createElement(material_1.ListSubheader, { sx: sx.listSubheader }, menuItem === null || menuItem === void 0 ? void 0 : menuItem.label) }, children === null || children === void 0 ? void 0 : children.map(function (link, i) { return (react_1.default.createElement(material_1.ListItem, { key: i, disablePadding: true, dense: true },
        react_1.default.createElement(material_1.ListItemButton, { onClick: function () { return handleClick(link.path); } },
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: 'text.primary' }, link.label) })))); })));
};
exports.default = FooterLinks;
var sx = {
    listSubheader: {
        bgcolor: 'transparent',
    },
    list: {
        mt: 3,
        minWidth: {
            sm: 120,
            xs: '100%'
        }
    }
};
