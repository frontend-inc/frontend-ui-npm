"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var ResourceModal = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), resource = _a.resource, url = _a.url;
    var _b = props || {}, open = _b.open, handleClose = _b.handleClose, _c = _b.actions, actions = _c === void 0 ? [] : _c, _d = _b.displayFields, displayFields = _d === void 0 ? [] : _d, enableComments = _b.enableComments, enableRatings = _b.enableRatings, enableLikes = _b.enableLikes, enableFavorites = _b.enableFavorites, enableSharing = _b.enableSharing, enableEdit = _b.enableEdit, handleEdit = _b.handleEdit;
    if (!resource)
        return null;
    return (react_1.default.createElement(__1.Modal, { disablePadding: true, open: open, handleClose: handleClose, maxWidth: "md" },
        react_1.default.createElement(material_1.Box, { px: 3, pb: 2 },
            react_1.default.createElement(__1.HeroSnippet, { resource: resource, enableEdit: enableEdit, actions: actions, displayFields: displayFields, enableRatings: enableRatings }),
            (enableLikes || enableFavorites || enableSharing) && (react_1.default.createElement(__1.SocialButtons, { justifyContent: "center", handle: resource === null || resource === void 0 ? void 0 : resource.handle, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing })),
            enableComments && (react_1.default.createElement(__1.Comments, { url: url, handle: resource === null || resource === void 0 ? void 0 : resource.handle })))));
};
exports.default = ResourceModal;
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
    },
    imageContainer: {
        borderRadius: 1,
        width: 240,
        minWidth: 240
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        bgcolor: 'rgb(0,0,0,0.5)',
    },
    paper: {
        mb: 2
    }
};
