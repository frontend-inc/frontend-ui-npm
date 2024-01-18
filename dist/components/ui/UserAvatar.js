"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var lucide_react_1 = require("lucide-react");
var material_2 = require("@mui/material");
var UserAvatar = function (props) {
    var src = props.src, _a = props.size, size = _a === void 0 ? 24 : _a;
    var theme = (0, material_2.useTheme)();
    return (react_1.default.createElement(material_1.Avatar, { variant: "circular", src: src, sx: sx.avatar },
        react_1.default.createElement(lucide_react_1.User, { size: size, color: theme.palette.text.primary })));
};
exports.default = UserAvatar;
var sx = {
    avatar: {
        bgcolor: 'transparent',
        height: '28px',
        width: '28px',
    },
};
