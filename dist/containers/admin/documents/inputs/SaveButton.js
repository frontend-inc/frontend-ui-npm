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
var icons_material_1 = require("@mui/icons-material");
var hooks_1 = require("../../../../hooks");
var router_1 = require("next/router");
var components_1 = require("../../../../components");
var hooks_2 = require("../../../../hooks");
var SaveButton = function (props) {
    var clientUrl = (0, hooks_2.useAdmin)().clientUrl;
    var loading = props.loading, document = props.document, handleSubmit = props.handleSubmit, _a = props.fullWidth, fullWidth = _a === void 0 ? false : _a;
    var router = (0, router_1.useRouter)();
    var _b = router === null || router === void 0 ? void 0 : router.query, appId = _b.app_id, collectionId = _b.collection_id;
    var handleSave = function () {
        closeMenu();
        handleSubmit();
        router.push("".concat(clientUrl, "/collections/").concat(collectionId));
    };
    var handleSaveAndNew = function () {
        closeMenu();
        handleSubmit();
        router.push("".concat(clientUrl, "/collections/").concat(collectionId, "/documents/new"));
    };
    var _c = (0, hooks_1.useMenu)(), open = _c.open, anchorEl = _c.anchorEl, toggleMenu = _c.toggleMenu, closeMenu = _c.closeMenu;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.ButtonGroup, { variant: "contained", color: "primary", fullWidth: true, sx: __assign(__assign(__assign({}, sx.saveButton), (loading && sx.loading)), (fullWidth && sx.fullWidth)) },
            react_1.default.createElement(material_1.Button, { endIcon: loading && react_1.default.createElement(components_1.IconLoading, null), sx: sx.button, onClick: handleSubmit }, (document === null || document === void 0 ? void 0 : document.id) ? 'Save' : 'Create'),
            react_1.default.createElement(material_1.Button, { sx: sx.expandMore, onClick: toggleMenu },
                react_1.default.createElement(icons_material_1.ExpandMore, null))),
        react_1.default.createElement(material_1.Menu, { open: open, anchorEl: anchorEl, onClose: closeMenu },
            react_1.default.createElement(material_1.MenuItem, { onClick: handleSave },
                react_1.default.createElement(material_1.Typography, { variant: "body2", color: "textPrimary" }, "Save and close")),
            react_1.default.createElement(material_1.MenuItem, { onClick: handleSaveAndNew },
                react_1.default.createElement(material_1.Typography, { variant: "body2", color: "textPrimary" }, "Save and create new")))));
};
exports.default = SaveButton;
var sx = {
    button: {
        height: 36,
    },
    saveButton: {
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
    fullWidth: {
        width: '100%',
    },
    expandMore: {
        height: 36,
        width: '30px',
    },
    loading: {},
};
