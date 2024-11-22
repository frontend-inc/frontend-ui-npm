'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var __2 = require("../..");
var Show = function (props) {
    var _a;
    var _b = props || {}, _c = _b.style, style = _c === void 0 ? 'list' : _c, _d = _b.metafields, metafields = _d === void 0 ? [] : _d, buttons = _b.buttons, enableFavorites = _b.enableFavorites, enableLikes = _b.enableLikes, enableSharing = _b.enableSharing, enableGradient = _b.enableGradient, enableOverlay = _b.enableOverlay;
    var resource = (0, frontend_js_1.useResourceContext)().resource;
    var disableImage = false;
    switch (resource === null || resource === void 0 ? void 0 : resource.documentType) {
        case 'youtube':
        case 'vimeo':
        case 'soundcloud':
        case 'video':
            disableImage = true;
            break;
        default:
            disableImage = false;
    }
    var buttonAlignClasses = {
        list: 'justify-center',
        cover: 'justify-center',
        card: 'justify-end',
        avatar: 'justify-end',
    }[style];
    if (!(resource === null || resource === void 0 ? void 0 : resource.id))
        return null;
    return (react_1.default.createElement(__1.HeroList, { disableImage: disableImage, label: resource === null || resource === void 0 ? void 0 : resource.label, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, title: resource === null || resource === void 0 ? void 0 : resource.title, subtitle: resource === null || resource === void 0 ? void 0 : resource.subtitle, description: resource === null || resource === void 0 ? void 0 : resource.description, category: resource === null || resource === void 0 ? void 0 : resource.category, location: resource === null || resource === void 0 ? void 0 : resource.location, lat: resource === null || resource === void 0 ? void 0 : resource.lat, lng: resource === null || resource === void 0 ? void 0 : resource.lng, tags: resource === null || resource === void 0 ? void 0 : resource.tags, html: resource === null || resource === void 0 ? void 0 : resource.html, startsAt: resource === null || resource === void 0 ? void 0 : resource.start_date, endsAt: resource === null || resource === void 0 ? void 0 : resource.end_date, publishedAt: resource === null || resource === void 0 ? void 0 : resource.published_at, youtubeSrc: resource === null || resource === void 0 ? void 0 : resource.youtube_video, vimeoSrc: resource === null || resource === void 0 ? void 0 : resource.vimeo_video, soundcloudSrc: resource === null || resource === void 0 ? void 0 : resource.soundcloud_audio, actions: react_1.default.createElement(__2.SocialButtons, { size: "large", justifyContent: 'center', resource: resource, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing }), secondaryAction: buttons && (react_1.default.createElement("div", { className: "w-full" },
            react_1.default.createElement(__2.ButtonActions, { justifyContent: buttonAlignClasses, buttons: buttons }))), enableGradient: enableGradient, enableOverlay: enableOverlay }));
};
exports.default = Show;
