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
var AttachmentImage = function (props) {
    var _a = props.height, height = _a === void 0 ? 64 : _a, _b = props.width, width = _b === void 0 ? 64 : _b, _c = props.icon, icon = _c === void 0 ? 'File' : _c;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.image), { height: "".concat(height, "px"), width: width ? "".concat(width, "px") : '100%' }) },
        react_1.default.createElement(components_1.Icon, { name: icon, size: 24 })));
};
exports.default = AttachmentImage;
var sx = {
    image: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.paper',
    },
};
