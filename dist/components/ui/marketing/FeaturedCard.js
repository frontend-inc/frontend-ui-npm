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
var router_1 = require("next/router");
var index_1 = require("../../../constants/index");
var FeaturedCard = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, _b = _a.editing, editing = _b === void 0 ? false : _b, label = _a.label, title = _a.title, description = _a.description, _c = _a.image, image = _c === void 0 ? '' : _c, href = _a.href, _d = _a.height, height = _d === void 0 ? index_1.FEATURED_CARD_HEIGHT : _d, buttonText = _a.buttonText, _e = _a.flexDirection, flexDirection = _e === void 0 ? 'row' : _e, _f = _a.textVariant, textVariant = _f === void 0 ? 'h3' : _f, handleClick = _a.handleClick, _g = _a.objectFit, objectFit = _g === void 0 ? 'cover' : _g, _h = _a.enableBorder, enableBorder = _h === void 0 ? false : _h, _j = _a.enableGradient, enableGradient = _j === void 0 ? false : _j;
    var _k = (0, react_1.useState)('center'), textAlign = _k[0], setTextAlign = _k[1];
    var _l = (0, react_1.useState)('center'), justifyContent = _l[0], setJustifyContent = _l[1];
    var _m = (0, react_1.useState)('row'), direction = _m[0], setDirection = _m[1];
    var router = (0, router_1.useRouter)();
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    (0, react_1.useEffect)(function () {
        if (flexDirection == 'row' || flexDirection == 'row-reverse') {
            setTextAlign('left');
            setDirection('row');
            setJustifyContent('center');
        }
        else {
            setTextAlign('center');
            setDirection('column');
            setJustifyContent('flex-start');
        }
    }, [flexDirection]);
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)) },
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.imageContainer), { flexDirection: {
                    sm: flexDirection,
                    xs: 'column',
                } }) },
            react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.image), { width: {
                        xs: '100%',
                        sm: direction == 'row' ? '50%' : '100%',
                    } }) },
                react_1.default.createElement(components_1.TouchableOpacity, { handleClick: handleItemClick },
                    react_1.default.createElement(components_1.Image, { src: image, height: height, objectFit: objectFit, alt: title, enableGradient: enableGradient, disableBorderRadius: enableBorder }))),
            react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.content), { justifyContent: direction == 'row' ? 'flex-start' : 'center', width: {
                        sm: direction == 'row' ? '50%' : '100%',
                        xs: '100%',
                    } }) },
                react_1.default.createElement(material_1.Stack, { spacing: 0, sx: __assign(__assign({}, sx.textContent), { justifyContent: {
                            sm: justifyContent,
                            xs: 'center'
                        } }) },
                    label && (react_1.default.createElement(material_1.Typography, { color: "primary", sx: __assign(__assign({}, sx.label), { textAlign: {
                                sm: textAlign,
                                xs: 'center'
                            } }), variant: "caption" }, label)),
                    react_1.default.createElement(material_1.Typography, { sx: __assign(__assign({}, sx.title), { textAlign: {
                                sm: textAlign,
                                xs: 'center'
                            } }), variant: textVariant }, title),
                    react_1.default.createElement(material_1.Typography, { variant: "body2", sx: __assign(__assign({}, sx.description), { textAlign: {
                                sm: textAlign,
                                xs: 'center'
                            } }) }, (0, helpers_1.truncate)(description, 160)),
                    buttonText && (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.actions), { justifyContent: direction == 'row' ? 'flex-start' : 'center' }) },
                        react_1.default.createElement(material_1.Button, { size: "large", variant: "contained", color: "primary", onClick: handleItemClick }, buttonText))))))));
};
exports.default = FeaturedCard;
var sx = {
    root: {
        width: "100%",
        display: 'flex',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
    imageContainer: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        overflow: 'hidden',
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    actions: {
        mt: 2,
        display: 'flex',
        width: '100%',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    textContent: {
        p: 2,
        display: 'flex',
        height: '100%',
        width: '100%',
    },
    label: {
        width: '100%',
        color: 'primary.main'
    },
    title: {
        width: '100%',
        color: 'text.primary',
        my: 1
    },
    description: {
        width: '100%',
        color: 'text.secondary',
    },
};
