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
var __1 = require("../..");
var helpers_1 = require("../../../helpers");
var frontend_js_1 = require("frontend-js");
var CollectionCards = function (props) {
    var handleNull = function () { return null; };
    var resources = props.resources, _a = props.displayFields, displayFields = _a === void 0 ? [] : _a, _b = props.actions, actions = _b === void 0 ? [] : _b, handleClick = props.handleClick, _c = props.handleEdit, handleEdit = _c === void 0 ? handleNull : _c, _d = props.handleDelete, handleDelete = _d === void 0 ? handleNull : _d, _e = props.style, style = _e === void 0 ? 'card' : _e, _f = props.enableBorder, enableBorder = _f === void 0 ? false : _f, _g = props.enableGradient, enableGradient = _g === void 0 ? false : _g, _h = props.enableOverlay, enableOverlay = _h === void 0 ? false : _h, _j = props.enableEdit, enableEdit = _j === void 0 ? false : _j, _k = props.enableDelete, enableDelete = _k === void 0 ? false : _k, _l = props.enableUsers, enableUsers = _l === void 0 ? false : _l, _m = props.enableFavorites, enableFavorites = _m === void 0 ? false : _m, _o = props.enableRatings, enableRatings = _o === void 0 ? false : _o;
    var VARIANTS = {
        list: 'list',
        card: 'grid',
        avatar: 'list',
        cover: 'grid',
        chip: 'list',
        text: 'list',
        table: 'table'
    };
    var variant = VARIANTS[style];
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (variant == 'grid' ? sx.grid : sx.list)) }, resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) { return (react_1.default.createElement(__1.CollectionCard, { key: index, style: style, resource: (0, frontend_js_1.flattenDocument)(resource), displayFields: displayFields, handleClick: function () { return handleClick(resource); }, actions: (0, helpers_1.buildActions)({
            enableEdit: enableEdit,
            enableDelete: enableDelete,
            handleEdit: function () { return handleEdit(resource); },
            handleDelete: function () { return handleDelete(resource); },
            actions: actions,
        }), enableUsers: enableUsers, enableFavorites: enableFavorites, enableRatings: enableRatings, enableBorder: enableBorder, enableGradient: enableGradient, enableOverlay: enableOverlay })); })));
};
exports.default = CollectionCards;
var sx = {
    root: {
        width: '100%',
        overflowX: 'scroll',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    listDense: {
        gap: '8px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            md: '1fr 1fr 1fr',
            xs: '1fr',
        },
        gap: '16px',
    },
};
