"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useSelected = function () {
  var _a = (0, react_1.useState)([]),
    selected = _a[0],
    setSelected = _a[1];
  var _b = (0, react_1.useState)([]),
    selectedIds = _b[0],
    setSelectedIds = _b[1];
  var handleSelect = function (item) {
    if (
      selectedIds.find(function (id) {
        return id === item.id;
      })
    ) {
      setSelected(
        selected.filter(function (i) {
          return i.id != item.id;
        })
      );
    } else {
      setSelected(selected.concat(item));
    }
  };
  var handleClear = function () {
    setSelected([]);
  };
  (0, react_1.useEffect)(
    function () {
      if (selected) {
        setSelectedIds(
          selected.map(function (item) {
            return item.id;
          })
        );
      }
    },
    [selected]
  );
  return {
    selected: selected,
    selectedIds: selectedIds,
    setSelected: setSelected,
    setSelectedIds: setSelectedIds,
    handleSelect: handleSelect,
    handleClear: handleClear,
  };
};
exports.default = useSelected;
