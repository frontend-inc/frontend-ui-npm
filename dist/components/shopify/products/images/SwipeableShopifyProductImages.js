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
var react_swipeable_views_1 = __importDefault(require("react-swipeable-views"));
var components_1 = require("../../../../components");
var material_1 = require("@mui/material");
var frontend_shopify_1 = require("frontend-shopify");
var SwipeableShopifyProductImages = function (props) {
    var _a, _b;
    var product = props.product, _c = props.height, height = _c === void 0 ? 320 : _c, handleClick = props.handleClick, _d = props.objectFit, objectFit = _d === void 0 ? 'cover' : _d, _e = props.disableBorderRadius, disableBorderRadius = _e === void 0 ? false : _e, _f = props.responsiveHeight, responsiveHeight = _f === void 0 ? false : _f;
    var _g = (0, react_1.useState)(0), activeStep = _g[0], setActiveStep = _g[1];
    // @ts-ignore
    var maxSteps = (_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a.edges.length;
    var handleStepChange = function (step) {
        setActiveStep(step);
    };
    return (react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.root), { height: !responsiveHeight ? "".concat(height, "px") : null, minHeight: "".concat(height, "px"), width: {
                sm: '100%',
                xs: '100%',
            } }), direction: "column" },
        react_1.default.createElement(react_swipeable_views_1.default, { axis: 'x', index: activeStep, onChangeIndex: handleStepChange, enableMouseEvents: true }, 
        // @ts-ignore
        (_b = product === null || product === void 0 ? void 0 : product.images) === null || _b === void 0 ? void 0 : _b.edges.map(function (_a) {
            var image = _a.node;
            return (react_1.default.createElement(material_1.Box, { key: image.id, sx: __assign({}, sx.image) },
                react_1.default.createElement(components_1.TouchableOpacity, { key: image.id, handleClick: handleClick },
                    react_1.default.createElement(components_1.Image, { src: (0, frontend_shopify_1.shopifyResizeImage)(image === null || image === void 0 ? void 0 : image.url, {
                            width: 600,
                            height: 600,
                        }), alt: product === null || product === void 0 ? void 0 : product.title, height: height, disableBorderRadius: disableBorderRadius }))));
        })),
        maxSteps > 1 && (react_1.default.createElement(material_1.MobileStepper, { sx: sx.stepper, steps: maxSteps, position: "static", activeStep: activeStep, backButton: react_1.default.createElement(material_1.Box, null), nextButton: react_1.default.createElement(material_1.Box, null) }))));
};
exports.default = SwipeableShopifyProductImages;
var sx = {
    root: {
        width: '100%',
        position: 'relative',
    },
    stepper: {
        position: 'absolute',
        bottom: 5,
        bgcolor: 'transparent',
        width: '100%',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        overflow: 'hidden',
        '&::webkit-scrollbar': {
            display: 'none',
        },
    },
};
