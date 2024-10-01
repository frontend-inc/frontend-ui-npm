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
var components_2 = require("../../../components");
var MenuListItem = function (props) {
    var selected = props.selected, secondaryActions = props.secondaryActions, _a = props.enableBorder, enableBorder = _a === void 0 ? false : _a, icon = props.icon, _b = props.color, color = _b === void 0 ? 'transparent' : _b, title = props.title, description = props.description, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(material_1.ListItem, { disablePadding: true, sx: __assign(__assign(__assign({}, sx.root), (selected && sx.selected)), (enableBorder && sx.rootBorder)), secondaryAction: react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.secondaryActions },
            secondaryActions,
            (handleEdit || handleDelete) && (react_1.default.createElement(components_2.MenuButton, { handleEdit: handleEdit ? handleEdit : undefined, handleDelete: handleDelete ? handleDelete : undefined }))) },
        react_1.default.createElement(material_1.ListItemButton, { disableRipple: true, sx: sx.listItemButton, onClick: handleClick },
            icon && (react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.iconContainer), { bgcolor: color }) },
                    react_1.default.createElement(components_1.Icon, { name: icon })))),
            react_1.default.createElement(material_1.ListItemText, { primary: title, secondary: description }))));
};
exports.default = MenuListItem;
var sx = {
    root: {
        p: 0,
        mb: 0.5,
        borderRadius: 1,
        border: '3px solid',
        borderColor: 'transparent',
        '&:hover': {
            bgcolor: 'primary.dark',
        },
    },
    rootBorder: {
        borderColor: 'divider',
        mb: 1,
    },
    listItemIcon: {
        mr: 1.5,
        minWidth: 36,
        width: 36,
    },
    selected: {
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        '&:hover': {
            bgcolor: 'primary.dark',
        },
        boxShadow: 1,
    },
    listItemButton: {
        px: 1,
        py: '4px',
    },
    iconContainer: {
        mr: 1,
        minWidth: '36px',
        minHeight: '36px',
        borderRadius: '8px',
        bgcolor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondaryActions: {
        alignItems: 'flex-end',
    },
};
