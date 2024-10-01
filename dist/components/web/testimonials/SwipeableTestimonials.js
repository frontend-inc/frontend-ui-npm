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
var __1 = require("../..");
var SwipeableTestimonialCard_1 = __importDefault(require("./SwipeableTestimonialCard"));
var SwipeableTestimonials = function (props) {
    var _a = props.enableAutoPlay, enableAutoPlay = _a === void 0 ? false : _a, _b = props.enableArrows, enableArrows = _b === void 0 ? false : _b, _c = props.items, items = _c === void 0 ? [] : _c;
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(__1.Swipeable, { enableAutoPlay: enableAutoPlay, enableArrows: enableArrows }, items === null || items === void 0 ? void 0 : items.map(function (testimonial, i) { return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.item), (enableArrows && sx.itemArrows)), key: i },
            react_1.default.createElement(SwipeableTestimonialCard_1.default, { image: testimonial.image, author: testimonial.title, rating: testimonial.rating, text: testimonial.description }))); }))));
};
exports.default = SwipeableTestimonials;
var sx = {
    item: {
        p: 2,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemArrows: {
        px: 6,
    }
};
