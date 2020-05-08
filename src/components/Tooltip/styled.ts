import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;

  &:hover > span {
    visibility: visible;
    opacity: 1;
  }
`;

export const Tooltip = styled.span`
  visibility: hidden;
  text-align: center;
  position: absolute;
  bottom: 150%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  padding: 5px;
  color: #fff;
  min-width: 200px;
  opacity: 0;
  transition: opacity 0.3s;
  /* z-index: 1; */

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
  }
`;
