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
var frontend_js_1 = require("frontend-js");
var helpers_1 = require("../../../helpers");
var HeroAvatar = function (props) {
    var _a = props || {}, actions = _a.actions, resource = _a.resource, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, enableEdit = _a.enableEdit, handleEdit = _a.handleEdit, enableFavorites = _a.enableFavorites, enableLikes = _a.enableLikes, enableSharing = _a.enableSharing, enableRatings = _a.enableRatings, enablePayments = _a.enablePayments;
    var data = (resource || {}).data;
    var _c = resource || {}, label = _c.label, title = _c.title, image = _c.image, description = _c.description;
    return (react_1.default.createElement(material_1.Stack, { spacing: 2, direction: "column", justifyContent: "center" },
        (actions || enableEdit) && (react_1.default.createElement(material_1.Stack, { sx: sx.actions, direction: { sm: 'row', xs: 'column' }, spacing: 1 },
            react_1.default.createElement(__1.Actions, { actions: (0, helpers_1.buildActions)({
                    enableEdit: enableEdit,
                    handleEdit: handleEdit,
                    actions: actions,
                }), resource: (0, frontend_js_1.flattenDocument)(resource), justifyContent: "flex-end" }))),
        react_1.default.createElement(material_1.Box, { sx: sx.root },
            react_1.default.createElement(material_1.Stack, { sx: sx.container, direction: { sm: 'row', xs: 'column' }, spacing: 4 },
                react_1.default.createElement(material_1.Stack, { sx: sx.leftPanel, spacing: 2, direction: "column" },
                    react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
                        react_1.default.createElement(material_1.Avatar, { sx: __assign(__assign({}, sx.avatar), { height: 200, width: 200 }), src: image === null || image === void 0 ? void 0 : image.url, alt: title },
                            react_1.default.createElement(material_1.Box, null))),
                    react_1.default.createElement(__1.SocialButtons, { handle: resource === null || resource === void 0 ? void 0 : resource.handle, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing })),
                react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.content },
                    react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h4" }, title),
                    enableRatings && (react_1.default.createElement(__1.AvgRating, { resource: resource, enableTotal: true })),
                    react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource }),
                    enablePayments && (react_1.default.createElement(__1.StripePaymentLink, { resource: resource, buttonText: "Checkout" })),
                    react_1.default.createElement(__1.ExpandableText, { text: description }))))));
};
exports.default = HeroAvatar;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
    rootBorder: {
        overflow: 'hidden',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        border: '1px solid',
        borderColor: 'divider',
    },
    avatar: {
        height: '200px',
        width: '200px',
        backgroundImage: 'linear-gradient(45deg, #888888, #222222,#000000)',
    },
    gradient: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    overlay: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgb(0,0,0,0.5)',
        },
    },
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: {
            sm: 'flex-start',
            xs: 'center',
        },
    },
    leftPanel: {
        width: {
            sm: 200,
            xs: '100%'
        }
    },
    leftPanelBorder: {
        pb: 2,
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        textAlign: 'center',
    },
    content: {
        width: '100%',
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
    socialUrls: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    actions: {
        width: '100%',
        justifyContent: {
            sm: 'flex-end',
            xs: 'center',
        },
    },
};
