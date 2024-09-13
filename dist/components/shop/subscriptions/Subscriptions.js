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
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var router_1 = require("next/router");
var SubscriptionList = function (props) {
    var router = (0, router_1.useRouter)();
    var _a = (0, hooks_1.useSubscriptions)(), loading = _a.delayedLoading, subscribe = _a.subscribe, unsubscribe = _a.unsubscribe, subscriptions = _a.subscriptions, findSubscriptions = _a.findSubscriptions;
    var _b = (0, frontend_js_1.useAuth)(), currentUser = _b.currentUser, fetchMe = _b.fetchMe;
    var _c = (0, react_1.useState)(false), openSubscribeModel = _c[0], setOpenSubscribeModal = _c[1];
    var _d = (0, react_1.useState)(false), openUnsubscribeModal = _d[0], setOpenUnsubscribeModal = _d[1];
    var _e = (0, react_1.useState)(null), activeSubscription = _e[0], setActiveSubscription = _e[1];
    var handleSubscribe = function () { return __awaiter(void 0, void 0, void 0, function () {
        var currentUrl, resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(activeSubscription === null || activeSubscription === void 0 ? void 0 : activeSubscription.id)) return [3 /*break*/, 2];
                    currentUrl = window.location.href;
                    return [4 /*yield*/, subscribe(activeSubscription.id, {
                            success_url: currentUrl,
                            cancel_url: currentUrl
                        })];
                case 1:
                    resp = _a.sent();
                    if (resp === null || resp === void 0 ? void 0 : resp.url) {
                        router.push(resp.url);
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var handleUnsubscribe = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.stripe_subscription_id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, unsubscribe()];
                case 1:
                    resp = _a.sent();
                    fetchMe();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var handleSubscribeClick = function (subscription) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setActiveSubscription(subscription);
            setOpenSubscribeModal(true);
            return [2 /*return*/];
        });
    }); };
    var handleUnsubscribeClick = function () {
        setActiveSubscription(null);
        setOpenUnsubscribeModal(true);
    };
    (0, react_1.useEffect)(function () {
        findSubscriptions();
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.List, { sx: __assign({}, (loading && sx.loading)) }, subscriptions === null || subscriptions === void 0 ? void 0 : subscriptions.map(function (subscription) {
            var selected = (currentUser === null || currentUser === void 0 ? void 0 : currentUser.subscription_id) === subscription.id;
            return (react_1.default.createElement(__1.SelectableListItem, { key: subscription.id, selected: selected, icon: "CreditCard", title: subscription.name, description: subscription.display_price, handleClick: function () { return handleSubscribeClick(subscription); } }));
        })),
        !loading && !(subscriptions === null || subscriptions === void 0 ? void 0 : subscriptions.length) && (react_1.default.createElement(__1.Placeholder, { icon: "CreditCard", title: "No subscription plans", description: "Subscription plans will appear here." })),
        !loading && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.stripe_subscription_id) && (react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "secondary", onClick: handleUnsubscribeClick }, "Cancel Subscription")),
        react_1.default.createElement(__1.AlertModal, { loading: loading, open: openSubscribeModel, title: "Confirm Subscription", description: "You will be redirected to make payment.", handleConfirm: handleSubscribe, handleClose: function () { return setOpenSubscribeModal(false); } }),
        react_1.default.createElement(__1.AlertModal, { loading: loading, open: openUnsubscribeModal, title: "Cancel Subscription", description: "Are you sure you want to cancel your plan?", handleConfirm: handleUnsubscribe, handleClose: function () { return setOpenUnsubscribeModal(false); } })));
};
exports.default = SubscriptionList;
var sx = {
    loading: {
        opacity: 0.5
    }
};
