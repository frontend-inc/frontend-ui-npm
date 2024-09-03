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
var components_1 = require("../../../components");
var __1 = require("../..");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var frontend_js_1 = require("frontend-js");
var AdminFieldItem = function (props) {
    var url = props.url, resource = props.resource, sortable = props.sortable, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, handleReload = props.handleReload;
    var _a = (0, frontend_js_1.useResource)({
        url: url,
        name: 'field'
    }), loading = _a.loading, field = _a.resource, setField = _a.setResource, updateField = _a.update;
    var handleUpdateField = function (name) { return __awaiter(void 0, void 0, void 0, function () {
        var newField;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    newField = __assign(__assign({}, field), (_a = {}, _a[name] = field[name] == true ? false : true, _a));
                    setField(newField);
                    return [4 /*yield*/, updateField(newField)];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        setField(resource);
    }, [resource]);
    return (react_1.default.createElement(components_1.ResourceListItem, { enableBorder: true, sortable: sortable, avatar: react_1.default.createElement(__1.FieldIcon, { variant: field === null || field === void 0 ? void 0 : field.variant }), primary: field === null || field === void 0 ? void 0 : field.label, secondary: field === null || field === void 0 ? void 0 : field.name, secondaryActions: react_1.default.createElement(react_1.default.Fragment, null,
            field.column && !field.array && (react_1.default.createElement(material_1.Tooltip, { title: "Search filter field" },
                react_1.default.createElement(material_1.IconButton, { onClick: function () { return handleUpdateField('filter_field'); } }, field.filter_field ? (react_1.default.createElement(icons_material_1.FilterAltOutlined, { color: "primary" })) : (react_1.default.createElement(icons_material_1.FilterAltOffOutlined, null))))),
            field.column && !field.array && (react_1.default.createElement(material_1.Tooltip, { title: "Search sort field" },
                react_1.default.createElement(material_1.IconButton, { onClick: function () { return handleUpdateField('sort_field'); } }, field.sort_field ? (react_1.default.createElement(icons_material_1.SortByAlpha, { color: "primary" })) : (react_1.default.createElement(icons_material_1.SortByAlpha, null))))),
            (field.column || field.attachment) && (field === null || field === void 0 ? void 0 : field.name) != 'title' && (react_1.default.createElement(material_1.Tooltip, { title: "Display in search results" },
                react_1.default.createElement(material_1.IconButton, { onClick: function () { return handleUpdateField('display_field'); } }, field.display_field ? (react_1.default.createElement(icons_material_1.ManageSearch, { color: "primary" })) : (react_1.default.createElement(icons_material_1.ManageSearch, null))))),
            react_1.default.createElement(material_1.Tooltip, { title: "Display in forms" },
                react_1.default.createElement(material_1.IconButton, { onClick: function () { return handleUpdateField('form_field'); } }, field.form_field ? react_1.default.createElement(icons_material_1.EditNote, { color: "primary" }) : react_1.default.createElement(icons_material_1.EditNote, null))),
            (field.column || field.attachment) && (react_1.default.createElement(material_1.Tooltip, { title: "Display as table header" },
                react_1.default.createElement(material_1.IconButton, { onClick: function () { return handleUpdateField('table_header'); } }, field.table_header ? (react_1.default.createElement(icons_material_1.TableRowsOutlined, { fontSize: "small", color: "primary" })) : (react_1.default.createElement(icons_material_1.TableRowsOutlined, { fontSize: "small" }))))),
            react_1.default.createElement(components_1.Label, { label: field === null || field === void 0 ? void 0 : field.variant })), handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = AdminFieldItem;
