"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var Resource = function (props) {
    var icon = props.icon, avatar = props.avatar, title = props.title, description = props.description, image = props.image, color = props.color, resource = props.resource, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, secondaryActions = props.secondaryActions, menuActions = props.menuActions, _a = props.displayFields, displayFields = _a === void 0 ? [] : _a;
    return (react_1.default.createElement(material_1.List, { sx: sx.root },
        react_1.default.createElement(material_1.ListItem, { disablePadding: true, secondaryAction: react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.actions },
                secondaryActions,
                (menuActions || handleEdit || handleDelete) && (react_1.default.createElement(__1.MenuButton, { handleEdit: handleEdit, handleDelete: handleDelete }, menuActions))) },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: handleClick ? function () { return handleClick(resource); } : undefined },
                avatar && react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon }, avatar),
                !avatar && image && (react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(__1.Image, { src: image, width: 32, height: 32, alt: image }))),
                icon && (react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(material_1.Avatar, { sx: {
                            bgcolor: color,
                        } },
                        react_1.default.createElement(__1.Icon, { name: icon, size: 24 })))),
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "body1" }, title), secondary: react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource }) })))));
};
exports.default = Resource;
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
