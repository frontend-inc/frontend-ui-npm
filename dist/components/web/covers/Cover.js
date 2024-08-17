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
var Cover = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var title = props.title, description = props.description, _a = props.textVariant, textVariant = _a === void 0 ? 'h2' : _a, buttonText = props.buttonText, handleClick = props.handleClick, image = props.image, _b = props.height, height = _b === void 0 ? 520 : _b, _c = props.alt, alt = _c === void 0 ? 'image' : _c, _d = props.enableGradient, enableGradient = _d === void 0 ? false : _d, _e = props.enableOverlay, enableOverlay = _e === void 0 ? false : _e, _f = props.opacity, opacity = _f === void 0 ? 0.65 : _f, _g = props.alignItems, alignItems = _g === void 0 ? 'center' : _g, _h = props.overlayColor, overlayColor = _h === void 0 ? '#000000' : _h, href = props.href;
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(__1.Image, { src: image, alt: alt, height: height, disableBorderRadius: true, bgcolor: overlayColor, enableGradient: enableGradient, enableOverlay: enableOverlay, opacity: opacity }),
        react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.stack), { height: "".concat(height, "px") }) },
            react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, alignItems: alignItems, sx: sx.content },
                title && (react_1.default.createElement(material_1.Typography, { variant: textVariant, color: "common.white", sx: {
                        textAlign: alignItems === 'center' ? 'center' : 'left',
                    } }, title)),
                description && (react_1.default.createElement(material_1.Typography, { variant: "subtitle2", color: "text.primary", sx: {
                        textAlign: alignItems === 'center' ? 'center' : 'left',
                    } }, description)),
                buttonText && (react_1.default.createElement(material_1.Box, { py: 2 },
                    react_1.default.createElement(material_1.Button, { size: "large", onClick: handleItemClick, variant: "contained" }, buttonText)))))));
};
exports.default = Cover;
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
        px: {
            sm: 0,
            xs: 3,
        },
    },
    content: {
        maxWidth: '720px',
    },
};
