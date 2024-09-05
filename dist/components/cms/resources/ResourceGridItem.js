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
    var icon = props.icon, avatar = props.avatar, color = props.color, primary = props.primary, secondary = props.secondary, image = props.image, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, handleSelect = props.handleSelect, secondaryActions = props.secondaryActions, menuActions = props.menuActions, sortable = props.sortable, selectable = props.selectable, selected = props.selected, _a = props.isDragging, isDragging = _a === void 0 ? false : _a, _b = props.enableBorder, enableBorder = _b === void 0 ? false : _b;
    var handleChange = function (event) {
        if (handleSelect) {
            handleSelect();
        }
    };
    return (react_1.default.createElement(material_1.Card, { sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)) },
        react_1.default.createElement(material_1.CardHeader, { avatar: avatar, title: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, primary), subheader: react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, secondary), action: react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.buttons },
                secondaryActions,
                (menuActions || handleEdit || handleDelete) && (react_1.default.createElement(__1.MenuButton, { handleEdit: handleEdit, handleDelete: handleDelete }, menuActions))) }),
        react_1.default.createElement(material_1.CardActionArea, { onClick: handleClick },
            react_1.default.createElement(material_1.CardMedia, { sx: { height: 160 }, image: image }))));
};
exports.default = ResourceGridItem;
var sx = {
    root: {
        p: 0,
        borderRadius: 1,
        overflow: 'hidden',
        bgcolor: 'background.paper',
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
        transition: 'box-shadow 0.2s',
        '&:hover': {
            boxShadow: 1
        },
        mb: 1,
    },
    listItemButton: {
        p: 1,
        borderRadius: 1,
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
    }
};
