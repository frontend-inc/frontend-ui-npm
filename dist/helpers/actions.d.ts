import { ActionType } from '..';
type BuildActionParams = {
    enableEdit?: boolean;
    handleEdit?: (item: any) => void;
    enableDelete?: boolean;
    handleDelete?: (item: any) => void;
    actions: ActionType[];
};
export declare const buildActions: ({ enableEdit, enableDelete, handleEdit, handleDelete, actions, }: BuildActionParams) => ActionType[];
export {};
