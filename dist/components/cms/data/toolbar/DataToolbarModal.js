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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var __1 = require("../../..");
var DataToolbarButtons_1 = __importDefault(require("./DataToolbarButtons"));
var frontend_js_1 = require("frontend-js");
var DataToolbarModal = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), _b = _a.selected, selected = _b === void 0 ? [] : _b, _c = _a.selectedIds, selectedIds = _c === void 0 ? [] : _c, handleClear = _a.handleClear;
    var _d = props || {}, _e = _d.buttons, buttons = _e === void 0 ? [] : _e, _f = _d.component, Component = _f === void 0 ? DataToolbarButtons_1.default : _f, rest = __rest(_d, ["buttons", "component"]);
    var open = selected.length > 0;
    var handleClose = function () {
        handleClear();
    };
    return (react_1.default.createElement(material_1.Slide, { direction: "down", in: open },
        react_1.default.createElement(material_1.AppBar, { position: "fixed", color: "secondary", sx: sx.appBar },
            react_1.default.createElement(material_1.Toolbar, null,
                react_1.default.createElement(material_2.Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", width: "100%" },
                    react_1.default.createElement(material_2.Box, { sx: sx.iconButton }),
                    react_1.default.createElement(Component, __assign({ selected: selected, selectedIds: selectedIds, buttons: buttons }, rest)),
                    react_1.default.createElement(material_2.Box, { sx: sx.iconButton },
                        react_1.default.createElement(material_2.IconButton, { onClick: handleClose },
                            react_1.default.createElement(__1.Icon, { name: "X", size: 20 }))))))));
};
exports.default = DataToolbarModal;
var sx = {
    appBar: {
        m: 0,
        top: '-10px',
    },
    iconButton: {
        width: '40px',
        height: '40px',
    }
};
