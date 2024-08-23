"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var __1 = require("../..");
var AccordionItem = function (props) {
    var title = props.title, description = props.description, _a = props.icon, icon = _a === void 0 ? 'Plus' : _a, image = props.image;
    return (react_1.default.createElement(material_2.Accordion, { sx: sx.root, elevation: 0 },
        react_1.default.createElement(material_2.AccordionSummary, { expandIcon: react_1.default.createElement(__1.Icon, { name: icon }) },
            react_1.default.createElement(material_1.Typography, { variant: "subtitle1" }, title)),
        react_1.default.createElement(material_2.AccordionDetails, { sx: sx.accordionDetails },
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 2 },
                react_1.default.createElement(__1.Text, { variant: "body1", color: "text.primary" }, description),
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
    imageContainer: {
        width: 256,
        height: 256,
        overflow: 'hidden',
    },
    accordionDetails: {
        bgcolor: 'background.default',
    },
};
