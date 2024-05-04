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
var ChipList = function (props) {
    var title = props.title, image = props.image, handleClick = props.handleClick, _a = props.enableBorder, enableBorder = _a === void 0 ? false : _a, _b = props.enableGradient, enableGradient = _b === void 0 ? false : _b, _c = props.enableOverlay, enableOverlay = _c === void 0 ? false : _c, enableEdit = props.enableEdit, enableDelete = props.enableDelete, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(material_1.List, { dense: true, disablePadding: true, sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)) },
        react_1.default.createElement(material_1.ListItem, { disablePadding: true, disableGutters: true, secondaryAction: react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.actions }, (enableEdit || enableDelete) && (react_1.default.createElement(__1.MenuButton, { icon: "EllipsisVertical", handleEdit: enableEdit ? handleEdit : undefined, handleDelete: enableDelete ? handleDelete : undefined }))) },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: handleClick && handleClick },
                image && (react_1.default.createElement(material_1.ListItemIcon, null,
                    react_1.default.createElement(material_1.Avatar, { sx: __assign(__assign(__assign({}, sx.avatar), (enableGradient && sx.gradient)), (enableOverlay && sx.overlay)), src: image, alt: title },
                        react_1.default.createElement(material_1.Box, null)))),
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, title) })))));
};
exports.default = ChipList;
var sx = {
    root: {
        my: 0,
        p: 0,
    },
    listItemButton: {
        minHeight: 50,
    },
    gradient: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    overlay: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgb(0,0,0,0.5)',
        },
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
    },
    avatar: {
        mr: 2,
        height: '32px',
        width: '32px',
        backgroundImage: 'linear-gradient(45deg, #999999,#DDDDDD,#FAFAFA)',
    },
    actions: {
        px: 1,
    },
};
