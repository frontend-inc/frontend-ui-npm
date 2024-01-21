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
var core_1 = require("../../../context/core");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var navigation_1 = require("next/navigation");
var index_1 = require("../../../constants/index");
var icons_material_1 = require("@mui/icons-material");
var TestimonialCard = function (props) {
    var clientUrl = (0, react_1.useContext)(core_1.AppContext).clientUrl;
    var _a = props || {}, label = _a.label, title = _a.title, description = _a.description, _b = _a.image, image = _b === void 0 ? '' : _b, href = _a.href, handleClick = _a.handleClick, _c = _a.height, height = _c === void 0 ? index_1.TESTIMONIAL_AVATAR_HEIGHT : _c, _d = _a.width, width = _d === void 0 ? index_1.TESTIMONIAL_AVATAR_WIDTH : _d, _e = _a.textVariant, textVariant = _e === void 0 ? 'subtitle2' : _e, _f = _a.enableBorder, enableBorder = _f === void 0 ? false : _f, _g = _a.enableGradient, enableGradient = _g === void 0 ? false : _g;
    var router = (0, navigation_1.useRouter)();
    var handleItemClick = function () {
        if (handleClick) {
            handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)), { minWidth: index_1.TESTIMONIAL_CARD_WIDTH }) },
        react_1.default.createElement(material_1.Stack, { spacing: 2, sx: __assign(__assign({}, sx.content), { minHeight: index_1.TESTIMONIAL_CARD_HEIGHT }) },
            description && (react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(material_1.Typography, { variant: textVariant, color: "text.primary" },
                    react_1.default.createElement(icons_material_1.FormatQuote, { sx: sx.quote }),
                    (0, helpers_1.truncate)(description, 240)))),
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 2, sx: sx.author },
                react_1.default.createElement(material_1.Box, { sx: __assign({ height: height, width: width }, (enableGradient && sx.gradient)) },
                    react_1.default.createElement(components_1.TouchableOpacity, { handleClick: handleItemClick },
                        react_1.default.createElement(material_1.Avatar, { src: image, sx: {
                                height: height,
                                width: width,
                            } }))),
                react_1.default.createElement(material_1.Typography, { sx: sx.name, variant: "caption", color: "textSecondary" }, (0, helpers_1.truncate)(title))))));
};
exports.default = TestimonialCard;
var sx = {
    root: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradient: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'grey.300',
        p: 1,
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
    title: {
        textAlign: 'center',
    },
    label: {
        textAlign: 'center',
    },
    content: {
        justifyContent: {
            sm: 'space-between',
            xs: 'space-around'
        },
        alignItems: 'center',
        height: '100%'
    },
    author: {
        color: 'text.secondary',
        alignItems: 'center',
        minHeight: '44px',
    },
    name: {
        color: 'text.secondary',
    },
    quote: {
        transform: 'rotateY(180deg)',
    },
};
