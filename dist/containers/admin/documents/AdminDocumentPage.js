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
var components_2 = require("../../../components");
var core_1 = require("../../../components/core");
var AdminDocumentForm_1 = __importDefault(require("./AdminDocumentForm"));
var AdminDocumentRightPanel_1 = __importDefault(require("./AdminDocumentRightPanel"));
var lucide_react_1 = require("lucide-react");
var navigation_1 = require("next/navigation");
var hooks_1 = require("../../../hooks");
var helpers_1 = require("../../../helpers");
var frontend_shadcn_1 = require("frontend-shadcn");
var DocumentEdit = function (props) {
    var router = (0, navigation_1.useRouter)();
    var appId = props.appId, documentId = props.documentId, collectionId = props.collectionId, enableUsers = props.enableUsers;
    var _a = (0, react_1.useState)(false), saveLoading = _a[0], setSaveLoading = _a[1];
    var _b = (0, react_1.useState)(false), publishLoading = _b[0], setPublishLoading = _b[1];
    var _c = (0, react_1.useState)(''), title = _c[0], setTitle = _c[1];
    var _d = (0, react_1.useState)([]), activeFields = _d[0], setActiveFields = _d[1];
    var _e = (0, react_1.useState)(), documentIds = _e[0], setDocumentIds = _e[1];
    var clientUrl = (0, hooks_1.useAdmin)().clientUrl;
    var _f = (0, hooks_1.useCollections)(), collection = _f.collection, findCollection = _f.findCollection;
    var _g = (0, hooks_1.useDocuments)({
        collection: collectionId,
    }), loading = _g.loading, errors = _g.errors, document = _g.document, setDocument = _g.setDocument, findDocument = _g.findDocument, updateDocument = _g.updateDocument, createDocument = _g.createDocument, reloadDocument = _g.reloadDocument, addReferences = _g.addReferences, removeReferences = _g.removeReferences, addProductReferences = _g.addProductReferences, removeProductReferences = _g.removeProductReferences, updateProductReferencePositions = _g.updateProductReferencePositions, addAttachment = _g.addAttachment, removeAttachment = _g.removeAttachment, updateDocuments = _g.updateDocuments, handleChange = _g.handleChange;
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setSaveLoading(true);
                    if (!(document === null || document === void 0 ? void 0 : document.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, updateDocument(document)];
                case 1:
                    resp = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, createDocument(__assign(__assign({}, document), { content_type: collectionId }))];
                case 3:
                    resp = _a.sent();
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        router.push("".concat(clientUrl, "/collections/").concat(collectionId, "/documents/").concat(resp === null || resp === void 0 ? void 0 : resp.id));
                    }
                    _a.label = 4;
                case 4:
                    setSaveLoading(false);
                    return [2 /*return*/, resp];
            }
        });
    }); };
    var handleTogglePublish = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setPublishLoading(true);
                    return [4 /*yield*/, updateDocument(__assign(__assign({}, document), { published: !document.published }))];
                case 1:
                    _a.sent();
                    setPublishLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSortFields = function (unsortedFields) {
        var sortedFields = unsortedFields.filter(function (field) { return field.editable == true; });
        setActiveFields(sortedFields);
    };
    var handleAddReferences = function (documentIds) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(document === null || document === void 0 ? void 0 : document.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, addReferences(document === null || document === void 0 ? void 0 : document.id, documentIds)];
                case 1:
                    _a.sent();
                    reloadDocument(document === null || document === void 0 ? void 0 : document.id);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var handleRemoveReferences = function (documentIds) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(document === null || document === void 0 ? void 0 : document.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, removeReferences(document.id, documentIds)];
                case 1:
                    _a.sent();
                    reloadDocument(document.id);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var handleAddProducts = function (productIds) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(document === null || document === void 0 ? void 0 : document.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, addProductReferences(document === null || document === void 0 ? void 0 : document.id, productIds)];
                case 1:
                    _a.sent();
                    reloadDocument(document === null || document === void 0 ? void 0 : document.id);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var handleRemoveProducts = function (productIds) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(document === null || document === void 0 ? void 0 : document.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, removeProductReferences(document.id, productIds)];
                case 1:
                    _a.sent();
                    reloadDocument(document.id);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var handleUpdateProductPositions = function (sorted) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateProductReferencePositions(document === null || document === void 0 ? void 0 : document.id, sorted)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleAddAttachment = function (field, documentId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(document === null || document === void 0 ? void 0 : document.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, addAttachment(document === null || document === void 0 ? void 0 : document.id, field, documentId)];
                case 1:
                    _a.sent();
                    reloadDocument(document === null || document === void 0 ? void 0 : document.id);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var handleRemoveAttachment = function (field) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(document === null || document === void 0 ? void 0 : document.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, removeAttachment(document === null || document === void 0 ? void 0 : document.id, field)];
                case 1:
                    _a.sent();
                    reloadDocument(document === null || document === void 0 ? void 0 : document.id);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        var _a = collection || {}, singular_name = _a.singular_name, plural_name = _a.plural_name;
        if (document === null || document === void 0 ? void 0 : document.id) {
            setTitle((0, helpers_1.truncate)(document.title, 20));
        }
        else if (documentId && singular_name) {
            setTitle("Edit ".concat(singular_name));
        }
        else if (documentIds && plural_name) {
            setTitle("Edit ".concat(plural_name));
        }
        else if (!documentId && !documentIds && singular_name) {
            setTitle("Add ".concat(singular_name));
        }
    }, [document, documentId, documentIds, collection]);
    (0, react_1.useEffect)(function () {
        if (collectionId) {
            findCollection(collectionId);
        }
    }, [collectionId]);
    (0, react_1.useEffect)(function () {
        if (documentId) {
            findDocument(documentId);
        }
        else {
            setDocument({});
        }
    }, [documentId]);
    var searchParams = (0, navigation_1.useSearchParams)();
    (0, react_1.useEffect)(function () {
        var _a;
        if (searchParams) {
            //@ts-ignore
            setDocumentIds(((_a = searchParams === null || searchParams === void 0 ? void 0 : searchParams.ids) === null || _a === void 0 ? void 0 : _a.split(',')) || []);
        }
    }, [searchParams]);
    (0, react_1.useEffect)(function () {
        if (collection === null || collection === void 0 ? void 0 : collection.fields) {
            handleSortFields(collection === null || collection === void 0 ? void 0 : collection.fields);
        }
    }, [collection === null || collection === void 0 ? void 0 : collection.fields]);
    var handleBackClick = function () {
        router.push("".concat(clientUrl, "/collections/").concat(collection === null || collection === void 0 ? void 0 : collection.name));
    };
    var setOpenLayoutRight = (0, hooks_1.useAdmin)().setOpenLayoutRight;
    (0, react_1.useEffect)(function () {
        setOpenLayoutRight(true);
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.AdminLayoutCenter, null,
            react_1.default.createElement(components_1.AdminHeader, { enableExpandRightPanel: true, title: title, primaryActions: react_1.default.createElement(core_1.IconButton, { className: "mr-2", onClick: handleBackClick },
                    react_1.default.createElement(lucide_react_1.ChevronLeft, { className: "text-foreground" })), buttons: react_1.default.createElement(components_2.PublishLabel, { published: document === null || document === void 0 ? void 0 : document.published }) }),
            react_1.default.createElement(frontend_shadcn_1.ScrollArea, null,
                react_1.default.createElement("div", { className: "p-4" },
                    react_1.default.createElement(AdminDocumentForm_1.default, { errors: errors, document: document, fields: activeFields, collection: collection, 
                        //@ts-ignore
                        handleChange: handleChange, handleAddReferences: handleAddReferences, handleRemoveReferences: handleRemoveReferences, handleAddAttachment: handleAddAttachment, handleRemoveAttachment: handleRemoveAttachment, handleAddProducts: handleAddProducts, handleRemoveProducts: handleRemoveProducts, handleUpdateProductPositions: handleUpdateProductPositions })))),
        react_1.default.createElement(components_1.AdminLayoutRight, null,
            react_1.default.createElement(components_1.AdminHeader, { title: "Publish" }),
            react_1.default.createElement(AdminDocumentRightPanel_1.default, { appId: appId, loading: loading, publishLoading: publishLoading, errors: errors, title: title, document: document, setDocument: setDocument, handleChange: handleChange, handleSubmit: handleSubmit, handleTogglePublish: handleTogglePublish, enableUsers: enableUsers }))));
};
exports.default = DocumentEdit;
