import styled from 'styled-components';
import { shade } from 'polished';

const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input,
  button {
    height: 70px;
    border: 0;
  }

  input {
    flex: 1;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8a8;
    }
  }

  button {
    width: 210px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04D361')};
    }
  }
`;

export default Form;
