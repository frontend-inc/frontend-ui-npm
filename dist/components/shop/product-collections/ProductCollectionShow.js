'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var ProductCollectionShow = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), openShow = _a.openShow, setOpenShow = _a.setOpenShow, resource = _a.resource;
    var _b = props || {}, enableLikes = _b.enableLikes, enableFavorites = _b.enableFavorites, enableGradient = _b.enableGradient, enableOverlay = _b.enableOverlay;
    if (!resource)
        return null;
    return (react_1.default.createElement(__1.Drawer, { title: resource === null || resource === void 0 ? void 0 : resource.title, open: openShow, handleClose: function () { return setOpenShow(false); } },
        react_1.default.createElement("div", { className: "w-full flex flex-row justify-center pb-10" },
            react_1.default.createElement("div", { className: "w-full md:max-w-screen-sm flex flex-col space-y-[40px]" },
                react_1.default.createElement("div", { className: "w-full flex flex-col space-y-3" },
                    react_1.default.createElement(__1.Typography, { variant: "body1", className: "text-muted-foreground" }, resource === null || resource === void 0 ? void 0 : resource.description)),
                react_1.default.createElement(__1.CollectionProducts, { enableGradient: enableGradient, enableOverlay: enableOverlay, enableLikes: enableLikes, enableFavorites: enableFavorites, productCollectionId: resource.id })))));
};
exports.default = ProductCollectionShow;
