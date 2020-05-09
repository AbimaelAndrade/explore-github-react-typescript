import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BoxRepository = styled.div`
  position: relative;
  display: flex;
  transition: transform 0.3s;

  & + div {
    margin-top: 16px;
  }

  &:hover {
    transform: translateX(10px);

    a {
      border-radius: 0 5px 5px 0;
      transform: translateX(85px);
    }
  }
`;

export const RemoveRepository = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 85px;
  padding: 0 15px;
  border: 0;
  border-radius: 5px 0 0 5px;
  background: #cbcbd6;
  font-size: 1rem;
  color: #fff;
  transition: background 0.3s;

  &:hover {
    background: #c53030;
  }
`;

export const Repository = styled(Link)`
  position: relative;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  text-decoration: none;

  display: flex;
  align-items: center;
  transition: all 0.3s;

  img {
    width: 64px;
    height: 64px;

    border-radius: 50%;
  }

  div {
    margin: 0 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;
