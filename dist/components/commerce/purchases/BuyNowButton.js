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
var frontend_js_1 = require("frontend-js");
var context_1 = require("../../../context");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var BuyNowButton = function (props) {
    var _a = props || {}, resource = _a.resource, _b = _a.buttonText, buttonText = _b === void 0 ? 'Buy Now' : _b, _c = _a.justifyContent, justifyContent = _c === void 0 ? 'flex-start' : _c;
    var _d = resource || {}, availableForSale = _d.available_for_sale, displayAmount = _d.display_amount, amount = _d.stripe_amount;
    var _e = (0, react_1.useState)(false), purchased = _e[0], setPurchased = _e[1];
    var _f = (0, frontend_js_1.useAuth)(), fetchMe = _f.fetchMe, currentUser = _f.currentUser;
    var _g = (0, react_1.useContext)(context_1.AppContext), setCreditCardOpen = _g.setCreditCardOpen, setAuthOpen = _g.setAuthOpen;
    var _h = (0, hooks_1.usePayments)({
        url: '/api/v1/payments',
    }), loading = _h.loading, purchase = _h.purchase;
    var _j = (0, react_1.useState)(false), purchaseModal = _j[0], setPurchaseModal = _j[1];
    var handleClick = function () {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.credit_card_id))
            return setCreditCardOpen(true);
        setPurchaseModal(true);
    };
    var handlePurchase = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
                        return [2 /*return*/, setAuthOpen(true)];
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.credit_card_id))
                        return [2 /*return*/, setCreditCardOpen(true)];
                    return [4 /*yield*/, purchase(resource === null || resource === void 0 ? void 0 : resource.id)];
                case 1:
                    resp = _b.sent();
                    if ((_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.id) {
                        setPurchased(true);
                        setPurchaseModal(false);
                        fetchMe();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, alignItems: justifyContent },
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, alignItems: "center", justifyContent: justifyContent },
                react_1.default.createElement(material_1.Typography, { variant: "subtitle1", color: "textPrimary" }, displayAmount ? displayAmount : 'FREE'),
                react_1.default.createElement(material_1.Typography, { variant: "caption", color: "text.secondary" }, availableForSale ? 'Price' : 'Sold out')),
            react_1.default.createElement(material_1.Button, { sx: sx.button, size: "large", variant: "contained", color: "primary", onClick: handleClick, disabled: !availableForSale, startIcon: purchased ? (react_1.default.createElement(components_1.Icon, { name: "CheckCircle", size: 20, color: "primary.contrastText" })) : (react_1.default.createElement(components_1.Icon, { name: "CreditCard", size: 20, color: 'primary.contrastText' })), endIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, purchased
                ? 'Purchased'
                : "".concat(buttonText, " ").concat(displayAmount ? displayAmount : ''))),
        react_1.default.createElement(components_1.AlertModal, { loading: loading, open: purchaseModal, title: "Confirm Purchase", description: "Are you sure you want to purchase for ".concat(displayAmount, "?"), handleConfirm: handlePurchase, handleClose: function () { return setPurchaseModal(false); } })));
};
exports.default = BuyNowButton;
var sx = {
    button: {
        width: {
            sm: 240,
            xs: '100%',
        },
    },
};
