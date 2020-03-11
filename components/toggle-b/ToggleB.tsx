import React from 'react';
import styled from 'styled-components';
import Span from './Span';
import get from 'lodash/get';

const defaults = {
  colors: {
    brand: '#25b676',
    darkbrand: '#0C6B64',
    white: '#fff',
  },
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

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

const Styled = styled.span<IToggleStyled>`
  outline: 0;
  display: block;
  width: 4rem;
  height: 2rem;
  position: relative;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  transition: all 0.2s ease;
  background: ${({ theme, checked, offColor, onColor }) =>
    checked
      ? onColor || get(theme, 'colors.darkbrand', defaults.colors.darkbrand)
      : offColor || get(theme, 'colors.brand', defaults.colors.brand)};
  border-radius: 1rem;
  padding: 0.125rem;
  margin-right: ${({ mr }) => mr || 0};
  transition: background 0.1s ease;
  &:after {
    content: '';
    border-radius: 50%;
    background: ${({ theme, handleColor }) =>
      handleColor || get(theme, 'colors.white', defaults.colors.white)};
    transition: left 0.3s ease;
    left: ${({ checked }) => (checked ? '50%' : 0)};
    position: relative;
    display: block;
    width: 50%;
    height: 100%;
  }
`;

const Toogle: React.FC<IToggle> = ({ checked, toggle, text, ...rest }) => {
  return (
    <Wrapper>
      <Styled checked={checked} onClick={toggle} {...rest} />
      {text && <Span>{text}</Span>}
    </Wrapper>
  );
};

export default Toogle;
