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
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var __1 = require("../..");
var hooks_2 = require("../../../hooks");
var navigation_1 = require("next/navigation");
var frontend_shadcn_1 = require("frontend-shadcn");
var DocumentForm = function (props) {
    var router = (0, navigation_1.useRouter)();
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var href = (props || {}).href;
    var onSuccess = function () {
        if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    var _resource = props.resource, parentResource = props.parentResource, _a = props.buttonText, buttonText = _a === void 0 ? 'Submit' : _a, fields = props.fields, url = props.url, _b = props.onSuccessMessage, onSuccessMessage = _b === void 0 ? 'Submitted successfully!' : _b, _c = props.handleSuccess, handleSuccess = _c === void 0 ? onSuccess : _c, inputOptions = props.inputOptions, inputParams = props.inputParams;
    var showAlertSuccess = (0, hooks_2.useAlerts)().showAlertSuccess;
    var _d = (0, frontend_js_1.useResource)({
        name: 'document',
        url: url,
    }), loading = _d.delayedLoading, errors = _d.errors, resource = _d.resource, setResource = _d.setResource, update = _d.update, create = _d.create, removeAttachment = _d.removeAttachment, addReferences = _d.addReferences, handleChange = _d.handleChange;
    var handleRemove = function (name) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, removeAttachment(resource.id, name)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    resp = void 0;
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, update(resource)];
                case 1:
                    resp = _a.sent();
                    return [3 /*break*/, 5];
                case 2: return [4 /*yield*/, create(resource)
                    // Handle associated resources
                ];
                case 3:
                    resp = _a.sent();
                    if (!(parentResource === null || parentResource === void 0 ? void 0 : parentResource.id)) return [3 /*break*/, 5];
                    return [4 /*yield*/, addReferences(resp.id, [parentResource.id])];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        if (onSuccessMessage) {
                            showAlertSuccess(onSuccessMessage);
                        }
                        if (handleSuccess) {
                            handleSuccess(resp);
                        }
                    }
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    console.log('Error', err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (_resource) {
            setResource(_resource);
        }
        else {
            setResource({
                title: '',
            });
        }
    }, [_resource]);
    return (react_1.default.createElement(frontend_shadcn_1.Card, null,
        react_1.default.createElement(__1.Form, { loading: loading, errors: errors, fields: fields, resource: resource, handleChange: handleChange, handleRemove: handleRemove, handleSubmit: handleSubmit, buttonText: buttonText, inputOptions: inputOptions, inputParams: inputParams })));
};
exports.default = DocumentForm;
