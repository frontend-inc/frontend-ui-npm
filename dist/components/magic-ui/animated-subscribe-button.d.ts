import React from "react";
interface AnimatedSubscribeButtonProps {
    buttonColor: string;
    buttonTextColor?: string;
    subscribeStatus: boolean;
    initialText: React.ReactElement | string;
    changeText: React.ReactElement | string;
}
export declare const AnimatedSubscribeButton: React.FC<AnimatedSubscribeButtonProps>;
export {};
