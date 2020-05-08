import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

import * as S from './styled';

import AnimationData from '../../assets/animation404.json';

const NoMatch: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationData,
    name: '404 página não encontrada',
  };

  return (
    <S.NoMatch>
      <Lottie options={defaultOptions} height={420} width={591} />
      <p>Página não encontrada :(</p>
      <Link to="/">Voltar para a home</Link>
    </S.NoMatch>
  );
};

export default NoMatch;
