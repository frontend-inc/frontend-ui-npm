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
var context_1 = require("../../../../context");
var __1 = require("../../..");
var router_1 = require("next/router");
var material_1 = require("@mui/material");
var ImageVert = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, actions = _a.actions, item = _a.item, href = _a.href, handleClick = _a.handleClick, _b = _a.objectFit, objectFit = _b === void 0 ? 'cover' : _b, _c = _a.height, height = _c === void 0 ? 320 : _c, _d = _a.enableGradient, enableGradient = _d === void 0 ? false : _d, _e = _a.enableOverlay, enableOverlay = _e === void 0 ? false : _e;
    var _f = item || {}, title = _f.title, image = _f.image;
    var router = (0, router_1.useRouter)();
    var handleItemClick = function () {
        if (handleClick) {
            handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(__1.TouchableOpacity, { handleClick: handleItemClick },
            react_1.default.createElement(__1.Image, { src: image === null || image === void 0 ? void 0 : image.url, height: height, objectFit: objectFit, alt: title, enableGradient: enableGradient, enableOverlay: enableOverlay })),
        react_1.default.createElement(material_1.Box, { sx: sx.actions },
            react_1.default.createElement(__1.Actions, { numVisible: 0, actions: actions, resource: item, color: enableOverlay ? 'common.white' : 'text.secondary' }))));
};
exports.default = ImageVert;
var sx = {
    root: {
        position: 'relative',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: 1,
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
    actions: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: '100%',
    }
};
