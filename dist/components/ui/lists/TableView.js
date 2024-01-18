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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("hooks");
var ui_1 = require("components/ui");
var TableView = function (props) {
    var _a = (0, react_1.useState)([]), rows = _a[0], setRows = _a[1];
    var url = props.url, fields = props.fields, handleClick = props.handleClick, handleEditClick = props.handleEditClick;
    var _b = (0, react_1.useState)(), activeField = _b[0], setActiveField = _b[1];
    var _c = (0, hooks_1.useResource)({
        url: url,
    }), loading = _c.loading, findMany = _c.findMany, resources = _c.resources, paginate = _c.paginate, query = _c.query, setQuery = _c.setQuery, page = _c.page, perPage = _c.perPage, numPages = _c.numPages, totalCount = _c.totalCount, sortDirection = _c.sortDirection;
    var handleSearch = function () {
        findMany(__assign(__assign({}, query), { page: 1 }));
    };
    var handleQueryChange = function (ev) {
        var _a;
        var _b = ev.target, value = _b.value, name = _b.name;
        setQuery(__assign(__assign({}, query), (_a = {}, _a[name] = value, _a)));
    };
    var handleClearFilters = function () {
        findMany(__assign(__assign({}, query), { filters: {}, keywords: '' }));
    };
    var handleSort = function (field) {
        var sortDirection = (query === null || query === void 0 ? void 0 : query.sort_by) || 'desc';
        if ((field === null || field === void 0 ? void 0 : field.name) == (activeField === null || activeField === void 0 ? void 0 : activeField.name)) {
            if ((query === null || query === void 0 ? void 0 : query.sort_direction) == 'asc') {
                sortDirection = 'desc';
            }
            else {
                sortDirection = 'asc';
            }
        }
        findMany(__assign(__assign({}, query), { sort_by: field.name, sort_direction: sortDirection }));
        setActiveField(field);
    };
    var handleKeywordSearch = function (keywords) {
        findMany(__assign(__assign({}, query), { keywords: keywords, page: 1 }));
    };
    var handlePaginate = function (ev, page) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, paginate(page)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var formatRows = function (resources) {
        var newRows = resources.map(function (resource) {
            var row = {};
            fields.forEach(function (field) {
                var _a;
                if (['image', 'video'].includes(field === null || field === void 0 ? void 0 : field.variant)) {
                    row[field.name] = (_a = resource[field.name]) === null || _a === void 0 ? void 0 : _a.url;
                }
                else {
                    row[field.name] = resource === null || resource === void 0 ? void 0 : resource.data[field.name];
                }
            });
            return row;
        });
        setRows(newRows);
    };
    (0, react_1.useEffect)(function () {
        if (url) {
            findMany();
        }
    }, [url]);
    (0, react_1.useEffect)(function () {
        if (resources) {
            formatRows(resources);
        }
    }, [resources]);
    return (react_1.default.createElement(ui_1.Table, { loading: resources && loading, fields: fields, rows: rows, handleClick: handleClick, handleEdit: handleEditClick, query: query, handleClearQuery: handleClearFilters, handleQueryChange: handleQueryChange, handleSearch: handleSearch, handleKeywordSearch: handleKeywordSearch, handleSort: handleSort, page: page, perPage: perPage, numPages: numPages, totalCount: totalCount, handlePaginate: handlePaginate }));
};
exports.default = TableView;
