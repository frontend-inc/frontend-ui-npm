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
var context_1 = require("../../../context");
var react_swipeable_views_1 = __importDefault(require("react-swipeable-views"));
var components_1 = require("../../../components");
var router_1 = require("next/router");
var react_swipeable_views_utils_1 = require("react-swipeable-views-utils");
var material_1 = require("@mui/material");
var AutoPlaySwipeableViews = (0, react_swipeable_views_utils_1.autoPlay)(react_swipeable_views_1.default);
var CoverImageCarousel = function (props) {
    var router = (0, router_1.useRouter)();
    var _a = props.editing, editing = _a === void 0 ? false : _a, _b = props.items, items = _b === void 0 ? [] : _b, _c = props.enableOverlay, enableOverlay = _c === void 0 ? false : _c, _d = props.opacity, opacity = _d === void 0 ? 0.5 : _d, _e = props.enableGradient, enableGradient = _e === void 0 ? false : _e, _f = props.enableArrows, enableArrows = _f === void 0 ? false : _f, _g = props.autoPlay, autoPlay = _g === void 0 ? false : _g, _h = props.overlayColor, overlayColor = _h === void 0 ? '#000000' : _h, _j = props.alignItems, alignItems = _j === void 0 ? 'center' : _j;
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _k = (0, react_1.useState)(0), activeStep = _k[0], setActiveStep = _k[1];
    var handleStepChange = function (step) {
        setActiveStep(step);
    };
    var handleClick = function (item) {
        if (!editing && (item === null || item === void 0 ? void 0 : item.url)) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            router.push("".concat(clientUrl).concat(item === null || item === void 0 ? void 0 : item.url));
        }
    };
    var handlePrev = function () {
        if (activeStep === 0) {
            setActiveStep(items.length - 1);
        }
        else {
            setActiveStep(function (prevActiveStep) { return prevActiveStep - 1; });
        }
    };
    var handleNext = function () {
        if (activeStep === items.length - 1) {
            setActiveStep(0);
        }
        else {
            setActiveStep(function (prevActiveStep) { return prevActiveStep + 1; });
        }
    };
    var SwipeableComponent = autoPlay ? AutoPlaySwipeableViews : react_swipeable_views_1.default;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(SwipeableComponent, { axis: 'x', index: activeStep, onChangeIndex: handleStepChange, enableMouseEvents: true }, items === null || items === void 0 ? void 0 : items.map(function (item, index) { return (react_1.default.createElement(components_1.CoverImage, { key: index, editing: editing, title: item === null || item === void 0 ? void 0 : item.title, description: item === null || item === void 0 ? void 0 : item.description, image: item === null || item === void 0 ? void 0 : item.image, buttonText: item === null || item === void 0 ? void 0 : item.buttonText, enableOverlay: enableOverlay, enableGradient: enableGradient, opacity: opacity, handleClick: function () { return handleClick(item); }, overlayColor: overlayColor, alignItems: alignItems })); })),
        enableArrows && (react_1.default.createElement(material_1.Box, { sx: sx.actions },
            react_1.default.createElement(material_1.IconButton, { onClick: handlePrev },
                react_1.default.createElement(components_1.Icon, { name: "ChevronLeft", size: 32 })),
            react_1.default.createElement(material_1.IconButton, { onClick: handleNext },
                react_1.default.createElement(components_1.Icon, { name: "ChevronRight", size: 32 }))))));
};
exports.default = CoverImageCarousel;
var sx = {
    root: {
        width: '100%',
        position: 'relative'
    },
    actions: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        zIndex: 1
    }
};
