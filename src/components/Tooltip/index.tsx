import React from 'react';

import * as S from './styled';

interface Props {
  text: string;
}

const Tooltip: React.FC<Props> = ({ text, children }) => (
  <S.Container>
    <S.Tooltip>{text}</S.Tooltip>
    {children}
  </S.Container>
);

export default Tooltip;
