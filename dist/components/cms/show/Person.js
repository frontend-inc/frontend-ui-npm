"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var Person = function (props) {
    var MAX_CHARS = 500;
    var _a = props || {}, actions = _a.actions, resource = _a.resource;
    var _b = (resource || { data: {} }).data, facebook = _b.facebook, instagram = _b.instagram, linkedin = _b.linkedin, twitter = _b.twitter, youtube = _b.youtube, blog = _b.blog;
    var _c = resource || {}, title = _c.title, image = _c.image, description = _c.description;
    var _d = (0, react_1.useState)(false), open = _d[0], setOpen = _d[1];
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { sx: sx.container, direction: { md: 'row', xs: 'column' }, spacing: 4 },
            react_1.default.createElement(material_1.Stack, { direction: "column" },
                react_1.default.createElement(material_1.Avatar, { sx: sx.avatarContainer },
                    react_1.default.createElement(material_1.Avatar, { src: image === null || image === void 0 ? void 0 : image.url, alt: title, sx: sx.avatar },
                        react_1.default.createElement(material_1.Box, null)),
                    react_1.default.createElement(material_1.Box, null))),
            react_1.default.createElement(material_1.Stack, { spacing: 2, sx: sx.content },
                react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h4" }, title),
                facebook || instagram || linkedin || twitter || youtube || blog && (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 0, sx: sx.socialUrls },
                    facebook && (react_1.default.createElement(components_1.SocialLink, { provider: "facebook", url: facebook })),
                    instagram && (react_1.default.createElement(components_1.SocialLink, { provider: "instagram", url: instagram })),
                    linkedin && (react_1.default.createElement(components_1.SocialLink, { provider: "linkedin", url: linkedin })),
                    twitter && (react_1.default.createElement(components_1.SocialLink, { provider: "twitter", url: twitter })),
                    youtube && (react_1.default.createElement(components_1.SocialLink, { provider: "youtube", url: youtube })),
                    blog && (react_1.default.createElement(components_1.SocialLink, { provider: "blog", url: blog })))),
                react_1.default.createElement(material_1.Box, null,
                    open ? (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.text }, description)) : (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.text }, description === null || description === void 0 ? void 0 : description.slice(0, MAX_CHARS))),
                    (description === null || description === void 0 ? void 0 : description.length) > MAX_CHARS && (react_1.default.createElement(material_1.Link, { onClick: function () { return setOpen(!open); }, sx: sx.link }, open ? 'See less' : '... See all'))),
                actions && (react_1.default.createElement(components_1.Actions, { actions: actions, resource: resource }))))));
};
exports.default = Person;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: {
            md: 'flex-start',
            xs: 'center',
        },
    },
    avatar: {
        height: {
            sm: 256,
            xs: 180,
        },
        width: {
            sm: 256,
            xs: 180,
        },
    },
    avatarContainer: {
        height: {
            sm: 260,
            xs: 180,
        },
        width: {
            sm: 260,
            xs: 180,
        },
    },
    header: {
        width: '100%',
        textAlign: 'center',
    },
    content: {
        width: '100%',
    },
    text: {
        width: '100%',
        whiteSpace: 'pre-line',
    },
    caption: {
        color: 'text.secondary',
    },
    link: {
        cursor: 'pointer',
        color: 'text.secondary',
    },
    socialUrls: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
};
