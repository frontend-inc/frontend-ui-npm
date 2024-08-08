import { ButtonType } from '..';
type BuildActionParams = {
    enableEdit?: boolean;
    handleEdit?: (item: any) => void;
    enableDelete?: boolean;
    handleDelete?: (item: any) => void;
    buttons?: ButtonType[];
};
export declare const buildActions: ({ enableEdit, enableDelete, handleEdit, handleDelete, buttons, }: BuildActionParams) => ButtonType[];
export {};
