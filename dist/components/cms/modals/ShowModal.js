"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var ShowModal = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), openShow = _a.openShow, setOpenShow = _a.setOpenShow, resource = _a.resource, url = _a.url;
    var _b = props || {}, _c = _b.buttons, buttons = _c === void 0 ? [] : _c, _d = _b.displayFields, displayFields = _d === void 0 ? [] : _d, enableComments = _b.enableComments, enableRatings = _b.enableRatings, enableLikes = _b.enableLikes, enableFavorites = _b.enableFavorites, enableSharing = _b.enableSharing, enablePayments = _b.enablePayments, enableEdit = _b.enableEdit, handleEdit = _b.handleEdit;
    if (!resource)
        return null;
    return (react_1.default.createElement(__1.Modal, { disablePadding: true, open: openShow, handleClose: function () { return setOpenShow(false); }, maxWidth: "sm" },
        react_1.default.createElement(material_1.Box, { px: 2, pb: 2 },
            react_1.default.createElement(__1.ShowSnippet, { resource: resource, enableEdit: enableEdit, buttons: buttons, displayFields: displayFields, enableRatings: enableRatings, enablePayments: enablePayments, handleEdit: handleEdit, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing }),
            enableComments && react_1.default.createElement(__1.Comments, { url: url, handle: resource === null || resource === void 0 ? void 0 : resource.handle }))));
};
exports.default = ShowModal;
