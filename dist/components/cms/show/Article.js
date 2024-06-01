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
var moment_1 = __importDefault(require("moment"));
var frontend_js_1 = require("frontend-js");
var helpers_1 = require("../../../helpers");
var Article = function (props) {
    var _a = props || {}, actions = _a.actions, resource = _a.resource, enableBorder = _a.enableBorder, enableEdit = _a.enableEdit, handleEdit = _a.handleEdit, enableFavorites = _a.enableFavorites;
    var _b = resource || {}, handle = _b.handle, label = _b.label, title = _b.title, image = _b.image, description = _b.description, data = _b.data;
    var published_at = (data || {}).published_at;
    return (react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)), spacing: 7 },
        react_1.default.createElement(material_1.Stack, { spacing: 3, sx: sx.header },
            react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h3" }, title),
            published_at && (react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "caption" }, (0, moment_1.default)(published_at).format('MMMM D, YYYY'))),
            (actions || enableEdit) && (react_1.default.createElement(material_1.Stack, { direction: { xs: 'column', sm: 'row' }, sx: sx.actions, spacing: 1 },
                react_1.default.createElement(components_1.Actions, { actions: (0, helpers_1.buildActions)({
                        enableEdit: enableEdit,
                        handleEdit: handleEdit,
                        actions: actions,
                    }), numVisible: 4, resource: (0, frontend_js_1.flattenDocument)(resource), justifyContent: "center" })))),
        react_1.default.createElement(components_1.Image, { src: image === null || image === void 0 ? void 0 : image.url, alt: title, height: 400, label: label, disableBorderRadius: enableBorder, secondaryActions: enableFavorites && (react_1.default.createElement(components_1.FavoriteButton, { handle: handle })) }),
        react_1.default.createElement(material_1.Box, { sx: sx.content },
            react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.text }, description))));
};
exports.default = Article;
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
};
