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
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var UnsplashCard_1 = __importDefault(require("./UnsplashCard"));
var UnsplashModal_1 = __importDefault(require("./UnsplashModal"));
var icons_material_1 = require("@mui/icons-material");
var PoweredByUnsplash_1 = __importDefault(require("./PoweredByUnsplash"));
var UnsplashList = function (props) {
    var onComplete = props.onComplete, apiKey = props.apiKey;
    var _a = (0, react_1.useState)(false), showModal = _a[0], setShowModal = _a[1];
    var _b = (0, react_1.useState)(''), keywords = _b[0], setKeywords = _b[1];
    //@ts-ignore
    var _c = (0, react_1.useState)({}), image = _c[0], setImage = _c[1];
    var _d = (0, hooks_1.useMedia)(), loading = _d.loading, uploadFromUrl = _d.uploadFromUrl;
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
                    console.log(e_1);
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
    var _e = (0, hooks_1.useUnsplash)({
        apiKey: apiKey,
    }), images = _e.images, search = _e.search, loadMore = _e.loadMore;
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
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(components_1.TextInput, { name: "keywords", value: keywords, placeholder: "Search unsplash...", handleChange: handleChange }),
        react_1.default.createElement(material_1.Button, { sx: sx.button, fullWidth: true, onClick: handleSearch, variant: "contained", color: "secondary", endIcon: react_1.default.createElement(components_1.Icon, { name: "Search", color: "secondary.contrastText" }) }, "Search"),
        react_1.default.createElement(PoweredByUnsplash_1.default, null),
        react_1.default.createElement(material_1.Box, { sx: sx.grid }, images === null || images === void 0 ? void 0 : images.map(function (image, i) { return (react_1.default.createElement(UnsplashCard_1.default, { key: i, image: image, handleClick: handleImageClick })); })),
        (images === null || images === void 0 ? void 0 : images.length) > 0 && (images === null || images === void 0 ? void 0 : images.length) % 10 == 0 && (react_1.default.createElement(material_1.Button, { sx: sx.loadMore, fullWidth: true, color: "secondary", variant: "contained", endIcon: react_1.default.createElement(icons_material_1.ExpandMore, null), onClick: handleLoadMore }, "Load More")),
        react_1.default.createElement(UnsplashModal_1.default, { loading: loading, open: showModal, image: image, handleClose: function () { return setShowModal(false); }, handleUpload: handleUpload, apiKey: apiKey })));
};
exports.default = UnsplashList;
var sx = {
    root: {
        width: '100%',
    },
    button: {
        my: 1,
    },
    grid: {
        mt: 2,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
    },
    unsplashLogo: {
        mt: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    loadMore: {
        my: 2,
    },
};
