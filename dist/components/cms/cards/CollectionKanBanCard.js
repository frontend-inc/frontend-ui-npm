"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var components_3 = require("../../../components");
var helpers_1 = require("../../../helpers");
var CollectionKanBanCard = function (props) {
    var _a;
    var _b = props || {}, loading = _b.loading, buttons = _b.buttons, resource = _b.resource, _c = _b.displayFields, displayFields = _c === void 0 ? [] : _c, handleClick = _b.handleClick, enableGradient = _b.enableGradient, enableOverlay = _b.enableOverlay, _d = _b.enableDragging, enableDragging = _d === void 0 ? false : _d, enableComments = _b.enableComments, enableLikes = _b.enableLikes, enableFavorites = _b.enableFavorites, enableRatings = _b.enableRatings, enableEdit = _b.enableEdit, enableDelete = _b.enableDelete, handleEdit = _b.handleEdit, handleDelete = _b.handleDelete, enableUsers = _b.enableUsers;
    return (react_1.default.createElement(components_2.KanBanCard, { id: resource === null || resource === void 0 ? void 0 : resource.id, primary: resource === null || resource === void 0 ? void 0 : resource.title, enableDragging: enableDragging, loading: loading, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, handleClick: handleClick, secondary: react_1.default.createElement(components_1.SecondaryFields, { enableRatings: enableRatings, enableUsers: enableUsers, fields: displayFields, resource: resource }), actions: react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(components_1.SocialButtons, { resource: resource, enableLikes: enableLikes, enableFavorites: enableFavorites, enableComments: enableComments })), secondaryAction: react_1.default.createElement(components_3.ButtonActions, { numVisible: 0, buttons: (0, helpers_1.buildActions)({
                enableEdit: enableEdit,
                enableDelete: enableDelete,
                handleEdit: handleEdit,
                handleDelete: handleDelete,
                buttons: buttons,
            }), resource: resource }), slots: {
            image: {
                disableBorderRadius: true,
                enableGradient: enableGradient,
                enableOverlay: enableOverlay,
            },
        } }));
};
exports.default = CollectionKanBanCard;
