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
var __1 = require("../..");
var material_1 = require("@mui/material");
var VideoCard = function (props) {
    var _a = props || {}, avatar = _a.avatar, primary = _a.primary, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, image = _a.image, _b = _a.slots, slots = _b === void 0 ? {
        item: {},
        image: {}
    } : _b;
    return (react_1.default.createElement(__1.LightDarkMode, { mode: "dark" },
        react_1.default.createElement(material_1.Box, __assign({ sx: sx.root }, slots.item),
            react_1.default.createElement(__1.TouchableOpacity, { handleClick: handleClick },
                react_1.default.createElement(__1.Image, __assign({ src: image, height: 360, alt: primary }, slots.image))),
            react_1.default.createElement(material_1.IconButton, { sx: sx.playIcon, onClick: handleClick },
                react_1.default.createElement(__1.Icon, { name: "Play", color: "common.white", size: 20 })),
            react_1.default.createElement(material_1.Box, { sx: sx.buttons }, secondaryAction),
            avatar && (react_1.default.createElement(material_1.Box, { sx: sx.avatar }, avatar)))));
};
exports.default = VideoCard;
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
    gradient: {
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
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
    playIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'absolute',
        top: 'calc(50% - 20px)',
        right: 'calc(50% - 20px)',
        bgcolor: 'rgb(0,0,0,0.5)',
    },
    avatar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
};
