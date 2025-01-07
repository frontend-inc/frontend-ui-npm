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
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var react_2 = require("@nextui-org/react");
var frontend_shadcn_1 = require("frontend-shadcn");
var FeatureTab = function (props) {
    var _a = props || {}, handleClick = _a.handleClick, icon = _a.icon, title = _a.title, subtitle = _a.subtitle, _b = _a.direction, direction = _b === void 0 ? 'column' : _b, isActive = _a.isActive;
    return (react_1.default.createElement("button", { onClick: handleClick, className: (0, react_2.cn)('rounded-lg border-1 border-transparent', isActive && 'border-divider shadow-lg bg-content1', 'hover:bg-content2 cursor-pointer p-3 w-full transition-all duration-200') },
        react_1.default.createElement("div", { className: (0, react_2.cn)('flex flex-row flex-grow justify-start w-full h-full space-x-3 min-h-[60px]') },
            icon && (react_1.default.createElement(components_2.RemixIcon, { name: icon, size: "lg", className: 'text-primary' })),
            react_1.default.createElement("div", { className: (0, react_2.cn)('flex flex-col space-y-2', direction === 'row' && 'text-left') },
                react_1.default.createElement(components_2.Typography, { variant: "subtitle1", className: (0, react_2.cn)(isActive ? 'text-foreground' : 'text-foreground/70') }, title),
                react_1.default.createElement(components_2.Typography, { className: (0, react_2.cn)(isActive ? 'text-foreground' : 'text-foreground/70'), variant: "body1" }, subtitle)))));
};
var FeatureTabs = function (props) {
    var _a = props || {}, _b = _a.items, items = _b === void 0 ? [] : _b, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, _c = _a.direction, direction = _c === void 0 ? 'row' : _c, _d = _a.enableDots, enableDots = _d === void 0 ? false : _d;
    var _e = (0, react_1.useState)(), api = _e[0], setApi = _e[1];
    var _f = (0, react_1.useState)(0), current = _f[0], setCurrent = _f[1];
    var _g = (0, react_1.useState)(0), count = _g[0], setCount = _g[1];
    (0, react_1.useEffect)(function () {
        if (!api)
            return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());
        api.on('select', function () {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);
    var handleSlide = function (index) {
        api === null || api === void 0 ? void 0 : api.scrollTo(index);
    };
    if ((items === null || items === void 0 ? void 0 : items.length) == 0) {
        return (react_1.default.createElement(components_1.Empty, { title: "No featured content.", description: "Your featured content will appear here." }));
    }
    return (react_1.default.createElement("div", { className: (0, react_2.cn)('w-full h-full flex flex-col space-y-4 items-center justify-center', direction == 'row' && 'md:flex-row md:space-x-4 md:space-y-0') },
        react_1.default.createElement("div", { className: (0, react_2.cn)('flex flex-col space-y-4 space-x-0 px-1', 'w-full flex sm:flex-row sm:space-y-0 sm:space-x-4 sm:overflow-x-auto py-2', direction == 'row' &&
                'sm:basis-1/3 sm:flex-col sm:space-y-0 sm:space-x-0') }, items === null || items === void 0 ? void 0 : items.map(function (item, i) { return (react_1.default.createElement(components_1.BlurFade, { delay: 0.25, inView: true, key: i, className: "w-full" },
            react_1.default.createElement(FeatureTab, { icon: item === null || item === void 0 ? void 0 : item.icon, title: item === null || item === void 0 ? void 0 : item.title, subtitle: item === null || item === void 0 ? void 0 : item.subtitle, handleClick: function () { return handleSlide(i); }, isActive: i === current }))); })),
        react_1.default.createElement(frontend_shadcn_1.Carousel, { setApi: setApi, className: (0, react_2.cn)('w-full h-full relative', direction == 'row' && 'md:basis-2/3') },
            react_1.default.createElement(frontend_shadcn_1.CarouselContent, { className: "h-full" }, items.map(function (item, index) { return (react_1.default.createElement(frontend_shadcn_1.CarouselItem, { key: index },
                react_1.default.createElement("div", { className: "w-full" },
                    react_1.default.createElement(components_1.BlurFade, { inView: true, delay: 0.25, className: "w-full p-2" },
                        react_1.default.createElement(components_2.Image, { fullWidth: true, height: 512, src: item === null || item === void 0 ? void 0 : item.image, alt: item === null || item === void 0 ? void 0 : item.title, enableGradient: enableGradient, enableOverlay: enableOverlay }))))); })),
            enableDots && count > 1 && (react_1.default.createElement("div", { className: "absolute bottom-4 left-0 right-0 flex justify-center space-x-1 backdrop-blur-md bg-black/30 py-2 px-4 rounded-full mx-auto w-fit" }, items.map(function (_, index) { return (react_1.default.createElement(frontend_shadcn_1.Button, { key: index, variant: "ghost", size: "sm", className: (0, react_2.cn)('w-2 h-2 rounded-full p-0 transition-all duration-300 ease-in-out hover:bg-white', index === current ? 'bg-white w-5' : 'bg-white/50'), onClick: function () { return handleSlide(index); } })); }))))));
};
exports.default = FeatureTabs;
