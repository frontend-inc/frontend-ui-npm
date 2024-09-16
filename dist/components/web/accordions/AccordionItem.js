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
var AccordionItem = function (props) {
    var primary = props.primary, secondary = props.secondary, startIcon = props.startIcon, _a = props.icon, icon = _a === void 0 ? 'Plus' : _a, disablePadding = props.disablePadding, image = props.image;
    return (react_1.default.createElement(material_1.Accordion, { sx: __assign(__assign({}, sx.root), (disablePadding && sx.disablePadding)), elevation: 0 },
        react_1.default.createElement(material_1.AccordionSummary, { expandIcon: react_1.default.createElement(__1.Icon, { name: icon }) },
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
                startIcon && react_1.default.createElement(__1.Icon, { name: startIcon, size: 20 }),
                react_1.default.createElement(material_1.Typography, { variant: "subtitle1" }, primary))),
        react_1.default.createElement(material_1.AccordionDetails, { sx: sx.accordionDetails },
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 2 },
                secondary,
                image && react_1.default.createElement(__1.Image, { src: image, height: 240 })))));
};
exports.default = AccordionItem;
var sx = {
    root: {
        bgcolor: 'background.default',
        borderColor: 'divider',
        my: '0px !important',
        py: 1,
        borderRadius: 0,
    },
    disablePadding: {
        py: 0,
    },
    imageContainer: {
        width: 256,
        height: 256,
        overflow: 'hidden',
    },
    accordionDetails: {
        bgcolor: 'background.default',
    },
};
