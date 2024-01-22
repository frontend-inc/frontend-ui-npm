"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var icons_material_1 = require("@mui/icons-material");
var CellHasMany = function (props) {
  var value = props.value,
    handleClick = props.handleClick;
  return react_1.default.createElement(
    components_1.CellButton,
    {
      handleClick: handleClick,
      icon: react_1.default.createElement(icons_material_1.ForkRight, null),
    },
    value
  );
};
exports.default = CellHasMany;
