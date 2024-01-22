"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FilterList_1 = __importDefault(require("./FilterList"));
var FilterField = function (props) {
  var _a;
  var _b = props || {},
    field = _b.field,
    _c = _b.filters,
    filters = _c === void 0 ? [] : _c,
    handleFilter = _b.handleFilter;
  var findFilterValues = function (fieldName, filters) {
    var _filters = filters.filter(function (f) {
      return f.field == fieldName;
    });
    return _filters.map(function (f) {
      return f.value;
    });
  };
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    field.variant == "select" &&
      react_1.default.createElement(FilterList_1.default, {
        name: field === null || field === void 0 ? void 0 : field.name,
        where: "OR",
        operator: "in",
        label: field === null || field === void 0 ? void 0 : field.label,
        values: findFilterValues(
          field === null || field === void 0 ? void 0 : field.name,
          filters
        ),
        options:
          (_a = field.options) === null || _a === void 0
            ? void 0
            : _a.map(function (option) {
                return {
                  label: option,
                  value: option,
                };
              }),
        handleClick: handleFilter,
      }),
    field.variant == "boolean" &&
      react_1.default.createElement(FilterList_1.default, {
        name: field === null || field === void 0 ? void 0 : field.name,
        label: field === null || field === void 0 ? void 0 : field.label,
        where: "AND",
        operator: "eq",
        values: findFilterValues(
          field === null || field === void 0 ? void 0 : field.name,
          filters
        ),
        options: [{ label: "Yes", value: true }],
        handleClick: handleFilter,
      })
  );
};
exports.default = FilterField;
