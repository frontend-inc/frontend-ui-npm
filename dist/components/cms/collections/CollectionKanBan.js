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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_js_1 = require("frontend-js");
var components_1 = require("../../../components");
var frontend_js_2 = require("frontend-js");
var components_2 = require("../../../components");
var material_1 = require("@mui/material");
var context_1 = require("../../../context");
var frontend_js_3 = require("frontend-js");
var CollectionKanBan = function (props) {
    var _a = (0, react_1.useContext)(context_1.AppContext), clientUrl = _a.clientUrl, setAuthOpen = _a.setAuthOpen;
    var currentUser = (0, frontend_js_2.useAuth)().currentUser;
    var url = props.url, headers = props.headers, _b = props.fields, fields = _b === void 0 ? [] : _b, fieldName = props.fieldName, _c = props.displayFields, displayFields = _c === void 0 ? [] : _c, _d = props.actions, actions = _d === void 0 ? [] : _d, _e = props.enableOverlay, enableOverlay = _e === void 0 ? false : _e, enableEdit = props.enableEdit, enableFavorites = props.enableFavorites, enableRatings = props.enableRatings, enableUsers = props.enableUsers, rest = __rest(props, ["url", "headers", "fields", "fieldName", "displayFields", "actions", "enableOverlay", "enableEdit", "enableFavorites", "enableRatings", "enableUsers"]);
    var _f = (0, frontend_js_1.useDocuments)({
        url: url
    }), loading = _f.loading, errors = _f.errors, resource = _f.resource, resources = _f.resources, setResource = _f.setResource, create = _f.create, update = _f.update, destroy = _f.destroy, handleDataChange = _f.handleDataChange, removeAttachment = _f.removeAttachment, findMany = _f.findMany, reloadMany = _f.reloadMany, updatePositions = _f.updatePositions;
    var _g = (0, react_1.useState)(false), open = _g[0], setOpen = _g[1];
    var _h = (0, react_1.useState)(false), openModal = _h[0], setOpenModal = _h[1];
    var _j = (0, react_1.useState)(false), openDeleteModal = _j[0], setOpenDeleteModal = _j[1];
    var _k = (0, react_1.useState)(), activeResource = _k[0], setActiveResource = _k[1];
    var handleClick = function (resource) {
        setActiveResource(resource);
        setOpen(true);
    };
    var handleAdd = function () {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        setResource({
            id: null,
        });
        setOpenModal(true);
    };
    var handleEdit = function (item) {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        setResource(item);
        setOpenModal(true);
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
                        return [2 /*return*/, setAuthOpen(true)];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    resp = void 0;
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id)) return [3 /*break*/, 3];
                    return [4 /*yield*/, update(resource)];
                case 2:
                    resp = _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, create(resource)];
                case 4:
                    resp = _a.sent();
                    _a.label = 5;
                case 5:
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        /*
                        if(_resource?.id) {
                          await addLinks(resp.id, [_resource?.id])
                          reloadMany()
                        }*/
                        setResource({});
                        setOpenModal(false);
                        reloadMany();
                    }
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    console.log('Error', err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteClick = function (item) {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        setResource(item);
        setOpenDeleteModal(true);
    };
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
                        return [2 /*return*/, setAuthOpen(true)];
                    return [4 /*yield*/, destroy(resource === null || resource === void 0 ? void 0 : resource.id)];
                case 1:
                    _a.sent();
                    setOpenDeleteModal(false);
                    setOpenModal(false);
                    setResource({});
                    reloadMany();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleRemove = function (name) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
                        return [2 /*return*/, setAuthOpen(true)];
                    return [4 /*yield*/, removeAttachment(resource === null || resource === void 0 ? void 0 : resource.id, name)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDrop = function (movedItem, overContainer, columns) { return __awaiter(void 0, void 0, void 0, function () {
        var movedDocument, columnItems;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    movedDocument = __assign({}, movedItem);
                    if (frontend_js_2.SYSTEM_FIELDS.includes(fieldName)) {
                        movedDocument = __assign(__assign({}, movedDocument), (_a = {}, _a[fieldName] = overContainer, _a));
                    }
                    else {
                        movedDocument = __assign(__assign({}, movedDocument), { data: __assign(__assign({}, movedDocument.data), (_b = {}, _b[fieldName] = overContainer, _b)) });
                    }
                    // Update the moved item
                    return [4 /*yield*/, update(movedDocument)];
                case 1:
                    // Update the moved item
                    _c.sent();
                    columnItems = Object.keys(columns).map(function (key) { return columns[key]; });
                    columnItems = columnItems.reduce(function (acc, val) { return acc.concat(val); }, []);
                    columnItems = columnItems.map(function (item, index) {
                        return __assign(__assign({}, item), { position: index });
                    });
                    return [4 /*yield*/, updatePositions(columnItems)];
                case 2:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (url) {
            findMany({
                sort_by: 'position',
                sort_direction: 'asc',
                page: 1,
                per_page: 1000
            });
        }
    }, [url]);
    if (!headers || !fieldName || (resources === null || resources === void 0 ? void 0 : resources.length) == 0)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.KanBan, { actions: actions, resources: resources, headers: headers, fieldName: fieldName, displayFields: displayFields, handleClick: handleClick, handleDrop: handleDrop, enableEdit: enableEdit, enableDelete: enableEdit, handleEdit: handleEdit, handleDelete: handleDeleteClick, enableFavorites: enableFavorites, enableRatings: enableRatings }),
        react_1.default.createElement(components_2.Drawer, { open: openModal, handleClose: function () { return setOpenModal(false); }, title: (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', actions: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(components_2.IconLoading, { loading: loading }) }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save') },
            react_1.default.createElement(components_2.Form, { loading: loading, errors: errors, fields: fields, resource: (0, frontend_js_3.flattenDocument)(resource), handleChange: handleDataChange, handleRemove: handleRemove })),
        react_1.default.createElement(components_2.AlertModal, { open: openDeleteModal, handleClose: function () { return setOpenDeleteModal(false); }, title: "Are you sure you want to delete this item?", description: "This action cannot be reversed.", handleConfirm: handleDelete }),
        react_1.default.createElement(components_2.HeroModal, { open: open, handleClose: function () { return setOpen(false); }, actions: actions, resource: activeResource, url: url, displayFields: displayFields, enableOverlay: enableOverlay, enableEdit: enableEdit, enableFavorites: enableFavorites, enableRatings: enableRatings, handleEdit: function () { return handleEdit(activeResource); } })));
};
exports.default = CollectionKanBan;
