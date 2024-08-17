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
var constants_1 = require("../../../constants");
var FieldIcon = function (props) {
    var variant = props.variant;
    var field = constants_1.FIELD_VARIANTS.find(function (f) { return f.variant === variant; });
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.iconContainer), { bgcolor: field === null || field === void 0 ? void 0 : field.color }) },
        react_1.default.createElement(components_1.Icon, { name: field === null || field === void 0 ? void 0 : field.icon })));
};
exports.default = FieldIcon;
var sx = {
    iconContainer: {
        p: '5px',
        mr: 1,
        width: '36px',
        height: '36px',
        borderRadius: '8px',
        bgcolor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    },
};
