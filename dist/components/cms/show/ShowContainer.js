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
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var ShowContainer = function (props) {
    var _a = props || {}, actions = _a.actions, resource = _a.resource, children = _a.children, enableBorder = _a.enableBorder, enableEdit = _a.enableEdit, handleEdit = _a.handleEdit;
    var _b = resource || {}, title = _b.title, description = _b.description;
    return (react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)), spacing: 2 },
        react_1.default.createElement(material_1.Stack, { direction: { xs: 'column', sm: 'row' }, sx: __assign(__assign({}, sx.header), (enableBorder && sx.headerBorder)) },
            react_1.default.createElement(material_1.Typography, { sx: sx.title, color: "text.primary", variant: "h6" }, title),
            (actions || enableEdit) && (react_1.default.createElement(material_1.Stack, { direction: { xs: 'column', sm: 'row' }, sx: sx.actions, spacing: 0 },
                enableEdit && (react_1.default.createElement(material_1.Box, null,
                    react_1.default.createElement(components_1.ActionButton, { resource: (0, frontend_js_1.flattenDocument)(resource), action: {
                            label: 'Edit',
                            color: 'secondary',
                            name: 'click',
                            onClick: handleEdit,
                        } }))),
                react_1.default.createElement(components_1.Actions, { actions: actions, resource: (0, frontend_js_1.flattenDocument)(resource) })))),
        react_1.default.createElement(material_1.Box, { sx: sx.container }, children),
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.content), (enableBorder && sx.contentBorder)) },
            react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.text }, description))));
};
exports.default = ShowContainer;
var sx = {
    root: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rootBorder: {
        py: 2,
        border: '1px solid',
        borderColor: 'divider',
    },
    header: {
        width: '100%',
        textAlign: 'space-between',
    },
    headerBorder: {
        px: 2,
    },
    title: {
        width: '100%',
    },
    content: {
        width: '100%',
        maxWidth: '100%',
    },
    contentBorder: {
        px: 2,
    },
    container: {
        width: '100%',
    },
    text: {
        width: '100%',
        whiteSpace: 'pre-line',
    },
    caption: {
        color: 'text.secondary',
    },
    actions: {
        justifyContent: 'flex-end',
        width: '100%',
    },
};
