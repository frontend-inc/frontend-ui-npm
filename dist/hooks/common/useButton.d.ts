import React from 'react';
import { ActionType } from '../../types';
type UseButtonParams = {
    action: ActionType;
    path?: string;
    url?: string;
    src?: string;
};
declare const useButtons: (params: UseButtonParams) => {
    loading: boolean;
    data: any;
    errors: any;
    openVideo: boolean;
    openImage: boolean;
    openShare: boolean;
    setOpenVideo: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenImage: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenShare: React.Dispatch<React.SetStateAction<boolean>>;
    handleClick: () => Promise<void>;
};
export default useButtons;
