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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var CarouselDot = function (props) {
    var onClick = props.onClick, active = props.active, index = props.index, onMove = props.onMove, _a = props.styles, styles = _a === void 0 ? {} : _a, rest = __rest(props, ["onClick", "active", "index", "onMove", "styles"]);
    var _b = rest.carouselState, currentSlide = _b.currentSlide, deviceType = _b.deviceType;
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (react_1.default.createElement(material_1.Button, { disableRipple: true, sx: sx.button, className: active ? 'active' : 'inactive', onClick: function () { return onClick(); } },
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.dot), (active && sx.dotActive)), styles) })));
};
exports.default = CarouselDot;
var sx = {
    button: {
        py: 1,
        px: 0,
        boxShadow: 0,
        mx: '0px',
        '&:hover': {
            boxShadow: 0,
            bgcolor: 'transparent',
        },
    },
    dot: {
        width: '100%',
        height: '4px',
        bgcolor: 'grey.200',
        transition: 'all 0.3s ease-in-out',
    },
    dotActive: {
        bgcolor: 'primary.main',
    },
};
