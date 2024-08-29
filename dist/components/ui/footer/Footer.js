"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var Footer = function (props) {
    var _a;
    var handleClick = props.handleClick, menuLinks = props.menuLinks, socialLinks = props.socialLinks;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, spacing: 1, direction: "column" },
        react_1.default.createElement(material_1.Stack, { direction: "row", divider: react_1.default.createElement(material_1.Divider, { sx: sx.divider }), spacing: 1 }, menuLinks === null || menuLinks === void 0 ? void 0 : menuLinks.map(function (menuLink, i) { return (
        //@ts-ignore
        react_1.default.createElement(material_1.Link, { variant: "overline", sx: sx.link, key: i, onClick: function () { return handleClick(menuLink === null || menuLink === void 0 ? void 0 : menuLink.path); } }, menuLink === null || menuLink === void 0 ? void 0 : menuLink.name)); })),
        react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 0 }, (_a = socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.sort(function (a, b) { return (a === null || a === void 0 ? void 0 : a.position) - (b === null || b === void 0 ? void 0 : b.position); })) === null || _a === void 0 ? void 0 : _a.map(function (link, i) { return (react_1.default.createElement(__1.SocialLink, { key: i, provider: link === null || link === void 0 ? void 0 : link.provider, url: link === null || link === void 0 ? void 0 : link.url })); }))));
};
exports.default = Footer;
var sx = {
    root: {
        py: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default',
        minHeight: '80px',
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: {
            xs: 'column',
            sm: 'row',
        },
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    link: {
        color: 'text.secondary',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    divider: {
        borderRight: '1px solid',
        borderColor: 'divider',
    },
};
