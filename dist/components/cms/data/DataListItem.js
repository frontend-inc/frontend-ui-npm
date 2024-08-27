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
var __1 = require("../..");
var DataListItem = function (props) {
    var _a = props || {}, sortable = _a.sortable, selectable = _a.selectable, selected = _a.selected, label = _a.label, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, secondaryAction = _a.secondaryAction, _b = _a.height, height = _b === void 0 ? 180 : _b, image = _a.image, handleClick = _a.handleClick, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete, handleSelect = _a.handleSelect, _c = _a.slots, slots = _c === void 0 ? {
        item: {},
        image: {},
    } : _c;
    var handleChange = function () {
        if (handleSelect) {
            handleSelect();
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { sx: sx.container, spacing: 1, flexDirection: { xs: 'column', sm: 'row' } },
            react_1.default.createElement(material_1.Stack, { direction: "row", alignItems: "flex-start" },
                selectable && (react_1.default.createElement(material_1.Checkbox, { checked: selected, onChange: handleChange, color: "primary", size: "small" })),
                sortable && (react_1.default.createElement(__1.Icon, { name: "GripVertical", color: "text.secondary" })),
                react_1.default.createElement(material_1.Box, { sx: sx.image },
                    react_1.default.createElement(__1.TouchableOpacity, { handleClick: handleClick },
                        react_1.default.createElement(__1.Image, __assign({ label: label, src: image, height: height, alt: primary }, slots.image))))),
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.contentArea },
                react_1.default.createElement(material_1.Stack, { direction: "column", sx: sx.content },
                    react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0.5 },
                        react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "subtitle2" }, primary),
                        react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "body2" }, secondary)),
                    react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: "flex-end" }, actions)),
                react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: "flex-end" }, (handleEdit || handleDelete) && (react_1.default.createElement(__1.MenuButton, { handleEdit: handleEdit, handleDelete: handleDelete }, secondaryAction)))))));
};
exports.default = DataListItem;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        pt: 1,
        pb: 2,
        overflow: 'hidden',
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.main',
    },
    gradient: {
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
    container: {
        width: '100%',
    },
    image: {
        pr: {
            sm: 2,
            xs: 0,
        },
        mr: {
            sm: 2,
            xs: 0,
        },
        width: {
            sm: 220,
            xs: '100%',
        },
        minWidth: {
            sm: 220,
            xs: '100%',
        },
        height: '100%',
    },
    contentArea: {
        width: '100%',
    },
    contentAreaBorder: {
        pr: 1,
    },
    content: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: '100%',
        py: {
            sm: 0,
            xs: 1,
        },
    },
    contentBorder: {
        px: {
            sm: 0,
            xs: 2,
        },
    },
    description: {
        maxWidth: '320px',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
    },
    buttonsBorder: {
        px: 1,
        pb: {
            sm: 0,
            xs: 1,
        },
    },
};
