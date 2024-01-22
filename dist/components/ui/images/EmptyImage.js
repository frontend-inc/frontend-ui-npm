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
var icons_material_1 = require("@mui/icons-material");
var material_1 = require("@mui/material");
var EmptyImage = function (props) {
    var _a = props.height, height = _a === void 0 ? 64 : _a, width = props.width;
    return (react_1.default.createElement(material_1.Avatar, { sx: __assign(__assign({}, sx.avatar), { height: "".concat(height, "px"), width: width ? "".concat(width, "px") : "100%" }), variant: "rounded" },
        react_1.default.createElement(icons_material_1.Image, { sx: sx.icon })));
};
exports.default = EmptyImage;
var sx = {
    avatar: {
        bgcolor: "background.paper",
    },
    icon: {
        color: "divider",
    },
};
