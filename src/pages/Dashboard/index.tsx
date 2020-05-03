import React from 'react';

import H1 from '../../components/H1';
import FormSearch from '../../components/FormSearch';
import Repositories from '../../components/Repositories';

import Logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={Logo} alt="Logo Rockseat" />
      <H1>Explore repositóris no Github</H1>
      <FormSearch />
      <Repositories />
    </>
  );
};

export default Dashboard;
