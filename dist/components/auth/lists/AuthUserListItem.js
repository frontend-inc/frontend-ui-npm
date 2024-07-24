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
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var AuthUserListItem = function (props) {
    var user = props.user, _a = props.selected, selected = _a === void 0 ? false : _a, _b = props.isAdmin, isAdmin = _b === void 0 ? false : _b, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    var _c = (0, react_1.useState)(false), canEdit = _c[0], setCanEdit = _c[1];
    var _d = (0, react_1.useState)(false), canDelete = _d[0], setCanDelete = _d[1];
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    (0, react_1.useEffect)(function () {
        if (isAdmin && (user === null || user === void 0 ? void 0 : user.role) !== 'admin') {
            setCanEdit(true);
        }
        if (isAdmin && ((user === null || user === void 0 ? void 0 : user.role) !== 'admin' || (user === null || user === void 0 ? void 0 : user.id) == (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))) {
            setCanDelete(true);
        }
    }, [user, isAdmin]);
    return (react_1.default.createElement(material_1.ListItem, { sx: __assign(__assign({}, sx.root), (selected && sx.selected)), disableGutters: true, secondaryAction: (canEdit || canDelete) && (react_1.default.createElement(__1.MenuButton, { handleEdit: canEdit && (function () { return handleEdit(user); }), handleDelete: canDelete && (function () { return handleDelete(user); }) })) },
        react_1.default.createElement(material_1.ListItemButton, { onClick: handleClick },
            react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                react_1.default.createElement(__1.UserAvatar, { user: user })),
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
                    react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, user.name),
                    (user === null || user === void 0 ? void 0 : user.role) && react_1.default.createElement(__1.Label, { label: user === null || user === void 0 ? void 0 : user.role })), secondary: react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, user.email) }))));
};
exports.default = AuthUserListItem;
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
