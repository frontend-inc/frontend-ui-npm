"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var __2 = require("../..");
var material_1 = require("@mui/material");
var helpers_1 = require("../../../helpers");
var CollectionListItem = function (props) {
    var _a;
    var _b = (0, frontend_js_1.useResourceContext)(), selectedIds = _b.selectedIds, handleSelect = _b.handleSelect;
    var selectable = props.selectable, buttons = props.buttons, resource = props.resource, _c = props.displayFields, displayFields = _c === void 0 ? [] : _c, href = props.href, handleClick = props.handleClick, _d = props.enableEdit, enableEdit = _d === void 0 ? false : _d, _e = props.enableDelete, enableDelete = _e === void 0 ? false : _e, handleEdit = props.handleEdit, handleDelete = props.handleDelete, _f = props.enableGradient, enableGradient = _f === void 0 ? false : _f, _g = props.enableOverlay, enableOverlay = _g === void 0 ? false : _g, _h = props.enableComments, enableComments = _h === void 0 ? false : _h, _j = props.enableFavorites, enableFavorites = _j === void 0 ? false : _j, _k = props.enableAddToList, enableAddToList = _k === void 0 ? false : _k, _l = props.enableLikes, enableLikes = _l === void 0 ? false : _l, _m = props.enableRatings, enableRatings = _m === void 0 ? false : _m, _o = props.enableUsers, enableUsers = _o === void 0 ? false : _o, _p = props.style, style = _p === void 0 ? 'card' : _p, rest = __rest(props, ["selectable", "buttons", "resource", "displayFields", "href", "handleClick", "enableEdit", "enableDelete", "handleEdit", "handleDelete", "enableGradient", "enableOverlay", "enableComments", "enableFavorites", "enableAddToList", "enableLikes", "enableRatings", "enableUsers", "style"]);
    var COMPONENTS = {
        card: __1.Card,
        avatar: __1.AvatarCard,
        cover: __1.CoverCard,
        chip: __1.ChipCard,
        text: __1.TextCard,
        list: __1.ListCard,
    };
    var Component = COMPONENTS[style] || __1.Card;
    return (react_1.default.createElement(Component, { label: resource === null || resource === void 0 ? void 0 : resource.label, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, primary: resource === null || resource === void 0 ? void 0 : resource.title, handleClick: handleClick, selectable: selectable, selected: selectedIds === null || selectedIds === void 0 ? void 0 : selectedIds.includes(resource === null || resource === void 0 ? void 0 : resource.id), handleSelect: function () { return handleSelect(resource); }, secondary: react_1.default.createElement(__2.SecondaryFields, { enableRatings: enableRatings, enableUsers: enableUsers, fields: displayFields, resource: resource }), actions: react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(__2.SocialButtons, { spacing: 0, variant: "icon", justifyContent: "flex-start", resource: resource, enableLikes: enableLikes, enableFavorites: enableFavorites, enableComments: enableComments, enableAddToList: enableAddToList })), secondaryAction: react_1.default.createElement(__2.ButtonActions, { numVisible: 0, buttons: (0, helpers_1.buildActions)({
                enableEdit: enableEdit,
                enableDelete: enableDelete,
                handleEdit: handleEdit,
                handleDelete: handleDelete,
                buttons: buttons,
            }), resource: resource }), slots: {
            image: {
                enableGradient: enableGradient,
                enableOverlay: enableOverlay,
            },
        } }));
};
exports.default = CollectionListItem;
