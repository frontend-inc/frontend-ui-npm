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
Object.defineProperty(exports, "__esModule", { value: true });
exports.reorderList = exports.reorder = void 0;
var reorder = function (items, startIndex, endIndex) {
    var result = Array.from(items);
    var removed = result.splice(startIndex, 1)[0];
    result.splice(endIndex, 0, removed);
    var sorted = result.map(function (item, index) { return (__assign(__assign({}, item), { position: index })); });
    return sorted;
};
exports.reorder = reorder;
var reorderList = function (items, source, destination) {
    var current = items.find(function (i) { return i.id === source.droppableId; });
    var next = items.find(function (i) { return i.id === destination.droppableId; });
    var target = current.items[source.index];
    // moving to same list
    if (source.droppableId === destination.droppableId) {
        var reordered_1 = (0, exports.reorder)(__spreadArray([], current.items, true), source.index, destination.index);
        var updatedItems = items.map(function (i) {
            if (i.id === source.droppableId) {
                return __assign(__assign({}, i), { items: reordered_1 });
            }
            else {
                return i;
            }
        });
        return updatedItems;
    }
    else {
        // moving to different list
        // remove from original
        current.items.splice(source.index, 1);
        // insert into next
        next.items.splice(destination.index, 0, target);
        var updatedItems = items.map(function (i) {
            if (i.id === source.droppableId) {
                return current;
            }
            else if (i.id === destination.droppableId) {
                return next;
            }
            else {
                return i;
            }
        });
        return updatedItems;
    }
};
exports.reorderList = reorderList;
