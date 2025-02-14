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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var MyAccountTabs_1 = __importDefault(require("./MyAccountTabs"));
var MyAccountModal = function (props) {
    var enableStripe = (props || {}).enableStripe;
    var _a = (0, hooks_1.useApp)(), myAccountOpen = _a.myAccountOpen, setMyAccountOpen = _a.setMyAccountOpen;
    var _b = (0, frontend_js_1.useAuth)(), delayedLoading = _b.delayedLoading, user = _b.user, updateMe = _b.updateMe, handleChange = _b.handleChange, deleteAvatar = _b.deleteAvatar, logout = _b.logout;
    var _c = (0, react_1.useState)(0), currentTab = _c[0], setCurrentTab = _c[1];
    var handleDeleteAvatar = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteAvatar()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateMe(user)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleClick = function (tab) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!tab.url) return [3 /*break*/, 1];
                    window.open(tab.url, '_blank');
                    return [3 /*break*/, 4];
                case 1:
                    if (!(tab.value == 4)) return [3 /*break*/, 3];
                    setCurrentTab(0);
                    setMyAccountOpen(false);
                    return [4 /*yield*/, logout()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    setCurrentTab(tab.value);
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(components_1.Modal, { maxWidth: "sm", open: myAccountOpen, handleClose: currentTab != 0 ? function () { return setCurrentTab(0); } : function () { return setMyAccountOpen(false); } },
        currentTab == 0 && (react_1.default.createElement(MyAccountTabs_1.default, { tab: currentTab, enableStripe: enableStripe, handleClick: handleClick })),
        currentTab == 1 && (react_1.default.createElement(components_1.MyAccountForm, { loading: delayedLoading, user: user, handleChange: handleChange, handleSubmit: handleSubmit, handleDeleteAvatar: handleDeleteAvatar })),
        currentTab == 2 && react_1.default.createElement(components_2.StripeCustomerPortal, null),
        currentTab == 3 && react_1.default.createElement(components_2.ShopifyCustomerPortal, null)));
};
exports.default = MyAccountModal;
