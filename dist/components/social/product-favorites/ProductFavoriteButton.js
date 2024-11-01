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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var helpers_1 = require("../../../helpers");
var frontend_js_1 = require("frontend-js");
var hooks_1 = require("../../../hooks");
var lucide_react_1 = require("lucide-react");
var core_1 = require("../../core");
var frontend_shadcn_1 = require("frontend-shadcn");
function ProductFavoriteButton(_a) {
    var _this = this;
    var product = _a.product, _b = _a.size, size = _b === void 0 ? 'small' : _b;
    var _c = (0, frontend_js_1.useAuth)(), fetchMe = _c.fetchMe, currentUser = _c.currentUser;
    var setAuthOpen = (0, hooks_1.useApp)().setAuthOpen;
    var _d = (0, react_1.useState)(false), isFavorite = _d[0], setIsFavorite = _d[1];
    var _e = (0, hooks_1.useSocial)(), favoriteProduct = _e.favoriteProduct, unfavoriteProduct = _e.unfavoriteProduct;
    var handleClick = function (ev) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)) {
                        return [2 /*return*/, setAuthOpen(true)];
                    }
                    if (!isFavorite) return [3 /*break*/, 2];
                    setIsFavorite(false);
                    return [4 /*yield*/, unfavoriteProduct(product === null || product === void 0 ? void 0 : product.handle)];
                case 1:
                    _a.sent();
                    fetchMe();
                    return [3 /*break*/, 4];
                case 2:
                    setIsFavorite(true);
                    return [4 /*yield*/, favoriteProduct(product === null || product === void 0 ? void 0 : product.handle)];
                case 3:
                    _a.sent();
                    fetchMe();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (currentUser && (product === null || product === void 0 ? void 0 : product.handle)) {
            setIsFavorite((0, helpers_1.isProductFavorited)(currentUser, product === null || product === void 0 ? void 0 : product.handle));
        }
    }, [currentUser, product === null || product === void 0 ? void 0 : product.handle]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(core_1.IconButton, { onClick: handleClick, className: (0, frontend_shadcn_1.cn)(size === 'large' &&
                'border border-divider bg-background text-secondary hover:bg-background hover:text-secondary', isFavorite && 'text-primary hover:text-primary-dark border-primary ring-offset-2 ring-2 ring-ring') },
            react_1.default.createElement(lucide_react_1.Bookmark, { className: (0, frontend_shadcn_1.cn)('w-5 h-5 text-foreground', isFavorite ? 'fill-primary' : 'fill-none ') }))));
}
exports.default = ProductFavoriteButton;
