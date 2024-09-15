"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var Logo_1 = __importDefault(require("../header/Logo"));
var hooks_1 = require("../../../hooks");
var Footer = function (props) {
    var _a;
    var logo = props.logo, handleClick = props.handleClick, _b = props.links, links = _b === void 0 ? [] : _b, _c = props.socialLinks, socialLinks = _c === void 0 ? [] : _c, _d = props.legalLinks, legalLinks = _d === void 0 ? [] : _d;
    var appLogo = (0, hooks_1.useApp)().logo;
    var handleLogoClick = function () {
        handleClick('/');
    };
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, spacing: 1, direction: "column" },
        react_1.default.createElement(material_1.Box, { sx: sx.logo },
            react_1.default.createElement(Logo_1.default, { handleClick: handleLogoClick, src: logo || appLogo, width: 100, height: 50 })),
        react_1.default.createElement(material_1.Stack, { spacing: 6, sx: sx.headerLinks, direction: { sm: 'row', xs: 'column' } },
            react_1.default.createElement(material_1.Stack, { sx: sx.footerMenu, direction: "row", spacing: 3 },
                react_1.default.createElement(material_1.Box, { sx: sx.gridContainer },
                    react_1.default.createElement(material_1.Box, { sx: sx.grid }, links === null || links === void 0 ? void 0 : links.map(function (menuLink, i) { return (react_1.default.createElement(material_1.Link, { variant: "subtitle2", sx: sx.link, key: i, onClick: function () { return handleClick(menuLink === null || menuLink === void 0 ? void 0 : menuLink.path); } }, menuLink === null || menuLink === void 0 ? void 0 : menuLink.label)); }))))),
        react_1.default.createElement(material_1.Stack, { direction: { sm: 'row', xs: 'column' }, sx: sx.footerLinks, spacing: 2 },
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 }, (_a = socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.sort(function (a, b) { return (a === null || a === void 0 ? void 0 : a.position) - (b === null || b === void 0 ? void 0 : b.position); })) === null || _a === void 0 ? void 0 : _a.map(function (link, i) { return (react_1.default.createElement(__1.SocialLink, { key: i, provider: link === null || link === void 0 ? void 0 : link.provider, url: link === null || link === void 0 ? void 0 : link.url, color: "common.black" })); })),
            react_1.default.createElement(material_1.Stack, { direction: "row", divider: react_1.default.createElement(material_1.Divider, { sx: sx.divider }), spacing: 1 }, legalLinks === null || legalLinks === void 0 ? void 0 : legalLinks.map(function (menuLink, i) { return (
            //@ts-ignore
            react_1.default.createElement(material_1.Link, { variant: "overline", sx: sx.footerLink, key: i, onClick: function () { return handleClick(menuLink === null || menuLink === void 0 ? void 0 : menuLink.path); } }, menuLink === null || menuLink === void 0 ? void 0 : menuLink.label)); })),
            react_1.default.createElement(material_1.Box, { sx: sx.spacer }))));
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
    footerMenu: {
        py: 3,
        width: '100%',
    },
    logo: {
        width: {
            sm: '200px',
            xs: '100%',
        },
        display: 'flex',
        justifyContent: 'flex-start',
    },
    link: {
        color: 'text.secondary',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
        width: {
            sm: '200px',
            xs: '100%',
        },
    },
    footerLink: {
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
    headerLinks: {
        width: '100%',
        px: 3,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
    footerLinks: {
        width: '100%',
        py: 1,
        px: 3,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    spacer: {
        width: '100px',
    },
    gridContainer: {
        pl: {
            sm: 3,
            xs: 0,
        },
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            lg: '1fr 1fr 1fr 1fr',
            xs: '1fr 1fr',
        },
        gap: 1,
        width: '100%',
        maxWidth: {
            lg: '800px',
            sm: '400px',
        },
    },
};
