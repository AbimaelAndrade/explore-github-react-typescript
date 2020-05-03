import React from 'react';

import Form from './styled';

const FormSearch: React.FC = () => (
  <Form>
    <input type="text" placeholder="Digite o nome do repositório." />
    <button type="submit">Pesquisar</button>
  </Form>
);

export default FormSearch;
