"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var helpers_1 = require("../../../helpers");
var ShowLayout = function (props) {
    var _a = props || {}, resource = _a.resource, children = _a.children, enableEdit = _a.enableEdit, handleEdit = _a.handleEdit, enableFavorites = _a.enableFavorites, enableLikes = _a.enableLikes, enableSharing = _a.enableSharing, enableRatings = _a.enableRatings, enablePayments = _a.enablePayments, _b = _a.buttons, buttons = _b === void 0 ? [] : _b, _c = _a.displayFields, displayFields = _c === void 0 ? [] : _c;
    var _d = resource || {}, title = _d.title, description = _d.description;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, spacing: 4 },
        (buttons || enableEdit) && (react_1.default.createElement(material_1.Box, { sx: sx.buttons },
            react_1.default.createElement(__1.ButtonActions, { buttons: (0, helpers_1.buildActions)({
                    enableEdit: enableEdit,
                    handleEdit: handleEdit,
                    buttons: buttons,
                }), numVisible: 4, resource: resource, justifyContent: "center" }))),
        react_1.default.createElement(material_1.Stack, { spacing: 3, sx: sx.header },
            react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h3" }, title),
            enableRatings == true && react_1.default.createElement(__1.AvgRating, { resource: resource, enableTotal: true }),
            (displayFields === null || displayFields === void 0 ? void 0 : displayFields.length) > 0 && (react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource })),
            enablePayments == true && (react_1.default.createElement(__1.StripePaymentLink, { resource: resource, buttonText: "Checkout", justifyContent: "center" }))),
        react_1.default.createElement(material_1.Box, { sx: sx.container }, children),
        react_1.default.createElement(__1.SocialButtons, { resource: resource, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing }),
        react_1.default.createElement(material_1.Box, { sx: sx.content },
            react_1.default.createElement(__1.ExpandableText, { text: description }))));
};
exports.default = ShowLayout;
var sx = {
    root: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rootBorder: {
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
    buttons: {
        justifyContent: 'center',
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
    container: {
        width: '100%',
        borderRadius: 1,
    },
};
