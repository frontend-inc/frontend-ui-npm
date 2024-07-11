"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var HeroList_1 = __importDefault(require("./HeroList"));
var HeroCard_1 = __importDefault(require("./HeroCard"));
var HeroAvatar_1 = __importDefault(require("./HeroAvatar"));
var HeroCover_1 = __importDefault(require("./HeroCover"));
var HeroYouTube_1 = __importDefault(require("./HeroYouTube"));
var HeroVimeo_1 = __importDefault(require("./HeroVimeo"));
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var HeroItem = function (props) {
    var handle = props.handle;
    if (handle == 'index')
        handle = undefined;
    var _a = props || {}, _b = _a.style, style = _b === void 0 ? 'article' : _b, _c = _a.displayFields, displayFields = _c === void 0 ? [] : _c, fieldName = _a.fieldName, actions = _a.actions, enableOverlay = _a.enableOverlay, enableEdit = _a.enableEdit, enableFavorites = _a.enableFavorites, enableLikes = _a.enableLikes, enableSharing = _a.enableSharing, enableRatings = _a.enableRatings, enablePayments = _a.enablePayments;
    var resource = (0, frontend_js_1.useCollection)().resource;
    var components = {
        list: HeroList_1.default,
        cover: HeroCover_1.default,
        card: HeroCard_1.default,
        avatar: HeroAvatar_1.default,
        youtube: HeroYouTube_1.default,
        vimeo: HeroVimeo_1.default,
    };
    var Component = components[style];
    var handleEdit = (0, hooks_1.useForms)().handleEdit;
    if (!(resource === null || resource === void 0 ? void 0 : resource.id))
        return null;
    return (react_1.default.createElement(Component, { fieldName: fieldName, resource: resource, actions: actions, displayFields: displayFields, enableOverlay: enableOverlay, enableEdit: enableEdit, handleEdit: function () { return handleEdit(resource); }, enableFavorites: enableFavorites, enableLikes: enableLikes, enableSharing: enableSharing, enableRatings: enableRatings, enablePayments: enablePayments }));
};
exports.default = HeroItem;
