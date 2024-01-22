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
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var material_1 = require("@mui/material");
var webstudio_shopify_1 = require("webstudio-shopify");
var shopify_1 = require("../../../components/shopify");
var context_1 = require("../../../context");
var navigation_1 = require("next/navigation");
var webstudio_shopify_2 = require("webstudio-shopify");
var Addresses = function (props) {
    var router = (0, navigation_1.useRouter)();
    var _a = (0, react_1.useState)(null), activeAddress = _a[0], setActiveAddress = _a[1];
    var _b = (0, react_1.useState)(false), showDeleteModal = _b[0], setShowDeleteModal = _b[1];
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _c = props || {}, _d = _c.title, title = _d === void 0 ? "Customer Addresses" : _d, _e = _c.subtitle, subtitle = _e === void 0 ? "Manage your addresses" : _e;
    var _f = (0, webstudio_shopify_1.useAddresses)(), loading = _f.loading, addresses = _f.addresses, deleteCustomerAddress = _f.deleteCustomerAddress, fetchCustomerAddresses = _f.fetchCustomerAddresses;
    var handleClick = function (addressGid) {
        var addressId = (0, webstudio_shopify_2.getShopifyIdFromGid)(addressGid);
        router.push("".concat(clientUrl, "/shopify/addresses/").concat(addressId));
    };
    var handleAddAddress = function () {
        router.push("".concat(clientUrl, "/shopify/addresses/new"));
    };
    var handleEdit = function (addressGid) {
        var addressId = (0, webstudio_shopify_2.getShopifyIdFromGid)(addressGid);
        router.push("".concat(clientUrl, "/shopify/addresses/").concat(addressId));
    };
    var handleDeleteClick = function (address) {
        setActiveAddress(address);
        setShowDeleteModal(true);
    };
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteCustomerAddress(activeAddress === null || activeAddress === void 0 ? void 0 : activeAddress.id)];
                case 1:
                    _a.sent();
                    setShowDeleteModal(false);
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (!addresses) {
            fetchCustomerAddresses();
        }
    }, [addresses]);
    return (react_1.default.createElement(components_1.LayoutLoader, { loading: loading },
        react_1.default.createElement(components_1.AuthScreen, { title: title, subtitle: subtitle },
            react_1.default.createElement(shopify_1.AddressList, { addresses: addresses, handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDeleteClick }),
            react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "outlined", onClick: handleAddAddress, startIcon: react_1.default.createElement(lucide_react_1.Plus, null) }, "Add Address"),
            react_1.default.createElement(components_1.AlertModal, { open: showDeleteModal, handleClose: function () { return setShowDeleteModal(false); }, handleConfirm: handleDelete }))));
};
exports.default = Addresses;
