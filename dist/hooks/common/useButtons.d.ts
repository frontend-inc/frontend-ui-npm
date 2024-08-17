import { ButtonType, UserType } from '../../types';
type UseButtonParams = {
    button: ButtonType;
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
