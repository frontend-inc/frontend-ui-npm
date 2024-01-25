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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useDragDrop = function (props) {
    var _a = (0, react_1.useState)(props.children), columns = _a[0], setColumns = _a[1];
    var reorder = function (items, startIndex, endIndex) {
        var removed = items.splice(startIndex, 1)[0];
        items.splice(endIndex, 0, removed);
        var sorted = items.map(function (item, index) { return (__assign(__assign({}, item), { position: index })); });
        return sorted;
    };
    var reorderColumns = function (items, startIndex, endIndex) {
        var sorted = reorder(items, startIndex, endIndex);
        return {
            event: 'SORT_COLUMNS',
            columns: sorted,
        };
    };
    var reorderChildren = function (columns, source, destination) {
        var current = columns.find(function (i) { return String(i.id) == source.droppableId; });
        var next = columns.find(function (i) { return String(i.id) == destination.droppableId; });
        var target = current.children[source.index];
        // moving to same list
        if (source.droppableId === destination.droppableId) {
            var sorted_1 = reorder(current.children, source.index, destination.index);
            var updatedColumns = columns.map(function (col) {
                if (String(col.id) == source.droppableId) {
                    return __assign(__assign({}, col), { children: sorted_1 });
                }
                else {
                    return col;
                }
            });
            return { event: 'SORT_CHILDREN', columns: updatedColumns, sorted: sorted_1 };
        }
        else {
            // moving to different list
            // remove from original
            current.children.splice(source.index, 1);
            // insert into next
            next.children.splice(destination.index, 0, target);
            var updatedColumns = columns.map(function (col) {
                if (String(col.id) == source.droppableId) {
                    return current;
                }
                else if (String(col.id) == destination.droppableId) {
                    return next;
                }
                else {
                    return col;
                }
            });
            target.parent_id = next.id;
            return {
                event: 'MOVE_CHILDREN',
                target: target,
                sorted: next === null || next === void 0 ? void 0 : next.children,
                columns: updatedColumns,
            };
        }
    };
    (0, react_1.useEffect)(function () {
        setColumns(props.columns);
    }, [props.columns]);
    return {
        columns: columns,
        setColumns: setColumns,
        reorder: reorder,
        reorderColumns: reorderColumns,
        reorderChildren: reorderChildren,
    };
};
exports.default = useDragDrop;
