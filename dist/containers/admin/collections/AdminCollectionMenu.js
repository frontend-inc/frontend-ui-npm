'use client';
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
var components_1 = require("../../../components");
var core_1 = require("../../../components/core");
var components_2 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminCollectionEdit_1 = __importDefault(require("./AdminCollectionEdit"));
var navigation_1 = require("next/navigation");
var lucide_react_1 = require("lucide-react");
var AdminCollectionMenu = function () {
    var router = (0, navigation_1.useRouter)();
    var _a = (0, navigation_1.useParams)(), appId = _a.app_id, viewId = _a.view_id, collectionId = _a.collection_id;
    var _b = (0, react_1.useState)(false), showDeleteModal = _b[0], setShowDeleteModal = _b[1];
    var _c = (0, hooks_1.useAdminCollections)(), loading = _c.loading, errors = _c.errors, collection = _c.collection, collections = _c.collections, deleteCollection = _c.deleteCollection, findCollections = _c.findCollections, setCollection = _c.setCollection, setCollections = _c.setCollections, handleChange = _c.handleChange, updateCollection = _c.updateCollection, createCollection = _c.createCollection, reloadCollections = _c.reloadCollections;
    (0, react_1.useEffect)(function () {
        if (collectionId == 'index' && collections.length > 0) {
            handleClick(collections[0]);
        }
    }, [collectionId, collections]);
    var _d = (0, react_1.useState)(null), activeCollection = _d[0], setActiveCollection = _d[1];
    var _e = (0, react_1.useState)(false), showModal = _e[0], setShowModal = _e[1];
    var handleClick = function (collection) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            router.push("/dashboard/".concat(appId, "/collections/").concat(collection === null || collection === void 0 ? void 0 : collection.name));
            return [2 /*return*/];
        });
    }); };
    var handleSettingsClick = function (collection) {
        router.push("/dashboard/".concat(appId, "/schema/").concat(collection === null || collection === void 0 ? void 0 : collection.name));
    };
    var handleEditCollectionClick = function (collection) {
        setCollection(collection);
        setShowModal(true);
    };
    var handleCreateCollectionClick = function () {
        setCollection({});
        setShowModal(true);
    };
    var handleSubmitCollection = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(collection === null || collection === void 0 ? void 0 : collection.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, updateCollection(collection)];
                case 1:
                    resp = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, createCollection(collection)];
                case 3:
                    resp = _a.sent();
                    _a.label = 4;
                case 4:
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        reloadCollections();
                        router.push("/dashboard/".concat(appId, "/collections/").concat(resp === null || resp === void 0 ? void 0 : resp.name));
                        setCollection({});
                        setShowModal(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteCollectionClick = function (collection) {
        setActiveCollection(collection);
        setShowDeleteModal(true);
    };
    var handleDeleteCollection = function () { return __awaiter(void 0, void 0, void 0, function () {
        var nextCollection, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    setCollection({});
                    if (!activeCollection) return [3 /*break*/, 2];
                    //@ts-ignore
                    return [4 /*yield*/, deleteCollection(activeCollection.id)
                        //@ts-ignore
                    ];
                case 1:
                    //@ts-ignore
                    _a.sent();
                    //@ts-ignore
                    setCollections(collections.filter(function (c) { return c.id !== activeCollection.id; }));
                    //@ts-ignore
                    if (collectionId == activeCollection.name) {
                        nextCollection = collections.filter(
                        //@ts-ignore
                        function (c) { return c.name !== activeCollection.name; })[0];
                        router.push("/dashboard/".concat(appId, "/collections/").concat(nextCollection === null || nextCollection === void 0 ? void 0 : nextCollection.name));
                    }
                    setShowDeleteModal(false);
                    _a.label = 2;
                case 2: return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleTemplateClick = function (template) {
        setCollection(__assign(__assign({}, collection), { name: collection.name || template.name, label: collection.label || template.label, document_type: template.document_type, template: template }));
    };
    (0, react_1.useEffect)(function () {
        if (appId) {
            findCollections();
        }
    }, [appId]);
    return (react_1.default.createElement("div", { className: "flex flex-col" },
        react_1.default.createElement(components_1.MenuList, { label: 'Collections' }, collections.map(function (collection) { return (react_1.default.createElement(components_2.MenuListItem, { key: collection.id, title: collection === null || collection === void 0 ? void 0 : collection.label, selected: !viewId && collectionId == (collection === null || collection === void 0 ? void 0 : collection.name), handleClick: function () { return handleClick(collection); }, handleEdit: function () { return handleEditCollectionClick(collection); }, handleDelete: function () { return handleDeleteCollectionClick(collection); }, secondaryAction: react_1.default.createElement(components_2.IconButton, { onClick: function () { return handleSettingsClick(collection); } },
                react_1.default.createElement(lucide_react_1.Settings, { className: "h-5 w-4" })) })); })),
        react_1.default.createElement("div", { className: "px-4" },
            react_1.default.createElement(core_1.Button, { color: "secondary", onClick: handleCreateCollectionClick, className: "group", startIcon: react_1.default.createElement("div", { className: "group-hover:rotate-180 transition-transform duration-300 ease-in-out" },
                    react_1.default.createElement(lucide_react_1.Plus, { className: "text-primary-foreground h-5 w-5" })) }, "Collection")),
        react_1.default.createElement(AdminCollectionEdit_1.default, { errors: errors, loading: loading, open: showModal, collection: collection, handleClose: function () { return setShowModal(false); }, handleChange: handleChange, handleSubmit: handleSubmitCollection, handleClick: handleTemplateClick }),
        react_1.default.createElement(components_1.AlertModal, { loading: loading, open: showDeleteModal, handleClose: function () { return setShowDeleteModal(false); }, handleConfirm: handleDeleteCollection })));
};
exports.default = AdminCollectionMenu;
