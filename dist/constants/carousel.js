"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_CAROUSEL_RESPONSIVE = exports.IMAGE_CAROUSEL_RESPONSIVE = exports.CAROUSEL_RESPONSIVE = void 0;
var theme_1 = require("../theme");
var _a = theme_1.breakpoints.values, xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl;
exports.CAROUSEL_RESPONSIVE = {
    superLargeDesktop: {
        breakpoint: { max: xl, min: lg },
        items: 3,
    },
    desktop: {
        breakpoint: { max: lg, min: md },
        items: 3,
    },
    tablet: {
        breakpoint: { max: md, min: sm },
        items: 2,
    },
    mobile: {
        breakpoint: { max: sm, min: xs },
        items: 1,
    },
};
exports.IMAGE_CAROUSEL_RESPONSIVE = {
    superLargeDesktop: {
        breakpoint: { max: xl, min: lg },
        items: 1,
    },
    desktop: {
        breakpoint: { max: lg, min: md },
        items: 1,
    },
    tablet: {
        breakpoint: { max: md, min: sm },
        items: 1,
    },
    mobile: {
        breakpoint: { max: sm, min: xs },
        items: 1,
    },
};
exports.PRODUCT_CAROUSEL_RESPONSIVE = {
    superLargeDesktop: {
        breakpoint: { max: xl, min: lg },
        items: 3,
    },
    desktop: {
        breakpoint: { max: lg, min: md },
        items: 3,
    },
    tablet: {
        breakpoint: { max: md, min: sm },
        items: 3,
    },
    mobile: {
        breakpoint: { max: sm, min: xs },
        items: 1,
    },
};
