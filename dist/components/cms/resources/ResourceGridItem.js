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
var __1 = require("../..");
var ResourceGridItem = function (props) {
    var icon = props.icon, avatar = props.avatar, color = props.color, label = props.label, primary = props.primary, secondary = props.secondary, image = props.image, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, handleSelect = props.handleSelect, secondaryAction = props.secondaryAction, menuActions = props.menuActions, sortable = props.sortable, selectable = props.selectable, selected = props.selected, _a = props.isDragging, isDragging = _a === void 0 ? false : _a, _b = props.enableBorder, enableBorder = _b === void 0 ? false : _b, _c = props.slots, slots = _c === void 0 ? {
        image: {}
    } : _c;
    var handleChange = function (event) {
        if (handleSelect) {
            handleSelect();
        }
    };
    return (react_1.default.createElement(material_1.Card, { sx: __assign(__assign(__assign({}, sx.root), (enableBorder && sx.border)), (selected && sx.selected)) },
        react_1.default.createElement(material_1.CardHeader, { sx: sx.cardHeader, avatar: avatar, title: selectable && (react_1.default.createElement(material_1.Checkbox, { size: "small", checked: selected, onChange: handleChange, color: "primary", sx: sx.checkbox })), action: react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.buttons },
                secondaryAction,
                (menuActions || handleEdit || handleDelete) && (react_1.default.createElement(__1.MenuButton, { size: "small", handleEdit: handleEdit, handleDelete: handleDelete }, menuActions))) }),
        react_1.default.createElement(material_1.CardActionArea, { onClick: handleClick },
            react_1.default.createElement(__1.Image, __assign({ label: label, disableBorderRadius: true, height: 160, src: image }, slots.image))),
        (primary || secondary) && (react_1.default.createElement(material_1.CardContent, null,
            react_1.default.createElement(material_1.Typography, { variant: "subtitle2", color: "text.primary" }, primary),
            secondary && (react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, secondary))))));
};
exports.default = ResourceGridItem;
var sx = {
    root: {
        p: 0,
        border: '1px solid',
        borderColor: 'transparent',
        borderRadius: 1,
        overflow: 'hidden',
        bgcolor: 'background.paper',
    },
    selected: {
        border: '1px solid',
        borderColor: 'primary.main',
    },
    border: {
        border: '1px solid',
        borderColor: 'divider',
        transition: 'box-shadow 0.2s',
        '&:hover': {
            boxShadow: 1,
        },
        mb: 1,
    },
    listItemButton: {
        p: 1,
        borderRadius: 1,
    },
    cardHeader: {
        height: 50,
    },
    avatar: {
        borderRadius: 1,
    },
    buttons: {
        alignItems: 'center',
    },
    listItemIcon: {
        mr: 2,
    },
    checkbox: {
        width: 24,
    },
    dragHandle: {
        width: 24,
        cursor: 'grab',
        '&:active': {
            cursor: 'grabbing',
        },
    },
    isDragging: {
        boxShadow: 2,
    },
};
