"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../components");
var lucide_react_1 = require("lucide-react");
var ListItem = function (props) {
    var primary = props.primary, secondary = props.secondary, label = props.label, icon = props.icon, showMenu = props.showMenu, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, selected = props.selected;
    return (react_1.default.createElement(material_1.ListItem, { sx: __assign(__assign({}, sx.listItem), (selected && sx.selected)), disablePadding: true, secondaryAction: react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
            label && react_1.default.createElement(components_1.Label, { label: label }),
            react_1.default.createElement(material_1.Box, { sx: sx.menuItems }, showMenu && (react_1.default.createElement(components_1.MenuButton, { selected: true },
                handleEdit && (react_1.default.createElement(material_1.MenuItem, { onClick: handleEdit },
                    react_1.default.createElement(material_1.ListItemIcon, null,
                        react_1.default.createElement(lucide_react_1.Edit, { size: 18 })),
                    react_1.default.createElement(material_1.ListItemText, { primary: "Edit" }))),
                handleDelete && (react_1.default.createElement(material_1.MenuItem, { onClick: handleDelete },
                    react_1.default.createElement(material_1.ListItemIcon, null,
                        react_1.default.createElement(lucide_react_1.Trash, { size: 18 })),
                    react_1.default.createElement(material_1.ListItemText, { primary: "Delete" }))))))) },
        react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: handleClick },
            icon && react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon }, icon),
            react_1.default.createElement(material_1.ListItemText, { primary: primary, secondary: secondary }))));
};
exports.default = ListItem;
var sx = {
    listItem: {
        borderRadius: function (theme) { return theme.shape.borderRadius; },
        height: '40px',
        width: '100%',
        '&:hover .MuiBox-root': {
            display: 'block',
        },
        my: '2px',
    },
    listItemButton: {
        height: '40px',
        borderRadius: function (theme) { return theme.shape.borderRadius; },
    },
    selected: {
        fontWeight: 500,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        '&:hover': {
            opacity: 1.0,
        },
    },
    menuItems: {
        display: 'none',
    },
    listItemIcon: {
        minWidth: '30px',
    },
};
