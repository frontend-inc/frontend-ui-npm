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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var moment_1 = __importDefault(require("moment"));
var frontend_js_1 = require("frontend-js");
var helpers_1 = require("../../../helpers");
var HeroArticle = function (props) {
    var _a = props || {}, actions = _a.actions, resource = _a.resource, _b = _a.disableImage, disableImage = _b === void 0 ? false : _b, enableBorder = _a.enableBorder, enableEdit = _a.enableEdit, handleEdit = _a.handleEdit, enableFavorites = _a.enableFavorites, enableLikes = _a.enableLikes, enableSharing = _a.enableSharing, enableBuyNow = _a.enableBuyNow, enableStripePaymentLink = _a.enableStripePaymentLink;
    var _c = resource || {}, label = _c.label, title = _c.title, image = _c.image, description = _c.description, data = _c.data;
    var published_at = (data || {}).published_at;
    return (react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)), spacing: 4 },
        react_1.default.createElement(material_1.Stack, { spacing: 3, sx: sx.header },
            (actions || enableEdit) && (react_1.default.createElement(material_1.Stack, { direction: { xs: 'column', sm: 'row' }, sx: sx.actions, spacing: 1 },
                react_1.default.createElement(__1.Actions, { actions: (0, helpers_1.buildActions)({
                        enableEdit: enableEdit,
                        handleEdit: handleEdit,
                        actions: actions,
                    }), numVisible: 4, resource: (0, frontend_js_1.flattenDocument)(resource), justifyContent: "center" }))),
            react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h3" }, title),
            published_at && (react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "caption" }, (0, moment_1.default)(published_at).format('MMMM D, YYYY'))),
            enableBuyNow && (react_1.default.createElement(__1.BuyNowButton, { resource: resource, buttonText: "Buy Now", justifyContent: 'center' })),
            enableStripePaymentLink && (react_1.default.createElement(__1.StripePaymentLink, { resource: resource, buttonText: "Checkout", justifyContent: 'center' }))),
        !disableImage && (react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
            react_1.default.createElement(__1.Image, { src: image === null || image === void 0 ? void 0 : image.url, alt: title, height: 400, label: label, disableBorderRadius: enableBorder }))),
        react_1.default.createElement(__1.SocialButtons, { handle: resource === null || resource === void 0 ? void 0 : resource.handle, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing }),
        react_1.default.createElement(material_1.Box, { sx: sx.content },
            react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.text }, description))));
};
exports.default = HeroArticle;
var sx = {
    root: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rootBorder: {
        py: 2,
        border: '1px solid',
        borderColor: 'divider',
    },
    header: {
        maxWidth: 500,
        width: '100%',
        textAlign: 'center',
    },
    content: {
        width: '100%',
        maxWidth: {
            sm: 500,
            xs: '100%',
        },
    },
    text: {
        width: '100%',
        whiteSpace: 'pre-line',
    },
    caption: {
        color: 'text.secondary',
    },
    actions: {
        justifyContent: 'center',
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
    imageContainer: {
        width: '100%',
        transition: 'all 0.4s ease-in-out',
        borderRadius: 1,
        boxShadow: '0 0 20px rgba(0,0,0,0.2)',
        '&:hover': {
            boxShadow: '0 0 20px rgba(0,0,0,0.4)',
        }
    }
};