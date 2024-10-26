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
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var __1 = require("../..");
var ShowItem = function (props) {
    var _a, _b;
    var _c = props || {}, _d = _c.style, style = _d === void 0 ? 'article' : _d, _e = _c.displayFields, displayFields = _e === void 0 ? [] : _e, buttons = _c.buttons, enableFavorites = _c.enableFavorites, enableLikes = _c.enableLikes, enableSharing = _c.enableSharing, enableGradient = _c.enableGradient, enableOverlay = _c.enableOverlay, _f = _c.slots, defaultSlots = _f === void 0 ? {
        image: {},
        content: {},
    } : _f;
    var resource = (0, frontend_js_1.useResourceContext)().resource;
    var components = {
        list: components_1.HeroList,
        cover: components_1.HeroCover,
        card: components_1.HeroCard,
        avatar: components_1.HeroAvatar,
        snippet: components_1.HeroSnippet,
    };
    var Component = components[style] || components_1.HeroList;
    var slots = {
        image: __assign({ enableGradient: enableGradient, enableOverlay: enableOverlay }, defaultSlots.image),
        content: __assign({}, defaultSlots.content),
    };
    var slotProps = {
        list: {
            secondary: {
                alignItems: 'center',
            },
            secondaryAction: {
                justifyContent: 'center',
            },
        },
        cover: {
            secondary: {
                alignItems: 'center',
            },
            secondaryAction: {
                justifyContent: 'center',
            },
        },
        card: {
            secondary: {
                alignItems: 'flex-start',
            },
            secondaryAction: {
                justifyContent: 'flex-end',
            },
        },
        avatar: {
            secondary: {
                alignItems: 'flex-start',
            },
            secondaryAction: {
                justifyContent: 'flex-end',
            },
        },
        snippet: {
            secondary: {
                alignItems: 'flex-start',
            },
            secondaryAction: {
                justifyContent: 'flex-end',
            },
        },
    }[style];
    if (!(resource === null || resource === void 0 ? void 0 : resource.id))
        return null;
    return (react_1.default.createElement(Component, { image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, primary: resource === null || resource === void 0 ? void 0 : resource.title, secondary: react_1.default.createElement("div", { className: "w-full flex flex-col space-y-6" },
            react_1.default.createElement("div", { className: "w-full h-full flex flex-col space-y-2" }, (displayFields === null || displayFields === void 0 ? void 0 : displayFields.length) > 0 && (react_1.default.createElement(__1.DisplayFields, { disableLabel: true, disableBorder: true, direction: "column", fields: displayFields, resource: resource }))),
            react_1.default.createElement(__1.ExpandableText, { text: resource === null || resource === void 0 ? void 0 : resource.description })), actions: react_1.default.createElement(__1.SocialButtons, { size: "lg", justifyContent: 'center', resource: resource, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing }), secondaryAction: buttons && (react_1.default.createElement("div", { className: "w-full" },
            react_1.default.createElement(__1.ButtonActions, { justifyContent: (_b = slotProps === null || slotProps === void 0 ? void 0 : slotProps.secondaryAction) === null || _b === void 0 ? void 0 : _b.justifyContent, buttons: buttons }))), slots: slots }));
};
exports.default = ShowItem;
