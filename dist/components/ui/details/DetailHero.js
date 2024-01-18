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
var hooks_1 = require("hooks");
var material_1 = require("@mui/material");
var components_1 = require("components");
var DetailHero = function (props) {
    var _a, _b, _c, _d;
    var _e = props.style, style = _e === void 0 ? 'cover' : _e, _f = props.textVariant, textVariant = _f === void 0 ? 'subtitle1' : _f, url = props.url, handle = props.handle;
    var _g = (0, hooks_1.useResource)({
        url: url,
    }), resource = _g.resource, findOne = _g.findOne;
    (0, react_1.useEffect)(function () {
        if (handle) {
            findOne(handle);
        }
    }, [handle]);
    if (!resource)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        style == 'avatar' && (react_1.default.createElement(components_1.AvatarVert, { image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, title: resource === null || resource === void 0 ? void 0 : resource.title, description: resource === null || resource === void 0 ? void 0 : resource.description, textVariant: textVariant })),
        style == 'card' && (react_1.default.createElement(components_1.CardVert, { responsive: true, image: (_b = resource === null || resource === void 0 ? void 0 : resource.image) === null || _b === void 0 ? void 0 : _b.url, title: resource === null || resource === void 0 ? void 0 : resource.title, description: resource === null || resource === void 0 ? void 0 : resource.description, textVariant: textVariant })),
        style == 'cover' && (react_1.default.createElement(components_1.CoverHoriz, { responsive: true, image: (_c = resource === null || resource === void 0 ? void 0 : resource.image) === null || _c === void 0 ? void 0 : _c.url, title: resource === null || resource === void 0 ? void 0 : resource.title, description: resource === null || resource === void 0 ? void 0 : resource.description, textVariant: textVariant })),
        style == 'image' && (react_1.default.createElement(components_1.ImageHoriz, { image: (_d = resource === null || resource === void 0 ? void 0 : resource.image) === null || _d === void 0 ? void 0 : _d.url, title: resource === null || resource === void 0 ? void 0 : resource.title, description: resource === null || resource === void 0 ? void 0 : resource.description, textVariant: textVariant }))));
};
exports.default = DetailHero;
var sx = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
};
