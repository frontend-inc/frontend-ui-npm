'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var __1 = require("../..");
var ShowItem = function (props) {
    var _a;
    var _b = props || {}, _c = _b.style, style = _c === void 0 ? 'list' : _c, _d = _b.displayFields, displayFields = _d === void 0 ? [] : _d, buttons = _b.buttons, enableFavorites = _b.enableFavorites, enableLikes = _b.enableLikes, enableSharing = _b.enableSharing, enableGradient = _b.enableGradient, enableOverlay = _b.enableOverlay;
    var resource = (0, frontend_js_1.useResourceContext)().resource;
    var components = {
        list: components_1.HeroList,
        cover: components_1.HeroCover,
        card: components_1.HeroCard,
        avatar: components_1.HeroAvatar,
    };
    var Component = components[style] || components_1.HeroList;
    var buttonAlignClasses = {
        list: 'center',
        cover: 'center',
        card: 'end',
        avatar: 'end',
    }[style];
    if (!(resource === null || resource === void 0 ? void 0 : resource.id))
        return null;
    return (react_1.default.createElement(Component, { label: resource === null || resource === void 0 ? void 0 : resource.label, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, title: resource === null || resource === void 0 ? void 0 : resource.title, 
        // @ts-ignore
        description: (displayFields === null || displayFields === void 0 ? void 0 : displayFields.length) > 0 && (react_1.default.createElement(__1.ListFields, { direction: "column", fields: displayFields, resource: resource })), actions: react_1.default.createElement(__1.SocialButtons, { size: "large", justifyContent: 'center', resource: resource, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing }), secondaryAction: buttons && (react_1.default.createElement("div", { className: "w-full" },
            react_1.default.createElement(__1.ButtonActions, { justifyContent: buttonAlignClasses, buttons: buttons }))), enableGradient: enableGradient, enableOverlay: enableOverlay }));
};
exports.default = ShowItem;
