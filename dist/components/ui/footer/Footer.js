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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var context_1 = require("../../../context");
var material_1 = require("@mui/material");
var FooterLinks_1 = __importDefault(require("./FooterLinks"));
var Logo_1 = __importDefault(require("./Logo"));
var moment_1 = __importDefault(require("moment"));
var components_1 = require("../../../components");
var Footer = function (props) {
    var _a = props.enableEmail, enableEmail = _a === void 0 ? false : _a, emailProvider = props.emailProvider, klaviyoListId = props.klaviyoListId, klaviyoApiKey = props.klaviyoApiKey, mailchimpFormId = props.mailchimpFormId, handleClick = props.handleClick, menuItems = props.menuItems, socialUrls = props.socialUrls;
    var _b = (0, react_1.useContext)(context_1.AppContext), logo = _b.logo, name = _b.name;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, spacing: 1, direction: "column" },
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 2 },
            react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: 4 },
                react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 2 },
                    react_1.default.createElement(Logo_1.default, { src: logo, width: 180, height: 60, handleClick: function () { return handleClick('/'); } }),
                    (enableEmail && mailchimpFormId && emailProvider == 'mailchimp') && (react_1.default.createElement(components_1.MailchimpSubscribe, { formId: mailchimpFormId, buttonText: 'Subscribe' })),
                    (enableEmail && klaviyoListId && klaviyoApiKey && emailProvider == 'klaviyo') && (react_1.default.createElement(components_1.KlaviyoSubscribe, { listId: klaviyoListId, apiKey: klaviyoApiKey, buttonText: 'Subscribe' })))),
            react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: 8 },
                react_1.default.createElement(material_1.Box, { sx: sx.grid }, menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (menuItem, i) { return (react_1.default.createElement(FooterLinks_1.default, { key: i, menuItem: menuItem, handleClick: handleClick })); })))),
        react_1.default.createElement(material_1.Container, { maxWidth: "lg" },
            react_1.default.createElement(material_1.Box, { sx: sx.copyright },
                react_1.default.createElement(material_1.Typography, { sx: sx.link, variant: 'body2', color: "text.secondary" },
                    "\u00A9 copyright ",
                    (0, moment_1.default)().format('YYYY'),
                    " ",
                    name)))));
};
exports.default = Footer;
var sx = {
    root: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default',
        py: 2
    },
    link: {
        cursor: 'pointer',
    },
    grid: {
        display: 'grid',
        gap: 2,
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        width: '100%',
        padding: 2,
    },
    copyright: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
        pt: 1
    }
};
