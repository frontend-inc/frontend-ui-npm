"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var Breadcrumbs = function (props) {
    var _a = props.links, links = _a === void 0 ? [] : _a, _b = props.maxLinks, maxLinks = _b === void 0 ? 2 : _b;
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    if (links.length === 0)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Breadcrumbs, { maxItems: maxLinks, "aria-label": "breadcrumb", separator: react_1.default.createElement(components_1.Icon, { color: "text.secondary", name: "ChevronRight" }) }, links.map(function (link, index) { return (react_1.default.createElement(material_1.Link, { variant: "caption", sx: sx.link, key: index, href: "".concat(clientUrl).concat(link === null || link === void 0 ? void 0 : link.path) }, link === null || link === void 0 ? void 0 : link.label)); }))));
};
exports.default = Breadcrumbs;
var sx = {
    root: {
        py: 0,
    },
    link: {
        color: 'text.secondary',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
};
