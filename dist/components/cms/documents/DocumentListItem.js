'use client';
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("../..");
var DocumentListItem = function (props) {
    var _a;
    var buttons = props.buttons, resource = props.resource, _b = props.listFields, listFields = _b === void 0 ? [] : _b, handleClick = props.handleClick, _c = props.disableTitle, disableTitle = _c === void 0 ? false : _c, _d = props.enableGradient, enableGradient = _d === void 0 ? false : _d, _e = props.enableOverlay, enableOverlay = _e === void 0 ? false : _e, _f = props.enableDownload, enableDownload = _f === void 0 ? false : _f, _g = props.enableComments, enableComments = _g === void 0 ? false : _g, _h = props.enableFavorites, enableFavorites = _h === void 0 ? false : _h, _j = props.enableLikes, enableLikes = _j === void 0 ? false : _j, _k = props.style, style = _k === void 0 ? 'card' : _k, rest = __rest(props, ["buttons", "resource", "listFields", "handleClick", "disableTitle", "enableGradient", "enableOverlay", "enableDownload", "enableComments", "enableFavorites", "enableLikes", "style"]);
    var COMPONENTS = {
        card: __1.Card,
        cover: __1.CoverCard,
        text: __1.TextCard,
        list: __1.ListCard,
        image: __1.ImageCard,
        file: __1.FileCard,
        video: __1.VideoCard,
    };
    var Component = COMPONENTS[style] || __1.Card;
    var typographyVariants = {
        card: 'subtitle1',
        cover: 'subtitle1',
        chip: 'subtitle1',
        text: 'h5',
        list: 'h6',
    };
    return (react_1.default.createElement(Component, { label: resource === null || resource === void 0 ? void 0 : resource.label, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, fullWidth: true, imageHeight: 260, imageWidth: 260, 
        // @ts-ignore
        title: !disableTitle && (
        //@ts-ignore
        react_1.default.createElement(__1.Typography, { variant: typographyVariants[style] }, resource === null || resource === void 0 ? void 0 : resource.title)), handleClick: handleClick, 
        // @ts-ignore
        subtitle: react_1.default.createElement(__2.ListFields, { fields: listFields, resource: resource }), actions: react_1.default.createElement(__2.SocialButtons, { size: "small", justifyContent: "flex-start", resource: resource, enableDownload: enableDownload, enableLikes: enableLikes, enableFavorites: enableFavorites, enableComments: enableComments }), enableGradient: enableGradient, enableOverlay: enableOverlay }));
};
exports.default = DocumentListItem;
