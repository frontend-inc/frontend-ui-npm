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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var context_1 = require("../../context");
var frontend_js_1 = require("frontend-js");
var useForms = function (params) {
    var parentResource = (params || {}).parentResource;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var setAuthOpen = (0, react_1.useContext)(context_1.AppContext).setAuthOpen;
    var _a = (0, frontend_js_1.useResourceContext)(), loading = _a.delayedLoading, errors = _a.errors, _b = _a.query, query = _b === void 0 ? {} : _b, findMany = _a.findMany, resource = _a.resource, setResource = _a.setResource, addReferences = _a.addReferences, create = _a.create, update = _a.update, destroy = _a.destroy, handleChange = _a.handleChange, removeAttachment = _a.removeAttachment, reloadMany = _a.reloadMany, openEdit = _a.openEdit, openDelete = _a.openDelete, openShow = _a.openShow, openReferences = _a.openReferences, setOpenEdit = _a.setOpenEdit, setOpenDelete = _a.setOpenDelete, setOpenShow = _a.setOpenShow, setOpenReferences = _a.setOpenReferences;
    var handleShow = function (resource) {
        setResource(resource);
        setOpenEdit(false);
        setOpenShow(true);
    };
    var handleAdd = function () {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        setResource({
            id: undefined,
        });
        setOpenShow(false);
        setOpenEdit(true);
    };
    var handleEdit = function (resource) {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        setResource(resource);
        setOpenShow(false);
        setOpenEdit(true);
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
                    _a.trys.push([1, 8, , 9]);
                    resp = void 0;
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id)) return [3 /*break*/, 3];
                    return [4 /*yield*/, update(resource)];
                case 2:
                    resp = _a.sent();
                    return [3 /*break*/, 7];
                case 3: return [4 /*yield*/, create(resource)];
                case 4:
                    resp = _a.sent();
                    if (!((parentResource === null || parentResource === void 0 ? void 0 : parentResource.id) && (resp === null || resp === void 0 ? void 0 : resp.id))) return [3 /*break*/, 6];
                    return [4 /*yield*/, addReferences(resp.id, [parentResource === null || parentResource === void 0 ? void 0 : parentResource.id])];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    setResource({});
                    _a.label = 7;
                case 7:
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setOpenEdit(false);
                        reloadMany();
                    }
                    return [3 /*break*/, 9];
                case 8:
                    err_1 = _a.sent();
                    console.log('Error', err_1);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteClick = function (resource) {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        setResource(resource);
        setOpenDelete(true);
    };
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
                        return [2 /*return*/, setAuthOpen(true)];
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id))
                        return [2 /*return*/];
                    return [4 /*yield*/, destroy(resource === null || resource === void 0 ? void 0 : resource.id)];
                case 1:
                    _a.sent();
                    setOpenDelete(false);
                    setOpenEdit(false);
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
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id))
                        return [2 /*return*/];
                    return [4 /*yield*/, removeAttachment(resource === null || resource === void 0 ? void 0 : resource.id, name)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return {
        loading: loading,
        errors: errors,
        resource: resource,
        setResource: setResource,
        handleChange: handleChange,
        handleAdd: handleAdd,
        handleEdit: handleEdit,
        handleDelete: handleDelete,
        handleDeleteClick: handleDeleteClick,
        handleRemove: handleRemove,
        handleShow: handleShow,
        handleSubmit: handleSubmit,
        openEdit: openEdit,
        openDelete: openDelete,
        openShow: openShow,
        openReferences: openReferences,
        setOpenEdit: setOpenEdit,
        setOpenDelete: setOpenDelete,
        setOpenShow: setOpenShow,
        setOpenReferences: setOpenReferences,
    };
};
exports.default = useForms;
