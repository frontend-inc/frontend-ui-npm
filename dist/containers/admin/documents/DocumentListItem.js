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
var components_2 = require("../../../components");
var helpers_1 = require("../../../helpers");
var DocumentListItem = function (props) {
    var _a;
    var document = props.document, handleClick = props.handleClick, _b = props.selected, selected = _b === void 0 ? false : _b;
    return (react_1.default.createElement(material_1.ListItem, { sx: __assign(__assign({}, sx.listItem), (selected && sx.selected)), secondaryAction: react_1.default.createElement(components_1.PublishLabel, { published: document === null || document === void 0 ? void 0 : document.published }) },
        react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: handleClick },
            react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                react_1.default.createElement(components_2.Image, { src: (_a = document === null || document === void 0 ? void 0 : document.image) === null || _a === void 0 ? void 0 : _a.url, alt: document === null || document === void 0 ? void 0 : document.title, height: 72, disableBorder: true, disableBorderRadius: true })),
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.primary", sx: sx.title }, (0, helpers_1.truncate)(document === null || document === void 0 ? void 0 : document.title)) }))));
};
exports.default = DocumentListItem;
var sx = {
    listItem: {
        bgcolor: 'background.paper',
        borderRadius: 1,
        border: '2px solid',
        borderColor: 'divider',
        transition: 'border-color 0.2s ease-in-out',
        p: 0,
        mb: 1,
        overflow: 'hidden',
    },
    listItemButton: {
        p: 0,
    },
    listItemIcon: {
        width: 72,
        mr: 2,
    },
    title: {
        maxWidth: 146,
    },
    selected: {
        borderColor: 'primary.main',
    },
};
