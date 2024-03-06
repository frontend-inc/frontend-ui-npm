"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var image_1 = __importDefault(require("next/image"));
var Thumbnail = function (props) {
    var image = props.image, active = props.active, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.thumbnail), (active && sx.activeThumbnail)) },
        react_1.default.createElement(material_1.CardActionArea, { sx: {
                p: 0
            }, onClick: function () { return handleClick(image); } },
            react_1.default.createElement(image_1.default, { src: image.url, width: 96, height: 96, alt: image === null || image === void 0 ? void 0 : image.altText, layout: "respsonive", style: {
                    objectFit: 'cover'
                } }))));
};
var ProductImageSlider = function (props) {
    var image = props.image, images = props.images, handleClick = props.handleClick, _a = props.height, height = _a === void 0 ? 520 : _a, _b = props.width, width = _b === void 0 ? 520 : _b, _c = props.thumbnailSize, thumbnailSize = _c === void 0 ? 80 : _c;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0, sx: sx.root },
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.image), { width: '100%' }) }, (image === null || image === void 0 ? void 0 : image.url) && (react_1.default.createElement(image_1.default, { src: image === null || image === void 0 ? void 0 : image.url, alt: image === null || image === void 0 ? void 0 : image.altText, height: height, width: width, layout: "responsive", style: {
                objectFit: 'contain',
            } }))),
        react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.thumbnails }, images === null || images === void 0 ? void 0 : images.map(function (img) { return (react_1.default.createElement(Thumbnail, { key: img === null || img === void 0 ? void 0 : img.id, image: img, active: (img === null || img === void 0 ? void 0 : img.id) === (image === null || image === void 0 ? void 0 : image.id), handleClick: handleClick, size: thumbnailSize })); }))));
};
exports.default = ProductImageSlider;
var sx = {
    root: {},
    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        maxWidth: '100vw',
        height: '100%'
    },
    thumbnails: {
        mt: 1,
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        overflowY: 'scroll',
        gap: 0,
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    thumbnail: {
        width: '100px',
        height: '100px',
        border: '2px solid transparent',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        '&:hover': {
            opacity: 0.8,
        },
        overflow: 'hidden'
    },
    activeThumbnail: {
        border: '2px solid',
        borderColor: 'primary.main',
    },
};
