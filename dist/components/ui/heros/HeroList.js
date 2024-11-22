'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var HeroList = function (props) {
    var _a = props || {}, variant = _a.variant, image = _a.image, label = _a.label, title = _a.title, subtitle = _a.subtitle, _b = _a.textAlign, textAlign = _b === void 0 ? 'center' : _b, location = _a.location, lat = _a.lat, lng = _a.lng, startsAt = _a.startsAt, endsAt = _a.endsAt, publishedAt = _a.publishedAt, html = _a.html, description = _a.description, youtubeSrc = _a.youtubeSrc, soundcloudSrc = _a.soundcloudSrc, vimeoSrc = _a.vimeoSrc, _c = _a.tags, tags = _c === void 0 ? [] : _c, actions = _a.actions, secondaryAction = _a.secondaryAction, disableImage = _a.disableImage, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay;
    return (react_1.default.createElement("div", { className: "container mx-auto max-w-screen-lg" },
        react_1.default.createElement("div", { className: "flex flex-col w-full justify-start items-center space-y-6" },
            react_1.default.createElement("div", { className: "w-full max-w-screen-md justify-start items-center space-y-3" },
                react_1.default.createElement(components_1.Heading, { label: label, title: title, subtitle: subtitle, textAlign: textAlign, size: "xl" }),
                (startsAt || endsAt) && (react_1.default.createElement(components_1.Typography, { variant: "subtitle2", className: "text-muted-foreground", textAlign: textAlign },
                    startsAt,
                    " - ",
                    endsAt)),
                publishedAt && (react_1.default.createElement(components_1.Typography, { variant: "subtitle2", className: "text-muted-foreground", textAlign: textAlign }, publishedAt)),
                location && (react_1.default.createElement(components_1.Typography, { variant: "subtitle2", className: "text-muted-foreground", textAlign: textAlign }, location)),
                secondaryAction && secondaryAction),
            !disableImage && (react_1.default.createElement("div", { className: "w-full flex items-center justify-center rounded-lg" }, variant !== 'circular' ? (react_1.default.createElement("div", { className: "w-full py-10" },
                react_1.default.createElement(components_1.Image, { aspectRatio: 2.0, src: image, alt: title, label: label, enableGradient: enableGradient, enableOverlay: enableOverlay }))) : (react_1.default.createElement(components_1.AvatarImage, { src: image, alt: title, size: 160, enableGradient: enableGradient, enableOverlay: enableOverlay })))),
            youtubeSrc && react_1.default.createElement(components_1.YouTubeEmbed, { src: youtubeSrc }),
            soundcloudSrc && react_1.default.createElement(components_1.SoundcloudEmbed, { src: soundcloudSrc }),
            vimeoSrc && react_1.default.createElement(components_1.VimeoEmbed, { src: vimeoSrc }),
            actions,
            react_1.default.createElement("div", { className: "w-full sm:max-w-screen-md flex flex-col space-y-6" },
                description && (react_1.default.createElement(components_1.Typography, { variant: "subtitle2", className: "text-muted-foreground" }, description)),
                html && (react_1.default.createElement("div", { className: "w-full prose" },
                    react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: html } }))),
                lat && lng && (react_1.default.createElement("div", { className: "w-full py-4 flex flex-col space-y-2" },
                    react_1.default.createElement(components_1.GoogleMap, { label: title, lat: lat, lng: lng }),
                    react_1.default.createElement("span", { className: "text-sm text-muted-foreground italic" },
                        react_1.default.createElement("strong", null, "Location: "),
                        " ",
                        location))),
                (tags === null || tags === void 0 ? void 0 : tags.length) > 0 && (react_1.default.createElement("div", { className: "w-full flex flex-wrap gap-3" }, tags.map(function (tag, index) { return (react_1.default.createElement(frontend_shadcn_1.Badge, { key: index, variant: "outline", className: "px-3 py-1 text-muted-foreground" }, tag)); })))))));
};
exports.default = HeroList;
