"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shopify_1 = require("frontend-shopify");
var material_1 = require("@mui/material");
var shopify_1 = require("../../shopify");
var ui_1 = require("../../ui");
var PLAIN_TEXT_TYPES = [
    'single_line_text_field',
    'multi_line_text_field'
];
var RICH_TEXT_TYPES = ['rich_text_field'];
var SUPPORTED_METAFIELD_TYPES = __spreadArray(__spreadArray([], PLAIN_TEXT_TYPES, true), RICH_TEXT_TYPES, true);
var ProductMetafields = function (props) {
    var product = props.product, metafields = props.metafields;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root }, metafields === null || metafields === void 0 ? void 0 : metafields.map(function (metafield, index) {
        var type = (0, frontend_shopify_1.getMetafieldType)(product, metafield.name);
        var value = (0, frontend_shopify_1.getMetafieldValue)(product, metafield.name);
        if (!SUPPORTED_METAFIELD_TYPES.includes(type))
            return null;
        return (react_1.default.createElement(material_1.Accordion, { sx: sx.accordion, elevation: 0, key: index },
            react_1.default.createElement(material_1.AccordionSummary, { expandIcon: react_1.default.createElement(ui_1.Icon, { name: "ChevronDown" }) },
                react_1.default.createElement(material_1.Typography, { variant: "subtitle2", color: "text.primary" }, metafield.label)),
            react_1.default.createElement(material_1.AccordionDetails, null,
                PLAIN_TEXT_TYPES.includes(type) && (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.secondary" }, value)),
                RICH_TEXT_TYPES.includes(type) && (react_1.default.createElement(shopify_1.MetafieldRichText, { value: value })))));
    })));
};
exports.default = ProductMetafields;
var sx = {
    root: {
        my: 2,
    },
    accordion: {
        borderTop: '1px solid',
        borderColor: 'divider',
        my: '0px !important',
    },
};
