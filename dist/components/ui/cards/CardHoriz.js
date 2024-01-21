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
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var navigation_1 = require("next/navigation");
var index_1 = require("../../../constants/index");
var CardHoriz = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, _b = _a.editing, editing = _b === void 0 ? false : _b, label = _a.label, title = _a.title, description = _a.description, _c = _a.image, image = _c === void 0 ? '' : _c, href = _a.href, _d = _a.height, height = _d === void 0 ? index_1.CARD_HORIZ_HEIGHT : _d, _e = _a.width, width = _e === void 0 ? index_1.CARD_HORIZ_WIDTH : _e, buttonText = _a.buttonText, _f = _a.textVariant, textVariant = _f === void 0 ? 'subtitle1' : _f, handleClick = _a.handleClick, _g = _a.objectFit, objectFit = _g === void 0 ? 'cover' : _g, _h = _a.enableBorder, enableBorder = _h === void 0 ? false : _h, _j = _a.enableGradient, enableGradient = _j === void 0 ? false : _j, _k = _a.enableOverlay, enableOverlay = _k === void 0 ? false : _k;
    var router = (0, navigation_1.useRouter)();
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)), { width: '100%' }) },
        react_1.default.createElement(material_1.Stack, { flexDirection: "row" },
            react_1.default.createElement(material_1.Box, { sx: sx.image },
                react_1.default.createElement(components_1.TouchableOpacity, { handleClick: handleItemClick },
                    react_1.default.createElement(components_1.Image, { src: image, height: height, objectFit: objectFit, alt: title, enableGradient: enableGradient, enableOverlay: enableOverlay, disableBorderRadius: enableBorder }))),
            react_1.default.createElement(material_1.Stack, { spacing: 2, sx: sx.content },
                react_1.default.createElement(material_1.Box, null,
                    react_1.default.createElement(material_1.Typography, { color: "textPrimary", variant: textVariant }, (0, helpers_1.truncate)(title)),
                    react_1.default.createElement(material_1.Typography, { color: "textSecondary", variant: "body2", sx: sx.description }, (0, helpers_1.truncate)(description, 80)),
                    label && (react_1.default.createElement(material_1.Typography, { color: "textSecondary", variant: "caption" }, label))),
                buttonText && (react_1.default.createElement(material_1.Box, null,
                    react_1.default.createElement(material_1.Button, { variant: "outlined", color: "secondary", onClick: handleItemClick }, buttonText)))))));
};
exports.default = CardHoriz;
var sx = {
    root: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
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
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
    image: {
        mr: 2,
        width: 120,
        height: '100%',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100%',
    },
    description: {
        maxWidth: '320px',
    },
};
