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
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var ProductReviewForm = function () {
    var _a = (0, frontend_js_1.useResourceContext)(), loading = _a.loading, errors = _a.errors, handleChange = _a.handleChange, create = _a.create, update = _a.update, resource = _a.resource, reloadMany = _a.reloadMany, openEdit = _a.openEdit, setOpenEdit = _a.setOpenEdit;
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, update(resource)];
                case 1:
                    resp = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, create(resource)];
                case 3:
                    resp = _a.sent();
                    _a.label = 4;
                case 4:
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setOpenEdit(false);
                        reloadMany();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(__1.Sheet, { title: "Leave a review", open: openEdit, handleClose: function () { return setOpenEdit(false); }, buttons: react_1.default.createElement(components_1.Button, { className: "w-full", variant: "default", onClick: handleSubmit, disabled: loading },
            loading && react_1.default.createElement(__1.IconLoading, { className: "mr-2 h-4 w-4" }),
            "Submit") },
        react_1.default.createElement(__1.AuthGuard, null,
            react_1.default.createElement("div", { className: "p-4" },
                react_1.default.createElement("div", { className: "flex flex-col space-y-4 w-full items-start" },
                    react_1.default.createElement(__1.RatingInput, { errors: errors, name: "rating", value: resource === null || resource === void 0 ? void 0 : resource.rating, 
                        /* @ts-ignore */
                        handleChange: handleChange }),
                    react_1.default.createElement(__1.TextInput, { errors: errors, name: "title", value: resource === null || resource === void 0 ? void 0 : resource.title, 
                        /* @ts-ignore */
                        handleChange: handleChange, placeholder: "Review summary..." }),
                    react_1.default.createElement(__1.TextArea, { errors: errors, name: "body", value: resource === null || resource === void 0 ? void 0 : resource.body, 
                        /* @ts-ignore */
                        handleChange: handleChange, placeholder: "Leave a review..." }))))));
};
exports.default = ProductReviewForm;
