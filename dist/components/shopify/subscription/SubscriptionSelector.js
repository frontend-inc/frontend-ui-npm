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
var material_1 = require("@mui/material");
var shopify_1 = require("@webstudio/shopify");
var SubscriptionSelector = function (props) {
    var product = props.product, _a = props.activeSellingPlanId, activeSellingPlanId = _a === void 0 ? '' : _a, handleChange = props.handleChange;
    var _b = (0, react_1.useState)(null), sellingPlans = _b[0], setSellingPlans = _b[1];
    (0, react_1.useEffect)(function () {
        var _a, _b, _c, _d, _e;
        if (product) {
            var subscriptions = (_e = (_d = (_c = (_b = (_a = product === null || product === void 0 ? void 0 : product.sellingPlanGroups) === null || _a === void 0 ? void 0 : _a.edges[0]) === null || _b === void 0 ? void 0 : _b.node) === null || _c === void 0 ? void 0 : _c.sellingPlans) === null || _d === void 0 ? void 0 : _d.edges) === null || _e === void 0 ? void 0 : _e.map(function (_a) {
                var node = _a.node;
                return node;
            });
            setSellingPlans(subscriptions);
        }
    }, [product]);
    if (!sellingPlans || (sellingPlans === null || sellingPlans === void 0 ? void 0 : sellingPlans.length) == 0)
        return null;
    return (react_1.default.createElement(material_1.FormControl, { variant: "outlined", sx: sx.root },
        react_1.default.createElement(material_1.Select, { onChange: handleChange, value: activeSellingPlanId || '' },
            react_1.default.createElement(material_1.MenuItem, { value: '' },
                react_1.default.createElement(material_1.Typography, { variant: "body1", sx: sx.emptySelect }, "No subscription")), sellingPlans === null || sellingPlans === void 0 ? void 0 :
            sellingPlans.map(function (sellingPlan) { return (react_1.default.createElement(material_1.MenuItem, { key: sellingPlan.id, value: sellingPlan.id }, sellingPlan === null || sellingPlan === void 0 ? void 0 :
                sellingPlan.name,
                " - ",
                (0, shopify_1.getSellingPlanDescription)(sellingPlan))); }))));
};
exports.default = SubscriptionSelector;
var sx = {
    root: {
        width: "100%"
    },
    emptySelect: {
        color: "text.secondary",
        fontStyle: "italic"
    }
};
