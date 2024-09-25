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
var QuestionIcon = function (props) {
    var variant = props.variant;
    var question = constants_1.QUESTION_VARIANTS.find(function (q) { return q.variant === variant; });
    if (!question)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.iconContainer), { bgcolor: question === null || question === void 0 ? void 0 : question.color }) },
        react_1.default.createElement(components_1.Icon, { name: question === null || question === void 0 ? void 0 : question.icon })));
};
exports.default = QuestionIcon;
var sx = {
    iconContainer: {
        minWidth: '40px',
        minHeight: '40px',
        borderRadius: 1,
        bgcolor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};
