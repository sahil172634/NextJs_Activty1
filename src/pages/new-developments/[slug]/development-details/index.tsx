import { GetServerSideProps } from 'next';
import React from 'react';

const index = () => {
  return <div>Developement details page</div>;
};

export default index;
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/conveyancing',
      permanent: false,
    },
  };
};
