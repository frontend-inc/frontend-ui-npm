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
var __1 = require("..");
var react_swipeable_views_utils_1 = require("react-swipeable-views-utils");
var core_1 = require("../core");
var frontend_shadcn_1 = require("frontend-shadcn");
var AutoPlaySwipeableViews = (0, react_swipeable_views_utils_1.autoPlay)(react_swipeable_views_1.default);
var Swipeable = function (props) {
    var _a = props.children, children = _a === void 0 ? [] : _a, _b = props.interval, interval = _b === void 0 ? 5000 : _b, _c = props.enableArrows, enableArrows = _c === void 0 ? false : _c, _d = props.enableAutoPlay, enableAutoPlay = _d === void 0 ? false : _d, className = props.className;
    var _e = (0, react_1.useState)(0), activeStep = _e[0], setActiveStep = _e[1];
    var handleStepChange = function (step) {
        setActiveStep(step);
    };
    var handlePrev = function () {
        if (activeStep === 0) {
            setActiveStep((children === null || children === void 0 ? void 0 : children.length) - 1);
        }
        else {
            setActiveStep(function (prevActiveStep) { return prevActiveStep - 1; });
        }
    };
    var handleNext = function () {
        if (activeStep === (children === null || children === void 0 ? void 0 : children.length) - 1) {
            setActiveStep(0);
        }
        else {
            setActiveStep(function (prevActiveStep) { return prevActiveStep + 1; });
        }
    };
    var SwipeableComponent = enableAutoPlay
        ? AutoPlaySwipeableViews
        : react_swipeable_views_1.default;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full relative', className) },
        react_1.default.createElement(SwipeableComponent, { axis: 'x', index: activeStep, onChangeIndex: handleStepChange, enableMouseEvents: true, interval: interval }, children),
        enableArrows && (react_1.default.createElement("div", { className: "absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full z-10" },
            react_1.default.createElement(core_1.IconButton, { color: "ghost", onClick: handlePrev, className: "ml-2" },
                react_1.default.createElement(__1.Icon, { name: "ChevronLeft", size: "xl" })),
            react_1.default.createElement(core_1.IconButton, { color: "ghost", onClick: handleNext, className: "mr-2" },
                react_1.default.createElement(__1.Icon, { name: "ChevronRight", size: "xl" }))))));
};
exports.default = Swipeable;
