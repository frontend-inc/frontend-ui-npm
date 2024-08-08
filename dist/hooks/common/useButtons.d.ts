import { ButtonType } from '../../types';
type UseButtonParams = {
    action: ButtonType;
    resource?: any;
};
declare const useButtons: (params: UseButtonParams) => {
    loading: boolean;
    data: any;
    errors: any;
    handleClick: (ev: any) => Promise<void>;
};
export default useButtons;
