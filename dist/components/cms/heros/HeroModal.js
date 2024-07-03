"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var HeroModal = function (props) {
    var _a = props || {}, open = _a.open, handleClose = _a.handleClose, resource = _a.resource, url = _a.url, _b = _a.actions, actions = _b === void 0 ? [] : _b, _c = _a.displayFields, displayFields = _c === void 0 ? [] : _c, enableComments = _a.enableComments, enableRatings = _a.enableRatings, enableLikes = _a.enableLikes, enableFavorites = _a.enableFavorites, enableSharing = _a.enableSharing, enableEdit = _a.enableEdit, handleEdit = _a.handleEdit;
    var _d = resource || {}, image = _d.image, label = _d.label, title = _d.title;
    if (!resource)
        return null;
    return (react_1.default.createElement(__1.Modal, { disablePadding: true, open: open, handleClose: handleClose, maxWidth: "md" },
        react_1.default.createElement(material_1.Box, { px: 3, pb: 2 },
            react_1.default.createElement(__1.HeroSnippet, { resource: resource, enableEdit: enableEdit, handleEdit: handleEdit, actions: actions, displayFields: displayFields, enableRatings: enableRatings }),
            (enableLikes || enableFavorites || enableSharing) && (react_1.default.createElement(__1.SocialButtons, { justifyContent: "center", handle: resource === null || resource === void 0 ? void 0 : resource.handle, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing })),
            enableComments && (react_1.default.createElement(__1.Comments, { url: url, handle: resource === null || resource === void 0 ? void 0 : resource.handle })))));
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
