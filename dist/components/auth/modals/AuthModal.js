'use client';
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
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var hooks_1 = require("../../../hooks");
var AuthModal = function (props) {
    var enableGoogle = props.enableGoogle, handleSuccess = props.handleSuccess;
    var _a = (0, hooks_1.useApp)(), authOpen = _a.authOpen, setAuthOpen = _a.setAuthOpen;
    var _b = (0, frontend_js_1.useAuth)(), errors = _b.errors, loading = _b.loading, user = _b.user, updateMe = _b.updateMe, handleChange = _b.handleChange, login = _b.login, signup = _b.signup, verifyPin = _b.verifyPin, sendPin = _b.sendPin;
    var _c = (0, react_1.useState)(1), tab = _c[0], setTab = _c[1];
    var handleLogin = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, login(user)];
                case 1:
                    resp = _a.sent();
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setAuthOpen(false);
                        if (handleSuccess) {
                            handleSuccess();
                        }
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSignup = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, signup(user)];
                case 1:
                    resp = _a.sent();
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setAuthOpen(false);
                    }
                    if (handleSuccess) {
                        handleSuccess();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleGoogleSuccess = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setAuthOpen(false);
            if (handleSuccess) {
                handleSuccess();
            }
            return [2 /*return*/];
        });
    }); };
    var handleSendPin = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sendPin(user)];
                case 1:
                    _a.sent();
                    setTab(3);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleVerifyPin = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, verifyPin(user === null || user === void 0 ? void 0 : user.email, user === null || user === void 0 ? void 0 : user.pin)];
                case 1:
                    resp = _a.sent();
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setTab(5);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleResetPassword = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateMe({
                        password: user === null || user === void 0 ? void 0 : user.password,
                        password_confirmation: user === null || user === void 0 ? void 0 : user.password_confirmation,
                    })];
                case 1:
                    resp = _a.sent();
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setAuthOpen(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLoginClick = function () {
        setTab(0);
    };
    var handleSignupClick = function () {
        setTab(1);
    };
    var handleForgotPasswordClick = function () {
        setTab(2);
    };
    var handleResendPinClick = function () {
        setTab(4);
    };
    return (react_1.default.createElement(__1.Modal, { title: tab == 0
            ? 'Login'
            : tab == 1
                ? 'Signup'
                : tab == 2
                    ? 'Forgot Password'
                    : tab == 3
                        ? 'Verify Pin'
                        : tab == 4
                            ? 'Resend Pin'
                            : 'Reset Password', description: "Register or login", open: authOpen, handleClose: function () { return setAuthOpen(false); } },
        react_1.default.createElement("div", { className: "flex flex-col space-y-3" },
            tab === 0 && (react_1.default.createElement(__1.LoginForm, { errors: errors, loading: loading, user: user, handleChange: handleChange, handleSubmit: handleLogin, handleSignup: handleSignupClick, handleForgotPassword: handleForgotPasswordClick, enableGoogle: enableGoogle, handleGoogleSuccess: handleGoogleSuccess })),
            tab === 1 && (react_1.default.createElement(__1.SignupForm, { errors: errors, loading: loading, user: user, handleChange: handleChange, handleSubmit: handleSignup, handleLogin: handleLoginClick, enableGoogle: enableGoogle, handleGoogleSuccess: handleGoogleSuccess })),
            tab === 2 && (react_1.default.createElement(__1.ForgotPasswordForm, { errors: errors, loading: loading, user: user, handleChange: handleChange, handleSubmit: handleSendPin, handleLogin: handleLoginClick })),
            tab === 3 && (react_1.default.createElement(__1.VerifyPinForm, { errors: errors, loading: loading, user: user, handleChange: handleChange, handleSubmit: handleVerifyPin, handleResendPin: handleResendPinClick })),
            tab === 4 && (react_1.default.createElement(__1.VerifySendPinForm, { errors: errors, loading: loading, user: user, handleChange: handleChange, handleSubmit: handleSendPin, handleLogin: handleLoginClick })),
            tab == 5 && (react_1.default.createElement(__1.ResetPasswordForm, { errors: errors, loading: loading, user: user, handleChange: handleChange, handleSubmit: handleResetPassword, handleLogin: handleLoginClick })))));
};
exports.default = AuthModal;
