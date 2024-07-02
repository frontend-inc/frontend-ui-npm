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
var PageHeader = function (props) {
    var label = props.label, title = props.title, description = props.description, links = props.links, _a = props.maxLinks, maxLinks = _a === void 0 ? 3 : _a, actions = props.actions, resource = props.resource;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, direction: "column", spacing: 1 },
        react_1.default.createElement(components_1.Breadcrumbs, { maxLinks: maxLinks, links: links }),
        react_1.default.createElement(material_1.Stack, { direction: {
                xs: 'column',
                sm: 'row',
            }, spacing: 1, sx: __assign({}, sx.content) },
            react_1.default.createElement(components_1.Heading, { label: label, title: title, description: description, textAlign: "left" }),
            (actions === null || actions === void 0 ? void 0 : actions.length) > 0 && (react_1.default.createElement(material_1.Box, { sx: sx.actions },
                react_1.default.createElement(components_1.Actions, { actions: actions, resource: resource }))))));
};
exports.default = PageHeader;
var sx = {
    root: {
        width: '100%',
    },
    content: {
        pb: 1,
        justifyContent: 'space-between',
        width: '100%',
        borderBottom: 1,
        borderColor: 'divider',
    },
    actions: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        pb: {
            sm: 0,
            xs: 1,
        },
    },
};
