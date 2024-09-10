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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var __1 = require("../..");
var SubscriptionTableCard_1 = __importDefault(require("./SubscriptionTableCard"));
var hooks_1 = require("../../../hooks");
var SubscriptionTable = function () {
    var _a = (0, hooks_1.useSubscriptions)(), loading = _a.delayedLoading, subscriptions = _a.subscriptions, findSubscriptions = _a.findSubscriptions;
    var _b = (0, frontend_js_1.useAuth)(), currentUser = _b.currentUser, fetchMe = _b.fetchMe;
    var setAuthOpen = (0, hooks_1.useApp)().setAuthOpen;
    var handleSubscribeClick = function (subscription) {
        var _a = currentUser || {}, userId = _a.id, stripe_customer_id = _a.stripe_customer_id, credit_card_id = _a.credit_card_id;
        if (!userId)
            return setAuthOpen(true);
    };
    (0, react_1.useEffect)(function () {
        if (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) {
            findSubscriptions();
        }
    }, [currentUser === null || currentUser === void 0 ? void 0 : currentUser.id]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(__1.Loading, { loading: loading }),
        react_1.default.createElement(material_1.Stack, { sx: sx.table, direction: { xs: 'column', sm: 'row' }, spacing: 2 }, !loading &&
            (subscriptions === null || subscriptions === void 0 ? void 0 : subscriptions.map(function (subscription) {
                var selected = (currentUser === null || currentUser === void 0 ? void 0 : currentUser.subscription_id) === subscription.id;
                return (react_1.default.createElement(SubscriptionTableCard_1.default, { key: subscription.id, selected: selected, 
                    //@ts-ignore
                    subscription: subscription, handleClick: function () { return handleSubscribeClick(subscription); } }));
            }))),
        !loading && !(subscriptions === null || subscriptions === void 0 ? void 0 : subscriptions.length) && (react_1.default.createElement(__1.Placeholder, { icon: "CreditCard", title: "No subscription plans", description: "Subscription plans will appear here." }))));
};
exports.default = SubscriptionTable;
var sx = {
    table: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelLink: {
        py: 2,
    },
    footerLinks: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divider: {
        height: '100%',
        borderRight: '1px solid',
        borderColor: 'divider',
    },
};
