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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../../../hooks");
var components_1 = require("../../../../components");
var UnsplashCard_1 = __importDefault(require("./UnsplashCard"));
var UnsplashModal_1 = __importDefault(require("./UnsplashModal"));
var components_2 = require("../../../../components");
var lucide_react_1 = require("lucide-react");
var UnsplashList = function (_a) {
    var onComplete = _a.onComplete;
    var _b = (0, react_1.useState)(false), showModal = _b[0], setShowModal = _b[1];
    var _c = (0, react_1.useState)(''), keywords = _c[0], setKeywords = _c[1];
    var _d = (0, react_1.useState)(), image = _d[0], setImage = _d[1];
    var _e = (0, hooks_1.useAdminMedia)(), loading = _e.loading, uploadFromUrl = _e.uploadFromUrl;
    var _f = (0, hooks_1.useUnsplash)(), images = _f.images, search = _f.search, loadMore = _f.loadMore;
    var handleUpload = function (url, name) { return __awaiter(void 0, void 0, void 0, function () {
        var resp, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, uploadFromUrl(url, name)];
                case 1:
                    resp = _a.sent();
                    if (onComplete) {
                        onComplete(resp);
                    }
                    return [3 /*break*/, 4];
                case 2:
                    e_1 = _a.sent();
                    console.error('Error uploading image:', e_1);
                    return [3 /*break*/, 4];
                case 3:
                    setShowModal(false);
                    //@ts-ignore
                    setImage({});
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleChange = function (ev) {
        setKeywords(ev.target.value);
    };
    var handleSearch = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, search(keywords)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLoadMore = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadMore(keywords)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleImageClick = function (image) {
        setImage(image);
        setShowModal(true);
    };
    return (react_1.default.createElement("div", { className: "w-full flex flex-col justify-center items-center" },
        react_1.default.createElement("div", { className: "space-y-4 w-full flex justify-center items-center" },
            react_1.default.createElement(components_1.SearchInput, { name: "keywords", value: keywords, placeholder: "Search unsplash...", handleChange: handleChange, handleSearch: handleSearch })),
        react_1.default.createElement("div", { className: "mt-4 grid grid-cols-2 gap-4" }, images === null || images === void 0 ? void 0 : images.map(function (image, i) { return (react_1.default.createElement(UnsplashCard_1.default, { key: i, image: image, handleClick: handleImageClick })); })),
        (images === null || images === void 0 ? void 0 : images.length) > 0 && (images === null || images === void 0 ? void 0 : images.length) % 10 === 0 && (react_1.default.createElement("div", { className: "mt-4 flex justify-center" },
            react_1.default.createElement(components_2.Button, { variant: "outline", className: "my-2 text-foreground", onClick: handleLoadMore },
                "Load More",
                react_1.default.createElement(lucide_react_1.ChevronDown, { className: "ml-2 h-4 w-4 text-foreground" })))),
        react_1.default.createElement(UnsplashModal_1.default, { loading: loading, open: showModal, 
            //@ts-ignore
            image: image, handleClose: function () { return setShowModal(false); }, handleUpload: handleUpload })));
};
exports.default = UnsplashList;
