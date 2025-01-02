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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_shopify_1 = require("frontend-shopify");
var react_2 = require("@nextui-org/react");
var lucide_react_1 = require("lucide-react");
var ShopifySubscriptionSelector = function (props) {
    var _a = props || {}, product = _a.product, _b = _a.activeSellingPlanId, activeSellingPlanId = _b === void 0 ? null : _b, handleChange = _a.handleChange;
    var _c = (0, react_1.useState)([]), sellingPlans = _c[0], setSellingPlans = _c[1];
    var _d = (0, react_1.useState)(false), isOpen = _d[0], setIsOpen = _d[1];
    (0, react_1.useEffect)(function () {
        var _a, _b, _c, _d, _e;
        if (product) {
            var subscriptions = 
            //@ts-ignore
            ((_e = (_d = (_c = (_b = (_a = product === null || product === void 0 ? void 0 : product.sellingPlanGroups) === null || _a === void 0 ? void 0 : _a.edges[0]) === null || _b === void 0 ? void 0 : _b.node) === null || _c === void 0 ? void 0 : _c.sellingPlans) === null || _d === void 0 ? void 0 : _d.edges) === null || _e === void 0 ? void 0 : _e.map(function (_a) {
                var node = _a.node;
                return node;
            })) || [];
            setSellingPlans(subscriptions);
        }
    }, [product]);
    var toggleOpen = function () { return setIsOpen(!isOpen); };
    var handleSelectPlan = function (planId) {
        handleChange(planId);
        setIsOpen(false);
    };
    if (!sellingPlans || sellingPlans.length === 0)
        return null;
    var activePlan = sellingPlans.find(function (plan) { return plan.id === activeSellingPlanId; });
    var buttonText = activePlan ?
        "".concat(activePlan.name, " - ").concat((0, frontend_shopify_1.getSellingPlanDescription)(activePlan)) :
        "Select subscription";
    return (react_1.default.createElement("div", { className: "w-full relative" },
        react_1.default.createElement(react_2.Button, { variant: "bordered", onPress: toggleOpen, className: "w-full justify-between", endContent: react_1.default.createElement(lucide_react_1.ChevronRight, { className: (0, react_2.cn)("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-90") }) },
            react_1.default.createElement("span", { className: "truncate" }, buttonText)),
        isOpen && (react_1.default.createElement("div", { className: "absolute z-10 w-full mt-1 bg-content1 border-2 border-divider rounded-xl shadow-lg overflow-hidden" },
            react_1.default.createElement(react_2.Button, { variant: "light", onPress: function () { return handleSelectPlan(null); }, className: "w-full justify-start font-normal rounded-none" }, "No subscription"), sellingPlans === null || sellingPlans === void 0 ? void 0 :
            sellingPlans.map(function (sellingPlan) { return (react_1.default.createElement(react_2.Button, { key: sellingPlan.id, variant: "light", onPress: function () { return handleSelectPlan(sellingPlan.id); }, className: "w-full justify-start rounded-none" }, sellingPlan === null || sellingPlan === void 0 ? void 0 :
                sellingPlan.name,
                " - ",
                (0, frontend_shopify_1.getSellingPlanDescription)(sellingPlan))); })))));
};
exports.default = ShopifySubscriptionSelector;
