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
var react_1 = __importDefault(require("react"));
var core_1 = require("@dnd-kit/core");
var sortable_1 = require("@dnd-kit/sortable");
var utilities_1 = require("@dnd-kit/utilities");
var lucide_react_1 = require("lucide-react");
var components_1 = require("../../../components");
function SortableItem(props) {
    var _a = props || {}, item = _a.item, items = _a.items, _b = _a.depth, depth = _b === void 0 ? 0 : _b, handleDelete = _a.handleDelete, handleEdit = _a.handleEdit, toggleFolder = _a.toggleFolder;
    var _c = (0, sortable_1.useSortable)({ id: item.id }), attributes = _c.attributes, listeners = _c.listeners, setNodeRef = _c.setNodeRef, transform = _c.transform, transition = _c.transition;
    var style = {
        transform: utilities_1.CSS.Transform.toString(transform),
        transition: transition,
    };
    var childItems = items.filter(function (i) { return i.parent_id === item.id; });
    var handleItemClick = function () {
        if (item.type === 'folder') {
            toggleFolder(item.id);
        }
    };
    return (react_1.default.createElement("li", null,
        react_1.default.createElement("div", { className: "flex flex-row w-full items-center justify-between" },
            react_1.default.createElement("div", __assign({ ref: setNodeRef, style: style }, attributes, listeners, { onClick: handleItemClick, className: "\n            bg-background rounded-lg shadow-sm\n            w-full p-2 cursor-move\n            transition-colors duration-200 ease-in-out hover:bg-muted\n            flex items-center space-x-2\n          " }),
                item.type === 'file' ? react_1.default.createElement(lucide_react_1.File, { size: 16 }) : react_1.default.createElement(lucide_react_1.Folder, { size: 16 }),
                react_1.default.createElement("span", null, item.name)),
            react_1.default.createElement(components_1.MenuButton, { handleEdit: function () { return handleEdit(item); }, handleDelete: function () { return handleDelete(item); } })),
        item.type === 'folder' && item.isOpen && childItems.length > 0 && (react_1.default.createElement("ul", { className: "ml-6 mt-2 space-y-2" }, childItems.map(function (childItem) { return (react_1.default.createElement(SortableItem, { key: childItem.id, item: childItem, items: items, depth: depth + 1, toggleFolder: toggleFolder, handleEdit: function () { return handleEdit(childItem); }, handleDelete: function () { return handleDelete(childItem); } })); })))));
}
function SortableTree(props) {
    var _a = props || {}, items = _a.items, setItems = _a.setItems, handleDrop = _a.handleDrop, handleDelete = _a.handleDelete, handleEdit = _a.handleEdit;
    var sensors = (0, core_1.useSensors)((0, core_1.useSensor)(core_1.PointerSensor), (0, core_1.useSensor)(core_1.KeyboardSensor, {
        coordinateGetter: sortable_1.sortableKeyboardCoordinates,
    }));
    function handleDragEnd(event) {
        var active = event.active, over = event.over;
        if (active.id !== (over === null || over === void 0 ? void 0 : over.id)) {
            setItems(function (items) {
                var oldIndex = items.findIndex(function (item) { return item.id === active.id; });
                var newIndex = items.findIndex(function (item) { return item.id === (over === null || over === void 0 ? void 0 : over.id); });
                var sortedItems = (0, sortable_1.arrayMove)(items, oldIndex, newIndex);
                // Check if the dragged item is being dropped into a folder
                var draggedItem = sortedItems[newIndex];
                var targetItem = sortedItems[newIndex - 1]; // The item before the dragged item
                if (targetItem && draggedItem.type == 'file' && targetItem.type === 'folder' && targetItem.isOpen) {
                    draggedItem.parent_id = targetItem.id;
                }
                else if (targetItem && draggedItem.type == 'file' && targetItem.type == 'file' && targetItem.parent_id) {
                    draggedItem.parent_id = targetItem.parent_id;
                }
                else {
                    draggedItem.parent_id = null;
                }
                // Update positions of all items in the updated array
                sortedItems.forEach(function (item, index) {
                    item.position = index;
                });
                handleDrop(draggedItem, sortedItems);
                return __spreadArray([], sortedItems, true);
            });
        }
    }
    var toggleFolder = function (itemId) {
        setItems(items.map(function (item) {
            return item.id === itemId ? __assign(__assign({}, item), { isOpen: !item.isOpen }) : item;
        }));
    };
    var rootItems = items.filter(function (item) { return item.parent_id === null; });
    return (react_1.default.createElement(core_1.DndContext, { sensors: sensors, collisionDetection: core_1.closestCenter, onDragEnd: handleDragEnd },
        react_1.default.createElement(sortable_1.SortableContext, { items: items.map(function (item) { return item.id; }), strategy: sortable_1.verticalListSortingStrategy },
            react_1.default.createElement("ul", { className: "space-y-2 w-full mx-auto" }, rootItems.map(function (item) { return (react_1.default.createElement(SortableItem, { key: item.id, item: item, items: items, toggleFolder: toggleFolder, handleEdit: handleEdit, handleDelete: handleDelete })); })))));
}
exports.default = SortableTree;
