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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_multi_carousel_1 = __importDefault(require("react-multi-carousel"));
var material_1 = require("@mui/material");
var helpers_1 = require("../../../helpers");
var styles_1 = require("@mui/material/styles");
var CarouselDot_1 = __importDefault(require("./CarouselDot"));
var hooks_1 = require("../../../hooks");
var ReactCarousel = function (props) {
    var theme = (0, styles_1.useTheme)();
    var _a = (0, react_1.useState)(null), responsive = _a[0], setResponsive = _a[1];
    var _b = props.editing, editing = _b === void 0 ? false : _b, children = props.children, _c = props.autoPlay, autoPlay = _c === void 0 ? false : _c, _d = props.arrows, arrows = _d === void 0 ? false : _d, _e = props.showDots, showDots = _e === void 0 ? true : _e, _f = props.styles, styles = _f === void 0 ? {} : _f;
    var breakpoint = (0, hooks_1.useResponsive)().breakpoint;
    var _g = (0, react_1.useState)(960), width = _g[0], setWidth = _g[1];
    (0, react_1.useEffect)(function () {
        //@ts-ignore
        setResponsive((0, helpers_1.getCarouselResponsive)(theme));
    }, [theme === null || theme === void 0 ? void 0 : theme.breakpoints]);
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.root), (editing && sx.rootEditor)), (styles && styles)) }, responsive && children && (react_1.default.createElement(react_multi_carousel_1.default, { responsive: responsive, swipeable: true, draggable: true, infinite: true, autoPlay: autoPlay, arrows: arrows, showDots: showDots, customDot: react_1.default.createElement(CarouselDot_1.default, null) }, children))));
};
exports.default = ReactCarousel;
var sx = {
    root: {
        width: '100%',
    },
    rootEditor: {
        maxWidth: "calc(100vw - 520px)"
    }
};
