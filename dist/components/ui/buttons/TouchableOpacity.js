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
var hooks_1 = require("../../../hooks");
var material_1 = require("@mui/material");
var TouchableOpacity = function (props) {
    var children = props.children, _a = props.justifyContent, justifyContent = _a === void 0 ? 'center' : _a, handleClick = props.handleClick, _b = props.disableRipple, disableRipple = _b === void 0 ? false : _b, _c = props.disableBorderRadius, disableBorderRadius = _c === void 0 ? false : _c;
    var _d = (0, hooks_1.useClickOrDrag)({
        onClick: handleClick,
    }), onMouseDown = _d.onMouseDown, onMouseUp = _d.onMouseUp;
    return (react_1.default.createElement(material_1.CardActionArea, { sx: __assign(__assign(__assign({}, sx.root), (disableBorderRadius && sx.disableBorderRadius)), { justifyContent: justifyContent }), disableRipple: disableRipple, onMouseDown: onMouseDown, onMouseUp: onMouseUp }, children));
};
exports.default = TouchableOpacity;
var sx = {
    root: {
        p: 0,
        cursor: 'pointer !important',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '.MuiCardActionArea-focusHighlight': {
            background: 'transparent',
        },
    },
    disableBorderRadius: {
        borderRadius: 0
    }
};
