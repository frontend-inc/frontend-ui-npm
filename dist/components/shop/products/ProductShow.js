'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var components_1 = require("../../../components");
var ShowModal = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), openShow = _a.openShow, setOpenShow = _a.setOpenShow, resource = _a.resource;
    var _b = props || {}, enableRatings = _b.enableRatings, enableLikes = _b.enableLikes, enableFavorites = _b.enableFavorites, enableGradient = _b.enableGradient, enableOverlay = _b.enableOverlay;
    if (!resource)
        return null;
    return (react_1.default.createElement(__1.Drawer, { open: openShow, handleClose: function () { return setOpenShow(false); } },
        react_1.default.createElement("div", { className: "w-full flex flex-row justify-center pb-10" },
            react_1.default.createElement(components_1.BlurFade, { delay: 0.25, inView: true, className: 'w-full' },
                react_1.default.createElement("div", { className: "w-full flex flex-col space-y-[20px]" },
                    react_1.default.createElement(__1.ProductDetails, { direction: "column", product: resource, enableGradient: enableGradient, enableOverlay: enableOverlay, enableFavorites: enableFavorites, enableLikes: enableLikes, enableRatings: enableRatings }),
                    enableRatings && (react_1.default.createElement(__1.ProductReviews, { productId: resource === null || resource === void 0 ? void 0 : resource.id })))))));
};
exports.default = ShowModal;
