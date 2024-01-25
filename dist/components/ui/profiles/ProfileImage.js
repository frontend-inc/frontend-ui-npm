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
var lucide_react_1 = require("lucide-react");
var ProfileImage = function (props) {
    var src = props.src, _a = props.disableRing, disableRing = _a === void 0 ? false : _a, _b = props.size, size = _b === void 0 ? 128 : _b;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.outerContainer), (!disableRing && sx.avatarRing)), { width: "".concat(size + 8, "px"), height: "".concat(size + 8, "px") }) },
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.innerContainer), { width: "".concat(size, "px"), height: "".concat(size, "px") }) },
            react_1.default.createElement(material_1.Avatar, { src: src, sx: __assign(__assign({}, sx.avatar), { width: "".concat(size - 8, "px"), height: "".concat(size - 8, "px") }) },
                react_1.default.createElement(lucide_react_1.User, { size: size, color: "black" })))));
};
exports.default = ProfileImage;
var sx = {
    outerContainer: {
        p: '3px',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '50%',
    },
    avatarRing: {
        background: "conic-gradient(\n      from 0deg,\n      red,\n      orange,\n      yellow,\n      green,\n      blue,\n      indigo,\n      violet,\n      red\n    )",
    },
    innerContainer: {
        border: '4px solid',
        borderColor: 'primary.contrastText',
        borderRadius: '50%',
    },
    avatar: {
        bgcolor: 'background.paper',
    },
};
