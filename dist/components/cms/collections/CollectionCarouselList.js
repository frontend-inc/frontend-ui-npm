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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var __1 = require("../..");
var context_1 = require("../../../context");
var router_1 = require("next/router");
var CollectionCard_1 = __importDefault(require("./CollectionCard"));
var hooks_1 = require("../../../hooks");
var CollectionCarouselList = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var actions = props.actions, href = props.href, displayFields = props.displayFields, _a = props.enableAutoPlay, enableAutoPlay = _a === void 0 ? true : _a, _b = props.enableArrows, enableArrows = _b === void 0 ? true : _b, _c = props.enableDots, enableDots = _c === void 0 ? false : _c, _d = props.enableGradient, enableGradient = _d === void 0 ? false : _d, _e = props.enableOverlay, enableOverlay = _e === void 0 ? false : _e, _f = props.enableEdit, enableEdit = _f === void 0 ? false : _f, _g = props.enableDelete, enableDelete = _g === void 0 ? false : _g, _h = props.enableRatings, enableRatings = _h === void 0 ? false : _h, _j = props.enableUsers, enableUsers = _j === void 0 ? false : _j, _k = props.enableFavorites, enableFavorites = _k === void 0 ? false : _k;
    var _l = (0, react_1.useState)(false), open = _l[0], setOpen = _l[1];
    var _m = (0, hooks_1.useForms)(), handleEdit = _m.handleEdit, handleDeleteClick = _m.handleDeleteClick;
    var _o = (0, react_1.useContext)(frontend_js_1.ResourceContext), resource = _o.resource, setResource = _o.setResource;
    var _p = (0, react_1.useContext)(frontend_js_1.QueryContext), loading = _p.loading, resources = _p.resources;
    var handleClick = function (resource) {
        if (href) {
            if (clientUrl && href && (resource === null || resource === void 0 ? void 0 : resource.handle)) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
                router.push("".concat(clientUrl).concat(href, "/").concat(resource === null || resource === void 0 ? void 0 : resource.handle));
            }
        }
        else {
            setResource(resource);
            setOpen(true);
        }
    };
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: __assign(__assign({}, sx.root), (loading && sx.loading)) },
        react_1.default.createElement(__1.Carousel, { enableDots: enableDots, enableAutoPlay: enableAutoPlay, enableArrows: enableArrows }, resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) { return (react_1.default.createElement(material_1.Box, { key: index, sx: __assign(__assign({}, sx.item), { pt: enableArrows ? 5 : 1, pb: enableDots ? 4 : 1 }) },
            react_1.default.createElement(CollectionCard_1.default, { actions: actions, style: 'card', resource: resource, displayFields: [], enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: function () { return handleEdit(resource); }, handleDelete: function () { return handleDeleteClick(resource); }, handleClick: function () { return handleClick(resource); }, enableGradient: enableGradient, enableFavorites: enableFavorites }))); })),
        react_1.default.createElement(__1.ResourceModal, { open: open, handleClose: function () { return setOpen(false); }, actions: actions, displayFields: displayFields, enableOverlay: enableOverlay, enableEdit: enableEdit, enableFavorites: enableFavorites, enableRatings: enableRatings, enableUsers: enableUsers, handleEdit: function () { return handleEdit(resource); } })));
};
exports.default = CollectionCarouselList;
var sx = {
    root: {
        width: '100%',
    },
    loading: {
        opacity: 0.5
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            md: '1fr 1fr 1fr',
            xs: '1fr',
        },
        gap: '16px',
    },
    item: {
        p: 2,
    }
};
