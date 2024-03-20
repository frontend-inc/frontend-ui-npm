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
var __1 = require("../..");
var image_1 = __importDefault(require("next/image"));
var moment_1 = __importDefault(require("moment"));
var Footer = function (props) {
    var handleClick = props.handleClick, menuItems = props.menuItems, facebook = props.facebook, instagram = props.instagram, linkedin = props.linkedin, twitter = props.twitter, youtube = props.youtube, tiktok = props.tiktok;
    var _a = (0, react_1.useContext)(context_1.AppContext), logo = _a.logo, name = _a.name;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, spacing: 1, direction: "column" },
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 0 },
            react_1.default.createElement(material_1.Grid, { xs: 12, sm: 3 },
                react_1.default.createElement(material_1.Box, { sx: sx.logoContainer },
                    react_1.default.createElement(material_1.Box, { sx: sx.logo },
                        react_1.default.createElement(image_1.default, { src: logo, width: 180, height: 60, alt: 'logo', layout: "responsive" })))),
            react_1.default.createElement(material_1.Grid, { xs: 12, sm: 9 },
                react_1.default.createElement(material_1.Box, { sx: sx.grid }, menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (menuItem, i) { return (react_1.default.createElement(FooterLinks_1.default, { key: i, menuItem: menuItem, handleClick: handleClick })); })))),
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, sx: sx.footerLinks },
            react_1.default.createElement(material_1.Box, { sx: sx.socialUrls },
                facebook && react_1.default.createElement(__1.SocialLink, { provider: "facebook", url: facebook }),
                instagram && react_1.default.createElement(__1.SocialLink, { provider: "instagram", url: instagram }),
                linkedin && react_1.default.createElement(__1.SocialLink, { provider: "linkedin", url: linkedin }),
                twitter && react_1.default.createElement(__1.SocialLink, { provider: "twitter", url: twitter }),
                youtube && react_1.default.createElement(__1.SocialLink, { provider: "youtube", url: youtube }),
                tiktok && react_1.default.createElement(__1.SocialLink, { provider: "tiktok", url: tiktok })),
            react_1.default.createElement(material_1.Box, { sx: sx.copyright },
                react_1.default.createElement(material_1.Typography, { variant: 'body2', color: "text.secondary" },
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
        borderTop: '1px solid',
        borderColor: 'divider',
    },
    logo: {
        height: 120,
        width: 120
    },
    logoContainer: {
        px: 4,
        py: 2,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
        },
        width: '100%',
    },
    copyright: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialUrls: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 1,
    },
    divider: {
        borderTop: '1px solid',
        borderColor: 'divider',
        width: '96%',
    },
    footerLinks: {
        px: 4,
        display: 'flex',
        direction: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        pb: 4
    }
};
