"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var material_1 = require("@mui/material");
var __1 = require("../..");
var router_1 = require("next/router");
var FeaturedCard = function (props) {
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var _a = props || {}, label = _a.label, title = _a.title, description = _a.description, _b = _a.image, image = _b === void 0 ? '' : _b, href = _a.href, buttonText = _a.buttonText, _c = _a.flexDirection, flexDirection = _c === void 0 ? 'row' : _c, handleClick = _a.handleClick, _d = _a.objectFit, objectFit = _d === void 0 ? 'cover' : _d, _e = _a.enableOverlay, enableOverlay = _e === void 0 ? false : _e, _f = _a.enableBorder, enableBorder = _f === void 0 ? false : _f, _g = _a.enableGradient, enableGradient = _g === void 0 ? false : _g;
    var router = (0, router_1.useRouter)();
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Stack, { direction: {
            sm: flexDirection,
            xs: 'column',
        }, alignItems: "center", spacing: {
            sm: 4,
            xs: 1,
        } },
        react_1.default.createElement(material_1.Box, { sx: sx.image },
            react_1.default.createElement(__1.Image, { label: label, src: image, height: 320, objectFit: objectFit, alt: title, enableOverlay: enableOverlay, enableGradient: enableGradient, disableBorderRadius: enableBorder })),
        react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.content },
            react_1.default.createElement(material_1.Typography, { sx: sx.title, variant: 'h6' }, title),
            description && react_1.default.createElement(__1.ExpandableText, { text: description }),
            buttonText && (react_1.default.createElement(material_1.Box, { sx: sx.buttons },
                react_1.default.createElement(material_1.Button, { size: "large", variant: "contained", color: "primary", onClick: handleItemClick }, buttonText))))));
};
exports.default = FeaturedCard;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        borderRadius: 1,
    },
    imageContainer: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 1,
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
        width: {
            xs: '100%',
            sm: '50%',
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: {
            sm: 'flex-start',
            xs: 'center',
        },
        width: '100%',
    },
    content: {
        justifyContent: {
            sm: 'flex-start',
            xs: 'center',
        },
        width: {
            sm: '50%',
            xs: '100%',
        },
        alignItems: 'flex-start',
        height: '100%',
    },
    textContent: {
        display: 'flex',
        justifyContent: 'flex-start',
        height: '100%',
        width: '100%',
    },
    title: {
        width: '100%',
        color: 'text.primary',
        textAlign: {
            sm: 'left',
            xs: 'center',
        },
    },
    description: {
        width: '100%',
        color: 'text.secondary',
        textAlign: {
            sm: 'left',
            xs: 'center',
        },
    },
};
