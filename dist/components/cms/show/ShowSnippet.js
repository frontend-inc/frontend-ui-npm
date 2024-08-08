"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var ShowSnippet = function (props) {
    var _a = props || {}, resource = _a.resource, url = _a.url, _b = _a.buttons, buttons = _b === void 0 ? [] : _b, _c = _a.displayFields, displayFields = _c === void 0 ? [] : _c, enableRatings = _a.enableRatings, enablePayments = _a.enablePayments, enableEdit = _a.enableEdit, handleEdit = _a.handleEdit, enableLikes = _a.enableLikes, enableFavorites = _a.enableFavorites, enableSharing = _a.enableSharing;
    var _d = resource || {}, image = _d.image, label = _d.label, title = _d.title;
    if (!resource)
        return null;
    return (react_1.default.createElement(material_1.Paper, { elevation: 1, sx: sx.paper },
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0, sx: sx.header },
            react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
                react_1.default.createElement(__1.Image, { disableBorderRadius: true, label: label, src: image === null || image === void 0 ? void 0 : image.url, alt: title, height: 400 })),
            react_1.default.createElement(material_1.Stack, { spacing: 0.5, direction: "column", p: 2, width: "100%" },
                (enableLikes || enableFavorites || enableSharing) && (react_1.default.createElement(__1.SocialButtons, { justifyContent: "center", handle: resource === null || resource === void 0 ? void 0 : resource.handle, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing })),
                react_1.default.createElement(material_1.Typography, { variant: "subtitle1", color: "text.primary" }, resource === null || resource === void 0 ? void 0 : resource.title),
                enableRatings == true && (react_1.default.createElement(__1.AvgRating, { resource: resource, enableTotal: true })),
                react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource }),
                enablePayments == true && (react_1.default.createElement(__1.StripePaymentLink, { resource: resource, buttonText: "Checkout", justifyContent: "center" })),
                react_1.default.createElement(__1.UserChip, { user: resource === null || resource === void 0 ? void 0 : resource.user })))));
};
exports.default = ShowSnippet;
var sx = {
    paper: {
        border: '1px solid',
        borderColor: 'divider',
        my: 1,
        transition: 'box-shadow 0.3s',
        '&:hover': {
            boxShadow: 2,
        },
    },
    container: {
        borderRadius: 1,
        overflow: 'hidden',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: {
            md: 'flex-start',
            xs: 'center',
        },
    },
    header: {
        width: '100%',
    },
    imageContainer: {
        width: '100%',
        borderRadius: function (theme) {
            return "".concat(theme.shape.borderRadius, "px ").concat(theme.shape.borderRadius, "px 0 0");
        },
        overflow: 'hidden',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        bgcolor: 'rgb(0,0,0,0.5)',
    },
};
