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
var react_calendly_1 = require("react-calendly");
var material_1 = require("@mui/material");
var frontend_js_1 = require("frontend-js");
var components_1 = require("../../../components");
// https://www.npmjs.com/package/react-calendly
var Calendly = function (props) {
    var calendlyUrl = props.calendlyUrl, _a = props.buttonText, buttonText = _a === void 0 ? "Schedule time with me" : _a;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var theme = (0, material_1.useTheme)();
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useState)({}), prefill = _c[0], setPrefill = _c[1];
    var _d = (0, react_1.useState)({}), pageSettings = _d[0], setPageSettings = _d[1];
    (0, react_1.useEffect)(function () {
        if (theme) {
            setPageSettings({
                backgroundColor: theme.palette.background.default,
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: theme.palette.primary.main,
                textColor: theme.palette.text.primary,
            });
        }
    }, [theme]);
    (0, react_1.useEffect)(function () {
        if (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email) {
            setPrefill({
                email: currentUser.email,
                firstName: currentUser.first_name,
                lastName: currentUser.last_name,
                name: currentUser.name,
            });
        }
    }, [currentUser === null || currentUser === void 0 ? void 0 : currentUser.email]);
    if (!calendlyUrl)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Button, { size: "large", variant: "contained", color: "primary", onClick: function () { return setOpen(true); } }, buttonText),
        react_1.default.createElement(components_1.MediaModal, { open: open, handleClose: function () { return setOpen(false); } },
            react_1.default.createElement(material_1.Box, { sx: sx.calendly },
                react_1.default.createElement(react_calendly_1.InlineWidget, { styles: styles.root, url: calendlyUrl, pageSettings: pageSettings, prefill: prefill, "data-resize": "true" })))));
};
exports.default = Calendly;
var sx = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    calendly: {
        width: {
            xs: '100%',
            sm: 620,
            md: 960,
        },
        height: '100%',
    },
};
var styles = {
    root: {
        width: '100%',
        overflow: 'none',
        height: '1200px',
    },
};
