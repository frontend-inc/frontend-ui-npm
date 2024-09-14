"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var ShopifyProductImageList = function (props) {
    var images = props.images, handleClick = props.handleClick, _a = props.itemWidth, itemWidth = _a === void 0 ? 500 : _a, _b = props.xs, xs = _b === void 0 ? 12 : _b, _c = props.sm, sm = _c === void 0 ? 6 : _c, _d = props.md, md = _d === void 0 ? 6 : _d, _e = props.lg, lg = _e === void 0 ? 6 : _e;
    return (react_1.default.createElement(material_1.Grid, { container: true, spacing: 1 }, images === null || images === void 0 ? void 0 : images.map(function (image, i) { return (react_1.default.createElement(material_1.Grid, { item: true, key: i, xs: xs, sm: sm, md: md, lg: lg },
        react_1.default.createElement(material_1.CardActionArea, { sx: sx.cardActionArea, onClick: function () { return handleClick(i); } },
            react_1.default.createElement(components_1.Image, { src: image, height: itemWidth })))); })));
};
exports.default = ShopifyProductImageList;
var sx = {
    cardActionArea: {
        p: 0,
        overflow: 'hidden',
    },
};
