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
var hooks_1 = require("../../../../hooks");
var frontend_shadcn_1 = require("frontend-shadcn");
var __1 = require("../../..");
var PoweredByBrandfetch_1 = __importDefault(require("./PoweredByBrandfetch"));
var BrandfetchInput = function (props) {
    var _a;
    var onComplete = (props || {}).onComplete;
    var _b = (0, hooks_1.useBrandfetch)(), resizeLogo = _b.resizeLogo, brand = _b.brand, fetchBrand = _b.fetchBrand;
    var _c = (0, hooks_1.useAdminMedia)(), loading = _c.loading, uploadFromUrl = _c.uploadFromUrl;
    var handleBrandChange = function (ev) {
        var value = ev.target.value;
        fetchBrand(value);
    };
    var handleClick = function (logoFormat, logo) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, src, format, domain, filename, resizedUrl, resp;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = logoFormat || {}, src = _a.src, format = _a.format;
                    domain = (logo === null || logo === void 0 ? void 0 : logo.domain) || 'logo';
                    filename = domain + '.' + format;
                    resizedUrl = resizeLogo(src, { width: 512, height: 512 });
                    return [4 /*yield*/, uploadFromUrl(resizedUrl, filename)];
                case 1:
                    resp = _b.sent();
                    if (onComplete) {
                        onComplete(resp);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-4 w-full" },
        react_1.default.createElement("div", { className: "w-full flex flex-row justify-center items-center" },
            react_1.default.createElement(__1.BrandfetchAutosuggest, { handleChange: handleBrandChange })),
        react_1.default.createElement(PoweredByBrandfetch_1.default, null),
        loading && react_1.default.createElement(__1.CircularLoader, null),
        react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, !loading &&
            ((_a = brand === null || brand === void 0 ? void 0 : brand.logos) === null || _a === void 0 ? void 0 : _a.map(function (logo) {
                var _a;
                return (react_1.default.createElement(react_1.default.Fragment, { key: logo.domain }, (_a = logo === null || logo === void 0 ? void 0 : logo.formats) === null || _a === void 0 ? void 0 : _a.filter(function (f) { return f.format != 'svg'; }).map(function (format, index) { return (react_1.default.createElement(frontend_shadcn_1.Card, { key: "".concat(logo.domain, "-").concat(index), className: "flex flex-col space-y-4 bg-muted/20 hover:bg-muted/50 p-4 hover:border-primary overflow-hidden" },
                    react_1.default.createElement(frontend_shadcn_1.CardContent, null,
                        react_1.default.createElement(__1.TouchableOpacity, { handleClick: function () { return handleClick(format, logo); } },
                            react_1.default.createElement("div", { className: "relative rounded overflow-hidden h-[160px] w-[200px] flex items-center justify-center" },
                                react_1.default.createElement(__1.Image, { src: format === null || format === void 0 ? void 0 : format.src, height: 220, width: 200, alt: logo === null || logo === void 0 ? void 0 : logo.domain, objectFit: "contain" }))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement(__1.Label, { label: format.format }))))); })));
            })))));
};
exports.default = BrandfetchInput;
