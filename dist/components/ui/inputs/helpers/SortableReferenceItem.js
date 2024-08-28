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
var __1 = require("../../..");
var SortableReferenceItem = function (props) {
    var image = props.image, title = props.title, isDragging = props.isDragging, handleDelete = props.handleDelete, handleEdit = props.handleEdit;
    return (react_1.default.createElement(material_1.ListItem, { disableGutters: true, sx: __assign(__assign({}, sx.item), (isDragging && sx.isDragging)), secondaryAction: react_1.default.createElement(__1.MenuButton, { handleDelete: handleDelete, handleEdit: handleEdit }) },
        react_1.default.createElement(material_1.ListItemIcon, { sx: sx.dragHandle },
            react_1.default.createElement(__1.Icon, { name: "GripVertical", color: "text.secondary" })),
        react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
            react_1.default.createElement(__1.Image, { src: image, height: 32, width: 32 })),
        react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, title) })));
};
exports.default = SortableReferenceItem;
var sx = {
    item: {
        px: 1,
        bgcolor: 'background.paper',
        transition: 'box-shadow 0.2s',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        my: 0.5,
        '&:hover': {
            boxShadow: 2,
        },
    },
    icon: {
        color: 'text.secondary',
    },
    isDragging: {
        boxShadow: 2,
    },
    listItemIcon: {
        mr: 2,
        width: 32,
        height: 32,
    },
    dragHandle: {
        cursor: 'grab',
    },
};
