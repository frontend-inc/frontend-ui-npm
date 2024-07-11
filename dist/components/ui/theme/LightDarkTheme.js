"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var context_1 = require("../../../context");
var context_2 = require("../../../context");
var LightDarkTheme = function (props) {
    var _a, _b;
    var _c = props || {}, lightDarkTheme = _c.theme, children = _c.children;
    var _d = (0, react_1.useState)('#FFFFFF'), bgcolor = _d[0], setBgcolor = _d[1];
    var muiTheme = (0, react_1.useContext)(context_2.ThemeContext).theme;
    (0, react_1.useEffect)(function () {
        var _a, _b;
        switch (lightDarkTheme) {
            case 'dark':
                setBgcolor('#000000');
                break;
            case 'light':
                setBgcolor('#FFFFFF');
                break;
            case 'accent':
                setBgcolor((_b = (_a = muiTheme === null || muiTheme === void 0 ? void 0 : muiTheme.palette) === null || _a === void 0 ? void 0 : _a.primary) === null || _b === void 0 ? void 0 : _b.main);
                break;
        }
    }, [lightDarkTheme, (_b = (_a = muiTheme === null || muiTheme === void 0 ? void 0 : muiTheme.palette) === null || _a === void 0 ? void 0 : _a.primary) === null || _b === void 0 ? void 0 : _b.main]);
    return (react_1.default.createElement(context_1.ThemeProvider, { muiTheme: muiTheme, bgcolor: bgcolor }, children));
};
exports.default = LightDarkTheme;
