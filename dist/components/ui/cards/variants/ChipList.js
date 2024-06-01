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
var helpers_1 = require("../../../../helpers");
var ChipList = function (props) {
    var resource = props.resource, actions = props.actions, handleClick = props.handleClick, _a = props.enableBorder, enableBorder = _a === void 0 ? false : _a, _b = props.enableGradient, enableGradient = _b === void 0 ? false : _b, _c = props.enableOverlay, enableOverlay = _c === void 0 ? false : _c;
    var _d = resource || {}, label = _d.label, title = _d.title, description = _d.description, image = _d.image;
    return (react_1.default.createElement(material_1.List, { dense: true, disablePadding: true, sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)) },
        react_1.default.createElement(material_1.ListItem, { disablePadding: true, disableGutters: true, secondaryAction: react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.actions },
                label && react_1.default.createElement(components_1.Label, { label: label }),
                react_1.default.createElement(components_1.Actions, { numVisible: 0, actions: actions, resource: resource })) },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: handleClick && handleClick },
                image && (react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(material_1.Avatar, { sx: __assign(__assign(__assign({}, sx.avatar), (enableGradient && sx.gradient)), (enableOverlay && sx.overlay)), src: image === null || image === void 0 ? void 0 : image.url, alt: title },
                        react_1.default.createElement(material_1.Box, null)))),
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, title), secondary: react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, (0, helpers_1.truncate)(description)) })))));
};
exports.default = ChipList;
var sx = {
    root: {
        my: 0,
        p: 0,
    },
    listItemButton: {
        minHeight: 48,
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
        height: '48px',
        width: '48px',
        backgroundImage: 'linear-gradient(45deg, #999999,#DDDDDD,#FAFAFA)',
    },
    listItemIcon: {
        mr: 2,
        height: '48px',
        width: '48px',
    },
    actions: {
        px: 1,
    },
};
