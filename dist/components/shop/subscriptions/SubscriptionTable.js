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
var frontend_js_1 = require("frontend-js");
var __1 = require("../..");
var SubscriptionTableCard_1 = __importDefault(require("./SubscriptionTableCard"));
var hooks_1 = require("../../../hooks");
var navigation_1 = require("next/navigation");
var frontend_shadcn_1 = require("frontend-shadcn");
function SubscriptionTable() {
    var _this = this;
    var router = (0, navigation_1.useRouter)();
    var _a = (0, hooks_1.useSubscriptions)(), loading = _a.delayedLoading, subscribe = _a.subscribe, subscriptions = _a.subscriptions, findSubscriptions = _a.findSubscriptions;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var setAuthOpen = (0, hooks_1.useApp)().setAuthOpen;
    var handleSubscribe = function (subscription) { return __awaiter(_this, void 0, void 0, function () {
        var currentUrl, resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
                        return [2 /*return*/, setAuthOpen(true)];
                    currentUrl = window.location.href;
                    return [4 /*yield*/, subscribe(subscription === null || subscription === void 0 ? void 0 : subscription.id, {
                            success_url: currentUrl,
                            cancel_url: currentUrl,
                        })];
                case 1:
                    resp = (_a.sent());
                    if (resp === null || resp === void 0 ? void 0 : resp.url) {
                        router.push(resp.url);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        findSubscriptions();
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full flex justify-center items-center', 'sm:flex-row flex-col space-y-2 sm:space-y-0 sm:space-x-2', loading && 'opacity-50') }, subscriptions === null || subscriptions === void 0 ? void 0 : subscriptions.map(function (subscription) {
            var selected = (currentUser === null || currentUser === void 0 ? void 0 : currentUser.subscription_id) === subscription.id;
            return (react_1.default.createElement(SubscriptionTableCard_1.default, { key: subscription.id, selected: selected, subscription: subscription, handleClick: function () { return handleSubscribe(subscription); } }));
        })),
        !loading && !(subscriptions === null || subscriptions === void 0 ? void 0 : subscriptions.length) && (react_1.default.createElement(__1.Placeholder, { icon: "CreditCard", title: "No subscription plans", description: "Subscription plans will appear here." }))));
}
exports.default = SubscriptionTable;
