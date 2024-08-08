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
var context_1 = require("../../../context");
var material_1 = require("@mui/material");
var __1 = require("../..");
var helpers_1 = require("../../../helpers");
var router_1 = require("next/router");
var CollectionCard = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, collection = _a.collection, href = _a.href, handleClick = _a.handleClick, _b = _a.enableGradient, enableGradient = _b === void 0 ? false : _b, _c = _a.enableOverlay, enableOverlay = _c === void 0 ? false : _c;
    var _d = collection || {}, label = _d.label, title = _d.title, image = _d.image;
    var router = (0, router_1.useRouter)();
    var handleItemClick = function () {
        if (handleClick) {
            handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(__1.LightDarkMode, { mode: "dark" },
        react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
            react_1.default.createElement(__1.TouchableOpacity, { handleClick: handleItemClick },
                react_1.default.createElement(__1.Image, { label: label, src: image === null || image === void 0 ? void 0 : image.url, height: 400, alt: title, enableGradient: enableGradient, enableOverlay: enableOverlay })),
            react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.cover },
                react_1.default.createElement(material_1.Stack, { sx: sx.fullWidth, spacing: 1, direction: 'row', alignItems: "center" },
                    react_1.default.createElement(material_1.Box, { sx: sx.contentContainer },
                        react_1.default.createElement(material_1.Stack, { sx: sx.content, direction: "column", spacing: 0 },
                            react_1.default.createElement(material_1.Box, { sx: sx.fullWidth },
                                react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "subtitle2" }, (0, helpers_1.truncate)(title, 60))))))))));
};
exports.default = CollectionCard;
var sx = {
    root: {
        position: 'relative',
        flexDirection: 'column',
        overflow: 'hidden',
        width: '100%',
        borderRadius: 1,
    },
    cover: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 1,
        p: 1,
    },
    description: {
        maxWidth: '320px',
    },
    button: {
        bgcolor: 'common.white',
        color: 'common.black',
        '&:hover': {
            color: 'common.black',
            bgcolor: 'common.white',
            opacity: 0.9,
        },
    },
    fullWidth: {
        width: '100%',
    },
    contentContainer: {
        px: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    content: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
};
