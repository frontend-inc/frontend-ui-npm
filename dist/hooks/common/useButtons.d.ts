import { ActionType, UserType } from '../../types';
type UseButtonParams = {
    action: ActionType;
    actionId?: number;
    path?: string;
    url?: string;
    value?: any;
    resource?: any;
    user?: UserType;
};
declare const useButtons: (params: UseButtonParams) => {
    loading: boolean;
    data: any;
    errors: any;
    handleClick: (ev: any) => Promise<void>;
};
export default useButtons;
