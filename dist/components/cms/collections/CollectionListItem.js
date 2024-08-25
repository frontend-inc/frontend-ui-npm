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
var __2 = require("../..");
var material_1 = require("@mui/material");
var helpers_1 = require("../../../helpers");
var CollectionListItem = function (props) {
    var _a;
    var buttons = props.buttons, resource = props.resource, _b = props.displayFields, displayFields = _b === void 0 ? [] : _b, href = props.href, handleClick = props.handleClick, _c = props.enableEdit, enableEdit = _c === void 0 ? false : _c, _d = props.enableDelete, enableDelete = _d === void 0 ? false : _d, handleEdit = props.handleEdit, handleDelete = props.handleDelete, _e = props.enableGradient, enableGradient = _e === void 0 ? false : _e, _f = props.enableOverlay, enableOverlay = _f === void 0 ? false : _f, _g = props.enableComments, enableComments = _g === void 0 ? false : _g, _h = props.enableFavorites, enableFavorites = _h === void 0 ? false : _h, _j = props.enableAddReference, enableAddReference = _j === void 0 ? false : _j, _k = props.enableLikes, enableLikes = _k === void 0 ? false : _k, _l = props.enableRatings, enableRatings = _l === void 0 ? false : _l, _m = props.enableUsers, enableUsers = _m === void 0 ? false : _m, _o = props.style, style = _o === void 0 ? 'card' : _o, rest = __rest(props, ["buttons", "resource", "displayFields", "href", "handleClick", "enableEdit", "enableDelete", "handleEdit", "handleDelete", "enableGradient", "enableOverlay", "enableComments", "enableFavorites", "enableAddReference", "enableLikes", "enableRatings", "enableUsers", "style"]);
    var COMPONENTS = {
        card: __1.Card,
        avatar: __1.AvatarCard,
        cover: __1.CoverCard,
        chip: __1.ChipCard,
        table: __1.TableCard,
        text: __1.TextCard,
        list: __1.ListCard,
    };
    var itemProps = {
        card: {},
        avatar: {},
        cover: {},
        chip: {},
        table: {},
        text: {},
        list: {},
    }[style] || {};
    var Component = COMPONENTS[style] || __1.Card;
    return (react_1.default.createElement(Component, __assign({}, rest, { label: resource === null || resource === void 0 ? void 0 : resource.label, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, primary: resource === null || resource === void 0 ? void 0 : resource.title, secondary: react_1.default.createElement(__2.SecondaryFields, { enableRatings: enableRatings, enableUsers: enableUsers, fields: displayFields, resource: resource }), actions: react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(__2.SocialButtons, { spacing: 0, variant: "icon", justifyContent: "flex-start", resource: resource, enableLikes: enableLikes, enableFavorites: enableFavorites, enableComments: enableComments, enableAddReference: enableAddReference })), secondaryAction: react_1.default.createElement(__2.ButtonActions, { numVisible: 0, buttons: (0, helpers_1.buildActions)({
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
        } }, itemProps)));
};
exports.default = CollectionListItem;
