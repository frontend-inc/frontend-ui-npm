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
var hooks_1 = require("../../../hooks");
var AdminHeader = function (props) {
    var title = props.title, buttons = props.buttons, _a = props.variant, variant = _a === void 0 ? 'overline' : _a, primaryActions = props.primaryActions, secondaryActions = props.secondaryActions, _b = props.enableExpandLeftPanel, enableExpandLeftPanel = _b === void 0 ? false : _b, _c = props.enableExpandRightPanel, enableExpandRightPanel = _c === void 0 ? false : _c, _d = props.disableBorder, disableBorder = _d === void 0 ? false : _d;
    var openLayoutLeft = (0, hooks_1.useAdmin)().openLayoutLeft;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (disableBorder && sx.disableBorder)) },
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 1 },
            react_1.default.createElement(material_1.Grid, { item: true, xs: 4, sm: 4 },
                react_1.default.createElement(material_1.Box, { sx: sx.container },
                    enableExpandLeftPanel && !openLayoutLeft && react_1.default.createElement(components_1.ExpandLeftButton, null),
                    primaryActions && primaryActions,
                    title && (react_1.default.createElement(material_1.Typography, { variant: variant, sx: sx.title, color: "text.primary" }, title)))),
            react_1.default.createElement(material_1.Grid, { item: true, xs: 4, sm: 4 },
                react_1.default.createElement(material_1.Stack, { sx: sx.secondaryActions, direction: "row", spacing: 1 }, secondaryActions && secondaryActions)),
            react_1.default.createElement(material_1.Grid, { item: true, xs: 4, sm: 4 },
                react_1.default.createElement(material_1.Box, { sx: sx.buttons },
                    buttons,
                    enableExpandRightPanel && react_1.default.createElement(components_1.ExpandRightButton, null))))));
};
exports.default = AdminHeader;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        minHeight: 50,
        px: 0.5,
        bgcolor: 'background.main',
        borderBottom: '1px solid',
        borderColor: 'divider',
        zIndex: function (theme) { return theme.zIndex.appBar; },
    },
    disableBorder: {
        borderBottom: 'none',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
    },
    title: {
        px: 1,
        lineHeight: 1.0,
        wordBreak: 'keep-all',
    },
    buttons: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    secondaryActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
};
