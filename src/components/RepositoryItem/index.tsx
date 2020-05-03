import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import * as S from './styled';

const RepositoryItem: React.FC = () => (
  <S.Repository href="#">
    <img
      src="https://avatars3.githubusercontent.com/u/8979115?s=460&u=9c99b206bf3f39f5296479783bcc34773f3f6f4a&v=4"
      alt="Abimael Andrade"
    />
    <div>
      <strong>@abimaelandrade/fibonacci-nodejs</strong>
      <p>Desafio Fibonacci usando NodeJS (Codenation)</p>
    </div>
    <FiChevronRight size={20} />
  </S.Repository>
);

export default RepositoryItem;
