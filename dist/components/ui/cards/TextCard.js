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
var helpers_1 = require("../../../helpers");
var TextCard = function (props) {
    var _a = props || {}, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, _b = _a.slots, slots = _b === void 0 ? {
        item: {},
    } : _b;
    return (react_1.default.createElement(material_1.Box, __assign({ sx: sx.root }, slots.item),
        react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
            react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, sx: sx.content },
                react_1.default.createElement(material_1.Link, { sx: sx.link, onClick: handleClick },
                    react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "subtitle1" }, (0, helpers_1.truncate)(primary, 40))),
                react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "body2", sx: sx.description }, secondary),
                react_1.default.createElement(material_1.Stack, { direction: "row" }, actions))),
        react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: "flex-end", sx: sx.buttons }, secondaryAction)));
};
exports.default = TextCard;
var sx = {
    root: {
        py: 1,
        minHeight: 140,
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        cursor: 'auto',
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
    container: {
        width: '100%',
    },
    content: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    description: {
        maxWidth: '600px',
    },
    buttons: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    link: {
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
};
