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
var components_1 = require("../../../components");
var SelectableListItem = function (props) {
    var selected = props.selected, title = props.title, description = props.description, handleClick = props.handleClick, icon = props.icon, color = props.color;
    return (react_1.default.createElement(material_1.ListItem, { sx: __assign(__assign({}, sx.root), (selected && sx.selected)) },
        react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: handleClick },
            icon && (react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon }, color ? (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.iconContainer), { bgcolor: color }) },
                react_1.default.createElement(components_1.Icon, { name: icon }))) : (react_1.default.createElement(components_1.Icon, { name: icon })))),
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, title), secondary: react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, description) }))));
};
exports.default = SelectableListItem;
var sx = {
    root: {
        width: '100%',
        p: 0,
        borderRadius: 1,
        border: '3px solid',
        borderColor: 'divider',
        mb: 1,
        bgcolor: 'background.paper',
        '&:hover': {
            borderColor: 'primary.main',
        },
    },
    listItemIcon: {
        mr: 1
    },
    selected: {
        borderColor: 'primary.main',
    },
    listItemButton: {
        p: 1,
        px: 2,
    },
    iconContainer: {
        p: '5px',
        mr: 1,
        width: '40px',
        height: '40px',
        borderRadius: '8px',
        bgcolor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    }
};
