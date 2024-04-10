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
var __1 = require("../..");
var router_1 = require("next/router");
var context_1 = require("../../../context");
var CoverImage = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var title = props.title, description = props.description, buttonText = props.buttonText, handleClick = props.handleClick, image = props.image, _a = props.height, height = _a === void 0 ? 520 : _a, _b = props.alt, alt = _b === void 0 ? 'image' : _b, _c = props.enableGradient, enableGradient = _c === void 0 ? false : _c, _d = props.enableOverlay, enableOverlay = _d === void 0 ? false : _d, _e = props.opacity, opacity = _e === void 0 ? 0.65 : _e, _f = props.alignItems, alignItems = _f === void 0 ? 'center' : _f, _g = props.overlayColor, overlayColor = _g === void 0 ? '#FFFFFF' : _g, href = props.href;
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(__1.Image, { src: image, alt: alt, height: height, objectFit: 'cover', disableBorderRadius: true, bgcolor: overlayColor, enableGradient: enableGradient, enableOverlay: enableOverlay, opacity: opacity }),
        react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.stack), { height: "".concat(height, "px") }) },
            react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, alignItems: alignItems, sx: sx.content },
                title && (react_1.default.createElement(material_1.Typography, { variant: 'h3', color: "text.primary", sx: {
                        textAlign: alignItems === 'center' ? 'center' : 'left',
                    } }, title)),
                description && (react_1.default.createElement(material_1.Typography, { variant: "subtitle2", color: "text.primary", sx: {
                        textAlign: alignItems === 'center' ? 'center' : 'left',
                    } }, description)),
                buttonText && (react_1.default.createElement(material_1.Box, { py: 2 },
                    react_1.default.createElement(material_1.Button, { size: "large", onClick: handleItemClick, variant: "contained" }, buttonText)))))));
};
exports.default = CoverImage;
var sx = {
    root: {
        p: 0,
        width: '100%',
        position: 'relative',
    },
    stack: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        maxWidth: '540px',
    },
};
