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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var navigation_1 = require("next/navigation");
var material_1 = require("@mui/material");
var context_1 = require("../../../context");
var AuthModal = function (props) {
    var router = (0, navigation_1.useRouter)();
    var appId = (0, navigation_1.useParams)().app_id;
    var _a = (0, react_1.useContext)(context_1.AppContext), authOpen = _a.authOpen, setAuthOpen = _a.setAuthOpen;
    var _b = props || {}, logo = _b.logo, _c = _b.disableUsername, disableUsername = _c === void 0 ? false : _c;
    var _d = (0, hooks_1.useAuth)(), errors = _d.errors, loading = _d.loading, user = _d.user, handleChange = _d.handleChange, login = _d.login, signup = _d.signup, forgotPassword = _d.forgotPassword, verifyPin = _d.verifyPin, sendPin = _d.sendPin;
    var _e = (0, react_1.useState)(0), tab = _e[0], setTab = _e[1];
    var handleTabChange = function (ev, newValue) {
        setTab(newValue);
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = tab;
                    switch (_a) {
                        case 0: return [3 /*break*/, 1];
                        case 1: return [3 /*break*/, 3];
                        case 2: return [3 /*break*/, 5];
                        case 3: return [3 /*break*/, 7];
                        case 4: return [3 /*break*/, 9];
                    }
                    return [3 /*break*/, 11];
                case 1: return [4 /*yield*/, login(user)];
                case 2:
                    resp = _b.sent();
                    return [3 /*break*/, 11];
                case 3: return [4 /*yield*/, signup(__assign(__assign({}, user), { app_id: appId }))];
                case 4:
                    resp = _b.sent();
                    return [3 /*break*/, 11];
                case 5: return [4 /*yield*/, sendPin(__assign(__assign({}, user), { app_id: appId }))];
                case 6:
                    _b.sent();
                    setTab(3);
                    return [3 /*break*/, 11];
                case 7: return [4 /*yield*/, verifyPin(user === null || user === void 0 ? void 0 : user.email, user === null || user === void 0 ? void 0 : user.pin)];
                case 8:
                    resp = _b.sent();
                    return [3 /*break*/, 11];
                case 9: return [4 /*yield*/, sendPin(__assign(__assign({}, user), { app_id: appId }))];
                case 10:
                    resp = _b.sent();
                    setTab(3);
                    return [3 /*break*/, 11];
                case 11:
                    if (tab !== 4 && (resp === null || resp === void 0 ? void 0 : resp.id)) {
                        setAuthOpen(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSignup = function () {
        setTab(1);
    };
    var handleLogin = function () {
        setTab(0);
    };
    var handleForgotPassword = function () {
        setTab(2);
    };
    var handleResendPin = function () {
        setTab(4);
    };
    (0, react_1.useEffect)(function () {
        if (authOpen) {
            setTab(0);
        }
    }, [authOpen]);
    return (react_1.default.createElement(components_1.Modal, { open: authOpen, handleClose: function () { return setAuthOpen(false); }, p: 4 },
        react_1.default.createElement(material_1.Box, { sx: sx.logo },
            react_1.default.createElement(components_1.SquareLogo, { src: logo })),
        react_1.default.createElement(material_1.Tabs, { variant: "fullWidth", value: tab, onChange: handleTabChange, sx: sx.tabs },
            react_1.default.createElement(material_1.Tab, { label: "Login" }),
            react_1.default.createElement(material_1.Tab, { label: "Sign Up" })),
        tab === 0 && (react_1.default.createElement(components_1.LoginForm, { errors: errors, loading: loading, user: user, handleChange: handleChange, handleSubmit: handleSubmit, handleSignup: handleSignup, handleForgotPassword: handleForgotPassword })),
        tab === 1 && (react_1.default.createElement(components_1.SignupForm, { errors: errors, loading: loading, user: user, handleChange: handleChange, handleSubmit: handleSubmit, handleLogin: handleLogin })),
        tab === 2 && (react_1.default.createElement(components_1.ForgotPasswordForm, { errors: errors, loading: loading, user: user, handleChange: handleChange, handleSubmit: handleSubmit, handleLogin: handleLogin })),
        tab === 3 && (react_1.default.createElement(components_1.VerifyPinForm, { errors: errors, loading: loading, user: user, handleChange: handleChange, handleSubmit: handleSubmit, handleResendPin: handleResendPin })),
        tab === 4 && (react_1.default.createElement(components_1.VerifySendPinForm, { errors: errors, loading: loading, user: user, handleChange: handleChange, handleSubmit: handleSubmit }))));
};
exports.default = AuthModal;
var sx = {
    logo: {
        display: "flex",
        justifyContent: "center",
    },
    tabs: {
        mb: 2,
    },
};
