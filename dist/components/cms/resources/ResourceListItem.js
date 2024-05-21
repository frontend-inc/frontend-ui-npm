"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var ResourceListItem = function (props) {
    var resource = props.resource, title = props.title, description = props.description, avatar = props.avatar, icon = props.icon, image = props.image, color = props.color, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, secondaryActions = props.secondaryActions, menuActions = props.menuActions;
    return (react_1.default.createElement(material_1.List, { sx: sx.root },
        react_1.default.createElement(material_1.ListItem, { disablePadding: true, secondaryAction: react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.actions },
                secondaryActions,
                react_1.default.createElement(__1.MenuButton, { handleEdit: handleEdit, handleDelete: handleDelete }, menuActions)) },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: handleClick ? function () { return handleClick(resource); } : undefined },
                avatar && (react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon }, avatar)),
                (!avatar && image) && (react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(__1.Image, { src: image, width: 32, height: 32, alt: image }))),
                icon && (react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(material_1.Avatar, { sx: {
                            bgcolor: color
                        } },
                        react_1.default.createElement(__1.Icon, { name: icon, size: 24 })))),
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, title), secondary: react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, description) })))));
};
exports.default = ResourceListItem;
var sx = {
    root: {
        p: 0,
        m: 0,
    },
    listItemButton: {
        p: 1,
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
    actions: {
        alignItems: 'center',
    },
    listItemIcon: {
        mr: 2,
    },
};
