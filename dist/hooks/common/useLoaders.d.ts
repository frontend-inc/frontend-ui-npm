import React from 'react';
declare const useLoaders: () => {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    showLoading: () => void;
    hideLoading: () => void;
    loadingWrapper: (fn: any) => Promise<any>;
};
export default useLoaders;
