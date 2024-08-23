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
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var ImageCard = function (props) {
    var _a = props || {}, primary = _a.primary, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, image = _a.image, _b = _a.height, height = _b === void 0 ? 260 : _b, _c = _a.slots, slots = _c === void 0 ? {
        item: {},
        image: {}
    } : _c;
    return (react_1.default.createElement(components_1.LightDarkMode, { mode: "dark" },
        react_1.default.createElement(material_1.Box, __assign({ sx: sx.root }, slots.item),
            react_1.default.createElement(components_1.TouchableOpacity, { handleClick: handleClick },
                react_1.default.createElement(components_1.Image, __assign({ src: image, height: height, alt: primary }, slots.image))),
            react_1.default.createElement(material_1.Box, { sx: sx.buttons }, secondaryAction))));
};
exports.default = ImageCard;
var sx = {
    root: {
        position: 'relative',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: 1,
        transition: 'box-shadow 0.3s',
        '&:hover': {
            boxShadow: 2,
        },
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'absolute',
        top: 10,
        right: 10,
    },
    userCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
};
