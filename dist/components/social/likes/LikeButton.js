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
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
function LikeButton(props) {
    var _this = this;
    var resource = props.resource, _a = props.size, size = _a === void 0 ? 'small' : _a, _b = props.variant, variant = _b === void 0 ? 'rounded' : _b;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var setAuthOpen = (0, hooks_1.useApp)().setAuthOpen;
    var _c = (0, react_1.useState)(false), liked = _c[0], setLiked = _c[1];
    var _d = (0, hooks_1.useSocial)(), like = _d.like, unlike = _d.unlike;
    var handleClick = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)) {
                        return [2 /*return*/, setAuthOpen(true)];
                    }
                    if (!liked) return [3 /*break*/, 2];
                    setLiked(false);
                    return [4 /*yield*/, unlike(resource === null || resource === void 0 ? void 0 : resource.handle)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    setLiked(true);
                    return [4 /*yield*/, like(resource === null || resource === void 0 ? void 0 : resource.handle)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (currentUser && (resource === null || resource === void 0 ? void 0 : resource.handle)) {
            setLiked((0, helpers_1.isLiked)(currentUser, resource === null || resource === void 0 ? void 0 : resource.handle));
        }
    }, [currentUser, resource === null || resource === void 0 ? void 0 : resource.handle]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(components_1.IconButton, { onPress: handleClick, className: (0, react_2.cn)(variant == 'circular' ? 'rounded-full' : 'rounded-lg', size === 'large' && 'border border-divider') },
            liked && react_1.default.createElement(components_1.RemixIcon, { name: "ri-heart-fill", className: "fill-primary" }),
            !liked && react_1.default.createElement(components_1.RemixIcon, { name: "ri-heart-line" }))));
}
exports.default = LikeButton;
