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
var CarouselLeftArrow = function (props) {
    return (react_1.default.createElement(material_1.IconButton, __assign({}, props, { sx: sx.root }),
        react_1.default.createElement(__1.Icon, { name: "ChevronLeft", color: 'text.primary' })));
};
exports.default = CarouselLeftArrow;
var sx = {
    root: {
        position: 'absolute',
        left: 20,
        top: '28%',
        height: {
            sm: 48,
            xs: 32
        },
        width: {
            sm: 48,
            xs: 32
        },
        boxShadow: 4,
        opacity: 0.8,
        bgcolor: 'background.paper',
        '&:hover': {
            opacity: 0.9,
            bgcolor: 'background.paper',
        },
    },
};
