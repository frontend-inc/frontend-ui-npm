"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var lodash_1 = require("lodash");
//@ts-ignore
var react_social_icons_1 = require("react-social-icons");
var SocialIcon = function (props) {
    var _a = props || {}, provider = _a.provider, handleClick = _a.handleClick, _b = _a.color, color = _b === void 0 ? 'primary.main' : _b;
    var theme = (0, material_2.useTheme)();
    var bgColor = (0, lodash_1.get)(theme.palette, color);
    return (react_1.default.createElement(material_1.IconButton, { size: "small", onClick: handleClick },
        react_1.default.createElement(react_social_icons_1.SocialIcon
        /* @ts-ignore */
        , { 
            /* @ts-ignore */
            network: provider, bgColor: bgColor, style: { height: 20, width: 20 } })));
};
exports.default = SocialIcon;
