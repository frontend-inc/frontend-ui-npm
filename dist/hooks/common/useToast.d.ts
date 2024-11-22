import React from 'react';
declare const useToast: () => {
    showAlertError: (message: string) => {
        id: string;
        dismiss: () => void;
        update: (props: Omit<any, "ref"> & {
            id: string;
            title?: React.ReactNode;
            description?: React.ReactNode;
            action?: import("frontend-shadcn/dist/ui/toast").ToastActionElement;
        }) => void;
    };
    showAlertSuccess: (message: string) => {
        id: string;
        dismiss: () => void;
        update: (props: Omit<any, "ref"> & {
            id: string;
            title?: React.ReactNode;
            description?: React.ReactNode;
            action?: import("frontend-shadcn/dist/ui/toast").ToastActionElement;
        }) => void;
    };
};
export default useToast;
