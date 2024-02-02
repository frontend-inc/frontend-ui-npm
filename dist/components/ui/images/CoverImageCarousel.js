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
var frontend_js_1 = require("frontend-js");
var context_1 = require("../../../context");
var react_swipeable_views_1 = __importDefault(require("react-swipeable-views"));
var components_1 = require("../../../components");
var router_1 = require("next/router");
var react_swipeable_views_utils_1 = require("react-swipeable-views-utils");
var AutoPlaySwipeableViews = (0, react_swipeable_views_utils_1.autoPlay)(react_swipeable_views_1.default);
var CoverImageCarousel = function (props) {
    var router = (0, router_1.useRouter)();
    var _a = props.editing, editing = _a === void 0 ? false : _a, url = props.url, navigateUrl = props.navigateUrl, _b = props.query, defaultQuery = _b === void 0 ? {} : _b, _c = props.perPage, perPage = _c === void 0 ? 20 : _c, buttonText = props.buttonText, _d = props.enableOverlay, enableOverlay = _d === void 0 ? false : _d, _e = props.opacity, opacity = _e === void 0 ? 0.5 : _e, _f = props.enableGradient, enableGradient = _f === void 0 ? false : _f, _g = props.autoPlay, autoPlay = _g === void 0 ? false : _g, height = props.height, _h = props.bgcolor, bgcolor = _h === void 0 ? '#000000' : _h, _j = props.alignItems, alignItems = _j === void 0 ? 'center' : _j;
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _k = (0, react_1.useState)(0), activeStep = _k[0], setActiveStep = _k[1];
    var _l = (0, react_1.useState)(0), maxSteps = _l[0], setMaxSteps = _l[1];
    var handleStepChange = function (step) {
        setActiveStep(step);
    };
    var _m = (0, frontend_js_1.useResource)({
        url: url,
    }), findMany = _m.findMany, resources = _m.resources;
    var handleClick = function (item) {
        if (!editing && clientUrl && navigateUrl && (item === null || item === void 0 ? void 0 : item.handle)) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            router.push("".concat(clientUrl).concat(navigateUrl, "/").concat(item === null || item === void 0 ? void 0 : item.handle));
        }
    };
    (0, react_1.useEffect)(function () {
        if (url && defaultQuery && perPage) {
            findMany(__assign(__assign({}, defaultQuery), { per_page: perPage }));
        }
    }, [url, defaultQuery, perPage]);
    (0, react_1.useEffect)(function () {
        if (resources) {
            setMaxSteps(resources === null || resources === void 0 ? void 0 : resources.length);
        }
    }, [resources]);
    var SwipeableComponent = autoPlay ? AutoPlaySwipeableViews : react_swipeable_views_1.default;
    return (react_1.default.createElement(SwipeableComponent, { axis: 'x', index: activeStep, onChangeIndex: handleStepChange, enableMouseEvents: true }, resources === null || resources === void 0 ? void 0 : resources.map(function (coverImage, index) {
        var _a;
        return (react_1.default.createElement(components_1.CoverImage, { key: index, editing: editing, title: coverImage === null || coverImage === void 0 ? void 0 : coverImage.title, description: coverImage === null || coverImage === void 0 ? void 0 : coverImage.description, image: (_a = coverImage === null || coverImage === void 0 ? void 0 : coverImage.image) === null || _a === void 0 ? void 0 : _a.url, height: height, buttonText: buttonText, enableOverlay: enableOverlay, enableGradient: enableGradient, opacity: opacity, handleClick: function () { return handleClick(coverImage); }, bgcolor: bgcolor, alignItems: alignItems }));
    })));
};
exports.default = CoverImageCarousel;
