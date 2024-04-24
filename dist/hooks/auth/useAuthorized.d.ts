import React from 'react';
type AuthorizedParams = {
    appId: string | string[];
};
declare const useAuthorized: (params: AuthorizedParams) => {
    authorized: boolean;
    setAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
};
export default useAuthorized;
