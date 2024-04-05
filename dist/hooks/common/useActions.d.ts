import { ActionType } from '../../types';
type UseActionParams = {
    action: ActionType;
    resource?: any;
};
declare const useActions: (params: UseActionParams) => {
    loading: boolean;
    data: any;
    errors: any;
    handleClick: (ev: any) => Promise<void>;
};
export default useActions;
