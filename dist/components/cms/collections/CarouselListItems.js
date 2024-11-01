'use client';
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var navigation_1 = require("next/navigation");
var CollectionListItem_1 = __importDefault(require("./CollectionListItem"));
var frontend_js_1 = require("frontend-js");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var CarouselListItems = function (props) {
    var router = (0, navigation_1.useRouter)();
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var buttons = props.buttons, href = props.href, displayFields = props.displayFields, _a = props.enableGradient, enableGradient = _a === void 0 ? false : _a, _b = props.enableOverlay, enableOverlay = _b === void 0 ? false : _b, _c = props.enableFavorites, enableFavorites = _c === void 0 ? false : _c, _d = props.enableLikes, enableLikes = _d === void 0 ? false : _d, _e = props.slots, slots = _e === void 0 ? {
        item: {},
        image: {},
    } : _e;
    var _f = (0, frontend_js_1.useResourceContext)(), setOpenShow = _f.setOpenShow, loading = _f.loading, resources = _f.resources, setResource = _f.setResource;
    var handleClick = function (resource) {
        if (clientUrl && href && (resource === null || resource === void 0 ? void 0 : resource.handle)) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            router.push("".concat(clientUrl).concat(href, "/").concat(resource === null || resource === void 0 ? void 0 : resource.handle));
        }
        else {
            setResource(resource);
            setOpenShow(true);
        }
    };
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full', loading && 'opacity-50') },
        react_1.default.createElement(frontend_shadcn_2.Carousel, null,
            react_1.default.createElement(frontend_shadcn_2.CarouselContent, null, resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) { return (react_1.default.createElement(frontend_shadcn_2.CarouselItem, { className: "sm:basis-1/2 lg:basis-1/3", key: index },
                react_1.default.createElement("div", { className: 'p-1' },
                    react_1.default.createElement(CollectionListItem_1.default, __assign({ buttons: buttons, style: "card", resource: resource, displayFields: displayFields, handleClick: function () { return handleClick(resource); }, enableGradient: enableGradient, enableOverlay: enableOverlay, enableFavorites: enableFavorites, enableLikes: enableLikes }, slots.item))))); })),
            react_1.default.createElement(frontend_shadcn_2.CarouselPrevious, { className: "hidden sm:flex" }),
            react_1.default.createElement(frontend_shadcn_2.CarouselNext, { className: "hidden sm:flex" }))));
};
exports.default = CarouselListItems;
