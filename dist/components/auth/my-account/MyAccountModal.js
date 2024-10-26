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
var context_1 = require("../../../context");
var frontend_js_1 = require("frontend-js");
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var MyAccountTabs_1 = __importDefault(require("./MyAccountTabs"));
var core_1 = require("../../core");
var MyAccountModal = function (props) {
    var _a = props || {}, enableStripe = _a.enableStripe, metafields = _a.metafields;
    var _b = (0, react_1.useContext)(context_1.AppContext), myAccountOpen = _b.myAccountOpen, setMyAccountOpen = _b.setMyAccountOpen;
    var _c = (0, frontend_js_1.useAuth)(), delayedLoading = _c.delayedLoading, user = _c.user, currentUser = _c.currentUser, updateMe = _c.updateMe, handleChange = _c.handleChange, deleteAvatar = _c.deleteAvatar, logout = _c.logout;
    var _d = (0, react_1.useState)(), currentTab = _d[0], setCurrentTab = _d[1];
    var handleLogout = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, logout()];
                case 1:
                    _a.sent();
                    setMyAccountOpen(false);
                    return [2 /*return*/];
            }
        });
    }); };
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
    var handleClick = function (tab) {
        if (tab.url) {
            window.open(tab.url, '_blank');
        }
        else {
            setCurrentTab(tab.value);
        }
    };
    return (react_1.default.createElement(components_1.Modal, { open: myAccountOpen, handleClose: function () { return setMyAccountOpen(false); }, title: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)
            ? "".concat(currentUser === null || currentUser === void 0 ? void 0 : currentUser.first_name, " ").concat(currentUser === null || currentUser === void 0 ? void 0 : currentUser.last_name)
            : 'My Account' },
        currentTab == null ? (react_1.default.createElement(MyAccountTabs_1.default, { tab: currentTab, enableStripe: enableStripe, handleClick: handleClick })) : (react_1.default.createElement("div", { className: "p-1" },
            react_1.default.createElement(core_1.Button, { color: "secondary", startIcon: react_1.default.createElement(components_1.Icon, { name: "ChevronLeft", size: 24 }), onClick: function () { return setCurrentTab(null); } }, "Back"))),
        react_1.default.createElement("div", { className: "p-2" },
            currentTab == 0 && (react_1.default.createElement(components_1.MyAccountForm, { loading: delayedLoading, user: user, handleChange: handleChange, handleSubmit: handleSubmit, handleDeleteAvatar: handleDeleteAvatar, handleLogout: handleLogout, metafields: metafields })),
            currentTab == 1 && react_1.default.createElement(components_2.StripeCustomerPortal, null),
            currentTab == 2 && react_1.default.createElement(components_2.ShopifyCustomerPortal, null))));
};
exports.default = MyAccountModal;
