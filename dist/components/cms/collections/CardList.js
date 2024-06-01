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
var CardList = function (props) {
    var handleNull = function () { return null; };
    var resources = props.resources, _a = props.actions, actions = _a === void 0 ? [] : _a, handleClick = props.handleClick, _b = props.handleEdit, handleEdit = _b === void 0 ? handleNull : _b, _c = props.handleDelete, handleDelete = _c === void 0 ? handleNull : _c, _d = props.variant, variant = _d === void 0 ? 'grid' : _d, _e = props.style, style = _e === void 0 ? 'card' : _e, _f = props.enableBorder, enableBorder = _f === void 0 ? false : _f, _g = props.enableGradient, enableGradient = _g === void 0 ? false : _g, _h = props.enableOverlay, enableOverlay = _h === void 0 ? false : _h, _j = props.enableEdit, enableEdit = _j === void 0 ? false : _j, _k = props.enableDelete, enableDelete = _k === void 0 ? false : _k, _l = props.enableFavorites, enableFavorites = _l === void 0 ? false : _l;
    return (react_1.default.createElement(material_1.Stack, { spacing: 2 },
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.root), (variant == 'grid' ? sx.grid : sx.list)), (style == 'chip' && sx.listDense)) }, resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) { return (react_1.default.createElement(__1.CollectionCard, { key: index, variant: variant, style: style, resource: resource, handleClick: function () { return handleClick(resource); }, actions: (0, helpers_1.buildActions)({
                enableEdit: enableEdit,
                enableDelete: enableDelete,
                handleEdit: function () { return handleEdit(resource); },
                handleDelete: function () { return handleDelete(resource); },
                actions: actions,
            }), enableFavorites: enableFavorites, enableBorder: enableBorder, enableGradient: enableGradient, enableOverlay: enableOverlay })); }))));
};
exports.default = CardList;
var sx = {
    root: {
        width: '100%',
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
