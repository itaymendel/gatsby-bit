import React from 'react';
interface IToggleStyled {
    checked: boolean;
    mr?: string;
    onColor?: string;
    offColor?: string;
    handleColor?: string;
    theme?: {};
}
interface IToggle extends IToggleStyled {
    checked: boolean;
    toggle: (e: React.MouseEvent<HTMLSpanElement>) => void;
    text?: string;
}
declare const Toogle: React.FC<IToggle>;
export default Toogle;
