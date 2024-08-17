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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var hooks_1 = require("../../hooks");
var frontend_js_1 = require("frontend-js");
var useUnsplash = function (params) {
    var apiKey = (params || {}).apiKey;
    var api = (0, frontend_js_1.useApi)().api;
    var _a = (0, hooks_1.useLoadingWrapper)(), loading = _a.loading, loadingWrapper = _a.loadingWrapper;
    var _b = (0, react_1.useState)(1), page = _b[0], setPage = _b[1];
    var _c = (0, react_1.useState)([]), images = _c[0], setImages = _c[1];
    var handleSearch = function (keywords, page) { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadingWrapper(function () {
                        return fetch("https://api.unsplash.com/search/photos?query=".concat(keywords, "&page=").concat(page, "&client_id=").concat(apiKey));
                    })];
                case 1:
                    resp = _a.sent();
                    return [2 /*return*/, resp === null || resp === void 0 ? void 0 : resp.json()];
            }
        });
    }); };
    var fetchDownloadLocation = function (image) { return __awaiter(void 0, void 0, void 0, function () {
        var downloadLocation, resp, data;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    downloadLocation = (_a = image === null || image === void 0 ? void 0 : image.links) === null || _a === void 0 ? void 0 : _a.download_location;
                    return [4 /*yield*/, fetch("".concat(downloadLocation, "?client_id=").concat(apiKey))];
                case 1:
                    resp = _b.sent();
                    return [4 /*yield*/, resp.json()];
                case 2:
                    data = _b.sent();
                    return [2 /*return*/, data === null || data === void 0 ? void 0 : data.url];
            }
        });
    }); };
    var search = function (keywords, page) {
        if (page === void 0) { page = 1; }
        return __awaiter(void 0, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setPage(page);
                        return [4 /*yield*/, handleSearch(keywords, page)];
                    case 1:
                        resp = _a.sent();
                        if (resp === null || resp === void 0 ? void 0 : resp.results) {
                            setImages(resp.results);
                        }
                        return [2 /*return*/, resp === null || resp === void 0 ? void 0 : resp.results];
                }
            });
        });
    };
    var loadMore = function (keywords) { return __awaiter(void 0, void 0, void 0, function () {
        var newPage, resp, newImages;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newPage = page + 1;
                    setPage(newPage);
                    return [4 /*yield*/, handleSearch(keywords, newPage)];
                case 1:
                    resp = _a.sent();
                    newImages = [];
                    if (resp === null || resp === void 0 ? void 0 : resp.results) {
                        newImages = __spreadArray(__spreadArray([], images, true), resp.results, true);
                        setImages(newImages);
                    }
                    return [2 /*return*/, resp === null || resp === void 0 ? void 0 : resp.results];
            }
        });
    }); };
    return {
        loading: loading,
        images: images,
        search: search,
        loadMore: loadMore,
        fetchDownloadLocation: fetchDownloadLocation,
    };
};
exports.default = useUnsplash;
