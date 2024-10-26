'use client';
"use strict";
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
var frontend_shadcn_1 = require("frontend-shadcn");
var hooks_1 = require("../../../../hooks");
function SwipeableShopifyProductImages(_a) {
    var _b, _c, _d;
    var product = _a.product, _e = _a.height, height = _e === void 0 ? 320 : _e, handleClick = _a.handleClick, _f = _a.disableBorderRadius, disableBorderRadius = _f === void 0 ? false : _f;
    var _g = (0, react_1.useState)(0), activeStep = _g[0], setActiveStep = _g[1];
    // @ts-ignore
    var maxSteps = ((_c = (_b = product === null || product === void 0 ? void 0 : product.images) === null || _b === void 0 ? void 0 : _b.edges) === null || _c === void 0 ? void 0 : _c.length) || 0;
    var handleStepChange = function (step) {
        setActiveStep(step);
    };
    var _h = (0, hooks_1.useClickOrDrag)({
        onClick: handleClick,
    }), onMouseDown = _h.onMouseDown, onMouseUp = _h.onMouseUp;
    return (react_1.default.createElement("div", { className: "relative w-full" },
        react_1.default.createElement(react_swipeable_views_1.default, { axis: 'x', index: activeStep, onChangeIndex: handleStepChange, enableMouseEvents: true }, (_d = product === null || product === void 0 ? void 0 : product.images) === null || _d === void 0 ? void 0 : _d.edges.map(function (_a) {
            var image = _a.node;
            return (react_1.default.createElement("div", { key: image.id, className: "w-full overflow-hidden", onMouseDown: onMouseDown, onMouseUp: onMouseUp },
                react_1.default.createElement(components_1.Image, { src: image === null || image === void 0 ? void 0 : image.url, alt: product === null || product === void 0 ? void 0 : product.title, height: height, disableBorderRadius: disableBorderRadius, aspectRatio: 1.0 })));
        })),
        maxSteps > 1 && (react_1.default.createElement("div", { className: "absolute bottom-2 left-0 right-0 flex justify-center" }, Array.from({ length: maxSteps }).map(function (_, index) { return (react_1.default.createElement("div", { key: index, className: (0, frontend_shadcn_1.cn)('w-2 h-2 rounded-full mx-1', index === activeStep ? 'bg-primary' : 'bg-gray-300') })); })))));
}
exports.default = SwipeableShopifyProductImages;
