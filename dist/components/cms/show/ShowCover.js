"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var helpers_1 = require("../../../helpers");
var ShowCover = function (props) {
    var _a = props || {}, buttons = _a.buttons, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, resource = _a.resource, handleEdit = _a.handleEdit, enableEdit = _a.enableEdit, enableFavorites = _a.enableFavorites, enableLikes = _a.enableLikes, enableSharing = _a.enableSharing, enableRatings = _a.enableRatings, enablePayments = _a.enablePayments;
    var _c = resource || {}, title = _c.title, image = _c.image, description = _c.description;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, spacing: 4 },
        react_1.default.createElement(__1.Cover, { image: image === null || image === void 0 ? void 0 : image.url, height: 400, title: title, enableOverlay: true }),
        react_1.default.createElement(material_1.Stack, { spacing: 3, sx: sx.header },
            react_1.default.createElement(__1.SocialButtons, { resource: resource, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing }),
            (buttons || enableEdit) && (react_1.default.createElement(material_1.Box, { sx: sx.buttons },
                react_1.default.createElement(__1.ActionButtons, { buttons: (0, helpers_1.buildActions)({
                        enableEdit: enableEdit,
                        handleEdit: handleEdit,
                        buttons: buttons,
                    }), numVisible: 4, resource: resource, justifyContent: "center" }))),
            enableRatings == true && (react_1.default.createElement(__1.AvgRating, { justifyContent: "center", resource: resource, enableTotal: true })),
            (displayFields === null || displayFields === void 0 ? void 0 : displayFields.length) > 0 && (react_1.default.createElement(__1.DisplayFields, { alignItems: "center", fields: displayFields, resource: resource })),
            enablePayments == true && (react_1.default.createElement(__1.StripePaymentLink, { resource: resource, buttonText: "Checkout", justifyContent: "center" }))),
        react_1.default.createElement(material_1.Box, { sx: sx.content },
            react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.text }, description))));
};
exports.default = ShowCover;
var sx = {
    root: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        px: 2,
        maxWidth: 500,
        width: '100%',
        textAlign: 'center',
    },
    content: {
        px: 2,
        width: '100%',
        pb: 4,
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
    buttons: {
        justifyContent: 'center',
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
    imageContainer: {
        width: '100%',
        borderRadius: 1,
    },
};
