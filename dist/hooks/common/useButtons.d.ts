import { ButtonType } from '../../types';
type UseButtonParams = {
    button: ButtonType;
    resource?: any;
};
declare const useButtons: (params: UseButtonParams) => {
    loading: boolean;
    data: any;
    errors: any;
    handleClick: (ev: any) => Promise<void>;
};
export default useButtons;
