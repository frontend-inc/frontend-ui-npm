import { ActionType } from '../../types';
type UseButtonParams = {
    action: ActionType;
    path?: string;
    url?: string;
    value?: any;
};
declare const useButtons: (params: UseButtonParams) => {
    loading: boolean;
    data: any;
    errors: any;
    handleClick: (ev: any) => Promise<void>;
};
export default useButtons;
