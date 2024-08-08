"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ShowList_1 = __importDefault(require("./ShowList"));
var ShowCard_1 = __importDefault(require("./ShowCard"));
var ShowAvatar_1 = __importDefault(require("./ShowAvatar"));
var ShowCover_1 = __importDefault(require("./ShowCover"));
var ShowYouTube_1 = __importDefault(require("./ShowYouTube"));
var ShowVimeo_1 = __importDefault(require("./ShowVimeo"));
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var ShowItem = function (props) {
    var handle = props.handle;
    if (handle == 'index')
        handle = undefined;
    var _a = props || {}, _b = _a.style, style = _b === void 0 ? 'article' : _b, _c = _a.displayFields, displayFields = _c === void 0 ? [] : _c, fieldName = _a.fieldName, buttons = _a.buttons, enableOverlay = _a.enableOverlay, enableEdit = _a.enableEdit, enableFavorites = _a.enableFavorites, enableLikes = _a.enableLikes, enableSharing = _a.enableSharing, enableRatings = _a.enableRatings, enablePayments = _a.enablePayments;
    var resource = (0, frontend_js_1.useResourceContext)().resource;
    var components = {
        list: ShowList_1.default,
        cover: ShowCover_1.default,
        card: ShowCard_1.default,
        avatar: ShowAvatar_1.default,
        youtube: ShowYouTube_1.default,
        vimeo: ShowVimeo_1.default,
    };
    var Component = components[style];
    var handleEdit = (0, hooks_1.useForms)().handleEdit;
    if (!(resource === null || resource === void 0 ? void 0 : resource.id))
        return null;
    return (react_1.default.createElement(Component, { fieldName: fieldName, resource: resource, buttons: buttons, displayFields: displayFields, enableOverlay: enableOverlay, enableEdit: enableEdit, handleEdit: function () { return handleEdit(resource); }, enableFavorites: enableFavorites, enableLikes: enableLikes, enableSharing: enableSharing, enableRatings: enableRatings, enablePayments: enablePayments }));
};
exports.default = ShowItem;
