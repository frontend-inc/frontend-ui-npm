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
var Sortable_1 = __importDefault(require("./Sortable"));
var utils_1 = require("../../../helpers/utils");
var KanBan = function (props) {
    var loading = props.loading, actions = props.actions, headers = props.headers, fieldName = props.fieldName, resources = props.resources, activeResource = props.activeResource, handleClick = props.handleClick, handleDrop = props.handleDrop, _a = props.displayFields, displayFields = _a === void 0 ? [] : _a, enableOverlay = props.enableOverlay, enableGradient = props.enableGradient, enableComments = props.enableComments, enableFavorites = props.enableFavorites, enableRatings = props.enableRatings, enableEdit = props.enableEdit, enableDelete = props.enableDelete, enableCreate = props.enableCreate, handleEdit = props.handleEdit, handleDelete = props.handleDelete, handleAdd = props.handleAdd, handleComment = props.handleComment;
    var _b = (0, react_1.useState)({}), groupedResources = _b[0], setGroupedResources = _b[1];
    var handleGroupResources = function (resources, fieldName) {
        var sortedResources = resources.sort(function (a, b) { return a.position - b.position; });
        var allowedOptions = headers.map(function (header) { return header.value; });
        var grouped = (0, utils_1.groupResourcesByField)(sortedResources, fieldName, allowedOptions);
        setGroupedResources(grouped);
    };
    (0, react_1.useEffect)(function () {
        if (resources) {
            handleGroupResources(resources, fieldName);
        }
    }, [resources, fieldName, headers]);
    if (Object.keys(groupedResources).length == 0)
        return null;
    return (react_1.default.createElement(Sortable_1.default, { loading: loading, actions: actions, headers: headers, columns: groupedResources, activeResource: activeResource, handleDrop: handleDrop, handleClick: handleClick, displayFields: displayFields, enableOverlay: enableOverlay, enableGradient: enableGradient, enableComments: enableComments, enableFavorites: enableFavorites, enableRatings: enableRatings, enableEdit: enableEdit, enableDelete: enableDelete, enableCreate: enableCreate, handleEdit: handleEdit, handleDelete: handleDelete, handleAdd: handleAdd, handleComment: handleComment }));
};
exports.default = KanBan;
