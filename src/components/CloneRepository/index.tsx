import React, { useState, useRef } from 'react';
import { GoRepoClone } from 'react-icons/go';

import * as S from './styled';

import Tooltip from '../Tooltip';

interface Props {
  repository: {
    full_name: string;
    clone_url: string;
  };
}

const CloneRepository: React.FC<Props> = ({ repository }) => {
  const refRepo = useRef<HTMLInputElement>(null);
  const [textTooltip, setTextTooltip] = useState(
    () => `Clone o repositório ${repository.full_name}`,
  );

  function handleCopyClipboard() {
    refRepo.current?.select();
    window.document.execCommand('copy');
    setTextTooltip('Repositório copiado.');
    setInterval(
      () => setTextTooltip(`Clone o repositório ${repository.full_name}`),
      3000,
    );
  }

  function handleSelectInputText() {
    refRepo.current?.select();
  }

  return (
    <S.Container>
      <S.Input
        readOnly
        ref={refRepo}
        onClick={() => handleSelectInputText()}
        value={repository.clone_url}
        type="text"
      />
      <Tooltip text={textTooltip}>
        <S.Button onClick={() => handleCopyClipboard()}>
          <GoRepoClone size={20} />
        </S.Button>
      </Tooltip>
    </S.Container>
  );
};

export default CloneRepository;
