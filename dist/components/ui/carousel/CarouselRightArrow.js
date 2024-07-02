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
var components_1 = require("../../../components");
var CarouselRightArrow = function (props) {
    return (react_1.default.createElement(material_1.IconButton, __assign({}, props, { sx: sx.root }),
        react_1.default.createElement(components_1.Icon, { name: "ChevronRight" })));
};
exports.default = CarouselRightArrow;
var sx = {
    root: {
        position: 'absolute',
        right: 0,
        top: 20,
        transform: 'translateY(-50%)',
        bgcolor: 'secondary.main',
        '&:hover': {
            bgcolor: 'secondary.dark',
        },
    },
};
