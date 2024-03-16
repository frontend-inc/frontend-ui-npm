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
var __1 = require("../..");
var Person = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var MAX_CHARS = 500;
    var resource = (props || {}).resource;
    var _p = resource || {}, title = _p.title, image = _p.image, description = _p.description;
    var _q = (0, react_1.useState)(false), open = _q[0], setOpen = _q[1];
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { sx: sx.container, direction: { md: "row", xs: "column" }, spacing: 4 },
            react_1.default.createElement(material_1.Stack, { direction: "column" }, ((_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url) && (react_1.default.createElement(material_1.Avatar, { sx: sx.avatarContainer },
                react_1.default.createElement(material_1.Avatar, { src: image === null || image === void 0 ? void 0 : image.url, alt: title, sx: sx.avatar },
                    react_1.default.createElement(material_1.Box, null)),
                react_1.default.createElement(material_1.Box, null)))),
            react_1.default.createElement(material_1.Stack, { spacing: 2, sx: sx.content },
                react_1.default.createElement(material_1.Typography, { color: 'text.primary', variant: "h4" }, title),
                react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 0, sx: sx.socialLinks },
                    ((_b = resource === null || resource === void 0 ? void 0 : resource.data) === null || _b === void 0 ? void 0 : _b.facebook) && react_1.default.createElement(__1.SocialLink, { provider: "facebook", url: (_c = resource === null || resource === void 0 ? void 0 : resource.data) === null || _c === void 0 ? void 0 : _c.facebook }),
                    ((_d = resource === null || resource === void 0 ? void 0 : resource.data) === null || _d === void 0 ? void 0 : _d.instagram) && react_1.default.createElement(__1.SocialLink, { provider: "instagram", url: (_e = resource === null || resource === void 0 ? void 0 : resource.data) === null || _e === void 0 ? void 0 : _e.instagram }),
                    ((_f = resource === null || resource === void 0 ? void 0 : resource.data) === null || _f === void 0 ? void 0 : _f.linked) && react_1.default.createElement(__1.SocialLink, { provider: "linkedin", url: (_g = resource === null || resource === void 0 ? void 0 : resource.data) === null || _g === void 0 ? void 0 : _g.linkedin }),
                    ((_h = resource === null || resource === void 0 ? void 0 : resource.data) === null || _h === void 0 ? void 0 : _h.twitter) && react_1.default.createElement(__1.SocialLink, { provider: "twitter", url: (_j = resource === null || resource === void 0 ? void 0 : resource.data) === null || _j === void 0 ? void 0 : _j.twitter }),
                    ((_k = resource === null || resource === void 0 ? void 0 : resource.data) === null || _k === void 0 ? void 0 : _k.youtube) && react_1.default.createElement(__1.SocialLink, { provider: "youtube", url: (_l = resource === null || resource === void 0 ? void 0 : resource.data) === null || _l === void 0 ? void 0 : _l.youtube }),
                    ((_m = resource === null || resource === void 0 ? void 0 : resource.data) === null || _m === void 0 ? void 0 : _m.blog) && react_1.default.createElement(__1.SocialLink, { provider: "blog", url: (_o = resource === null || resource === void 0 ? void 0 : resource.data) === null || _o === void 0 ? void 0 : _o.blog })),
                react_1.default.createElement(material_1.Box, null,
                    open ? (react_1.default.createElement(material_1.Typography, { variant: "body1", color: 'text.primary', sx: sx.text }, description)) : (react_1.default.createElement(material_1.Typography, { variant: "body1", color: 'text.primary', sx: sx.text }, description === null || description === void 0 ? void 0 : description.slice(0, MAX_CHARS))),
                    (description === null || description === void 0 ? void 0 : description.length) > MAX_CHARS && (react_1.default.createElement(material_1.Link, { onClick: function () { return setOpen(!open); }, sx: sx.link }, open ? 'See less' : '... See all')))))));
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
        }
    },
    avatar: {
        height: {
            sm: 256,
            xs: 180,
        },
        width: {
            sm: 256,
            xs: 180,
        }
    },
    avatarContainer: {
        height: {
            sm: 260,
            xs: 184,
        },
        width: {
            sm: 260,
            xs: 184,
        },
        bgcolor: 'primary.contrastText'
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
        color: 'text.secondary'
    },
    socialLinks: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
};
