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
var styles_1 = __importDefault(require("./styles"));
var TabsInput = function (props) {
    var name = props.name, label = props.label, _a = props.disablePadding, disablePadding = _a === void 0 ? false : _a, _b = props.disableBorder, disableBorder = _b === void 0 ? false : _b, handleChange = props.handleChange, options = props.options, value = props.value, _c = props.iconPosition, iconPosition = _c === void 0 ? 'start' : _c, _d = props.variant, variant = _d === void 0 ? 'fullWidth' : _d, _e = props.size, size = _e === void 0 ? 'large' : _e, _f = props.direction, direction = _f === void 0 ? 'row' : _f;
    var handleInputChange = function (value) {
        handleChange({
            target: {
                name: name,
                value: value,
            },
        });
    };
    return (react_1.default.createElement(material_1.Stack, { sx: __assign(__assign(__assign({}, styles_1.default.stack), (direction == 'row' && styles_1.default.stackVertical)), { justifyContent: 'space-between' }), direction: direction, spacing: 1 },
        label && (react_1.default.createElement(material_1.Typography, { sx: styles_1.default.label, variant: "caption", color: "text.secondary" }, label)),
        react_1.default.createElement(components_1.ButtonTabs, { options: options, value: value, iconPosition: iconPosition, variant: variant, size: size, handleChange: handleInputChange, disableBorder: disableBorder, disablePadding: disablePadding })));
};
exports.default = TabsInput;
