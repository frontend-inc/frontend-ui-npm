"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var lodash_1 = require("lodash");
var ResourceListItem = function (props) {
    var resource = props.resource, _a = props.colorField, colorField = _a === void 0 ? 'color' : _a, _b = props.titleField, titleField = _b === void 0 ? 'title' : _b, _c = props.descriptionField, descriptionField = _c === void 0 ? 'description' : _c, _d = props.imageField, imageField = _d === void 0 ? 'image.url' : _d, _e = props.iconField, iconField = _e === void 0 ? 'icon' : _e, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, secondaryActions = props.secondaryActions, menuActions = props.menuActions;
    return (react_1.default.createElement(material_1.List, { sx: sx.root },
        react_1.default.createElement(material_1.ListItem, { disablePadding: true, secondaryAction: react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.actions },
                secondaryActions,
                react_1.default.createElement(__1.MenuButton, { handleEdit: handleEdit, handleDelete: handleDelete }, menuActions)) },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: function () { return handleClick(resource); } },
                (0, lodash_1.get)(resource, imageField) && (react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(__1.Image, { src: (0, lodash_1.get)(resource, imageField), width: 32, height: 32, alt: (0, lodash_1.get)(resource, titleField) }))),
                (0, lodash_1.get)(resource, iconField) && (react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(material_1.Avatar, { sx: {
                            bgcolor: (0, lodash_1.get)(resource, colorField),
                        } },
                        react_1.default.createElement(__1.Icon, { name: (0, lodash_1.get)(resource, iconField), size: 24 })))),
                (resource === null || resource === void 0 ? void 0 : resource.user) && (react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(__1.UserAvatar, { user: resource === null || resource === void 0 ? void 0 : resource.user }))),
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, (0, lodash_1.get)(resource, titleField)), secondary: react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, (0, lodash_1.get)(resource, descriptionField)) })))));
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
