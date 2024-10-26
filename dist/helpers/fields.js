"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFieldConditions = void 0;
var validateFieldConditions = function (conditions, item) {
    if (!item)
        return;
    var isValid = true;
    if ((conditions === null || conditions === void 0 ? void 0 : conditions.length) > 0) {
        conditions.forEach(function (condition) {
            var name = condition.name, operator = condition.operator, value = condition.value;
            switch (operator) {
                case 'eq':
                    if (item[name] !== value) {
                        isValid = false;
                    }
                    break;
                case 'neq':
                    if (item[name] === value) {
                        isValid = false;
                    }
                    break;
                case 'in':
                    if (!value.includes(item[name])) {
                        isValid = false;
                    }
                    break;
                case 'nin':
                    if (value.includes(item[name])) {
                        isValid = false;
                    }
                    break;
            }
        });
    }
    return isValid;
};
exports.validateFieldConditions = validateFieldConditions;
