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
var UserAvatar = function (props) {
    var src = props.src, _a = props.size, size = _a === void 0 ? 20 : _a;
    return (react_1.default.createElement(material_1.Avatar, { variant: "circular", src: src, sx: __assign(__assign({}, sx.avatar), { height: size + 10, width: size + 10 }) },
        react_1.default.createElement(__1.Icon, { name: "User", size: size, color: 'secondary.contrastText' })));
};
exports.default = UserAvatar;
var sx = {
    avatar: {
        bgcolor: 'secondary.main',
    },
};
