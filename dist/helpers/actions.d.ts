import { ActionType } from "..";
type BuildActionParams = {
    enableEdit: boolean;
    handleEdit: () => void;
    actions: ActionType[];
};
export declare const buildActions: ({ enableEdit, handleEdit, actions }: BuildActionParams) => ActionType[];
export {};
