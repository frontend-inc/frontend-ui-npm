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
var context_1 = require("../../../context");
var material_1 = require("@mui/material");
var __1 = require("../..");
var helpers_1 = require("../../../helpers");
var router_1 = require("next/router");
var Card = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, item = _a.item, handleClick = _a.handleClick, _b = _a.enableGradient, enableGradient = _b === void 0 ? false : _b, _c = _a.enableOverlay, enableOverlay = _c === void 0 ? false : _c;
    var _d = item || {}, label = _d.label, title = _d.title, description = _d.description, image = _d.image, url = _d.url;
    var router = (0, router_1.useRouter)();
    var handleItemClick = function () {
        if (handleClick) {
            handleClick();
        }
        else if (url) {
            router.push("".concat(clientUrl).concat(url));
        }
    };
    return (react_1.default.createElement(material_1.Stack, { spacing: 0, sx: __assign(__assign({}, sx.root), { width: '100%', minHeight: 320 }) },
        react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
            react_1.default.createElement(__1.Image, { src: image === null || image === void 0 ? void 0 : image.url, height: 240, alt: title, label: label, disableBorderRadius: true, enableGradient: enableGradient, enableOverlay: enableOverlay, handleClick: handleItemClick })),
        react_1.default.createElement(material_1.Stack, { spacing: 0, sx: sx.cardContent },
            react_1.default.createElement(material_1.Box, { sx: sx.content },
                react_1.default.createElement(material_1.Typography, { sx: sx.title, color: "text.primary", variant: "subtitle2" }, (0, helpers_1.truncate)(title)),
                react_1.default.createElement(material_1.Typography, { sx: sx.title, color: "text.secondary", variant: "body2" }, (0, helpers_1.truncate)(description))))));
};
exports.default = Card;
var sx = {
    root: {
        overflow: 'hidden',
        borderRadius: 1,
        width: '100%',
        bgcolor: 'background.default',
        transition: 'box-shadow 0.3s',
        border: '1px solid',
        borderColor: 'divider',
        '&:hover': {
            boxShadow: 2,
        },
    },
    imageContainer: {
        height: 230,
        minHeight: 230,
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    gradient: {
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    cardHeader: {
        p: 1,
        minHeight: 36,
    },
    cardHeaderBorder: {
        px: 1,
    },
    cardContent: {
        p: 1,
        width: '100%',
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'space-between',
        bgcolor: 'background.default',
    },
    content: {
        height: '100%',
    },
    title: {
        width: '100%',
    },
    user: {},
};
