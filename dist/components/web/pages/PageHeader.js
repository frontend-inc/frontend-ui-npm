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
var PageHeader = function (props) {
    var label = props.label, title = props.title, description = props.description, breadcrumbs = props.breadcrumbs, actions = props.actions, resource = props.resource, _a = props.enableBorder, enableBorder = _a === void 0 ? false : _a;
    console.log("ACTIONS", actions);
    return (react_1.default.createElement(material_1.Stack, { direction: {
            xs: 'column',
            sm: 'row'
        }, spacing: 1, sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)) },
        react_1.default.createElement(__1.Heading, { label: label, title: title, description: description, textAlign: "left" }),
        react_1.default.createElement(material_1.Box, { sx: sx.actions },
            react_1.default.createElement(__1.Actions, { actions: actions, resource: resource }))));
};
exports.default = PageHeader;
var sx = {
    root: {
        justifyContent: 'space-between',
        width: '100%',
        bgcolor: 'background.default',
    },
    rootBorder: {
        borderBottom: 1,
        borderColor: 'divider'
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        py: 1
    }
};
