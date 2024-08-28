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
var components_1 = require("../../../../components");
var JsonItem = function (props) {
    var index = props.index, item = props.item, titleField = props.titleField, handleClick = props.handleClick, handleRemove = props.handleRemove;
    return (react_1.default.createElement(material_1.ListItem, { sx: __assign(__assign({}, sx.root), (item.isDragging && sx.isDragging)), disablePadding: true, secondaryAction: react_1.default.createElement(material_1.IconButton, { size: "small", onClick: function () { return handleRemove(index); } },
            react_1.default.createElement(components_1.Icon, { name: "X" })) },
        react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: function (ev) { return handleClick(ev, item, index); } },
            react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                react_1.default.createElement(components_1.Icon, { name: "GripVertical" })),
            (item === null || item === void 0 ? void 0 : item.icon) && (react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                react_1.default.createElement(components_1.Icon, { name: item.icon }))),
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "body1" }, item[titleField]) }))));
};
exports.default = JsonItem;
var sx = {
    root: {
        p: 0,
        width: '100%',
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        my: 0.5,
    },
    data: {
        width: '100%',
    },
    input: {
        flexDirection: 'column',
    },
    listItemIcon: {
        cursor: 'grab',
        minWidth: 32,
        alignItems: 'flex-start',
    },
    listItemButton: {
        py: 1,
        borderRadius: 1,
    },
    isDragging: {
        boxShadow: '0 0 10px 0 rgb(0,0,0,0.4)',
    },
};
