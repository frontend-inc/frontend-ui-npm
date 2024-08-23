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
var AvatarCard = function (props) {
    var primary = props.primary, secondary = props.secondary, image = props.image, actions = props.actions, secondaryAction = props.secondaryAction, _a = props.height, height = _a === void 0 ? 128 : _a, handleClick = props.handleClick, _b = props.slots, slots = _b === void 0 ? {
        item: {},
        image: {}
    } : _b;
    return (react_1.default.createElement(material_1.List, __assign({ disablePadding: true, sx: sx.listItem }, slots.item),
        react_1.default.createElement(material_1.ListItem, { disablePadding: true, disableGutters: true, secondaryAction: secondaryAction },
            react_1.default.createElement(material_1.ListItemButton, { sx: __assign(__assign({}, sx.listItemButton), { minHeight: height + 44 }), onClick: handleClick && handleClick },
                react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(components_1.AvatarImage, __assign({ height: height, image: image, alt: primary }, slots.image))),
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "subtitle1", color: "text.primary" }, primary), secondary: react_1.default.createElement(react_1.default.Fragment, null,
                        secondary,
                        actions) })))));
};
exports.default = AvatarCard;
var sx = {
    listItem: {
        my: 0,
        p: 0,
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
    listItemIcon: {
        width: 130,
        mr: 2,
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
    },
    title: {
        pb: 0.5,
    },
    description: {
        maxWidth: 320,
    },
    listItemButton: {
        '&:hover': {
            bgcolor: 'transparent',
        },
    },
};
