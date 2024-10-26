"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_CAROUSEL_RESPONSIVE = exports.IMAGE_CAROUSEL_RESPONSIVE = exports.CAROUSEL_RESPONSIVE = void 0;
var xs = 0;
var sm = 640;
var md = 768;
var lg = 1024;
var xl = 1280;
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
