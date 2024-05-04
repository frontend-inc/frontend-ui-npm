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
var frontend_js_1 = require("frontend-js");
var Person = function (props) {
    var MAX_CHARS = 500;
    var _a = props || {}, actions = _a.actions, resource = _a.resource, enableBorder = _a.enableBorder, enableEdit = _a.enableEdit, handleEdit = _a.handleEdit;
    var data = (resource || {}).data;
    var _b = data || {}, facebook = _b.facebook, instagram = _b.instagram, linkedin = _b.linkedin, twitter = _b.twitter, youtube = _b.youtube, blog = _b.blog;
    var _c = resource || {}, label = _c.label, title = _c.title, image = _c.image, description = _c.description;
    var _d = (0, react_1.useState)(false), open = _d[0], setOpen = _d[1];
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)) },
        react_1.default.createElement(material_1.Stack, { sx: sx.container, direction: { sm: 'row', xs: 'column' }, spacing: 4 },
            react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
                react_1.default.createElement(components_1.Image, { label: label, height: 240, src: image === null || image === void 0 ? void 0 : image.url, alt: title, disableBorderRadius: enableBorder })),
            react_1.default.createElement(material_1.Stack, { spacing: 2, sx: __assign(__assign({}, sx.content), (enableBorder && sx.contentBorder)) },
                react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h4" }, title),
                facebook ||
                    instagram ||
                    linkedin ||
                    twitter ||
                    youtube ||
                    (blog && (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 0, sx: sx.socialUrls },
                        facebook && react_1.default.createElement(components_1.SocialLink, { provider: "facebook", url: facebook }),
                        instagram && (react_1.default.createElement(components_1.SocialLink, { provider: "instagram", url: instagram })),
                        linkedin && react_1.default.createElement(components_1.SocialLink, { provider: "linkedin", url: linkedin }),
                        twitter && react_1.default.createElement(components_1.SocialLink, { provider: "twitter", url: twitter }),
                        youtube && react_1.default.createElement(components_1.SocialLink, { provider: "youtube", url: youtube }),
                        blog && react_1.default.createElement(components_1.SocialLink, { provider: "blog", url: blog })))),
                react_1.default.createElement(material_1.Box, null,
                    open ? (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.text }, description)) : (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.text }, description === null || description === void 0 ? void 0 : description.slice(0, MAX_CHARS))),
                    (description === null || description === void 0 ? void 0 : description.length) > MAX_CHARS && (react_1.default.createElement(material_1.Link, { onClick: function () { return setOpen(!open); }, sx: sx.link }, open ? 'See less' : '... See all')))),
            (actions || enableEdit) && (react_1.default.createElement(material_1.Stack, { sx: sx.actions, direction: { sm: 'row', xs: 'column' }, spacing: 1, p: enableBorder ? 1 : 0 },
                enableEdit && (react_1.default.createElement(components_1.ActionButton, { resource: (0, frontend_js_1.flattenDocument)(resource), action: {
                        label: 'Edit',
                        color: 'secondary',
                        name: 'click',
                        onClick: handleEdit,
                    } })),
                react_1.default.createElement(components_1.Actions, { actions: actions, resource: (0, frontend_js_1.flattenDocument)(resource), justifyContent: "flex-end" }))))));
};
exports.default = Person;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
    rootBorder: {
        overflow: 'hidden',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        border: '1px solid',
        borderColor: 'divider',
    },
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: {
            sm: 'flex-start',
            xs: 'center',
        },
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        maxHeight: {
            sm: 240,
            xs: 240,
        },
        maxWidth: {
            sm: 240,
            xs: '100%',
        },
    },
    header: {
        width: '100%',
        textAlign: 'center',
    },
    content: {
        width: '100%',
    },
    contentBorder: {
        p: 2,
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
    actions: {
        width: '100%',
        justifyContent: {
            sm: 'flex-end',
            xs: 'center',
        },
    },
};
