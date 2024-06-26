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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_js_1 = require("frontend-js");
var Sortable_1 = __importDefault(require("./Sortable"));
var utils_1 = require("../../../helpers/utils");
var KanBan = function (props) {
    var actions = props.actions, headers = props.headers, fieldName = props.fieldName, resources = props.resources, handleClick = props.handleClick, handleDrop = props.handleDrop, _a = props.displayFields, displayFields = _a === void 0 ? [] : _a, enableFavorites = props.enableFavorites, enableRatings = props.enableRatings, enableEdit = props.enableEdit, enableDelete = props.enableDelete, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    var _b = (0, react_1.useState)({}), groupedResources = _b[0], setGroupedResources = _b[1];
    var handleGroupResources = function (resources, fieldName) {
        var flattenedResources = (0, frontend_js_1.flattenDocuments)(resources);
        var allowedOptions = headers.map(function (header) { return header.value; });
        var grouped = (0, utils_1.groupResourcesByField)(flattenedResources, fieldName, allowedOptions);
        setGroupedResources(grouped);
    };
    (0, react_1.useEffect)(function () {
        if ((resources === null || resources === void 0 ? void 0 : resources.length) > 0 && fieldName) {
            handleGroupResources(resources, fieldName);
        }
    }, [resources, fieldName, headers]);
    if (Object.keys(groupedResources).length == 0)
        return null;
    return (react_1.default.createElement(Sortable_1.default, { actions: actions, headers: headers, columns: groupedResources, handleDrop: handleDrop, handleClick: handleClick, displayFields: displayFields, enableFavorites: enableFavorites, enableRatings: enableRatings, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = KanBan;
