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
var Hero = function (props) {
    var MAX_CHARS = 500;
    var resource = (props || {}).resource;
    var _a = resource || {}, title = _a.title, image = _a.image, description = _a.description;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    if (!resource)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { sx: sx.container, direction: { md: "row", xs: "column" }, spacing: 4 },
            react_1.default.createElement(components_1.Image, { src: image === null || image === void 0 ? void 0 : image.url, alt: title, height: 256 }),
            react_1.default.createElement(material_1.Stack, { spacing: 2, sx: sx.content },
                react_1.default.createElement(material_1.Typography, { color: 'text.primary', variant: "h4" }, title),
                react_1.default.createElement(material_1.Box, null,
                    open ? (react_1.default.createElement(material_1.Typography, { variant: "body1", color: 'text.primary', sx: sx.text }, description)) : (react_1.default.createElement(material_1.Typography, { variant: "body1", color: 'text.primary', sx: sx.text }, description === null || description === void 0 ? void 0 : description.slice(0, MAX_CHARS))),
                    (description === null || description === void 0 ? void 0 : description.length) > MAX_CHARS && (react_1.default.createElement(material_1.Link, { onClick: function () { return setOpen(!open); }, sx: sx.link }, open ? 'See less' : '... See all')))))));
};
exports.default = Hero;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'flex-start',
        alignItems: {
            md: 'flex-start',
            xs: 'center',
        }
    },
    image: {
        height: {
            sm: 256,
            xs: 180,
        },
        width: {
            sm: 256,
            xs: 180,
        }
    },
    header: {
        width: '100%',
        textAlign: 'center',
    },
    content: {
        width: '100%',
        maxWidth: {
            sm: 500,
            xs: '100%'
        },
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
    }
};
