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
var context_1 = require("../../../../context");
var material_1 = require("@mui/material");
var __1 = require("../../..");
var helpers_1 = require("../../../../helpers");
var router_1 = require("next/router");
var CoverVert = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, actions = _a.actions, item = _a.item, href = _a.href, handleClick = _a.handleClick, _b = _a.textVariant, textVariant = _b === void 0 ? 'subtitle1' : _b, _c = _a.objectFit, objectFit = _c === void 0 ? 'cover' : _c, _d = _a.height, height = _d === void 0 ? 320 : _d, _e = _a.enableGradient, enableGradient = _e === void 0 ? false : _e, _f = _a.enableOverlay, enableOverlay = _f === void 0 ? false : _f, icon = _a.icon;
    var _g = item || {}, label = _g.label, title = _g.title, description = _g.description, image = _g.image, resource = _g.resource;
    var router = (0, router_1.useRouter)();
    var handleItemClick = function () {
        if (handleClick) {
            handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: __assign({}, sx.root) },
        react_1.default.createElement(__1.TouchableOpacity, { handleClick: handleItemClick },
            react_1.default.createElement(__1.Image, { label: label, src: image === null || image === void 0 ? void 0 : image.url, height: height, objectFit: objectFit, alt: title, enableGradient: enableGradient, enableOverlay: enableOverlay })),
        react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.cover },
            react_1.default.createElement(material_1.Stack, { sx: sx.fullWidth, spacing: 1, direction: 'row', alignItems: "center" },
                icon && (react_1.default.createElement(material_1.Box, null,
                    react_1.default.createElement(__1.Icon, { size: 20, name: icon, color: "common.white" }))),
                react_1.default.createElement(material_1.Box, { sx: sx.content },
                    react_1.default.createElement(material_1.Stack, { sx: sx.contentContainer, direction: "column", spacing: 0 },
                        react_1.default.createElement(material_1.Box, { sx: sx.fullWidth },
                            react_1.default.createElement(material_1.Typography, { color: "common.white", variant: textVariant }, (0, helpers_1.truncate)(title, 60)),
                            description && (react_1.default.createElement(material_1.Typography, { color: "common.white", variant: "caption" }, (0, helpers_1.truncate)(description, 30)))))))),
        react_1.default.createElement(material_1.Box, { sx: sx.actions },
            react_1.default.createElement(__1.Actions, { numVisible: 0, resource: item, actions: actions, color: enableOverlay ? 'common.white' : 'text.secondary' }))));
};
exports.default = CoverVert;
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
    content: {
        px: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    contentContainer: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    actions: {
        position: 'absolute',
        top: 0,
        right: 10
    }
};
