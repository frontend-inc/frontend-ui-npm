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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var Swipeable = function (props) {
    var _a = props.children, children = _a === void 0 ? [] : _a, _b = props.itemsPerSlide, itemsPerSlide = _b === void 0 ? 1 : _b, enableDots = props.enableDots, enableArrows = props.enableArrows, _c = props.arrowHeight, arrowHeight = _c === void 0 ? 50 : _c, // Default arrow height is 50% (middle)
    className = props.className;
    var _d = (0, react_1.useState)(), api = _d[0], setApi = _d[1];
    var _e = (0, react_1.useState)(0), current = _e[0], setCurrent = _e[1];
    var _f = (0, react_1.useState)(0), count = _f[0], setCount = _f[1];
    var basisClasses = {
        2: 'basis-1/2',
        3: 'basis-1/3',
        4: 'basis-1/4',
        5: 'basis-1/5',
        6: 'basis-1/6',
    };
    var handleSlide = function (index) {
        api === null || api === void 0 ? void 0 : api.scrollTo(index);
    };
    (0, react_1.useEffect)(function () {
        if (!api)
            return;
        setCount(api.scrollSnapList().length - itemsPerSlide);
        setCurrent(api.selectedScrollSnap());
        api.on('select', function () {
            setCurrent(api.selectedScrollSnap() || 0);
        });
    }, [api]);
    // Generate dynamic top style for arrows based on arrowHeight prop
    var dynamicArrowHeight = "top-[".concat(arrowHeight, "%]");
    return (react_1.default.createElement(frontend_shadcn_1.Carousel, { setApi: setApi, className: (0, frontend_shadcn_2.cn)('w-full', className) },
        react_1.default.createElement(frontend_shadcn_1.CarouselContent, null, children === null || children === void 0 ? void 0 : children.map(function (child, index) { return (react_1.default.createElement(frontend_shadcn_1.CarouselItem, { key: index, className: (0, frontend_shadcn_2.cn)(itemsPerSlide > 1 && basisClasses[itemsPerSlide]) }, child)); })),
        enableArrows && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(frontend_shadcn_1.CarouselPrevious, { className: (0, frontend_shadcn_2.cn)('absolute h-9 w-9 left-4 -translate-y-1/2 bg-background/20 text-foreground/70 hover:bg-background/70 hover:text-foreground border-0', dynamicArrowHeight) }),
            react_1.default.createElement(frontend_shadcn_1.CarouselNext, { className: (0, frontend_shadcn_2.cn)('absolute h-9 w-9 right-4 -translate-y-1/2 bg-background/20 text-foreground/70 hover:bg-background/70 hover:text-foreground border-0', dynamicArrowHeight) }))),
        enableDots && count > 1 && (react_1.default.createElement("div", { className: "absolute bottom-4 left-0 right-0 flex justify-center space-x-1 backdrop-blur-md bg-black/30 py-2 px-4 rounded-full mx-auto w-fit" }, children.map(function (_, index) { return (react_1.default.createElement(frontend_shadcn_1.Button, { key: index, variant: "ghost", size: "sm", className: (0, frontend_shadcn_2.cn)('w-2 h-2 rounded-full p-0 transition-all duration-300 ease-in-out hover:bg-white', index === current ? 'bg-white w-5' : 'bg-white/50'), onClick: function () { return handleSlide(index); } })); })))));
};
exports.default = Swipeable;
