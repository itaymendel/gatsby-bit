var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
const Wrapper = styled.div `
  display: flex;
  align-items: center;
`;
const Styled = styled.span `
  outline: 0;
  display: block;
  width: 4rem;
  height: 2rem;
  position: relative;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  transition: all 0.2s ease;
  background: ${({ theme, checked, offColor, onColor }) => checked
    ? onColor || get(theme, 'colors.darkbrand', defaults.colors.darkbrand)
    : offColor || get(theme, 'colors.brand', defaults.colors.brand)};
  border-radius: 1rem;
  padding: 0.125rem;
  margin-right: ${({ mr }) => mr || 0};
  transition: background 0.1s ease;
  &:after {
    content: '';
    border-radius: 50%;
    background: ${({ theme, handleColor }) => handleColor || get(theme, 'colors.white', defaults.colors.white)};
    transition: left 0.3s ease;
    left: ${({ checked }) => (checked ? '50%' : 0)};
    position: relative;
    display: block;
    width: 50%;
    height: 100%;
  }
`;
const Toogle = (_a) => {
    var { checked, toggle, text } = _a, rest = __rest(_a, ["checked", "toggle", "text"]);
    return (React.createElement(Wrapper, null,
        React.createElement(Styled, Object.assign({ checked: checked, onClick: toggle }, rest)),
        text && React.createElement(Span, null, text)));
};
export default Toogle;
