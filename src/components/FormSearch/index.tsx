import React, { useState, FormEvent } from 'react';

import Form from './styled';

interface Props {
  onSubmit: (repository: string) => void;
  hasError: boolean;
}

const FormSearch: React.FC<Props> = ({ onSubmit, hasError }) => {
  const [repository, setRepository] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(repository);
    setRepository('');
  }

  return (
    <Form onSubmit={handleSubmit} hasError={hasError}>
      <input
        value={repository}
        onChange={(e) => setRepository(e.target.value)}
        type="text"
        placeholder="Digite o nome do repositório."
      />
      <button type="submit">Pesquisar</button>
    </Form>
  );
};

export default FormSearch;
