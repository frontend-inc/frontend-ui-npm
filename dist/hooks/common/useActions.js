'use client';
"use strict";
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
var __1 = require("..");
var navigation_1 = require("next/navigation");
var _1 = require(".");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var __2 = require("..");
var useButtons = function (params) {
    var _a = params || {}, action = _a.action, value = _a.value, path = _a.path, url = _a.url;
    var _b = (0, _1.useLoadingWrapper)(), loading = _b.loading, data = _b.data, errors = _b.errors;
    var showAlertSuccess = (0, __2.useAlerts)().showAlertSuccess;
    var router = (0, navigation_1.useRouter)();
    var clientUrl = (0, __1.useApp)().clientUrl;
    var handleClick = function (ev) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (action) {
                case 'page':
                    router.push("".concat(clientUrl).concat(path));
                    break;
                case 'copy':
                    if (value) {
                        (0, copy_to_clipboard_1.default)(value);
                        showAlertSuccess('Copied to clipboard');
                    }
                    break;
                case 'email':
                    if (value) {
                        window.location.href = "mailto:".concat(value);
                    }
                    break;
                case 'phone':
                    if (value) {
                        window.location.href = "tel:".concat(value);
                    }
                    break;
                case 'sms':
                    if (value) {
                        window.location.href = "sms:".concat(value);
                    }
                    break;
                case 'url':
                    if (url) {
                        window.open(url, '_blank');
                    }
                    break;
                case 'url':
                    if (value) {
                        window.open(value, '_blank');
                    }
                    break;
                case 'download':
                    if (path) {
                        window.open(path, '_blank');
                    }
                    break;
                default:
                    break;
            }
            return [2 /*return*/];
        });
    }); };
    return {
        loading: loading,
        data: data,
        errors: errors,
        handleClick: handleClick,
    };
};
exports.default = useButtons;
