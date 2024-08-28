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
var ListCard = function (props) {
    var _a = props || {}, _b = _a.circular, circular = _b === void 0 ? false : _b, _c = _a.sortable, sortable = _c === void 0 ? false : _c, _d = _a.selectable, selectable = _d === void 0 ? false : _d, _e = _a.selected, selected = _e === void 0 ? false : _e, label = _a.label, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, handleSelect = _a.handleSelect, image = _a.image, _f = _a.height, height = _f === void 0 ? 160 : _f, disableImage = _a.disableImage, _g = _a.slots, slots = _g === void 0 ? {
        item: {},
        image: {},
    } : _g;
    return (react_1.default.createElement(material_1.Box, __assign({ sx: sx.root }, slots.item),
        react_1.default.createElement(material_1.Stack, { direction: "row", alignItems: "center", spacing: 0, width: "100%" },
            selectable && (react_1.default.createElement(material_1.Checkbox, { checked: selected, onChange: handleSelect, color: "primary" })),
            sortable && react_1.default.createElement(__1.Icon, { name: "GripVertical", color: "text.secondary" }),
            react_1.default.createElement(material_1.Stack, { sx: sx.container, spacing: 1, flexDirection: { xs: 'column', sm: 'row' } },
                react_1.default.createElement(material_1.Stack, { direction: "row", alignItems: "flex-start", spacing: 0 }, !disableImage && (react_1.default.createElement(material_1.Box, { sx: sx.image }, circular ? (react_1.default.createElement(__1.AvatarImage, __assign({ label: label, src: image, height: height, alt: primary, handleClick: handleClick }, slots.image))) : (react_1.default.createElement(__1.Image, __assign({ label: label, src: image, height: height, alt: primary, handleClick: handleClick }, slots.image)))))),
                react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.contentArea },
                    react_1.default.createElement(material_1.Stack, { direction: "column", sx: sx.content },
                        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0.5 },
                            react_1.default.createElement(material_1.Link, { onClick: handleClick, sx: sx.link, color: "text.primary", variant: "subtitle1" }, primary),
                            react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "body2" }, secondary)),
                        react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: "flex-end" }, actions)),
                    react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: "flex-end" }, secondaryAction))))));
};
exports.default = ListCard;
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
        width: {
            sm: 180,
            xs: '100%',
        },
        minWidth: {
            sm: 180,
            xs: '100%',
        },
        mr: {
            sm: 2,
            xs: 0,
        },
        height: '100%',
        display: 'flex',
        justifyContent: {
            xs: 'center',
            sm: 'flex-start',
        },
        alignItems: 'center',
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
    link: {
        textDecoration: 'none',
    },
};
