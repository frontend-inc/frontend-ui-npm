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
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var helpers_1 = require("../../../helpers");
var HeroPlace = function (props) {
    var MAX_CHARS = 500;
    var _a = props || {}, actions = _a.actions, resource = _a.resource, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, enableBorder = _a.enableBorder, enableEdit = _a.enableEdit, handleEdit = _a.handleEdit, enableLikes = _a.enableLikes, enableFavorites = _a.enableFavorites, enableSharing = _a.enableSharing, enableBuyNow = _a.enableBuyNow, enableStripePaymentLink = _a.enableStripePaymentLink;
    var _c = resource || {}, label = _c.label, title = _c.title, image = _c.image, description = _c.description;
    if (!resource)
        return null;
    return (react_1.default.createElement(material_1.Stack, { spacing: 2 },
        (actions || enableEdit) && (react_1.default.createElement(material_1.Box, { sx: sx.actions },
            react_1.default.createElement(components_1.Actions, { actions: (0, helpers_1.buildActions)({
                    enableEdit: enableEdit,
                    handleEdit: handleEdit,
                    actions: actions,
                }), justifyContent: "flex-end", resource: (0, frontend_js_1.flattenDocument)(resource) }))),
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)) },
            react_1.default.createElement(material_1.Stack, { sx: sx.container, direction: { md: 'row', xs: 'column' }, spacing: 4 },
                react_1.default.createElement(material_1.Stack, { spacing: 2, direction: "column", sx: __assign(__assign({}, sx.leftPanel), (enableBorder &&
                        (enableFavorites || enableSharing || enableLikes) &&
                        sx.leftPanelBorder)) },
                    react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
                        react_1.default.createElement(components_1.Image, { src: image === null || image === void 0 ? void 0 : image.url, alt: title, height: 500, label: label, disableBorderRadius: enableBorder })),
                    react_1.default.createElement(components_1.SocialButtons, { handle: resource === null || resource === void 0 ? void 0 : resource.handle, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing }),
                    react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h4" }, title),
                    react_1.default.createElement(components_1.DisplayFields, { fields: displayFields, resource: resource }),
                    enableBuyNow && (react_1.default.createElement(components_1.BuyNowButton, { resource: resource, buttonText: "Buy Now" })),
                    enableStripePaymentLink && (react_1.default.createElement(components_1.StripePaymentLink, { resource: resource, buttonText: "Checkout" })),
                    react_1.default.createElement(components_1.ExpandableText, { text: description })),
                react_1.default.createElement(material_1.Stack, { spacing: 2, sx: __assign(__assign({}, sx.content), (enableBorder && sx.contentBorder)) },
                    react_1.default.createElement(components_1.GoogleMap, { enableBorder: true, resources: [resource] }))))));
};
exports.default = HeroPlace;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rootBorder: {
        overflow: 'hidden',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        border: '1px solid',
        borderColor: 'divider',
    },
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: {
            md: 'flex-start',
            xs: 'center',
        },
    },
    image: {
        height: {
            sm: 256,
            xs: 180,
        },
        width: {
            sm: 256,
            xs: 180,
        },
    },
    header: {
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
    contentBorder: {
        p: 2,
    },
    text: {
        width: '100%',
        whiteSpace: 'pre-line',
    },
    caption: {
        color: 'text.secondary',
    },
    link: {
        cursor: 'pointer',
        color: 'text.secondary',
    },
    actions: {
        width: '100%',
    },
    imageContainer: {
        transition: 'all 0.5s ease-in-out',
        borderRadius: 1,
        width: '100%',
        minWidth: 300,
    },
    leftPanel: {
        width: '100%',
    },
    leftPanelBorder: {
        pb: 2,
    },
};
