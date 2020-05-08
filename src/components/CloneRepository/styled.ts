import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  margin: 10px 0 0 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Input = styled.input`
  flex: 1;
  padding: 5px 10px;
  border-radius: 5px;
  color: #3a3a3a;
  border: 0;
  border-radius: 5px 0 0 5px;
  min-width: 200px;
  height: 30px;
`;

export const Button = styled.button`
  min-width: 50px;
  background: #04d361;
  border: 0;
  border-radius: 0 5px 5px 0;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.2s;
  padding: 5px 10px;
  height: 30px;

  &:hover {
    background: ${shade(0.2, '#04D361')};
  }
`;
