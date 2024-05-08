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
var UserListItem = function (props) {
    var user = props.user, _a = props.selected, selected = _a === void 0 ? false : _a, _b = props.isAdmin, isAdmin = _b === void 0 ? false : _b, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(material_1.ListItem, { sx: __assign(__assign({}, sx.root), (selected && sx.selected)), disableGutters: true, secondaryAction: isAdmin && (user === null || user === void 0 ? void 0 : user.role) !== 'admin' && (react_1.default.createElement(components_1.MenuButton, { handleEdit: function () { return handleEdit(user); }, handleDelete: function () { return handleDelete(user); } })) },
        react_1.default.createElement(material_1.ListItemButton, { onClick: handleClick },
            react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                react_1.default.createElement(components_1.UserAvatar, { user: user })),
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
                    react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, user.full_name),
                    (user === null || user === void 0 ? void 0 : user.role) && react_1.default.createElement(components_1.Label, { label: user === null || user === void 0 ? void 0 : user.role })), secondary: react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, user.email) }))));
};
exports.default = UserListItem;
var sx = {
    root: {
        p: 0,
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
    selected: {
        border: '3px solid',
        borderColor: 'primary.main',
    },
    listItemIcon: {
        mr: 2,
    },
    avatar: {
        bgcolor: 'primary.main',
    },
    icon: {
        color: 'text.primary',
    },
    secondaryActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
};
