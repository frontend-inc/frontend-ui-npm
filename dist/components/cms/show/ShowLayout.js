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
var ShowLayout = function (props) {
    var _a = props || {}, actions = _a.actions, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, resource = _a.resource, children = _a.children, enableEdit = _a.enableEdit, handleEdit = _a.handleEdit, enableFavorites = _a.enableFavorites, enableLikes = _a.enableLikes, enableSharing = _a.enableSharing, enableRatings = _a.enableRatings, enablePayments = _a.enablePayments;
    var _c = resource || {}, title = _c.title, description = _c.description;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, spacing: 4 },
        (actions || enableEdit) && (react_1.default.createElement(material_1.Box, { sx: sx.actions },
            react_1.default.createElement(__1.Actions, { actions: (0, helpers_1.buildActions)({
                    enableEdit: enableEdit,
                    handleEdit: handleEdit,
                    actions: actions,
                }), numVisible: 4, resource: (0, frontend_js_1.flattenDocument)(resource), justifyContent: "center" }))),
        react_1.default.createElement(material_1.Stack, { spacing: 3, sx: sx.header },
            react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h3" }, title),
            enableRatings == true && react_1.default.createElement(__1.AvgRating, { resource: resource, enableTotal: true }),
            (displayFields === null || displayFields === void 0 ? void 0 : displayFields.length) > 0 && (react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource })),
            enablePayments == true && (react_1.default.createElement(__1.StripePaymentLink, { resource: resource, buttonText: "Checkout", justifyContent: "center" }))),
        react_1.default.createElement(material_1.Box, { sx: sx.container }, children),
        react_1.default.createElement(__1.SocialButtons, { handle: resource === null || resource === void 0 ? void 0 : resource.handle, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing }),
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
    actions: {
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
