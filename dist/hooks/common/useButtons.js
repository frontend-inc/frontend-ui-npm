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
var react_1 = require("react");
var context_1 = require("../../context");
var router_1 = require("next/router");
var _1 = require(".");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var __1 = require("..");
var frontend_js_1 = require("frontend-js");
var useButtons = function (params) {
    var _a = params || {}, action = _a.action, actionId = _a.actionId, value = _a.value, path = _a.path, resource = _a.resource, user = _a.user;
    var _b = (0, _1.useLoadingWrapper)(), loading = _b.loading, data = _b.data, errors = _b.errors, loadingWrapper = _b.loadingWrapper;
    var showAlertSuccess = (0, __1.useAlerts)().showAlertSuccess;
    var api = (0, frontend_js_1.useApi)().api;
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var handleClick = function (ev) { return __awaiter(void 0, void 0, void 0, function () {
        var url, _a, url_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = action;
                    switch (_a) {
                        case 'navigate': return [3 /*break*/, 1];
                        case 'navigate_user': return [3 /*break*/, 2];
                        case 'navigate_cms': return [3 /*break*/, 3];
                        case 'copy': return [3 /*break*/, 4];
                        case 'email': return [3 /*break*/, 5];
                        case 'phone': return [3 /*break*/, 6];
                        case 'sms': return [3 /*break*/, 7];
                        case 'url': return [3 /*break*/, 8];
                        case 'link': return [3 /*break*/, 9];
                        case 'stripe_payment_link': return [3 /*break*/, 10];
                        case 'download': return [3 /*break*/, 11];
                        case 'action': return [3 /*break*/, 12];
                    }
                    return [3 /*break*/, 14];
                case 1:
                    url = "".concat(clientUrl).concat(path);
                    router.push(url);
                    return [3 /*break*/, 15];
                case 2:
                    url = "".concat(clientUrl).concat(path);
                    if (resource === null || resource === void 0 ? void 0 : resource.handle) {
                        url = "".concat(clientUrl).concat(path, "/").concat(user.username);
                    }
                    router.push(url);
                    return [3 /*break*/, 15];
                case 3:
                    url = "".concat(clientUrl).concat(path);
                    if (resource === null || resource === void 0 ? void 0 : resource.handle) {
                        url = "".concat(clientUrl).concat(path, "/").concat(resource === null || resource === void 0 ? void 0 : resource.handle);
                    }
                    router.push(url);
                    return [3 /*break*/, 15];
                case 4:
                    if (value) {
                        (0, copy_to_clipboard_1.default)(value);
                        showAlertSuccess('Copied to clipboard');
                    }
                    return [3 /*break*/, 15];
                case 5:
                    if (value) {
                        window.location.href = "mailto:".concat(value);
                    }
                    return [3 /*break*/, 15];
                case 6:
                    if (value) {
                        window.location.href = "tel:".concat(value);
                    }
                    return [3 /*break*/, 15];
                case 7:
                    if (value) {
                        window.location.href = "sms:".concat(value);
                    }
                    return [3 /*break*/, 15];
                case 8:
                    if (path) {
                        window.open(path, '_blank');
                    }
                    return [3 /*break*/, 15];
                case 9:
                    if (value) {
                        window.open(value, '_blank');
                    }
                    return [3 /*break*/, 15];
                case 10:
                    if (value) {
                        url_1 = "".concat(value, "?prefilled_email=").concat(currentUser === null || currentUser === void 0 ? void 0 : currentUser.email, "&client_reference_id=").concat(currentUser === null || currentUser === void 0 ? void 0 : currentUser.email);
                        window.open(url_1, '_blank');
                    }
                    return [3 /*break*/, 15];
                case 11:
                    if (path) {
                        window.open(path, '_blank');
                    }
                    return [3 /*break*/, 15];
                case 12: return [4 /*yield*/, loadingWrapper(function () {
                        return api.post("/api/v1/actions/".concat(actionId, "/trigger"), {
                            app_action: {
                                resource_id: resource === null || resource === void 0 ? void 0 : resource.id,
                            }
                        });
                    })];
                case 13:
                    _b.sent();
                    return [3 /*break*/, 15];
                case 14: return [3 /*break*/, 15];
                case 15: return [2 /*return*/];
            }
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
