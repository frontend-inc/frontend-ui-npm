"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var hooks_1 = require("../../../hooks");
var router_1 = require("next/router");
var AdminViewEdit_1 = __importDefault(require("../views/AdminViewEdit"));
var frontend_js_1 = require("frontend-js");
var AdminCollectionTable_1 = __importDefault(require("./AdminCollectionTable"));
var CollectionSchemaToggle_1 = __importDefault(require("./CollectionSchemaToggle"));
var AdminCollectionMenu_1 = __importDefault(require("./AdminCollectionMenu"));
var AdminCollectionPage = function () {
    (0, hooks_1.useTabs)('collections');
    var apiQuery = new frontend_js_1.ApiQuery();
    var router = (0, router_1.useRouter)();
    var _a = router === null || router === void 0 ? void 0 : router.query, collectionId = _a.collection_id, appId = _a.app_id;
    if (collectionId == 'index')
        collectionId = '';
    var clientUrl = (0, hooks_1.useAdmin)().clientUrl;
    var _b = (0, react_1.useState)(false), openAiModal = _b[0], setOpenAiModal = _b[1];
    var _c = (0, react_1.useState)(false), showViewModal = _c[0], setShowViewModal = _c[1];
    var _d = (0, hooks_1.useViews)(), viewLoading = _d.loading, viewErrors = _d.errors, view = _d.view, findViews = _d.findViews, createView = _d.createView, handleChangeView = _d.handleChange, setView = _d.setView;
    var _e = (0, hooks_1.useCollections)(), loading = _e.loading, collection = _e.collection, findCollection = _e.findCollection, aiGenerateData = _e.aiGenerateData;
    var handleSaveView = function () { return __awaiter(void 0, void 0, void 0, function () {
        var viewQuery;
        return __generator(this, function (_a) {
            viewQuery = apiQuery.parseURL(router.query).query();
            setView({
                collection_id: collectionId,
                query: viewQuery,
            });
            setShowViewModal(true);
            return [2 /*return*/];
        });
    }); };
    var handleSubmitView = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp, e_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, createView(__assign(__assign({}, view), { collection_id: collectionId }))];
                case 1:
                    resp = _b.sent();
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setShowViewModal(false);
                        findViews();
                        setView({});
                        apiQuery.where(resp === null || resp === void 0 ? void 0 : resp.query);
                        router.push("".concat(clientUrl, "/collections/").concat((_a = resp === null || resp === void 0 ? void 0 : resp.collection) === null || _a === void 0 ? void 0 : _a.name, "?").concat(apiQuery.url(), "&view_id=").concat(resp === null || resp === void 0 ? void 0 : resp.id));
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _b.sent();
                    console.log(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleAiGenerateMockData = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, aiGenerateData(collectionId)];
                case 1:
                    _a.sent();
                    setOpenAiModal(false);
                    router.push("".concat(clientUrl, "/collections/").concat(collectionId, "?page=1&per_page=10"));
                    return [2 /*return*/];
            }
        });
    }); };
    var handleAddClick = function () {
        router.push("".concat(clientUrl, "/collections/").concat(collectionId, "/documents/new"));
    };
    (0, react_1.useEffect)(function () {
        if ((collectionId === null || collectionId === void 0 ? void 0 : collectionId.length) > 0) {
            findCollection(collectionId);
        }
    }, [collectionId]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.AdminLayoutLeft, null,
            react_1.default.createElement(AdminCollectionMenu_1.default, null)),
        react_1.default.createElement(components_1.AdminLayoutCenter, null,
            react_1.default.createElement(components_1.AdminHeader, { enableExpandLeftPanel: true, buttons: collectionId && (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
                    react_1.default.createElement(material_1.Button, { variant: "contained", color: "primary", onClick: handleAddClick, startIcon: react_1.default.createElement(components_2.Icon, { name: "Plus", color: "primary.contrastText" }) }, "Add"),
                    react_1.default.createElement(material_1.IconButton, { size: "small", sx: sx.iconButton, onClick: function () { return setOpenAiModal(true); } },
                        react_1.default.createElement(components_2.Icon, { name: "Sparkles", color: "text.primary" })))), secondaryActions: react_1.default.createElement(CollectionSchemaToggle_1.default, { tab: 0 }) }),
            collectionId ? (react_1.default.createElement(AdminCollectionTable_1.default, { collection: collection, handleSaveView: handleSaveView })) : (react_1.default.createElement(components_2.LayoutEmpty, { icon: 'Database', title: "No collection.", description: "Select or create a CMS collection." }))),
        react_1.default.createElement(AdminViewEdit_1.default, { loading: viewLoading, errors: viewErrors, open: showViewModal, handleClose: function () { return setShowViewModal(false); }, view: view, handleSubmit: handleSubmitView, handleChange: handleChangeView }),
        react_1.default.createElement(components_2.AlertModal, { loading: loading, open: openAiModal, handleClose: function () { return setOpenAiModal(false); }, icon: "Sparkles", title: "Generate data using AI", description: "Are you sure? This may take a few minutes.", handleConfirm: handleAiGenerateMockData })));
};
exports.default = AdminCollectionPage;
var sx = {
    iconButton: {
        width: 40,
        height: 40,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
    },
};
