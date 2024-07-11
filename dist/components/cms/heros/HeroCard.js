"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var helpers_1 = require("../../../helpers");
var HeroCard = function (props) {
    var _a = props || {}, actions = _a.actions, resource = _a.resource, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, enableEdit = _a.enableEdit, handleEdit = _a.handleEdit, enableLikes = _a.enableLikes, enableFavorites = _a.enableFavorites, enableSharing = _a.enableSharing, enableRatings = _a.enableRatings, enablePayments = _a.enablePayments;
    var _c = resource || {}, label = _c.label, title = _c.title, image = _c.image, description = _c.description;
    if (!resource)
        return null;
    return (react_1.default.createElement(material_1.Stack, { spacing: 2 },
        (actions || enableEdit) && (react_1.default.createElement(material_1.Box, { sx: sx.actions },
            react_1.default.createElement(__1.Actions, { actions: (0, helpers_1.buildActions)({
                    enableEdit: enableEdit,
                    handleEdit: handleEdit,
                    actions: actions,
                }), justifyContent: "flex-end", resource: (0, frontend_js_1.flattenDocument)(resource) }))),
        react_1.default.createElement(material_1.Box, { sx: sx.root },
            react_1.default.createElement(material_1.Stack, { sx: sx.container, direction: {
                    md: 'row',
                    xs: 'column'
                }, spacing: 4 },
                react_1.default.createElement(material_1.Stack, { spacing: 2, direction: "column", sx: sx.leftPanel },
                    react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
                        react_1.default.createElement(__1.Image, { src: image === null || image === void 0 ? void 0 : image.url, alt: title, height: 400, label: label })),
                    react_1.default.createElement(__1.SocialButtons, { handle: resource === null || resource === void 0 ? void 0 : resource.handle, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing })),
                react_1.default.createElement(material_1.Stack, { spacing: 2, sx: sx.content },
                    react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h4" }, title),
                    enableRatings == true && (react_1.default.createElement(__1.AvgRating, { resource: resource, enableTotal: true })),
                    (displayFields === null || displayFields === void 0 ? void 0 : displayFields.length) > 0 && (react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource })),
                    enablePayments == true && (react_1.default.createElement(__1.StripePaymentLink, { resource: resource, buttonText: "Checkout" })),
                    react_1.default.createElement(__1.ExpandableText, { text: description }))))));
};
exports.default = HeroCard;
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
    caption: {
        color: 'text.secondary',
    },
    actions: {
        width: '100%',
    },
    imageContainer: {
        transition: 'all 0.5s ease-in-out',
        borderRadius: 1,
        width: '100%',
        minWidth: {
            sm: 420,
            xs: '100%',
        },
    },
    leftPanel: {
        width: '100%',
    },
    leftPanelBorder: {
        pb: 2,
    },
};
