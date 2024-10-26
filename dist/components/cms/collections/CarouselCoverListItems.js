'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var navigation_1 = require("next/navigation");
var frontend_js_1 = require("frontend-js");
var frontend_shadcn_1 = require("frontend-shadcn");
var CarouselCoverListItems = function (props) {
    var router = (0, navigation_1.useRouter)();
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var href = props.href, height = props.height, buttonText = props.buttonText, _a = props.enableAutoPlay, enableAutoPlay = _a === void 0 ? true : _a, _b = props.enableArrows, enableArrows = _b === void 0 ? false : _b, _c = props.enableGradient, enableGradient = _c === void 0 ? false : _c, _d = props.enableOverlay, enableOverlay = _d === void 0 ? false : _d;
    var _e = (0, frontend_js_1.useResourceContext)(), loading = _e.loading, resources = _e.resources;
    var handleClick = function (resource) {
        if (clientUrl && href && (resource === null || resource === void 0 ? void 0 : resource.handle)) {
            router.push("".concat(clientUrl).concat(href, "/").concat(resource === null || resource === void 0 ? void 0 : resource.handle));
        }
    };
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full', loading && 'opacity-50', height && "h-[".concat(height, "px]")) },
        react_1.default.createElement(__1.Swipeable, { enableAutoPlay: enableAutoPlay, enableArrows: enableArrows }, resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) {
            var _a;
            return (react_1.default.createElement(__1.Cover, { key: index, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, title: resource === null || resource === void 0 ? void 0 : resource.title, handleClick: function () { return handleClick(resource); }, enableGradient: enableGradient, enableOverlay: enableOverlay, buttonText: buttonText }));
        }))));
};
exports.default = CarouselCoverListItems;
