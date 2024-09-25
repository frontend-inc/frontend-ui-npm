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
var material_1 = require("@mui/material");
var ShowItem = function (props) {
    var _a, _b, _c;
    var _d = props || {}, _e = _d.style, style = _e === void 0 ? 'article' : _e, _f = _d.displayFields, displayFields = _f === void 0 ? [] : _f, buttons = _d.buttons, enableFavorites = _d.enableFavorites, enableLikes = _d.enableLikes, enableSharing = _d.enableSharing, enableGradient = _d.enableGradient, enableOverlay = _d.enableOverlay, _g = _d.slots, defaultSlots = _g === void 0 ? {
        image: {},
        content: {},
    } : _g;
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
    return (react_1.default.createElement(Component, { image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, primary: resource === null || resource === void 0 ? void 0 : resource.title, secondary: react_1.default.createElement(material_1.Stack, { spacing: 2, sx: { width: '100%' } },
            react_1.default.createElement(material_1.Stack, { spacing: 2, sx: { width: '100%' }, alignItems: (_b = slotProps === null || slotProps === void 0 ? void 0 : slotProps.secondary) === null || _b === void 0 ? void 0 : _b.alignItems }, (displayFields === null || displayFields === void 0 ? void 0 : displayFields.length) > 0 && (react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource }))),
            react_1.default.createElement(__1.ExpandableText, { text: resource === null || resource === void 0 ? void 0 : resource.description })), actions: react_1.default.createElement(__1.SocialButtons, { size: "large", justifyContent: 'center', resource: resource, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing }), secondaryAction: buttons && (react_1.default.createElement(material_1.Box, { sx: sx.buttons },
            react_1.default.createElement(__1.ButtonActions, { justifyContent: (_c = slotProps === null || slotProps === void 0 ? void 0 : slotProps.secondaryAction) === null || _c === void 0 ? void 0 : _c.justifyContent, buttons: buttons, resource: resource }))), slots: slots }));
};
exports.default = ShowItem;
var sx = {
    buttons: {
        width: '100%',
    },
};
