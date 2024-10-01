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
var components_1 = require("../../../../components");
var PublishButton = function (props) {
    var loading = props.loading, document = props.document, handleTogglePublish = props.handleTogglePublish, _a = props.fullWidth, fullWidth = _a === void 0 ? false : _a;
    return (react_1.default.createElement(material_1.Button, { variant: "contained", sx: __assign(__assign(__assign(__assign({}, sx.root), ((document === null || document === void 0 ? void 0 : document.published) && sx.published)), (loading && sx.loading)), (fullWidth && sx.fullWidth)), onClick: handleTogglePublish, startIcon: react_1.default.createElement(react_1.default.Fragment, null, (document === null || document === void 0 ? void 0 : document.published) && (react_1.default.createElement(components_1.Icon, { name: "CheckCircle", color: "success.contrastText" }))), endIcon: loading &&
            react_1.default.createElement(components_1.IconLoading, { color: (document === null || document === void 0 ? void 0 : document.published)
                    ? 'success.contrastText'
                    : 'primary.contrastText' }) }, (document === null || document === void 0 ? void 0 : document.published) ? 'Published' : 'Publish'));
};
exports.default = PublishButton;
var sx = {
    root: {
        height: 36,
        width: {
            sm: 'auto',
            xs: '100%',
        },
        border: 'none',
        boxShadow: 'none',
        transition: 'all 0.3s ease-in-out',
    },
    published: {
        color: 'success.contrastText',
        bgcolor: 'success.main',
        '&:hover': {
            color: 'success.contrastText',
            border: 'none',
            bgcolor: 'success.dark',
        },
    },
    fullWidth: {
        width: '100%',
    },
    loading: {},
};
