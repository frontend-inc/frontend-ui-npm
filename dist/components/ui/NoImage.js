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
var NoImage = function (props) {
    var _a = props.height, height = _a === void 0 ? 100 : _a, width = props.width, disableBorder = props.disableBorder, disableBorderRadius = props.disableBorderRadius;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign(__assign({}, sx.root), (disableBorder && sx.disableBorder)), (disableBorderRadius && sx.disableBorderRadius)), { height: height ? "".concat(height, "px") : '100%', width: width ? "".concat(width, "px") : '100%' }) }));
};
exports.default = NoImage;
var sx = {
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        backgroundImage: 'linear-gradient(45deg, #666, #000)',
    },
    disableBorder: {
        border: 'none',
    },
    disableBorderRadius: {
        borderRadius: 0,
    },
};
