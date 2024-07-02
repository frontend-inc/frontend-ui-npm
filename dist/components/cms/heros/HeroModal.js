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
var HeroModal = function (props) {
    var _a = props || {}, open = _a.open, handleClose = _a.handleClose, actions = _a.actions, resource = _a.resource, url = _a.url, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, enableEdit = _a.enableEdit, handleEdit = _a.handleEdit, enableLikes = _a.enableLikes, enableFavorites = _a.enableFavorites, enableSharing = _a.enableSharing, enableRatings = _a.enableRatings, enableBuyNow = _a.enableBuyNow, enableStripePaymentLink = _a.enableStripePaymentLink, enableUsers = _a.enableUsers;
    var _c = resource || {}, label = _c.label, title = _c.title, image = _c.image, description = _c.description;
    if (!resource)
        return null;
    return (react_1.default.createElement(__1.Modal, { disableHeader: true, disablePadding: true, open: open, handleClose: handleClose, maxWidth: "md" },
        react_1.default.createElement(material_1.Stack, { spacing: 2 },
            react_1.default.createElement(material_1.Box, { sx: sx.root },
                react_1.default.createElement(material_1.Stack, { sx: sx.container, direction: { md: 'row', xs: 'column' }, spacing: 4 },
                    (image === null || image === void 0 ? void 0 : image.url) && (react_1.default.createElement(material_1.Stack, { spacing: 2, direction: "column", sx: sx.leftPanel },
                        react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
                            react_1.default.createElement(__1.Image, { src: image === null || image === void 0 ? void 0 : image.url, alt: title, height: 620, label: label, disableBorderRadius: true })))),
                    react_1.default.createElement(material_1.Stack, { spacing: 2, sx: sx.rightPanel },
                        react_1.default.createElement(material_1.Stack, { justifyContent: 'flex-end', alignItems: 'center', direction: "row", spacing: 1 },
                            (enableLikes || enableFavorites || enableSharing) && (react_1.default.createElement(__1.SocialButtons, { justifyContent: "flex-end", handle: resource === null || resource === void 0 ? void 0 : resource.handle, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing })),
                            ((actions === null || actions === void 0 ? void 0 : actions.length) > 0 || enableEdit) && (react_1.default.createElement(__1.Actions, { numVisible: 0, actions: (0, helpers_1.buildActions)({
                                    enableEdit: enableEdit,
                                    handleEdit: handleEdit,
                                    actions: actions,
                                }), justifyContent: "flex-end", resource: (0, frontend_js_1.flattenDocument)(resource) })),
                            react_1.default.createElement(material_1.Hidden, { smDown: true },
                                react_1.default.createElement(material_1.IconButton, { onClick: handleClose },
                                    react_1.default.createElement(__1.Icon, { name: "X", color: 'text.secondary', size: 20 })))),
                        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, sx: sx.innerContent },
                            react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h4" }, title),
                            enableUsers && (react_1.default.createElement(__1.UserChip, { user: resource === null || resource === void 0 ? void 0 : resource.user })),
                            enableRatings == true && (react_1.default.createElement(__1.AvgRating, { resource: resource, enableTotal: true })),
                            react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource }),
                            enableBuyNow && (react_1.default.createElement(__1.BuyNowButton, { resource: resource, buttonText: "Buy Now" })),
                            enableStripePaymentLink && (react_1.default.createElement(__1.StripePaymentLink, { resource: resource, buttonText: "Checkout" })),
                            react_1.default.createElement(__1.ExpandableText, { text: description })))))),
        react_1.default.createElement(material_1.Hidden, { smUp: true },
            react_1.default.createElement(material_1.IconButton, { onClick: handleClose, sx: sx.closeButton },
                react_1.default.createElement(__1.Icon, { name: "X", size: 20, color: 'common.white' })))));
};
exports.default = HeroModal;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
    },
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: {
            md: 'flex-start',
            xs: 'center',
        },
    },
    header: {
        width: '100%',
        textAlign: 'center',
    },
    leftPanel: {
        width: '100%',
        overflowY: 'hidden',
    },
    rightPanel: {
        p: 2,
        width: '100%',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        }
    },
    innerContent: {
        pr: 2,
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
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
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        bgcolor: 'rgb(0,0,0,0.5)',
    },
};
