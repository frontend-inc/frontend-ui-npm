"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useFilters = function (props) {
  var _a = props || {},
    query = _a.query,
    handleSubmit = _a.handleSubmit;
  var _b = (0, react_1.useState)(false),
    showFilterModal = _b[0],
    setShowFilterModal = _b[1];
  var _c = (0, react_1.useState)(),
    filter = _c[0],
    setFilter = _c[1];
  var _d = (0, react_1.useState)([]),
    activeFilters = _d[0],
    setActiveFilters = _d[1];
  var handleOpenFilterModal = function () {
    setShowFilterModal(true);
  };
  var handleCloseFilterModal = function () {
    setShowFilterModal(false);
  };
  var findFilter = function (fieldName, filters) {
    var foundFilter = filters.find(function (f) {
      return f.field == fieldName;
    });
    setFilter(foundFilter);
    return foundFilter;
  };
  var handleAddFilter = function (filter) {
    var updatedFilters = [];
    if (
      activeFilters === null || activeFilters === void 0
        ? void 0
        : activeFilters.find(function (_a) {
            var field = _a.field,
              where = _a.where,
              operator = _a.operator,
              value = _a.value;
            return (
              field ==
                (filter === null || filter === void 0
                  ? void 0
                  : filter.field) &&
              where ==
                (filter === null || filter === void 0
                  ? void 0
                  : filter.where) &&
              operator ==
                (filter === null || filter === void 0
                  ? void 0
                  : filter.operator) &&
              value ==
                (filter === null || filter === void 0 ? void 0 : filter.value)
            );
          })
    ) {
      updatedFilters =
        activeFilters === null || activeFilters === void 0
          ? void 0
          : activeFilters.filter(function (_a) {
              var field = _a.field,
                where = _a.where,
                operator = _a.operator,
                value = _a.value;
              return !(
                field ==
                  (filter === null || filter === void 0
                    ? void 0
                    : filter.field) &&
                where ==
                  (filter === null || filter === void 0
                    ? void 0
                    : filter.where) &&
                operator ==
                  (filter === null || filter === void 0
                    ? void 0
                    : filter.operator) &&
                value ==
                  (filter === null || filter === void 0 ? void 0 : filter.value)
              );
            });
    } else {
      updatedFilters = __spreadArray(
        __spreadArray([], activeFilters, true),
        [filter],
        false
      );
    }
    handleFilterSearch(updatedFilters);
    setActiveFilters(updatedFilters);
  };
  var isBlank = function (value) {
    return (
      value === "" ||
      value === false ||
      value == null ||
      (Array.isArray(value) && value.length === 0)
    );
  };
  var handleFilterSearch = function (activeFilters) {
    // Convert the filter array into a searchable query object
    var filters = {};
    activeFilters
      .filter(function (filter) {
        return !isBlank(
          filter === null || filter === void 0 ? void 0 : filter.value
        );
      })
      .forEach(function (filter) {
        var _a, _b, _c;
        var where = filter.where,
          field = filter.field,
          operator = filter.operator,
          value = filter.value;
        if (!filters[where]) {
          filters[where] = [];
        }
        filters = __assign(
          __assign({}, filters),
          ((_a = {}),
          (_a[where] = __spreadArray(
            __spreadArray([], filters[where], true),
            [
              ((_b = {}),
              (_b[field] = ((_c = {}), (_c[operator] = value), _c)),
              _b),
            ],
            false
          )),
          _a)
        );
      });
    var searchQuery = {
      page: 1,
      keywords:
        (query === null || query === void 0 ? void 0 : query.keywords) || "",
      per_page:
        (query === null || query === void 0 ? void 0 : query.per_page) || 20,
      sort_by:
        (query === null || query === void 0 ? void 0 : query.sort_by) || "id",
      sort_direction:
        (query === null || query === void 0 ? void 0 : query.sort_direction) ||
        "desc",
      filters: filters,
    };
    handleSubmit && handleSubmit(searchQuery);
    setShowFilterModal(false);
  };
  // Convert the query object into an array of filter options
  var formatFilterArray = function (filters) {
    var formattedFilters = [];
    if (typeof filters === "object") {
      Object.keys(filters).forEach(function (where) {
        filters[where].forEach(function (filter) {
          var field = Object.keys(filter)[0];
          var operator = Object.keys(filter[field])[0];
          var value = filter[field][operator];
          formattedFilters.push({
            where: where,
            field: field,
            operator: operator,
            value: value,
          });
        });
      });
      setActiveFilters(formattedFilters);
    }
    return formattedFilters;
  };
  (0, react_1.useEffect)(
    function () {
      if (query === null || query === void 0 ? void 0 : query.filters) {
        formatFilterArray(
          query === null || query === void 0 ? void 0 : query.filters
        );
      }
    },
    [query]
  );
  return {
    filter: filter,
    findFilter: findFilter,
    showFilterModal: showFilterModal,
    setShowFilterModal: setShowFilterModal,
    handleOpenFilterModal: handleOpenFilterModal,
    handleCloseFilterModal: handleCloseFilterModal,
    handleAddFilter: handleAddFilter,
    activeFilters: activeFilters,
    setActiveFilters: setActiveFilters,
  };
};
exports.default = useFilters;
