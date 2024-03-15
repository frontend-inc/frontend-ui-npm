"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_shopify_1 = require("frontend-shopify");
var material_1 = require("@mui/material");
var shopify_1 = require("../../../shopify");
var ui_1 = require("../../../ui");
var frontend_shopify_2 = require("frontend-shopify");
var PLAIN_TEXT_TYPES = ['single_line_text_field', 'multi_line_text_field'];
var RICH_TEXT_TYPES = ['rich_text_field'];
var ProductMetafields = function (props) {
    var handle = props.handle, metafields = props.metafields;
    var _a = (0, frontend_shopify_2.useProducts)(), product = _a.product, findProduct = _a.findProduct;
    (0, react_1.useEffect)(function () {
        if (handle && metafields) {
            findProduct(handle, metafields);
        }
    }, [handle, metafields]);
    if (!product || !metafields)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root }, product &&
        (metafields === null || metafields === void 0 ? void 0 : metafields.map(function (metafield, index) {
            var label = metafield.label, key = metafield.key;
            var type = (0, frontend_shopify_1.getMetafieldType)(product, key);
            var value = (0, frontend_shopify_1.getMetafieldValue)(product, key);
            return (react_1.default.createElement(material_1.Accordion, { sx: sx.accordion, elevation: 0 },
                react_1.default.createElement(material_1.AccordionSummary, { expandIcon: react_1.default.createElement(ui_1.Icon, { name: "Plus" }) },
                    react_1.default.createElement(material_1.Typography, { variant: "subtitle2" }, label)),
                react_1.default.createElement(material_1.AccordionDetails, null,
                    PLAIN_TEXT_TYPES.includes(type) && (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "textSecondary" }, value)),
                    RICH_TEXT_TYPES.includes(type) && (react_1.default.createElement(shopify_1.MetafieldRichText, { value: value })),
                    !value && (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "textSecondary" }, "Information coming soon.")))));
        }))));
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
