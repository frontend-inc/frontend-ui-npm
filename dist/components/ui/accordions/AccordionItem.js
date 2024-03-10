"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var components_1 = require("../../../components");
var AccordionItem = function (props) {
    var title = props.title, description = props.description, _a = props.icon, icon = _a === void 0 ? 'Plus' : _a, image = props.image;
    return (react_1.default.createElement(material_2.Accordion, { sx: sx.root, elevation: 0 },
        react_1.default.createElement(material_2.AccordionSummary, { expandIcon: react_1.default.createElement(components_1.Icon, { name: icon }) },
            react_1.default.createElement(material_1.Typography, { variant: "subtitle1" }, title)),
        react_1.default.createElement(material_2.AccordionDetails, { sx: sx.accordionDetails },
            react_1.default.createElement(material_1.Stack, { direction: {
                    sm: 'row',
                    xs: 'column',
                }, spacing: 2 },
                image && (react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
                    react_1.default.createElement("img", { alt: title, src: image, height: 256, width: 256, style: {
                            width: '100%',
                            objectFit: 'contain',
                        } }))),
                react_1.default.createElement(components_1.Text, { variant: "body1", color: "textSecondary" }, description)))));
};
exports.default = AccordionItem;
var sx = {
    root: {
        bgcolor: 'background.default',
        borderTop: '1px solid',
        borderColor: 'divider',
        my: '0px !important',
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
