'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ProductListItem_1 = __importDefault(require("./ProductListItem"));
var frontend_js_1 = require("frontend-js");
var react_2 = require("@nextui-org/react");
var frontend_shadcn_1 = require("frontend-shadcn");
var ProductCarouselListItems = function (props) {
    var handleClick = props.handleClick, _a = props.enableGradient, enableGradient = _a === void 0 ? false : _a, _b = props.enableOverlay, enableOverlay = _b === void 0 ? false : _b, _c = props.enableRatings, enableRatings = _c === void 0 ? false : _c, _d = props.enableFavorites, enableFavorites = _d === void 0 ? false : _d, _e = props.enableLikes, enableLikes = _e === void 0 ? false : _e;
    var _f = (0, frontend_js_1.useResourceContext)(), setOpenShow = _f.setOpenShow, loading = _f.loading, resources = _f.resources, setResource = _f.setResource;
    var handleShowClick = function (product) {
        if (handleClick) {
            handleClick(product);
            return;
        }
        else {
            setResource(product);
            setOpenShow(true);
        }
    };
    return (react_1.default.createElement("div", { className: (0, react_2.cn)('w-full', loading && 'opacity-50') },
        react_1.default.createElement(frontend_shadcn_1.Carousel, null,
            react_1.default.createElement(frontend_shadcn_1.CarouselContent, null, resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) { return (react_1.default.createElement(frontend_shadcn_1.CarouselItem, { className: "sm:basis-1/2 lg:basis-1/3", key: index },
                react_1.default.createElement("div", { className: "p-1" },
                    react_1.default.createElement(ProductListItem_1.default, { resource: resource, handleClick: function () { return handleShowClick(resource); }, enableGradient: enableGradient, enableOverlay: enableOverlay, enableFavorites: enableFavorites, enableRatings: enableRatings, enableLikes: enableLikes })))); })),
            react_1.default.createElement(frontend_shadcn_1.CarouselPrevious, { className: "hidden sm:flex" }),
            react_1.default.createElement(frontend_shadcn_1.CarouselNext, { className: "hidden sm:flex" }))));
};
exports.default = ProductCarouselListItems;
