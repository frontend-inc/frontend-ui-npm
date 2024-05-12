"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildActions = void 0;
var buildActions = function (_a) {
    var enableEdit = _a.enableEdit, handleEdit = _a.handleEdit, actions = _a.actions;
    var EDIT_ACTION = {
        label: 'Edit',
        color: 'secondary',
        name: 'click',
        onClick: handleEdit,
    };
    var newActions = [];
    if (actions) {
        newActions = newActions.concat(actions);
    }
    if (enableEdit) {
        //@ts-ignore
        newActions.push(EDIT_ACTION);
    }
    return newActions;
};
exports.buildActions = buildActions;
