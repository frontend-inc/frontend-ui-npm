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
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var COLORS = __importStar(require("@mui/material/colors"));
var AdminSubscriptionPlanItem = function (props) {
    var subscriptionPlan = props.resource, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { icon: "CreditCard", primary: subscriptionPlan === null || subscriptionPlan === void 0 ? void 0 : subscriptionPlan.name, secondary: subscriptionPlan === null || subscriptionPlan === void 0 ? void 0 : subscriptionPlan.display_price, secondaryAction: (subscriptionPlan === null || subscriptionPlan === void 0 ? void 0 : subscriptionPlan.label) && react_1.default.createElement(components_1.Label, { label: subscriptionPlan === null || subscriptionPlan === void 0 ? void 0 : subscriptionPlan.label }), color: COLORS.amber[500], handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = AdminSubscriptionPlanItem;
