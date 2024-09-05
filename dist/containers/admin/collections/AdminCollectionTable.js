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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var hooks_2 = require("../../../hooks");
var components_2 = require("../../../components");
var components_3 = require("../../../components");
var components_4 = require("../../../components");
var AdminToolbarMenu_1 = __importDefault(require("./AdminToolbarMenu"));
var router_1 = require("next/router");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var material_1 = require("@mui/material");
var constants_1 = require("../../../constants");
var frontend_js_1 = require("frontend-js");
var AdminCollectionTable = function (props) {
    var collection = props.collection, handleSaveView = props.handleSaveView;
    var apiQuery = new frontend_js_1.ApiQuery();
    var router = (0, router_1.useRouter)();
    var collectionId = (router === null || router === void 0 ? void 0 : router.query).collection_id;
    var fields = (collection || {}).fields;
    var _a = (0, react_1.useState)([]), selected = _a[0], setSelected = _a[1];
    var _b = (0, react_1.useState)(false), showDeleteModal = _b[0], setShowDeleteModal = _b[1];
    var _c = (0, react_1.useState)(''), activeSrc = _c[0], setActiveSrc = _c[1];
    var _d = (0, react_1.useState)(''), activeImage = _d[0], setActiveImage = _d[1];
    var _e = (0, react_1.useState)(''), activeText = _e[0], setActiveText = _e[1];
    var _f = (0, react_1.useState)(false), showTextModal = _f[0], setShowTextModal = _f[1];
    var _g = (0, react_1.useState)(false), showImageModal = _g[0], setShowImageModal = _g[1];
    var _h = (0, react_1.useState)(false), showVideoModal = _h[0], setShowVideoModal = _h[1];
    var _j = (0, react_1.useState)(false), showFilters = _j[0], setShowFilters = _j[1];
    var _k = (0, react_1.useState)(), visibleFields = _k[0], setVisibleFields = _k[1];
    var _l = (0, hooks_2.useAdmin)(), openLayoutLeft = _l.openLayoutLeft, clientUrl = _l.clientUrl;
    var _m = (0, hooks_2.useDocuments)({
        contentType: collectionId,
    }), query = _m.query, setQuery = _m.setQuery, loading = _m.loading, delayedLoading = _m.delayedLoading, documents = _m.documents, findDocuments = _m.findDocuments, deleteDocument = _m.deleteDocument, deleteDocuments = _m.deleteDocuments, publish = _m.publish, unpublish = _m.unpublish, paginate = _m.paginate, page = _m.page, perPage = _m.perPage, numPages = _m.numPages, totalCount = _m.totalCount;
    var showAlertSuccess = (0, hooks_1.useAlerts)().showAlertSuccess;
    var handleDeleteSelectedClick = function (items) {
        setSelected(items);
        setShowDeleteModal(true);
    };
    var handleEditSelectedClick = function (items) {
        var itemIds = items.map(function (item) { return item.id; });
        router.push("".concat(clientUrl, "/collections/").concat(collection.name, "/documents/edit?ids=").concat(itemIds));
    };
    var handleEditClick = function (row) {
        router.push("".concat(clientUrl, "/collections/").concat(collection.name, "/documents/").concat(row.id));
    };
    var handleDeleteRow = function () { return __awaiter(void 0, void 0, void 0, function () {
        var selectedIds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!((selected === null || selected === void 0 ? void 0 : selected.length) === 1)) return [3 /*break*/, 2];
                    return [4 /*yield*/, deleteDocument(selected[0].id)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    if (!((selected === null || selected === void 0 ? void 0 : selected.length) > 1)) return [3 /*break*/, 4];
                    selectedIds = selected.map(function (row) { return row.id; });
                    return [4 /*yield*/, deleteDocuments(selectedIds)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    setSelected([]);
                    setShowDeleteModal(false);
                    findDocuments();
                    return [2 /*return*/];
            }
        });
    }); };
    var handlePublish = function (items) { return __awaiter(void 0, void 0, void 0, function () {
        var selectedIds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selectedIds = items.map(function (row) { return row.id; });
                    return [4 /*yield*/, publish(selectedIds)];
                case 1:
                    _a.sent();
                    setSelected([]);
                    findDocuments();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleUnpublish = function (items) { return __awaiter(void 0, void 0, void 0, function () {
        var selectedIds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selectedIds = items.map(function (row) { return row.id; });
                    return [4 /*yield*/, unpublish(selectedIds)];
                case 1:
                    _a.sent();
                    setSelected([]);
                    findDocuments();
                    return [2 /*return*/];
            }
        });
    }); };
    var handlePaginate = function (page) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, paginate(page)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleCellClick = function (value, row, field) {
        switch (field.variant) {
            case 'habtm':
                handleCellHABTMClick({
                    values: value.map(function (v) { return v.id; }),
                    collection: field === null || field === void 0 ? void 0 : field.foreign_collection,
                });
                break;
            case 'user':
                handleCellBelongsToClick({ value: value, field: 'user_id' });
                break;
            case 'team':
                handleCellBelongsToClick({ value: value, field: 'team_id' });
                break;
            case 'url':
                handleCellLinkClick(value);
                break;
            case 'image':
                handleCellImageClick(value);
                break;
            case 'video':
                handleCellVideoClick(value);
                break;
            case 'file':
                handleCellFileClick(value);
                break;
            case 'text':
                handleCellStringClick(value);
                break;
        }
    };
    var handleCellImageClick = function (image) {
        if (image === null || image === void 0 ? void 0 : image.url) {
            setActiveImage(image);
            setShowImageModal(true);
        }
    };
    var handleCellVideoClick = function (video) {
        if (video === null || video === void 0 ? void 0 : video.url) {
            setShowVideoModal(true);
            setActiveSrc(video.url);
        }
    };
    var handleCellFileClick = function (file) {
        if (file === null || file === void 0 ? void 0 : file.url) {
            window.open(file.url, '_blank');
        }
    };
    var handleCellStringClick = function (value) {
        if (value) {
            setShowTextModal(true);
            setActiveText(value);
        }
    };
    var handleCellBelongsToClick = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, resource, belongsToField, filters;
        var _b;
        return __generator(this, function (_c) {
            _a = params || {}, resource = _a.value, belongsToField = _a.field;
            filters = {
                AND: [
                    (_b = {},
                        _b[belongsToField] = { eq: resource === null || resource === void 0 ? void 0 : resource.id },
                        _b),
                ],
            };
            apiQuery.filter(filters);
            router.push("".concat(clientUrl, "/collections/").concat(collection === null || collection === void 0 ? void 0 : collection.name, "?").concat(apiQuery.url()));
            return [2 /*return*/];
        });
    }); };
    var handleCellHABTMClick = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, values, collection, filters;
        return __generator(this, function (_b) {
            _a = params || {}, values = _a.values, collection = _a.collection;
            filters = {
                AND: [
                    {
                        id: { in: values },
                    },
                ],
            };
            apiQuery.filter(filters);
            router.push("".concat(clientUrl, "/collections/").concat(collection === null || collection === void 0 ? void 0 : collection.name, "?").concat(apiQuery.url()));
            return [2 /*return*/];
        });
    }); };
    var handleQueryChange = function (ev) {
        var _a;
        var _b = ev.target, value = _b.value, name = _b.name;
        setQuery(__assign(__assign({}, query), (_a = {}, _a[name] = value, _a)));
    };
    var handleKeywordSearch = function (searchTerm) {
        var searchQuery = __assign(__assign({}, query), { keywords: searchTerm });
        handleSearch(searchQuery);
    };
    var handleSearch = function (searchQuery) {
        setShowFilters(false);
        var query = __assign(__assign({}, searchQuery), { page: 1, per_page: 20 });
        apiQuery.where(query);
        router.push("".concat(clientUrl, "/collections/").concat(collection.name, "?").concat(apiQuery.url()));
    };
    var handleClearFilters = function () {
        setShowFilters(false);
        var query = __assign(__assign({}, router.query), { filters: {
                AND: [],
                OR: [],
            }, keywords: '' });
        apiQuery.where(query);
        router.push("".concat(clientUrl, "/collections/").concat(collection.name, "?").concat(apiQuery.url()));
    };
    var handleSort = function (field) {
        apiQuery.parseURL(router.query);
        apiQuery.sort(field === null || field === void 0 ? void 0 : field.name);
        router.push("".concat(clientUrl, "/collections/").concat(collection.name, "?").concat(apiQuery.url()));
    };
    var handleCellLinkClick = function (value) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            (0, copy_to_clipboard_1.default)(value);
            showAlertSuccess('Link copied to clipboard');
            return [2 /*return*/];
        });
    }); };
    var handleSetVisibleFields = function (fields) {
        var startFields = [constants_1.ID_FIELD, constants_1.USER_FIELD, constants_1.TEAM_FIELD];
        var endFields = [constants_1.PUBLISHED_FIELD];
        var customFields = fields.filter(function (f) { return f.visible; });
        var allFields = __spreadArray(__spreadArray(__spreadArray([], startFields, true), customFields, true), endFields, true);
        setVisibleFields(allFields);
    };
    (0, react_1.useEffect)(function () {
        if (fields) {
            handleSetVisibleFields(fields);
        }
    }, [fields]);
    (0, react_1.useEffect)(function () {
        if (router === null || router === void 0 ? void 0 : router.query) {
            var parsedQuery = apiQuery.parseURL(router.query).query();
            //@ts-ignore
            findDocuments(parsedQuery);
        }
    }, [router === null || router === void 0 ? void 0 : router.query]);
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(components_2.Table, { styles: __assign(__assign({}, sx.table), (openLayoutLeft && sx.tableLayoutLeft)), enableSelect: true, enableEdit: true, enableDelete: true, loading: documents && delayedLoading, 
            //@ts-ignore
            headers: visibleFields, rows: documents, handleClick: handleCellClick, handleEdit: handleEditClick, handleEditSelected: handleEditSelectedClick, handleDelete: handleDeleteSelectedClick, handlePublish: handlePublish, handleUnpublish: handleUnpublish, 
            //selected={selected}
            query: query, handleClearQuery: handleClearFilters, handleQueryChange: handleQueryChange, handleSearch: handleSearch, handleKeywordSearch: handleKeywordSearch, handleSort: handleSort, page: page, perPage: perPage, numPages: numPages, totalCount: totalCount, handlePaginate: handlePaginate, disableBorderRadius: true, secondaryActions: react_1.default.createElement(AdminToolbarMenu_1.default, { handleSaveView: handleSaveView }) }),
        fields && (react_1.default.createElement(components_4.TableFilterDrawer, { loading: loading, open: showFilters, handleClose: function () { return setShowFilters(false); }, fields: fields, handleSearch: handleSearch, query: query, handleChange: handleQueryChange, handleClearFilters: handleClearFilters })),
        react_1.default.createElement(components_3.TextModal, { open: showTextModal, text: activeText, handleClose: function () { return setShowTextModal(false); } }),
        react_1.default.createElement(components_3.ImageModal, { open: showImageModal, image: activeImage, handleClose: function () { return setShowImageModal(false); } }),
        react_1.default.createElement(components_3.AdminVideoModal, { enableCopy: true, enableDownload: true, open: showVideoModal, src: activeSrc, handleClose: function () { return setShowVideoModal(false); } }),
        react_1.default.createElement(components_1.AlertModal, { open: showDeleteModal, handleClose: function () { return setShowDeleteModal(false); }, handleConfirm: handleDeleteRow })));
};
exports.default = AdminCollectionTable;
var sx = {
    table: {
        height: {
            sm: 'calc(100vh - 170px)',
            xs: 'calc(100vh - 170px)',
        },
        width: 'calc(100vw - 60px)',
    },
    tableLayoutLeft: {
        width: {
            sm: 'calc(100vw - 380px)',
            xs: 'calc(100vw - 60px)',
        },
    },
    button: {
        textWrap: 'no-wrap',
    },
};
