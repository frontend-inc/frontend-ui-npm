"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var helpers_1 = require("../../../helpers");
var ListCards = function (props) {
    var handleNull = function () { return null; };
    var resources = props.resources, _a = props.style, style = _a === void 0 ? 'card' : _a, _b = props.displayFields, displayFields = _b === void 0 ? [] : _b, _c = props.actions, actions = _c === void 0 ? [] : _c, handleClick = props.handleClick, _d = props.handleEdit, handleEdit = _d === void 0 ? handleNull : _d, _e = props.handleDelete, handleDelete = _e === void 0 ? handleNull : _e, _f = props.enableBorder, enableBorder = _f === void 0 ? false : _f, _g = props.enableGradient, enableGradient = _g === void 0 ? false : _g, _h = props.enableOverlay, enableOverlay = _h === void 0 ? false : _h, _j = props.enableEdit, enableEdit = _j === void 0 ? false : _j, _k = props.enableDelete, enableDelete = _k === void 0 ? false : _k, _l = props.enableUsers, enableUsers = _l === void 0 ? false : _l, _m = props.enableComments, enableComments = _m === void 0 ? false : _m, _o = props.enableFavorites, enableFavorites = _o === void 0 ? false : _o, _p = props.enableLikes, enableLikes = _p === void 0 ? false : _p, _q = props.enableRatings, enableRatings = _q === void 0 ? false : _q;
    var grid = false;
    var LAYOUTS = {
        list: false,
        card: true,
        avatar: false,
        cover: true,
        chip: false,
        text: false,
        table: false,
    };
    grid = LAYOUTS[style];
    return (react_1.default.createElement(__1.ListLayout, { grid: grid }, resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) { return (react_1.default.createElement(__1.ListCard, { key: index, style: style, resource: resource, displayFields: displayFields, handleClick: function () { return handleClick(resource); }, actions: (0, helpers_1.buildActions)({
            enableEdit: enableEdit,
            enableDelete: enableDelete,
            handleEdit: function () { return handleEdit(resource); },
            handleDelete: function () { return handleDelete(resource); },
            actions: actions,
        }), enableUsers: enableUsers, enableComments: enableComments, enableFavorites: enableFavorites, enableLikes: enableLikes, enableRatings: enableRatings, enableBorder: enableBorder, enableGradient: enableGradient, enableOverlay: enableOverlay })); })));
};
exports.default = ListCards;
