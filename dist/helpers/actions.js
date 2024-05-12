"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildActions = void 0;
var buildActions = function (_a) {
    var enableEdit = _a.enableEdit, enableDelete = _a.enableDelete, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete, actions = _a.actions;
    var EDIT_ACTION = {
        label: 'Edit',
        color: 'secondary',
        name: 'click',
        onClick: handleEdit,
    };
    var DELETE_ACTION = {
        label: 'Delete',
        color: 'error',
        name: 'click',
        onClick: handleDelete,
    };
    var newActions = [];
    if (actions) {
        newActions = newActions.concat(actions);
    }
    if (enableEdit && handleEdit) {
        //@ts-ignore
        newActions.push(EDIT_ACTION);
    }
    if (enableDelete && handleDelete) {
        //@ts-ignore
        newActions.push(DELETE_ACTION);
    }
    return newActions;
};
exports.buildActions = buildActions;
