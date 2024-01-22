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
var LightDarkContext_1 = __importDefault(require("./LightDarkContext"));
var styles_1 = require("@mui/material/styles");
var context_1 = require("../../context");
var helpers_1 = require("../../helpers");
var LightDarkProvider = function (props) {
    var _a, _b;
    var _c = props || {}, children = _c.children, bgcolor = _c.bgcolor;
    var theme = (0, react_1.useContext)(context_1.ThemeContext).theme;
    var _d = (0, react_1.useState)(theme), localTheme = _d[0], setLocalTheme = _d[1];
    (0, react_1.useEffect)(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var newTheme = localTheme;
        if (bgcolor && theme) {
            newTheme = (0, helpers_1.buildTheme)(theme, bgcolor);
        }
        if (((_b = (_a = theme === null || theme === void 0 ? void 0 : theme.palette) === null || _a === void 0 ? void 0 : _a.primary) === null || _b === void 0 ? void 0 : _b.main) != ((_d = (_c = localTheme === null || localTheme === void 0 ? void 0 : localTheme.palette) === null || _c === void 0 ? void 0 : _c.primary) === null || _d === void 0 ? void 0 : _d.main)) {
            newTheme = __assign(__assign({}, newTheme), { palette: __assign(__assign({}, localTheme.palette), { primary: __assign(__assign({}, localTheme.palette.primary), { main: (_f = (_e = theme === null || theme === void 0 ? void 0 : theme.palette) === null || _e === void 0 ? void 0 : _e.primary) === null || _f === void 0 ? void 0 : _f.main }) }) });
        }
        if (((_g = theme === null || theme === void 0 ? void 0 : theme.breakpoints) === null || _g === void 0 ? void 0 : _g.values) != ((_h = localTheme === null || localTheme === void 0 ? void 0 : localTheme.breakpoints) === null || _h === void 0 ? void 0 : _h.values)) {
            newTheme = __assign(__assign({}, newTheme), { breakpoints: theme === null || theme === void 0 ? void 0 : theme.breakpoints });
        }
        if (newTheme && newTheme != localTheme) {
            setLocalTheme(newTheme);
        }
    }, [bgcolor, theme === null || theme === void 0 ? void 0 : theme.breakpoints, (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.palette) === null || _a === void 0 ? void 0 : _a.primary) === null || _b === void 0 ? void 0 : _b.main]);
    var value = {
        theme: theme,
    };
    return (react_1.default.createElement(LightDarkContext_1.default.Provider, { value: value },
        react_1.default.createElement(styles_1.ThemeProvider, { theme: (0, styles_1.createTheme)(localTheme) }, children)));
};
exports.default = LightDarkProvider;
