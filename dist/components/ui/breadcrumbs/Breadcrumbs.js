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
var context_1 = require("../../../context");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var Breadcrumbs = function (props) {
    var _a = props.links, links = _a === void 0 ? [] : _a, _b = props.maxLinks, maxLinks = _b === void 0 ? 2 : _b;
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    if (links.length === 0)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Breadcrumbs, { maxItems: maxLinks, "aria-label": "breadcrumb", separator: react_1.default.createElement(components_1.Icon, { color: 'text.secondary', name: "ChevronRight", size: 20 }) }, links.map(function (link, index) { return (react_1.default.createElement(material_1.Link, { sx: sx.link, key: index, href: "".concat(clientUrl).concat(link === null || link === void 0 ? void 0 : link.path) }, link === null || link === void 0 ? void 0 : link.label)); }))));
};
exports.default = Breadcrumbs;
var sx = {
    root: {
        py: 1
    },
    link: {
        color: 'text.secondary',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        }
    }
};
