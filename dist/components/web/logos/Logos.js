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
var material_1 = require("@mui/material");
var __1 = require("../..");
var Logo_1 = __importDefault(require("./Logo"));
var material_2 = require("@mui/material");
var Logos = function (props) {
    var title = props.title, _a = props.images, images = _a === void 0 ? [] : _a, editing = props.editing, rest = __rest(props, ["title", "images", "editing"]);
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(material_2.Typography, { variant: "caption", sx: sx.caption }, title),
        react_1.default.createElement(material_1.Stack, { sx: sx.logos, direction: "row", spacing: 1 }, images === null || images === void 0 ? void 0 : images.map(function (image, index) { return (react_1.default.createElement(Logo_1.default, { key: index, title: "Logo", image: image === null || image === void 0 ? void 0 : image.src, height: 50, width: 120 })); })),
        (images === null || images === void 0 ? void 0 : images.length) === 0 && (react_1.default.createElement(__1.Placeholder, { icon: react_1.default.createElement(__1.Icon, { name: "Camera" }), title: "No images found", description: "Images will appear here" }))));
};
exports.default = Logos;
var sx = {
    root: {
        width: '100%',
        p: 2,
        bgcolor: 'background.main',
    },
    caption: {
        color: 'text.primary',
        textAlign: 'center',
    },
    logos: {
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        justifyContent: {
            sm: 'center',
            xs: 'flex-start',
        },
    },
};
