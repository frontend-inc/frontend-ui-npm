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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var dnd_1 = require("@hello-pangea/dnd");
var SortableList = function (props) {
    var items = props.items, _a = props.droppableId, droppableId = _a === void 0 ? "sortable-list" : _a, renderItem = props.renderItem, handleDrop = props.handleDrop;
    var _b = (0, react_1.useState)(items), sorted = _b[0], setSorted = _b[1];
    var reorder = function (items, startIndex, endIndex) {
        var removed = items.splice(startIndex, 1)[0];
        items.splice(endIndex, 0, removed);
        return items.map(function (item, index) { return (__assign(__assign({}, item), { position: index + 1 })); });
    };
    var onDragEnd = function (result) {
        if (!result.destination) {
            return items;
        }
        var sortedItems = reorder(items, result.source.index, result.destination.index);
        setSorted(sortedItems);
        handleDrop(sorted);
    };
    (0, react_1.useEffect)(function () {
        setSorted(items);
    }, [items]);
    return (react_1.default.createElement(dnd_1.DragDropContext, { onDragEnd: onDragEnd },
        react_1.default.createElement(dnd_1.Droppable, { droppableId: String(droppableId) }, function (provided) { return (react_1.default.createElement(material_1.Box, { sx: sx.root },
            react_1.default.createElement(material_1.List, __assign({ sx: sx.list }, provided.droppableProps, { ref: provided.innerRef }), sorted === null || sorted === void 0 ? void 0 : sorted.map(function (item, index) { return (react_1.default.createElement(dnd_1.Draggable, { key: (item === null || item === void 0 ? void 0 : item.id) || index, draggableId: String((item === null || item === void 0 ? void 0 : item.id) || index), index: index }, function (provided, snapshot) { return (react_1.default.createElement(material_1.Box, __assign({ ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps, { sx: __assign(__assign({}, sx.draggableItem), (snapshot.isDragging && sx.isDragging)) }), renderItem(__assign(__assign({}, item), { isDragging: snapshot.isDragging }), index, props))); })); })),
            provided.placeholder)); })));
};
exports.default = SortableList;
var sx = {
    root: {
        width: '100%',
    },
    list: {
        overflowY: 'scroll',
        width: '100%',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    draggableItem: {},
    isDragging: {},
};
