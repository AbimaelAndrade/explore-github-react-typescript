import styled from 'styled-components';

export const NoMatch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 10rem;
    color: #3a3a3a;
  }
  p {
    font-size: 2rem;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
    margin-top: 40px;

    &:hover {
      color: #667;
    }
  }
`;
